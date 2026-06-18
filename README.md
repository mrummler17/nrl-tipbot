# NRL TipBot

Codex-managed NRL tipping dashboard with weekly verified round notes, charity bet tracking, and static GitHub Pages deployment.

Live site: https://mrummler17.github.io/nrl-tipbot/

## What It Does

NRL TipBot is a static weekly command board for:

- NRL round previews, wraps, and tip confidence
- Official-source team news and late-mail notes
- Charity betting discipline and ledger tracking
- A compact live-round tracker for results and validation notes
- GitHub Pages publishing from a generated `index.html`

The app started as a single prototype file and now keeps content, live round data, and presentation separated so weekly updates are easier to review.

## Current Snapshot

- Round: Round 16, 2026
- Tip card: seven-game post-Origin preview
- Charity bet status: no Round 16 bet locked
- Charity ledger: 3-2, $31.50 invested, $32.03 returned, +$0.53 profit
- Validation rule: do not move the charity ledger without recorded TAB odds, stake, result, and user confirmation

Round 16 tips currently published:

1. Storm over Raiders
2. Warriors over Cowboys
3. Panthers over Titans
4. Dolphins over Wests Tigers
5. Bulldogs over Sea Eagles
6. Roosters over Sharks
7. Knights over Dragons

Round 15 notes:

- No charity bet was locked, so the Mark Hughes Foundation ledger stayed unchanged.
- Current-source result notes support Rabbitohs over Broncos and Dolphins over Roosters as correct, and Warriors over Sharks as a miss.
- Eels v Raiders and Wests Tigers v Titans still need clean official-score cross-checks before using Round 15 as a final tip-count headline.

Round 12 remains validated as a 5 from 5 result and must not be changed without re-checking official NRL scores.

## Project Structure

```text
.
|-- data/
|   |-- briefing.json      # Main dashboard content, charity ledger, sections, and narrative
|   `-- live-round.json    # Current round tracker, sources, alerts, and results
|-- dist/
|   |-- index.html         # Generated dashboard output
|   `-- README.md          # Generated text summary
|-- generate.js            # Static generator
|-- index.html             # GitHub Pages entry file, synced from dist/index.html
|-- HANDOVER.md            # Continuity notes for future sessions
|-- package.json
`-- README.md
```

## Update Workflow

1. Edit `data/briefing.json` for the durable board content.
2. Edit `data/live-round.json` for current round status, sources, alerts, and results.
3. Validate the JSON:

   ```bash
   node -e 'JSON.parse(require("fs").readFileSync("data/briefing.json","utf8")); JSON.parse(require("fs").readFileSync("data/live-round.json","utf8")); console.log("json ok")'
   ```

4. Build the static output:

   ```bash
   npm run build
   ```

5. Sync the generated page to the GitHub Pages entry file:

   ```bash
   cp dist/index.html index.html
   ```

6. Check the result locally, then commit and push `main`.

## Development Commands

```bash
npm run build     # Generate dist/index.html and dist/README.md
npm run sync      # Alias for the same generator
npm run snapshot  # Alias for the same generator
```

Optional local preview:

```bash
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173/index.html`.

## Deployment

GitHub Pages serves the root `index.html`, not `dist/index.html`.

Always run the build and copy `dist/index.html` to `index.html` before pushing. A successful push to `main` should trigger the Pages build for:

https://mrummler17.github.io/nrl-tipbot/

## Data Discipline

- Treat NRL tips and charity bets as separate records.
- Do not retrospectively count an unplaced lean as a charity bet.
- Keep the Mark Hughes Foundation ledger factual and conservative.
- Re-check official NRL sources before publishing a round preview, wrap, or result correction.
- Keep `HANDOVER.md` current before risky changes, deploys, or long context-heavy sessions.

## Sources

Recent Round 16 updates used:

- NRL Draw: https://www.nrl.com/draw
- NRL teams Round 16: https://www.dailytelegraph.com.au/sport/nrl/supercoach-news/nrl-teams-round-16-nicho-hynes-blayke-brailey-named-for-remodelled-sharks/news-story/9381912a00d3d4a6388a80d93df87ecd
- Round 16 team lists: https://www.news.com.au/sport/nrl/round-16-team-lists-sharks-set-to-receive-double-boost-as-clubs-make-huge-calls-on-origin-stars/news-story/7b31f313ea3768ee076c1df5b6a2bdef
- Round 16 late mail: https://www.dailytelegraph.com.au/sport/nrl/supercoach-news/nrl-late-mail-round-16-tony-sukkar-out-to-cement-spot-as-kai-pearcepaul-out-longterm/news-story/fd01c7a3b67db7f285e2683191dce3e0
- Round 16 early mail: https://www.dailytelegraph.com.au/sport/nrl/supercoach-news/nrl-early-mail-round-16-key-cronulla-forward-toby-rudolf-sidelined-with-knee-injury/news-story/adbb68c658c26a3f884a689f2188124b
- Round 16 fixture table: https://en.wikipedia.org/wiki/2026_NRL_season_results

## License

Private personal project unless a license is added.
