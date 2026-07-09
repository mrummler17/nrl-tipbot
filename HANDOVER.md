# NRL TipBot Handover

## Current State

- Repo: `/Users/marcusrummler/AI Developer Files/New project/nrl-tipbot`
- Remote: `https://github.com/mrummler17/nrl-tipbot.git`
- Branch: `main`
- Latest known commit before this Round 19 update: `39e5fff Record Round 18 deployment handover`
- Deployment target: GitHub Pages at `https://mrummler17.github.io/nrl-tipbot/`
- Production entry file: `index.html` at repo root, synced from `dist/index.html`
- Generated dist file: `dist/index.html`
- Current production-intended version: Round 19, 2026 preview

## Changed This Session

- Updated `data/briefing.json` from Round 18 preview to Round 19 preview.
- Updated `data/live-round.json` with the Round 19 fixture board, seven tips, source list, and live alerts.
- Updated `README.md` with the Round 19 snapshot, workflow, and source list.
- Kept the Mark Hughes Foundation ledger unchanged:
  - Record: `3-2`
  - Invested: `$31.50`
  - Returned: `$32.03`
  - Settled profit: `+$0.53`

## Current Published Content To Verify

- Round: Round 19, 2026
- Mode: Preview
- Tip card:
  1. Storm over Titans
  2. Sharks over Dolphins
  3. Warriors over Wests Tigers
  4. Knights over Rabbitohs
  5. Sea Eagles over Cowboys
  6. Bulldogs over Raiders
  7. Eels over Roosters
- Charity bet status: `No bet locked`
- Charity ledger: `3-2`, `+$0.53`
- Bye teams: Broncos, Panthers and Dragons
- Main source logic:
  - James Tedesco and Jack Bostock are set to miss after Origin head knocks.
  - Warriors lose Mitchell Barnett and Kurt Capewell but regain James Fisher-Harris and Leka Halasima.
  - Wests Tigers regain Jarome Luai but lose Api Koroisau.
  - Storm regain Jahrome Hughes, Nick Meaney and Jack Howarth.
  - Bulldogs v Raiders and Sea Eagles v Cowboys still carry heavy late-mail risk.

## Verified So Far

- JSON parse validation passed for `data/briefing.json` and `data/live-round.json`.
- `npm run build` completed successfully.
- Root `index.html` was synced from `dist/index.html`.
- Current source checks were performed on Thursday 9 July 2026.
- NRL official late-mail page is live for Round 19 and includes post-Origin updates.
- NRL official team-list page was checked for Round 19 named sides.
- Wikipedia Round 19 fixture table was used as a secondary schedule cross-check.
- Local browser QA passed at `http://127.0.0.1:4173/index.html`:
  - `Round 19 briefing live` rendered.
  - Seven tips rendered: Warriors, Sharks, Bulldogs, Eels, Knights, Sea Eagles and Storm.
  - `No bet locked`, ledger record `3-2`, and profit `+$0.53` rendered.
  - Bye teams rendered: Broncos, Panthers and Dragons.
  - Old `Round 18 briefing live` and `Round 18 preview with Origin-week` copy did not render.
  - Browser console had 0 errors.

## Must Not Change Casually

- Do not move the charity ledger without recorded TAB odds, stake, result, and explicit user confirmation.
- Do not record any Round 19 price-watch candidate as a charity bet without a fresh TAB price and user confirmation.
- Do not move the ledger for any external all-tips slip unless it was recorded as a charity bet before kickoff.
- Do not roll the Round 13 `$10.53` collect into any new bet by default.
- Round 18 had no locked charity bet, so the ledger remains `3-2`, `$31.50` invested, `$32.03` returned, `+$0.53` profit.
- Round 12 validated 5 from 5 and Round 13 settled 5 from 7 should not be changed without re-checking official NRL scores.
- Do not publish a final Round 18 tip-count headline until every Round 18 game has a clean public score cross-check.
- Keep `index.html` synced with `dist/index.html` before deploy because GitHub Pages serves the root entry.

## Important Files

- `data/briefing.json`: Durable dashboard content, charity ledger, feature panels, and round narrative.
- `data/live-round.json`: Current round tracker, official/current sources, alerts, fixtures, tips, and notes.
- `generate.js`: Static generator that merges briefing data and live round data.
- `dist/index.html`: Generated dashboard.
- `index.html`: Public GitHub Pages entry file.
- `dist/README.md`: Generated text summary.
- `README.md`: Human-facing repo overview and weekly update workflow.
- `HANDOVER.md`: Continuity notes; update before ending or risky changes.

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
- Check latest Pages build:
  `gh api repos/mrummler17/nrl-tipbot/pages/builds --jq '.[0] | {status: .status, error: .error.message, commit: .commit, created_at: .created_at, updated_at: .updated_at}'`
- Check live site:
  `curl -L https://mrummler17.github.io/nrl-tipbot/`

## Sources Used

- NRL Late Mail Round 19: `https://www.nrl.com/news/2026/07/09/nrl-late-mail-round-19-all-eyes-on-origin-stars-deardon-eyes-return/`
- NRL Team Lists Round 19: `https://www.nrl.com/news/2026/07/07/nrl-team-lists-round-19/`
- Round 19 fixture table: `https://en.wikipedia.org/wiki/2026_NRL_season_results`

## Risks / Unfinished

- Round 19 is currently a preview, not a result tracker.
- No Round 19 charity bet is locked. Any future bet requires a fresh TAB price and explicit user confirmation.
- Storm and Sharks are price-watch candidates only.
- Origin back-up calls can still materially alter Dolphins v Sharks, Bulldogs v Raiders, Roosters v Eels, Rabbitohs v Knights, Sea Eagles v Cowboys and Storm v Titans.
- Round 18 full final tip count still needs clean score cross-checking before it is published as a final wrap.
- Deployment verification is still pending for this Round 19 update until commit, push and Pages check are complete.

## Recommended Next Steps

- Commit and push to `main`.
- Verify GitHub Pages build and live production page.
