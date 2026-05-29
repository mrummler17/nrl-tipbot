# NRL TipBot Handover

## Current State

- Repo: `/Users/marcusrummler/Documents/New project/nrl-tipbot`
- Remote: `https://github.com/mrummler17/nrl-tipbot.git`
- Branch: `main`
- Latest deployed bet-lock content commit: `a4fa21e Lock Round 13 Penrith charity bet`
- Deployment target: GitHub Pages at `https://mrummler17.github.io/nrl-tipbot/`
- Production entry file: `index.html` at repo root, synced from `dist/index.html`
- Generated dist file: `dist/index.html`
- Current production version: Round 13, 2026 preview with Penrith charity bet locked

## Changed This Session

- Locked Round 13 charity bet from user-confirmed TAB market:
  - Pick: Penrith Panthers H2H.
  - Odds: `$1.62`.
  - Stake: `$6.50`.
  - Potential collect: `$10.53`.
  - Potential profit: `$4.03`.
- Updated `data/briefing.json` from Round 13 shortlist/no-bet state to locked Penrith bet state.
- Updated `data/live-round.json` with locked bet status, TAB market source, pending-bet alert, and Panthers v Warriors tracker note.
- Updated `README.md` current snapshot and source list.
- Regenerated `dist/index.html` and `dist/README.md` with `npm run build`.
- Synced `dist/index.html` to root `index.html` for GitHub Pages.
- Captured local QA screenshot at `/private/tmp/nrl-tipbot-round13-bet-lock-qa.png`.

## Verified

- JSON parse validation passed for `data/briefing.json` and `data/live-round.json`.
- `npm run build` completed successfully.
- Root `index.html` was synced from `dist/index.html`.
- Generated outputs contain `Panthers H2H`, `$1.62`, `$6.50`, and `$10.53`, and no longer contain stale `No bet locked` copy.
- Local browser QA passed at `http://127.0.0.1:4173/index.html`:
  - Page title rendered as `NRL TipBot Briefing 2026`.
  - Round 13 charity-bet-locked status rendered.
  - Panthers H2H pick rendered.
  - `$1.62` odds rendered.
  - `$6.50` stake rendered.
  - `$10.53` potential collect rendered.
  - Pending ledger record rendered as `2-2 + 1 pending` / `2-2 + 1P`.
  - Round 12 guard copy rendered.
  - Browser console had 0 errors.
- GitHub Pages build for `a4fa21e98ef4a793834bbc739980a689f54a4f2a` completed successfully.
- Live page responded at `https://mrummler17.github.io/nrl-tipbot/` and served the locked Penrith bet details.
- Round 12 remains validated through official NRL results:
  - Dolphins over Raiders: won 30-22.
  - Bulldogs over Storm: won 30-20.
  - Warriors over Dragons: won 30-12.
  - Sea Eagles over Titans: won 12-10.
  - Cowboys over Rabbitohs: won 30-18.

## Must Not Change Casually

- Do not replace the locked Round 13 charity bet unless the user explicitly says the TAB bet was cancelled or changed.
- Round 13 charity bet is Penrith Panthers H2H at TAB `$1.62`, stake `$6.50`, potential collect `$10.53`.
- Charity ledger is `2-2 + 1 pending`, invested `$31.50 incl. pending`, returned `$21.50`, settled profit `-$3.50`.
- Do not settle the pending bet before Panthers versus Warriors is final and the TAB return is confirmed.
- The validated Round 12 5 from 5 tip result should not be changed without re-checking official NRL scores.
- Keep `index.html` synced with `dist/index.html` before deploy because GitHub Pages serves the root entry.

## Important Files

- `data/briefing.json`: Durable dashboard content, charity ledger, feature panels, and round narrative.
- `data/live-round.json`: Current round tracker, official sources, tips, fixtures, alerts, and notes.
- `generate.js`: Static generator that merges briefing data and live round data.
- `dist/index.html`: Generated dashboard.
- `index.html`: Public GitHub Pages entry file.
- `dist/README.md`: Generated text summary.
- `README.md`: Human-facing repo overview and weekly update workflow.

## Commands

- Validate JSON:
  `node -e 'JSON.parse(require("fs").readFileSync("data/briefing.json","utf8")); JSON.parse(require("fs").readFileSync("data/live-round.json","utf8")); console.log("json ok")'`
- Build:
  `npm run build`
- Sync public entry:
  `cp dist/index.html index.html`
- Local preview:
  `python3 -m http.server 4173`
- Check repo:
  `git status --short --branch`

## Sources Used

- NRL Draw: `https://www.nrl.com/draw`
- NRL Team Lists Round 13: `https://www.nrl.com/news/2026/05/26/nrl-team-lists-round-13/`
- NRL Late Mail Round 13: `https://www.nrl.com/news/2026/05/28/nrl-late-mail-round-13---haas-primed-haumole-rested/`
- NRL Expert Tipping Round 13: `https://www.nrl.com/news/2026/05/29/expert-tipping-nrl-round-13/`
- TAB NRL market: `https://www.tab.com.au/sports/betting/Rugby%20League/competitions/NRL`
- User-confirmed TAB price: Penrith H2H `$1.62`, stake `$6.50`, potential collect `$10.53`.

## Risks / Unfinished

- Penrith H2H remains pending and was previously the lowest-confidence tip on the card, so do not overstate certainty.
- Re-check Panthers v Warriors 90-minute teams for awareness, but do not alter the recorded stake unless the user confirms the TAB bet changed.
- Deployment for the bet-lock content commit has been verified. Re-check the live page if a later handover-only commit triggers another Pages build.

## Recommended Next Steps

- After Panthers versus Warriors, settle only from the actual TAB result and return.
- After Round 13, update results carefully and keep the Round 12 validated 5 from 5 history intact.
