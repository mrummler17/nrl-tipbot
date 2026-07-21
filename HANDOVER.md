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
- Latest market-aware strategy commit: `3ece7e2 Add market-aware ladder strategy`
- Latest Round 20 content commit: `360d6c5 Update TipBot for Round 20`
- Latest Round 21 content commit: `b94e5b3 Update TipBot for Round 21`
- Deployment target: GitHub Pages at `https://mrummler17.github.io/nrl-tipbot/`
- Production entry file: `index.html` at repo root, synced from `dist/index.html`
- Generated dist file: `dist/index.html`
- Current local working version: Round 21, 2026 market-aware top-two chase

## Changed This Session

- Round 21 update:
  - Updated `data/briefing.json` from Round 20 mode to Round 21 market-aware top-two chase mode.
  - Updated `data/live-round.json` with the Round 21 fixture board, sources, market notes, alerts, and eight recommended tips.
  - Updated `README.md` with the current Round 21 snapshot and source list.
  - Round 20 was validated as `8-0` from official NRL Round 20 result lines:
    1. Broncos over Panthers - correct, Broncos 14 def Panthers 12
    2. Sharks over Knights - correct, Sharks 20 def Knights 18
    3. Roosters over Storm - correct, Roosters 14 def Storm 6
    4. Raiders over Rabbitohs - correct, Raiders 34 def Rabbitohs 24
    5. Warriors over Dragons - correct, Warriors 20 def Dragons 12
    6. Bulldogs over Wests Tigers - correct, Bulldogs 32 def Wests Tigers 0
    7. Titans over Sea Eagles - correct, Titans 38 def Sea Eagles 32
    8. Dolphins over Cowboys - correct, Dolphins 36 def Cowboys 16
  - Round 21 tips:
    1. Panthers over Eels - protect favourite
    2. Roosters over Knights - favourite match
    3. Storm over Rabbitohs - controlled split
    4. Raiders over Wests Tigers - protect favourite
    5. Warriors over Bulldogs - protect favourite
    6. Broncos over Cowboys - favourite match
    7. Titans over Dragons - coin-flip split
    8. Sharks over Sea Eagles - protect favourite
  - Sportsbet Round 21 head-to-head favourites captured from the public NRL market page:
    - Panthers `$1.19`
    - Roosters `$1.72`
    - Rabbitohs `$1.57`
    - Raiders `$1.22`
    - Warriors `$1.51`
    - Broncos `$1.77`
    - Dragons `$1.90`
    - Sharks `$1.64`
  - Strategy:
    - Match six of eight Sportsbet favourites: Panthers, Roosters, Raiders, Warriors, Broncos and Sharks.
    - Split on Storm over Rabbitohs because official NRL teams name Jahrome Hughes back while Souths lose Cameron Murray and Tallis Duncan.
    - Split on Titans over Dragons because the market is almost even and Gold Coast carry better attacking upside after beating Manly.
    - Do not add more underdogs; two splits is enough after an 8 from 8 week.
  - Charity ledger:
    - No Round 21 charity bet is locked.
    - Ledger remains `3-2`, `$31.50` invested, `$32.03` returned, `+$0.53` settled profit.
  - Sources checked on Tuesday 21 July 2026:
    - Official NRL Team Lists Round 21
    - Sportsbet NRL Round 21 head-to-head market
    - Sportsbet NRL Round 21 tips
    - Official NRL Team Lists Round 20 for final result-line validation
  - Notion milestone note added to the `TipBot NRL` Command Centre page on Tuesday 21 July 2026. Repo-local docs remain authoritative.

## Previous Round 20 Session

- Round 20 update:
  - Updated `data/briefing.json` from Round 19 tracker mode to Round 20 market-aware top-two chase mode.
  - Updated `data/live-round.json` with the Round 20 fixture board, source list, alerts, and eight recommended tips.
  - Updated `README.md` with the current Round 20 snapshot and source list.
  - Round 20 tips:
    1. Broncos over Panthers - controlled split
    2. Sharks over Knights - favourite match
    3. Roosters over Storm - favourite match
    4. Raiders over Rabbitohs - favourite match
    5. Warriors over Dragons - protect pick
    6. Bulldogs over Wests Tigers - protect pick with late-mail watch
    7. Titans over Sea Eagles - controlled split
    8. Dolphins over Cowboys - coin-flip home lean
  - Strategy:
    - Market favourites are now explicitly used as leader-behaviour estimates for NourilM and Kristy W13.
    - Exact market prices were not recorded in this update, so odds/bands must be rechecked before lockout.
    - Main controlled splits are Broncos over Panthers and Titans over Sea Eagles.
    - Dolphins over Cowboys is lowest confidence and should be rechecked if Tom Dearden is confirmed to start.
  - Charity ledger:
    - No Round 20 charity bet is locked.
    - Ledger remains `3-2`, `$31.50` invested, `$32.03` returned, `+$0.53` settled profit.
  - Sources checked on Wednesday 15 July 2026:
    - Official NRL Late Mail Round 20
    - Official NRL Team Lists Round 20
    - 2026 NRL season results Round 20 fixture table
  - Notion milestone note added to the `TipBot NRL` Command Centre page on Wednesday 15 July 2026. Repo-local docs remain authoritative.
  - Validation and deployment:
    - JSON parse validation passed for `data/briefing.json` and `data/live-round.json`.
    - `npm run build` completed successfully.
    - Root `index.html` was synced from `dist/index.html`.
    - `git diff --check` passed.
    - Round 20 content commit created and pushed: `360d6c5 Update TipBot for Round 20`.
    - GitHub Pages build for `360d6c5d406b3f0273e57384772f56374e380b28` completed successfully:
      - Build status: `built`
      - Created at `2026-07-15T14:04:22Z`
      - Updated at `2026-07-15T14:04:48Z`
    - Live site responded at `https://mrummler17.github.io/nrl-tipbot/?v=round20-360d6c5` and served the Round 20 HTML.
    - Live HTML contained `Round 20 briefing live`, `Round 20 market-aware top-two chase`, `Broncos over Panthers`, `Titans over Sea Eagles`, `Dolphins over Cowboys`, `No Round 20 charity play locked`, and `Parramatta Eels`.
    - Live HTML did not contain old headline strings `Round 19 live tracker`, `Round 19 chase mode live`, or `Round 18 briefing live`.

## Previous Round 19 Session

- Post-Storm result update:
  - User reported Storm beat Titans after the previous live update.
  - The app now records Storm over Titans as correct, making the Round 19 card `3-4`.
  - Exact Storm v Titans score is still marked for official cross-check before publishing the final score line.
  - The dashboard includes the human note that backing Storm was rational, even though cheering the Titans underdog push was more fun.
- Forward strategy update:
  - User noted the two people ahead are likely to take betting-market favourites to protect position.
  - TipBot now treats market favourites as the first proxy for likely leader-safe picks.
  - Weekly cards should classify every game as favourite match, controlled split, or avoid.
  - Market data is tipping-comp intelligence, not an automatic charity-bet trigger.
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
  - Use betting-market favourite status to model leader behaviour.
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

- Round: Round 21, 2026
- Mode: Market-aware top-two chase
- Tipping comp handle: `Prince_of_Penrith`
- Ladder target: top 2 before finals; latest exact gap needs a fresh comp screenshot after Round 20
- Tip card at update time:
  1. Panthers over Eels
  2. Roosters over Knights
  3. Storm over Rabbitohs
  4. Raiders over Wests Tigers
  5. Warriors over Bulldogs
  6. Broncos over Cowboys
  7. Titans over Dragons
  8. Sharks over Sea Eagles
- Charity bet status: `No bet locked`
- Charity ledger: `3-2`, `+$0.53`
- Bye team: Dolphins
- Main source logic:
  - The supplied screenshot makes the operational objective explicit: get `Prince_of_Penrith` from 3rd to 2nd or better before finals.
  - The app should prioritise top-two ladder strategy over emotional chase tipping.
  - Sportsbet favourites are used as likely leader-safe picks.
  - Storm over Rabbitohs is the main controlled differential because official team lists improved Melbourne and weakened Souths.
  - No Round 21 charity result should be added without a pre-recorded stake, price and explicit user confirmation.

## Verified So Far

- JSON parse validation passed for `data/briefing.json` and `data/live-round.json`.
- `npm run build` completed successfully.
- Root `index.html` was synced from `dist/index.html`.
- `git diff --check` passed.
- Built local files contain the Round 21 markers:
  - `Round 21 briefing live`
  - `Round 21 market-aware top-two chase`
  - `Storm over Rabbitohs`
  - `Titans over Dragons`
  - `Round 20 validated`
  - `No Round 21 charity play locked`
  - `Round 21 bye: Dolphins`
- Built local files do not contain stale markers `Round 20 briefing live`, `Round 20 market-aware top-two chase`, or `No Round 20 charity play locked`.
- Round 21 content commit created and pushed:
  - `b94e5b3 Update TipBot for Round 21`
- GitHub Pages build for `b94e5b39a93871e5e9a2b173945c601d6f17b58f` completed successfully:
  - Build status: `built`
  - Created at `2026-07-21T09:13:54Z`
  - Updated at `2026-07-21T09:14:16Z`
- Live cache-busted page responded at `https://mrummler17.github.io/nrl-tipbot/?v=round21-b94e5b3`.
- Live page contains the Round 21 markers above and does not contain the stale Round 20 headline markers.

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
- Treat market favourites as leader-behaviour intelligence; do not convert market reads into bets unless the charity-bet workflow has explicit odds, stake and user confirmation.
- Do not casually refactor the Round 21 controlled-split logic: it intentionally matches six Sportsbet favourites and splits only Storm over Rabbitohs plus Titans over Dragons.

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

- Official NRL Team Lists Round 21: `https://www.nrl.com/news/2026/07/21/nrl-team-lists-round-21/`
- Sportsbet NRL Round 21 market: `https://www.sportsbet.com.au/betting/rugby-league/nrl`
- Sportsbet Round 21 tips: `https://www.sportsbet.com.au/huddle/nrl/predictions/round-21-tips-2026`
- Official NRL Team Lists Round 20 result lines: `https://www.nrl.com/news/2026/07/14/nrl-team-lists-round-20/`

## Risks / Unfinished

- Disaster recovery pack is local/repo authoritative; Notion was updated as optional shared continuity only.
- Round 21 tips are preview tips. Recheck final 24-hour and 90-minute team updates before lockout, especially Rabbitohs v Storm, Raiders v Tigers and Dragons v Titans.
- No Round 21 charity bet is locked. Do not add one retrospectively.
- The current top-two plan depends on modelling likely leader tips from market favourites; that feature is strategic guidance, not a guarantee.
- Round 18 full final tip count still needs clean score cross-checking before it is published as a final wrap.
- Browser cache may briefly retain an older page; a hard refresh or cache-busted URL showed the Round 21 production page correctly.

## Recommended Next Steps

- Recheck Rabbitohs v Storm after David Fifita judiciary and final team cuts.
- Get a fresh tipping-comp ladder screenshot after Round 20 scoring updates so the app can recalibrate the exact gap to 2nd.
- Add a leader-differential column in a future update: likely NourilM tip, likely Kristy W13 tip, recommended `Prince_of_Penrith` action.
- Re-check Round 21 team lists and late mail before any locks.
- Keep charity bets separate from tipping-comp ladder aggression.
- Add GitHub Actions JSON/build validation for resilience.
- Store backup archives outside the repo on an encrypted external or cloud location.
