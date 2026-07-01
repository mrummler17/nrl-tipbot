# NRL TipBot Handover

## Current State

- Repo: `/Users/marcusrummler/AI Developer Files/New project/nrl-tipbot`
- Remote: `https://github.com/mrummler17/nrl-tipbot.git`
- Branch: `main`
- Latest known commit before this Round 18 update: `ea9e181 Record Round 17 result tracker deployment`
- Deployment target: GitHub Pages at `https://mrummler17.github.io/nrl-tipbot/`
- Production entry file: `index.html` at repo root, synced from `dist/index.html`
- Generated dist file: `dist/index.html`
- Current production-intended version: Round 18, 2026 preview

## Changed This Session

- Updated `data/briefing.json` from Round 17 result tracking to Round 18 preview.
- Updated `data/live-round.json` with the Round 18 fixture board, five tips, source list, and live alerts.
- Updated `README.md` with the Round 18 snapshot, workflow, and source list.
- Kept the Mark Hughes Foundation ledger unchanged:
  - Record: `3-2`
  - Invested: `$31.50`
  - Returned: `$32.03`
  - Settled profit: `+$0.53`

## Current Published Content To Verify

- Round: Round 18, 2026
- Mode: Preview
- Tip card:
  1. Sharks over Broncos
  2. Sea Eagles over Eels
  3. Knights over Dolphins
  4. Dragons over Wests Tigers
  5. Rabbitohs over Panthers
- Charity bet status: `No bet locked`
- Charity ledger: `3-2`, `+$0.53`
- Bye teams: Raiders, Bulldogs, Titans, Storm, Warriors, Cowboys and Roosters
- Main source logic:
  - Panthers are missing Nathan Cleary, Isaah Yeo, Liam Martin and Isaiah Papali'i.
  - Broncos are missing Reece Walsh, Payne Haas, Pat Carrigan and several depth pieces.
  - Eels are missing Mitchell Moses.
  - Dolphins are missing Isaiya Katoa and several Origin players.
  - Wests Tigers are missing Jarome Luai and Taylan May.

## Verified So Far

- JSON parse validation passed for `data/briefing.json` and `data/live-round.json`.
- `npm run build` completed successfully.
- Root `index.html` was synced from `dist/index.html`.
- Current source checks were performed on Wednesday 1 July 2026.
- NRL official team-list page is live for Round 18 and lists all five fixtures with team news.
- NRL official draw page was checked for Round 18.
- Wikipedia Round 18 fixture table was used as a secondary schedule cross-check.
- Daily Telegraph Round 18 late-mail search result was checked for current injury/selection context.
- Local browser QA passed at `http://127.0.0.1:4173/index.html`:
  - `Round 18 briefing live` rendered.
  - Five tips rendered: Rabbitohs, Dragons, Sharks, Sea Eagles and Knights.
  - `No bet locked`, ledger record `3-2`, and profit `+$0.53` rendered.
  - Bye teams rendered: Raiders, Bulldogs, Titans, Storm, Warriors, Cowboys and Roosters.
  - Old `Round 17 result tracking` copy did not render.
  - Browser console had 0 errors.

## Must Not Change Casually

- Do not move the charity ledger without recorded TAB odds, stake, result, and explicit user confirmation.
- Do not record any Round 18 price-watch candidate as a charity bet without a fresh TAB price and user confirmation.
- Do not move the ledger for the user's external Round 17 all-tips slip; it was not recorded as a charity bet before kickoff.
- Do not roll the Round 13 `$10.53` collect into any new bet by default.
- Round 17 had no locked charity bet, so the ledger remains `3-2`, `$31.50` invested, `$32.03` returned, `+$0.53` profit.
- Round 12 validated 5 from 5 and Round 13 settled 5 from 7 should not be changed without re-checking official NRL scores.
- Do not publish a final Round 17 tip-count headline until every Round 17 game has a clean public score cross-check.
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

- NRL Team Lists Round 18: `https://www.nrl.com/news/2026/06/30/nrl-team-lists-round-18/`
- NRL Draw Round 18: `https://www.nrl.com/draw/?competition=111&round=18&season=2026`
- Round 18 fixture table: `https://en.wikipedia.org/wiki/2026_NRL_season_results`
- Round 18 late mail: `https://www.dailytelegraph.com.au/sport/nrl/supercoach-news/nrl-late-mail-round-18-oryn-keeley-set-to-start-as-ativalu-lisati-ruled-out-for-up-to-two-months/news-story/e3e99476ba2c9cff60053d6cca70703e`

## Risks / Unfinished

- Round 18 is currently a preview, not a result tracker.
- No Round 18 charity bet is locked. Any future bet requires a fresh TAB price and explicit user confirmation.
- Rabbitohs over Panthers is an upset lean and should not be promoted to a charity-bet anchor without re-checking final teams.
- Broncos v Sharks depends partly on Brisbane's final forward reshuffle and any Xavier Willison clearance update.
- Round 17 full final tip count still needs clean score cross-checking before it is published as a final wrap.
- Deployment verification is still pending for this Round 18 update until commit, push and Pages check are complete.

## Recommended Next Steps

- Commit and push to `main`.
- Verify GitHub Pages build and live production page.
