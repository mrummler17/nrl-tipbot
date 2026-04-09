const fs = require("node:fs");
const path = require("node:path");

const rootDir = __dirname;
const dataPath = path.join(rootDir, "data", "briefing.json");
const livePath = path.join(rootDir, "data", "live-round.json");
const briefing = JSON.parse(fs.readFileSync(dataPath, "utf8"));
const liveRound = fs.existsSync(livePath)
  ? JSON.parse(fs.readFileSync(livePath, "utf8"))
  : null;

function getOutputDir() {
  const outArg = process.argv.find((arg) => arg.startsWith("--out="));
  const outDir = outArg ? outArg.slice("--out=".length) : "dist";
  return path.resolve(rootDir, outDir);
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function writeFile(outputDir, relativePath, contents) {
  const filePath = path.join(outputDir, relativePath);
  fs.writeFileSync(filePath, contents);
}

function serializeForScript(value) {
  return JSON.stringify(value).replace(/<\//g, "<\\/");
}

function renderReadme(data) {
  const footer = data.footerNotes.map((note) => `- ${note}`).join("\n");
  const tips = data.confidence.map((tip, index) => `${index + 1}. ${tip}`).join("\n");
  const sections = data.sections.map((section) => `- **${section.title}** — ${section.heading}`).join("\n");
  const liveSummary = data.liveRound
    ? `\n## Live Round Status\n\n- ${data.liveRound.verificationLabel}\n- ${data.liveRound.summary}\n`
    : "";

  return `# ${data.site.title}

${data.site.subhead}

## Snapshot

- ${data.site.snapshotLabel}
- Snapshot timestamp: ${data.site.snapshotDate}
- Timezone: ${data.site.timezone}
- Operator: ${data.site.operator}

## Current Pick

- ${data.betCard.pick}
- Odds: ${data.betCard.odds}
- Stake: ${data.betCard.stake}
- Potential profit: ${data.betCard.potentialProfit}
- Status: ${data.betCard.status}
${liveSummary}

## Confidence Order

${tips}

## Board Sections

${sections}

## Notes

${footer}
`;
}

function renderHtml(data) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${data.site.title}</title>
  <meta name="description" content="${data.meta.description}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">
  <script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>
  <script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
  <script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.9/babel.min.js"></script>
  <style>
    :root {
      --bg: #08110f;
      --bg-soft: #0f1c19;
      --panel: rgba(11, 24, 21, 0.9);
      --panel-strong: #112620;
      --line: rgba(143, 255, 211, 0.16);
      --text: #d7ffee;
      --muted: #86b7a6;
      --green: #72ffb7;
      --amber: #ffc46b;
      --red: #ff867d;
      --cyan: #78e7ff;
      --shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
    }
    * { box-sizing: border-box; }
    html, body { margin: 0; min-height: 100%; }
    body {
      font-family: "Space Grotesk", sans-serif;
      color: var(--text);
      background:
        radial-gradient(circle at top left, rgba(120, 231, 255, 0.14), transparent 28%),
        radial-gradient(circle at top right, rgba(255, 196, 107, 0.10), transparent 22%),
        linear-gradient(180deg, #06100d 0%, #091513 38%, #07110f 100%);
    }
    body::before {
      content: "";
      position: fixed;
      inset: 0;
      pointer-events: none;
      background: repeating-linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.02) 1px, transparent 1px, transparent 3px);
      opacity: 0.18;
    }
    .app {
      max-width: 1240px;
      margin: 0 auto;
      padding: 24px 16px 48px;
      position: relative;
      z-index: 1;
    }
    .hero {
      border: 1px solid var(--line);
      background: linear-gradient(180deg, rgba(15, 28, 25, 0.96), rgba(7, 17, 15, 0.92));
      box-shadow: var(--shadow);
      border-radius: 24px;
      padding: 24px;
      overflow: hidden;
      position: relative;
    }
    .hero::after {
      content: "";
      position: absolute;
      inset: auto -80px -80px auto;
      width: 220px;
      height: 220px;
      background: radial-gradient(circle, rgba(114, 255, 183, 0.14), transparent 70%);
      filter: blur(10px);
    }
    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-size: 12px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--cyan);
      font-family: "Share Tech Mono", monospace;
    }
    .live-dot {
      width: 10px;
      height: 10px;
      border-radius: 999px;
      background: var(--green);
      box-shadow: 0 0 16px rgba(114, 255, 183, 0.8);
      animation: pulse 1.4s infinite ease-in-out;
    }
    h1 {
      margin: 14px 0 8px;
      font-size: clamp(36px, 6vw, 68px);
      line-height: 0.96;
      letter-spacing: -0.04em;
    }
    .hero-sub {
      max-width: 740px;
      color: var(--muted);
      font-size: 16px;
      line-height: 1.6;
    }
    .meta-row {
      margin-top: 18px;
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      font-family: "Share Tech Mono", monospace;
      font-size: 12px;
      color: var(--muted);
    }
    .meta-pill {
      border: 1px solid var(--line);
      background: rgba(114, 255, 183, 0.04);
      padding: 8px 10px;
      border-radius: 999px;
    }
    .ticker {
      margin-top: 18px;
      border: 1px solid var(--line);
      border-radius: 999px;
      overflow: hidden;
      background: rgba(6, 15, 13, 0.85);
    }
    .ticker-track {
      display: flex;
      width: max-content;
      animation: marquee 34s linear infinite;
      font-family: "Share Tech Mono", monospace;
      font-size: 12px;
      text-transform: uppercase;
      color: var(--cyan);
    }
    .ticker:hover .ticker-track { animation-play-state: paused; }
    .ticker-item {
      padding: 10px 18px;
      white-space: nowrap;
    }
    .grid {
      display: grid;
      gap: 16px;
      margin-top: 18px;
    }
    .hero-cards {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .card, .panel, .section {
      border: 1px solid var(--line);
      background: var(--panel);
      box-shadow: var(--shadow);
      border-radius: 20px;
    }
    .card {
      padding: 16px;
      min-height: 132px;
    }
    .card-label {
      font-family: "Share Tech Mono", monospace;
      font-size: 11px;
      color: var(--muted);
      text-transform: uppercase;
      letter-spacing: 0.14em;
    }
    .card-value {
      margin-top: 12px;
      font-size: 28px;
      font-weight: 700;
      line-height: 1;
    }
    .card-delta {
      margin-top: 10px;
      color: var(--muted);
      font-size: 14px;
    }
    .tone-green .card-value, .tone-green .accent { color: var(--green); }
    .tone-amber .card-value, .tone-amber .accent { color: var(--amber); }
    .tone-red .card-value, .tone-red .accent { color: var(--red); }
    .tone-cyan .card-value, .tone-cyan .accent { color: var(--cyan); }
    .two-col {
      grid-template-columns: 1.2fr 0.8fr;
      align-items: start;
    }
    .stack {
      display: grid;
      gap: 16px;
    }
    .panel {
      padding: 20px;
    }
    .panel-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      margin-bottom: 14px;
    }
    .panel-title {
      font-size: 20px;
      font-weight: 700;
    }
    .panel-tag {
      border: 1px solid currentColor;
      border-radius: 999px;
      padding: 6px 10px;
      font-family: "Share Tech Mono", monospace;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.12em;
    }
    .bet-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 12px;
      margin: 16px 0;
    }
    .mini-stat {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid var(--line);
      border-radius: 14px;
      padding: 12px;
    }
    .mini-label {
      font-family: "Share Tech Mono", monospace;
      font-size: 11px;
      color: var(--muted);
      text-transform: uppercase;
      letter-spacing: 0.12em;
    }
    .mini-value {
      margin-top: 6px;
      font-size: 20px;
      font-weight: 700;
    }
    .list {
      display: grid;
      gap: 10px;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .list li {
      display: flex;
      gap: 10px;
      align-items: flex-start;
      color: var(--text);
      line-height: 1.55;
    }
    .list li::before {
      content: ">";
      color: var(--green);
      font-family: "Share Tech Mono", monospace;
      margin-top: 1px;
    }
    .dual-list {
      grid-template-columns: 1fr 1fr;
    }
    .side-grid {
      display: grid;
      gap: 16px;
    }
    .scoreboard {
      display: grid;
      gap: 12px;
    }
    .match-card {
      border: 1px solid var(--line);
      border-radius: 16px;
      padding: 14px;
      background: rgba(255, 255, 255, 0.02);
    }
    .match-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
    }
    .match-name {
      font-size: 17px;
      font-weight: 700;
    }
    .match-status {
      border: 1px solid currentColor;
      border-radius: 999px;
      padding: 5px 10px;
      font-family: "Share Tech Mono", monospace;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.12em;
    }
    .match-meta {
      margin-top: 8px;
      color: var(--muted);
      font-size: 13px;
      line-height: 1.6;
    }
    .source-list {
      display: grid;
      gap: 10px;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .source-item {
      border: 1px solid var(--line);
      border-radius: 14px;
      padding: 12px;
      background: rgba(255, 255, 255, 0.02);
    }
    .source-item a {
      color: var(--cyan);
      text-decoration: none;
      word-break: break-word;
    }
    .source-item a:hover { text-decoration: underline; }
    .alert-strip {
      display: grid;
      gap: 10px;
    }
    .alert {
      border-left: 3px solid currentColor;
      padding: 10px 12px;
      background: rgba(255, 255, 255, 0.02);
      border-radius: 0 12px 12px 0;
      line-height: 1.5;
    }
    .alert.red { color: var(--red); }
    .alert.amber { color: var(--amber); }
    .alert.green { color: var(--green); }
    .confidence-list {
      display: grid;
      gap: 10px;
      counter-reset: rank;
      padding: 0;
      list-style: none;
      margin: 0;
    }
    .confidence-list li {
      counter-increment: rank;
      display: grid;
      grid-template-columns: 34px 1fr;
      gap: 12px;
      align-items: center;
      padding: 10px 12px;
      border: 1px solid var(--line);
      border-radius: 14px;
      background: rgba(255, 255, 255, 0.02);
    }
    .confidence-list li::before {
      content: counter(rank);
      display: inline-grid;
      place-items: center;
      width: 34px;
      height: 34px;
      border-radius: 10px;
      background: rgba(114, 255, 183, 0.09);
      color: var(--green);
      font-family: "Share Tech Mono", monospace;
    }
    .sections {
      margin-top: 16px;
      display: grid;
      gap: 12px;
    }
    .toolbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      margin-top: 28px;
      margin-bottom: 12px;
    }
    .toolbar h2 {
      margin: 0;
      font-size: 22px;
    }
    .button {
      border: 1px solid var(--line);
      background: rgba(120, 231, 255, 0.05);
      color: var(--cyan);
      padding: 10px 14px;
      border-radius: 999px;
      font: inherit;
      cursor: pointer;
      transition: background 0.2s ease, transform 0.2s ease;
    }
    .button:hover {
      background: rgba(120, 231, 255, 0.10);
      transform: translateY(-1px);
    }
    .section-button {
      width: 100%;
      border: 0;
      background: transparent;
      color: inherit;
      padding: 18px 20px;
      display: grid;
      grid-template-columns: auto 1fr auto auto;
      gap: 12px;
      align-items: center;
      text-align: left;
      cursor: pointer;
      font: inherit;
    }
    .section-title {
      font-size: 18px;
      font-weight: 700;
    }
    .section-badge {
      font-family: "Share Tech Mono", monospace;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      padding: 6px 10px;
      border: 1px solid currentColor;
      border-radius: 999px;
    }
    .chevron {
      color: var(--muted);
      transition: transform 0.2s ease;
    }
    .chevron.open { transform: rotate(90deg); }
    .section-body {
      padding: 0 20px 20px;
      border-top: 1px solid var(--line);
    }
    .section-heading {
      margin: 16px 0 12px;
      color: var(--muted);
      font-family: "Share Tech Mono", monospace;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.14em;
    }
    .footer {
      margin-top: 28px;
      padding: 18px 20px;
      border: 1px solid var(--line);
      border-radius: 18px;
      background: rgba(6, 15, 13, 0.82);
      color: var(--muted);
      font-size: 14px;
      line-height: 1.7;
    }
    @keyframes marquee {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(0.75); opacity: 0.55; }
    }
    @media (max-width: 1080px) {
      .hero-cards, .two-col { grid-template-columns: 1fr 1fr; }
      .bet-grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 720px) {
      .app { padding: 16px 12px 32px; }
      .hero { padding: 20px; border-radius: 20px; }
      .hero-cards, .two-col { grid-template-columns: 1fr; }
      .dual-list { grid-template-columns: 1fr; }
      .section-button {
        grid-template-columns: auto 1fr auto;
        grid-template-areas:
          "icon title chevron"
          "icon badge chevron";
        align-items: start;
      }
      .toolbar {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  </style>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    const { useEffect, useMemo, useState } = React;
    const BRIEFING = ${serializeForScript(data)};

    const toneMap = {
      green: "tone-green",
      amber: "tone-amber",
      red: "tone-red",
      cyan: "tone-cyan"
    };

    function useClock() {
      const [now, setNow] = useState(new Date());

      useEffect(() => {
        const id = window.setInterval(() => setNow(new Date()), 1000);
        return () => window.clearInterval(id);
      }, []);

      return now;
    }

    function formatZoned(date, timeZone) {
      const formatter = new Intl.DateTimeFormat("en-AU", {
        timeZone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZoneName: "short"
      });
      const parts = formatter.formatToParts(date);
      const read = (type) => parts.find((part) => part.type === type)?.value || "";
      return read("day") + "/" + read("month") + "/" + read("year") + " " + read("hour") + ":" + read("minute") + ":" + read("second") + " " + read("timeZoneName");
    }

    function Ticker() {
      const items = [...BRIEFING.ticker, ...BRIEFING.ticker];
      return (
        <div className="ticker" aria-label="Ticker">
          <div className="ticker-track">
            {items.map((item, index) => (
              <div key={item + index} className="ticker-item">
                {item} //
              </div>
            ))}
          </div>
        </div>
      );
    }

    function HeroCards() {
      return (
        <div className="grid hero-cards">
          {BRIEFING.heroCards.map((card) => (
            <div key={card.label} className={"card " + toneMap[card.tone]}>
              <div className="card-label">{card.label}</div>
              <div className="card-value">{card.value}</div>
              <div className="card-delta">{card.delta}</div>
            </div>
          ))}
        </div>
      );
    }

    function LiveRoundPanel() {
      if (!BRIEFING.liveRound) return null;
      const live = BRIEFING.liveRound;
      return (
        <div className="panel tone-red">
          <div className="panel-head">
            <div className="panel-title">{live.round} Live Tracker</div>
            <div className="panel-tag accent">{live.verificationLabel}</div>
          </div>
          <p className="hero-sub" style={{ maxWidth: "100%", marginBottom: 16 }}>{live.summary}</p>
          <div className="scoreboard">
            {live.scoreboard.map((game) => (
              <div key={game.match} className="match-card">
                <div className="match-top">
                  <div className="match-name">{game.match}</div>
                  <div className="match-status accent">{game.status}</div>
                </div>
                <div className="match-meta">
                  <div>{game.kickoff} • {game.venue}</div>
                  <div>{game.result || game.tipOutcome}</div>
                  <div>{game.result ? game.tipOutcome + " • " + game.note : game.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    function FeaturePanels() {
      return (
        <div className="grid hero-cards">
          {BRIEFING.featurePanels.map((panel) => (
            <div key={panel.title} className={"panel " + toneMap[panel.tone]}>
              <div className="panel-head">
                <div className="panel-title">{panel.title}</div>
                <div className="panel-tag accent">{panel.tone}</div>
              </div>
              <ul className="list">
                {panel.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      );
    }

    function BetCard() {
      const bet = BRIEFING.betCard;
      return (
        <div className="panel tone-cyan">
          <div className="panel-head">
            <div className="panel-title">{bet.title}</div>
            <div className="panel-tag accent">{bet.status}</div>
          </div>
          <div className="bet-grid">
            <div className="mini-stat">
              <div className="mini-label">Pick</div>
              <div className="mini-value accent">{bet.pick}</div>
            </div>
            <div className="mini-stat">
              <div className="mini-label">Odds</div>
              <div className="mini-value">{bet.odds}</div>
            </div>
            <div className="mini-stat">
              <div className="mini-label">Potential Profit</div>
              <div className="mini-value">{bet.potentialProfit}</div>
            </div>
          </div>
          <div className="meta-row" style={{ marginTop: 0, marginBottom: 16 }}>
            <div className="meta-pill">{bet.match}</div>
            <div className="meta-pill">{bet.kickoff}</div>
            <div className="meta-pill">{bet.venue}</div>
          </div>
          <div className="grid dual-list" style={{ marginTop: 0 }}>
            <div>
              <div className="section-heading">Why it made the board</div>
              <ul className="list">
                {bet.why.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div>
              <div className="section-heading">What could break it</div>
              <ul className="list">
                {bet.risks.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      );
    }

    function SideColumn() {
      return (
        <div className="side-grid">
          {BRIEFING.liveRound && (
            <div className="panel tone-cyan">
              <div className="panel-head">
                <div className="panel-title">Verification Monitor</div>
                <div className="panel-tag accent">official sources</div>
              </div>
              <div className="section-heading">Latest review</div>
              <div className="meta-row" style={{ marginTop: 0, marginBottom: 14 }}>
                <div className="meta-pill">{new Date(BRIEFING.liveRound.verifiedAt).toLocaleString("en-AU", { timeZone: BRIEFING.site.timezone })}</div>
                <div className="meta-pill">{BRIEFING.liveRound.round}</div>
              </div>
              <ul className="source-list">
                {BRIEFING.liveRound.sources.map((source) => (
                  <li key={source.url} className="source-item">
                    <div className="mini-label">{source.publisher}</div>
                    <div style={{ fontWeight: 700, margin: "6px 0" }}>{source.label}</div>
                    <a href={source.url} target="_blank" rel="noopener noreferrer">{source.url}</a>
                  </li>
                ))}
              </ul>
              <div className="section-heading">Live alerts</div>
              <div className="alert-strip">
                {BRIEFING.liveRound.liveAlerts.map((alert) => (
                  <div key={alert.text} className={"alert " + alert.tone}>{alert.text}</div>
                ))}
              </div>
            </div>
          )}

          <div className="panel tone-green">
            <div className="panel-head">
              <div className="panel-title">{BRIEFING.charity.title}</div>
              <div className="panel-tag accent">{BRIEFING.charity.record}</div>
            </div>
            <ul className="list" style={{ marginBottom: 14 }}>
              <li>{BRIEFING.charity.summary}</li>
            </ul>
            <div className="bet-grid" style={{ marginTop: 0 }}>
              <div className="mini-stat">
                <div className="mini-label">Invested</div>
                <div className="mini-value">{BRIEFING.charity.invested}</div>
              </div>
              <div className="mini-stat">
                <div className="mini-label">Returned</div>
                <div className="mini-value">{BRIEFING.charity.returned}</div>
              </div>
              <div className="mini-stat">
                <div className="mini-label">Profit</div>
                <div className="mini-value accent">{BRIEFING.charity.profit}</div>
              </div>
            </div>
            <div className="section-heading">Ledger notes</div>
            <ul className="list">
              {BRIEFING.charity.notes.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <div className="meta-row">
              <div className="meta-pill">Donated so far: {BRIEFING.charity.donated}</div>
              <div className="meta-pill">Next donation: {BRIEFING.charity.nextDonation}</div>
            </div>
          </div>

          <div className="panel tone-amber">
            <div className="panel-head">
              <div className="panel-title">Confidence Ladder</div>
              <div className="panel-tag accent">ranked</div>
            </div>
            <ol className="confidence-list">
              {BRIEFING.confidence.map((pick) => <li key={pick}>{pick}</li>)}
            </ol>
          </div>

          <div className="panel tone-red">
            <div className="panel-head">
              <div className="panel-title">Watchlist</div>
              <div className="panel-tag accent">signals</div>
            </div>
            <ul className="list">
              {BRIEFING.watchlist.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      );
    }

    function Sections() {
      const defaults = useMemo(() => {
        const state = {};
        BRIEFING.sections.forEach((section, index) => {
          state[section.id] = index < 2;
        });
        return state;
      }, []);

      const [openMap, setOpenMap] = useState(defaults);
      const allOpen = BRIEFING.sections.every((section) => openMap[section.id]);

      function toggleSection(id) {
        setOpenMap((current) => ({ ...current, [id]: !current[id] }));
      }

      function toggleAll() {
        const next = {};
        BRIEFING.sections.forEach((section) => {
          next[section.id] = !allOpen;
        });
        setOpenMap(next);
      }

      return (
        <>
          <div className="toolbar">
            <h2>Round Board</h2>
            <button className="button" onClick={toggleAll}>
              {allOpen ? "Collapse all sections" : "Expand all sections"}
            </button>
          </div>
          <div className="sections">
            {BRIEFING.sections.map((section) => {
              const isOpen = !!openMap[section.id];
              return (
                <div key={section.id} className={"section " + toneMap[section.tone]}>
                  <button className="section-button" onClick={() => toggleSection(section.id)}>
                    <div className="accent">{isOpen ? "[-]" : "[+]"}</div>
                    <div className="section-title">{section.title}</div>
                    <div className="section-badge accent">{section.badge}</div>
                    <div className={"chevron " + (isOpen ? "open" : "")}>></div>
                  </button>
                  {isOpen && (
                    <div className="section-body">
                      <div className="section-heading">{section.heading}</div>
                      <ul className="list">
                        {section.lines.map((line) => <li key={line}>{line}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      );
    }

    function App() {
      const now = useClock();
      const sydneyTime = formatZoned(now, BRIEFING.site.timezone);
      const utcTime = now.toISOString().replace("T", " ").slice(0, 19) + "Z";

      return (
        <div className="app">
          <section className="hero">
            <div className="eyebrow">
              <span className="live-dot" />
              <span>{BRIEFING.site.status}</span>
            </div>
            <h1>{BRIEFING.site.title}</h1>
            <p className="hero-sub">{BRIEFING.site.subhead}</p>
            <div className="meta-row">
              <div className="meta-pill">Snapshot: {new Date(BRIEFING.site.snapshotDate).toLocaleString("en-AU", { timeZone: BRIEFING.site.timezone })}</div>
              <div className="meta-pill">{BRIEFING.site.snapshotLabel}</div>
              <div className="meta-pill">Operator: {BRIEFING.site.operator}</div>
              <div className="meta-pill">Season: {BRIEFING.site.season}</div>
            </div>
            <div className="meta-row">
              <div className="meta-pill">UTC {utcTime}</div>
              <div className="meta-pill">{BRIEFING.site.timezoneLabel} {sydneyTime}</div>
            </div>
            <Ticker />
          </section>

          <HeroCards />
          <FeaturePanels />

          <div className="grid two-col">
            <div className="stack">
              <BetCard />
              <LiveRoundPanel />
              <Sections />
            </div>
            <SideColumn />
          </div>

          <div className="footer">
            {BRIEFING.footerNotes.map((note) => (
              <div key={note}>{note}</div>
            ))}
          </div>
        </div>
      );
    }

    ReactDOM.createRoot(document.getElementById("root")).render(<App />);
  </script>
</body>
</html>`;
}

const mergedBriefing = {
  ...briefing,
  liveRound,
  ticker: liveRound ? [...liveRound.liveAlerts.map((alert) => alert.text.toLowerCase()), ...briefing.ticker] : briefing.ticker
};

const outputDir = getOutputDir();
ensureDir(outputDir);

writeFile(outputDir, "index.html", renderHtml(mergedBriefing));
writeFile(outputDir, "README.md", renderReadme(mergedBriefing));
