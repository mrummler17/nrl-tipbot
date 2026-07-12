# NRL TipBot Handover

## Current State

- Repo: `/Users/marcusrummler/AI Developer Files/New project/nrl-tipbot`
- Remote: `https://github.com/mrummler17/nrl-tipbot.git`
- Branch: `main`
- Latest local commit before this ladder-chase update: `4195782 Record disaster recovery verification`
- Latest known commit before this Round 19 update: `39e5fff Record Round 18 deployment handover`
- Latest Round 19 content commit: `c40c172 Update TipBot for Round 19`
- Latest commit before disaster recovery work: `a654fb6 Record Round 19 deployment handover`
- Latest disaster recovery pack commit: `b060a0c Add disaster recovery pack`
- Latest disaster recovery verification commit: `4195782 Record disaster recovery verification`
- Latest ladder-chase tracker commit: `f8f26fb Update TipBot ladder chase tracker`
- Latest Storm closure commit: `e12f4c3 Close Round 19 Storm result`
- Deployment target: GitHub Pages at `https://mrummler17.github.io/nrl-tipbot/`
- Production entry file: `index.html` at repo root, synced from `dist/index.html`
- Generated dist file: `dist/index.html`
- Current local working version: Round 19, 2026 final-direction tracker and `Prince_of_Penrith` top-two chase

## Changed This Session

- Post-Storm result update:
  - User reported Storm beat Titans after the previous live update.
  - The app now records Storm over Titans as correct, making the Round 19 card `3-4`.
  - Exact Storm v Titans score is still marked for official cross-check before publishing the final score line.
  - The dashboard includes the human note that backing Storm was rational, even though cheering the Titans underdog push was more fun.
- Updated `data/briefing.json` from Round 19 preview mode to Round 19 live tracker and ladder-chase mode.
- Added the user-supplied tipping-comp context:
  - Handle: `Prince_of_Penrith`
  - Current ladder position: 3rd
  - Current points: 194
  - Gap to 2nd: 5 points behind Kristy W13 on 199
  - 1st place: NourilM on 211, 17 points ahead
- Updated Round 19 result tracking:
  - Correct: Warriors over Wests Tigers, Sharks over Dolphins
  - Missed: Bulldogs over Raiders, Eels over Roosters, Knights over Rabbitohs, Sea Eagles over Cowboys
  - Correct from user-reported final result: Storm over Titans, exact score pending official cross-check
- Updated strategy from generic tip preview to controlled top-two chase:
  - Protect obvious favourites where leaders likely match.
  - Use one or two controlled differentials per full round.
  - Model likely tips for NourilM and Kristy W13 before Round 20 locks.
  - Do not let a poor Round 19 card trigger reckless charity betting.
- Updated `README.md` to match the live tracker and `Prince_of_Penrith` objective.
- Kept the Mark Hughes Foundation ledger unchanged:
  - Record: `3-2`
  - Invested: `$31.50`
  - Returned: `$32.03`
  - Settled profit: `+$0.53`
- Current source checks were performed on Sunday 12 July 2026 at about 6:45pm AEST:
  - Official NRL live Round 19 blog for Rabbitohs v Knights, Sea Eagles v Cowboys and Storm v Titans
  - Official NRL late mail Round 19 page
  - NRL Round 19 team lists
  - 2026 NRL season results table as secondary result cross-check
- Storm v Titans was later user-reported as a Storm win. Treat the tip as correct, but keep the exact score pending until a clean official score is verified.
- JSON validation passed after the live tracker update.
- `npm run build` completed successfully after the live tracker update.
- Root `index.html` was synced from `dist/index.html`.
- Local preview QA passed at `http://127.0.0.1:4174/index.html`:
  - Visible: `Round 19 live tracker and Prince_of_Penrith top-two chase`.
  - Rendered: `Prince_of_Penrith`, `5 pts`, `2-4 + live`, `No bet locked`, `3-2`, `+$0.53`.
  - Rendered result lines for Warriors, Sharks, Raiders, Roosters, Rabbitohs and Cowboys.
  - Old copy did not render: `Round 19 preview after the Origin decider`, `Round 18 briefing live`.
  - Browser console had 0 errors.
- Notion milestone note was not added for this update because the Notion fetch/read tool was not exposed in the session, and the Notion skill requires reading existing page content before editing. Repo-local docs remain authoritative.
- Previous ladder-chase tracker commit created and pushed:
  - `f8f26fb Update TipBot ladder chase tracker`
- GitHub Pages build for `f8f26fb1c5b5ba88b4140bbff08e2de2429af50d` completed successfully:
  - Build status: `built`
  - Created at `2026-07-12T08:50:53Z`
  - Updated at `2026-07-12T08:51:15Z`
- Live page responded at `https://mrummler17.github.io/nrl-tipbot/` and served the Round 19 live tracker HTML, including `Prince_of_Penrith`, `5 pts`, `2-4 + live`, and the Round 19 result board before the post-Storm closure.
- Storm closure commit created and pushed:
  - `e12f4c3 Close Round 19 Storm result`
- GitHub Pages build for `e12f4c32ddea55fe5544b2707a222b0914666a91` completed successfully:
  - Build status: `built`
  - Created at `2026-07-12T10:17:15Z`
  - Updated at `2026-07-12T10:17:35Z`
- Live page responded at `https://mrummler17.github.io/nrl-tipbot/` and served the Storm closure HTML, including `3-4`, `Storm correct`, and `Storm def Titans, exact score pending official cross-check`.

## Prior Disaster Recovery Session

- Created `DISASTER_RECOVERY.md` as the repo-local restore and resilience source of truth.
- Added `scripts/backup-recovery-pack.sh` to create local recovery archives.
- Added `.env.example` with explicit no-required-env status and safe placeholder notes.
- Added `.gitignore` entries for backups, env files, archives, logs, `node_modules/`, and `.DS_Store`.
- Ran and inspected a real backup archive:
  - `/Users/marcusrummler/AI Developer Files/New project/nrl-tipbot/backups/nrl-tipbot-recovery-20260710-101027.tar.gz`
  - Size: 43 KB
  - Shape: `repo-snapshot/` plus `metadata/`
  - Secret check: no real `.env` files; `.env.example` only.
- Added a concise Notion milestone note to the `TipBot NRL` Command Centre page on 2026-07-10. Notion is continuity context only; repo docs remain authoritative.
- Disaster recovery pack commit created and pushed:
  - `b060a0c Add disaster recovery pack`
- GitHub Pages build for `b060a0c541d043a908e47be38647f521e5da7b5f` completed successfully:
  - Build status: `built`
  - Created at `2026-07-10T00:13:55Z`
  - Updated at `2026-07-10T00:14:15Z`
- Live page responded at `https://mrummler17.github.io/nrl-tipbot/` and still served the Round 19 HTML after the recovery-pack push.
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
- Mode: Live tracker and ladder-chase strategy
- Tipping comp handle: `Prince_of_Penrith`
- Ladder target: 3rd on 194, 5 points behind 2nd
- Tip card at update time:
  1. Warriors over Wests Tigers - correct, Warriors 32 def Wests Tigers 6
  2. Sharks over Dolphins - correct, Sharks 66 def Dolphins 0
  3. Bulldogs over Raiders - missed, Raiders 40 def Bulldogs 16
  4. Eels over Roosters - missed, Roosters 28 def Eels 12
  5. Knights over Rabbitohs - missed, Rabbitohs 26 def Knights 24
  6. Sea Eagles over Cowboys - missed, Cowboys 19 def Sea Eagles 18 in golden point
  7. Storm over Titans - correct from user-reported final result, exact score pending official cross-check
- Charity bet status: `No bet locked`
- Charity ledger: `3-2`, `+$0.53`
- Bye teams: Broncos, Panthers and Dragons
- Main source logic:
  - The supplied screenshot makes the operational objective explicit: get `Prince_of_Penrith` from 3rd to 2nd or better before finals.
  - The app should prioritise top-two ladder strategy over emotional chase tipping.
  - No Round 19 charity result should be added without a pre-recorded stake, price and explicit user confirmation.
  - Storm v Titans direction is correct from user report; exact score needs official confirmation before the final score line is published.

## Verified So Far

- JSON parse validation passed for `data/briefing.json` and `data/live-round.json`.
- `npm run build` completed successfully.
- Root `index.html` was synced from `dist/index.html`.
- Current source checks were performed on Thursday 9 July 2026.
- Current source checks for the live tracker were performed on Sunday 12 July 2026.
- NRL official late-mail page is live for Round 19 and includes post-Origin updates.
- NRL official live Round 19 blog was checked for the Sunday games and Storm v Titans live state.
- NRL official team-list page was checked for Round 19 named sides.
- Wikipedia Round 19 fixture table was used as a secondary schedule cross-check.
- Local browser QA passed at `http://127.0.0.1:4173/index.html`:
  - `Round 19 briefing live` rendered.
  - Seven tips rendered: Warriors, Sharks, Bulldogs, Eels, Knights, Sea Eagles and Storm.
  - `No bet locked`, ledger record `3-2`, and profit `+$0.53` rendered.
  - Bye teams rendered: Broncos, Panthers and Dragons.
  - Old `Round 18 briefing live` and `Round 18 preview with Origin-week` copy did not render.
  - Browser console had 0 errors.
- Round 19 content commit created and pushed:
  - `c40c172 Update TipBot for Round 19`
- GitHub Pages build for `c40c1723b2507bfe56d89c2c6fd2437f92f0d709` completed successfully:
  - Build status: `built`
  - Created at `2026-07-09T11:51:47Z`
  - Updated at `2026-07-09T11:52:12Z`
- Live page responded at `https://mrummler17.github.io/nrl-tipbot/` and served the Round 19 HTML, including the Round 19 meta description.
- Production browser QA passed with cache-busted URL `https://mrummler17.github.io/nrl-tipbot/?v=round19-c40c172`:
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
- Keep `Prince_of_Penrith` ladder strategy conservative: the app can recommend controlled differentials, but should not chase every underdog simply to make up 5 points.

## Important Files

- `data/briefing.json`: Durable dashboard content, charity ledger, feature panels, and round narrative.
- `data/live-round.json`: Current round tracker, official/current sources, alerts, fixtures, tips, and notes.
- `generate.js`: Static generator that merges briefing data and live round data.
- `dist/index.html`: Generated dashboard.
- `index.html`: Public GitHub Pages entry file.
- `dist/README.md`: Generated text summary.
- `README.md`: Human-facing repo overview and weekly update workflow.
- `HANDOVER.md`: Continuity notes; update before ending or risky changes.
- `DISASTER_RECOVERY.md`: Disaster recovery, backup, restore, validation, and resilience instructions.
- `.env.example`: Safe placeholder file documenting that no env vars are required.
- `scripts/backup-recovery-pack.sh`: Creates a local no-secrets recovery archive.

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
- Create disaster recovery backup:
  `./scripts/backup-recovery-pack.sh`

## Sources Used

- NRL Late Mail Round 19: `https://www.nrl.com/news/2026/07/09/nrl-late-mail-round-19-all-eyes-on-origin-stars-deardon-eyes-return/`
- NRL Live Round 19: `https://www.nrl.com/news/2026/07/12/nrl-live-round-19-rabbitohs-v-knights-sea-eagles-v-cowboys-storm-v-titans/`
- NRL Team Lists Round 19: `https://www.nrl.com/news/2026/07/07/nrl-team-lists-round-19/`
- Round 19 fixture table: `https://en.wikipedia.org/wiki/2026_NRL_season_results`

## Risks / Unfinished

- Disaster recovery pack is local/repo authoritative; Notion was updated as optional shared continuity only.
- Round 19 is currently a final-direction tracker at `3-4`; Storm v Titans exact score still needs official confirmation before final score line.
- No Round 19 charity bet is locked. Do not add one retrospectively.
- The current top-two plan depends on modelling likely leader tips from Round 20 onward; that feature is strategic guidance only until the next update.
- Round 18 full final tip count still needs clean score cross-checking before it is published as a final wrap.
- Browser cache may briefly retain the previous Round 18 page; a hard refresh or cache-busted URL showed the Round 19 production page correctly.

## Recommended Next Steps

- Confirm Storm v Titans exact score from an official source and publish the final score line.
- Build Round 20 with a leader-differential column: likely NourilM tip, likely Kristy W13 tip, recommended `Prince_of_Penrith` action.
- Re-check Round 20 team lists and late mail before any locks.
- Keep charity bets separate from tipping-comp ladder aggression.
- Add GitHub Actions JSON/build validation for resilience.
- Store backup archives outside the repo on an encrypted external or cloud location.
