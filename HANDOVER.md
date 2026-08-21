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
- Latest Round 22 content commit: `8a30f2e Update TipBot for Round 22`
- Latest Round 22 P5 result commit verified live: `f8e1766 Update TipBot Round 22 results for P5`
- Latest Round 23 content commit verified live: `94212f9 Update TipBot for Round 23`
- Latest Round 23 deployment handover commit verified live: `ea36d93 Record Round 23 deployment handover`
- Latest Round 24 content commit verified live: `0ca182d Update TipBot for Round 24`
- Latest Round 24 team-list content commit verified live: `8304f7b Refresh Round 24 tips after team lists`
- Latest Round 25 live-card content commit verified live: `215c842 Update TipBot for Round 25 live card`
- Deployment target: GitHub Pages at `https://mrummler17.github.io/nrl-tipbot/`
- Production entry file: `index.html` at repo root, synced from `dist/index.html`
- Generated dist file: `dist/index.html`
- Current local working version: Round 25, 2026 live card with five games remaining after Friday lockout

## Changed This Session

- Round 25 live-card update on Friday 21 August 2026:
  - The request arrived after three lockouts. Panthers beat Storm `22-14`, Broncos beat Raiders `34-30`, and Dolphins v Eels was already live; those games are round state, not retrospective TipBot selections.
  - Five actionable tips remain: Knights, Warriors, Bulldogs, Sharks and Roosters.
  - All five match Sportsbet favourites and FootyForecaster: Knights `$1.43` / 77.0%, Warriors `$1.57` / 54.8%, Bulldogs `$1.48` / 67.4%, Sharks `$1.43` / 72.2%, Roosters `$1.06` / 93.6%.
  - Warriors over Rabbitohs is the lowest-confidence selection because South Sydney named Cody Walker, Brandon Smith, Cameron Murray and David Fifita.
  - Round 24 settled at `4-4`: correct Dolphins, Warriors, Knights and Dragons; missed Panthers, Bulldogs, Sharks and Cowboys.
  - `Prince_of_Penrith` was last confirmed P5 on 238 before Round 24. Current comp position and gap are unknown; request a fresh ladder screenshot before setting Round 26 differential risk.
  - No Round 24 or Round 25 charity bet was locked. Ledger remains `3-2`, `$31.50` invested, `$32.03` returned and `+$0.53`.
  - Mandatory remaining checks: each final 90-minute squad, especially Rabbitohs v Warriors and Sharks without Braydon Trindall.
  - Validation: JSON parsing passed, `npm run build` passed, `dist/index.html` matched root `index.html`, stale Round 24 active markers were absent, and `git diff --check` passed.
  - Deployment: GitHub Pages built content commit `215c842` successfully at `2026-08-21T11:21:53Z`.
  - Production verification: the base live URL showed the Round 25 status, five remaining tips, Round 24 4-from-8 settlement, Broncos result and no-bet marker. A first cache-busted request briefly returned GitHub's generic 404, while the base URL served the correct page immediately afterward.
  - Notion Command Centre page `TipBot NRL` received the Round 25 live-card milestone and updated next action on 21 August 2026.

## Previous Round 24 Team-List Session

- Round 24 team-list refresh on Wednesday 12 August 2026:
  - Checked the published Round 24 squads, refreshed Sportsbet prices at about 5:05pm AEST and re-ran the FootyForecaster comparison.
  - All eight tips hold: Panthers, Dolphins, Bulldogs, Sharks, Cowboys, Warriors, Knights and Dragons.
  - The card now matches all eight Sportsbet favourites. Dragons remain the sole strategic edge because their market is effectively even and FootyForecaster has moved to a 61.0% Dragons lean.
  - Key team-list confirmations:
    - Panthers named Dylan Edwards on the extended bench; Roosters named James Tedesco at fullback. Hold Panthers pending Thursday's 24-hour cut.
    - Manly remain depleted; keep Dolphins despite FootyForecaster's 56.0% Sea Eagles lean.
    - Rabbitohs named Jayden Sullivan at halfback with Ashton Ward out for the season, Jamie Humphreys unavailable and Latrell Mitchell absent; keep Bulldogs.
    - Sharks regain KL Iro and Siosifa Talakai; keep Sharks despite Jesse Ramien's absence.
    - Eels lose Isaiah Iongi for the season and name Apa Twidle at fullback; keep Cowboys despite the model split.
    - Broncos named Tom Duffy at halfback without Adam Reynolds; Warriors regain Luke Metcalf; keep Warriors.
    - Knights named Bradman Best and Phoenix Crossland to return; keep Knights.
  - Sportsbet prices: Panthers `$1.67`, Dolphins `$1.35`, Bulldogs `$1.57`, Sharks `$1.31`, Cowboys `$1.54`, Warriors `$1.42`, Knights `$1.22`, Dragons `$1.91`, Wests Tigers `$1.93`.
  - Updated model: Panthers 54.4%, Sea Eagles 56.0%, Bulldogs/Rabbitohs 50.0% each, Sharks 85.5%, Eels 64.8%, Warriors 71.6%, Knights 84.6%, Dragons 61.0%.
  - No Round 24 charity bet is locked; ledger remains `3-2`, `$31.50` invested, `$32.03` returned and `+$0.53`.
  - Remaining checks: Thursday 24-hour Panthers/Roosters list and each game's final 90-minute squad.
  - Validation: JSON parsing passed, `npm run build` passed, `dist/index.html` matched root `index.html`, and `git diff --check` passed.
  - Deployment: GitHub Pages built commit `8304f7b` successfully at `2026-08-12T07:41:07Z`.
  - Production verification: cache-busted live HTML showed the team-list status, all eight recommended tips, Dragons at 61.0% in the model, and no Round 24 charity bet locked; stale early-card markers were absent.
  - Notion Command Centre page `TipBot NRL` received the concise team-list milestone and updated next action on 12 August 2026.

## Previous Round 24 Early-Card Session

- Round 24 early-card update:
  - User supplied a Round 24 ladder screenshot confirming `Prince_of_Penrith` is P5 on 238 points.
  - Exact ladder pressure: P4 is one point ahead on 239; P2 is tied on 242; P6 is one point behind on 237; two P7 tipsters are on 236.
  - Updated `data/briefing.json` and `data/live-round.json` from Round 23 to Round 24 early-card mode.
  - Updated `README.md` with the current card, ladder context, prices, model disagreements and Tuesday recheck requirement.
  - Round 24 early tips:
    1. Panthers over Roosters - market/model lean; monitor Isaah Yeo, Dylan Edwards and James Tedesco.
    2. Dolphins over Sea Eagles - market protect; Manly injuries override the FootyForecaster split.
    3. Bulldogs over Rabbitohs - market protect pending Souths spine availability.
    4. Sharks over Raiders - strong market/model protect.
    5. Cowboys over Eels - market protect; Parramatta injuries override the FootyForecaster split.
    6. Warriors over Broncos - market/model protect.
    7. Knights over Titans - strongest safe pick.
    8. Dragons over Wests Tigers - sole controlled edge in a near-even market.
  - Sportsbet Round 24 head-to-head prices checked Monday 10 August 2026 at about 12:07pm AEST:
    - Panthers `$1.74`, Roosters `$2.10`
    - Dolphins `$1.40`, Sea Eagles `$2.94`
    - Bulldogs `$1.64`, Rabbitohs `$2.27`
    - Sharks `$1.30`, Raiders `$3.54`
    - Cowboys `$1.57`, Eels `$2.41`
    - Warriors `$1.47`, Broncos `$2.71`
    - Knights `$1.25`, Titans `$4.00`
    - Wests Tigers `$1.90`, Dragons `$1.94`
  - FootyForecaster Round 24 model:
    - Agrees on Panthers 53.6%, Sharks 87.5%, Warriors 70.5% and Knights 78.8%.
    - Disagrees with the market on Sea Eagles 60.3%, Rabbitohs 53.6%, Eels 69.8% and Dragons 55.2%.
  - Strategy:
    - Match seven Sportsbet favourites to defend against likely leader-safe cards and the immediate P6/P7 threat.
    - Split only on Dragons because the market is virtually even and the model gives St George Illawarra a small edge.
    - Do not add a second differential before official Tuesday team lists unless availability materially changes the evidence.
  - Official NRL casualty-ward context checked Monday 10 August 2026:
    - Penrith lose Isaah Yeo but Dylan Edwards is targeting Round 24; James Tedesco is also targeting Round 24 for the Roosters.
    - Manly lose Taniela Paseka and Kobe Hetherington and remain heavily depleted.
    - Parramatta are monitoring Isaiah Iongi's knee and remain injury-hit.
    - Newcastle expect Bradman Best and Phoenix Crossland back.
  - Charity ledger remains `3-2`, `$31.50` invested, `$32.03` returned and `+$0.53`; no Round 24 charity bet is locked.
  - Mandatory next check: official Round 24 team lists on Tuesday, then 24-hour/90-minute updates before each game.
  - Validation and deployment:
    - JSON parse validation passed for `data/briefing.json` and `data/live-round.json`.
    - `npm run build` completed successfully and root `index.html` was synced from `dist/index.html`.
    - `git diff --check` passed.
    - Round 24 content commit `0ca182d` was pushed to `main`.
    - GitHub Pages build for `0ca182deec6c5413a8aa0f4cf3651af752cdc5ba` completed with status `built` at `2026-08-10T02:16:44Z`.
    - Live site verified at `https://mrummler17.github.io/nrl-tipbot/?v=round24-0ca182d`.
    - Live HTML contained the Round 24 headline, full recommended card, Dragons-only edge and no-bet ledger marker; old `Round 23 tips live` headline was absent.
  - Notion milestone note added to the `TipBot NRL` Command Centre page on Monday 10 August 2026. Repo-local docs remain authoritative.

## Previous Round 23 Session

- Round 23 pre-lockout update:
  - User asked to update TipBot for this week while sitting P5, with the goal to hold ladder position or move up.
  - Updated `data/briefing.json` from Round 22 settled mode to Round 23 tips live mode.
  - Updated `data/live-round.json` with Round 23 fixture board, Sportsbet prices, model notes, alerts, and eight recommended tips.
  - Updated `README.md` with the Round 23 current snapshot and tip card.
  - Round 23 recommended tips:
    1. Cowboys over Titans - market protect; avoid another Titans split after last week's miss.
    2. Warriors over Panthers - main controlled differential against Sportsbet favourite Penrith.
    3. Roosters over Bulldogs - strong market protect; monitor James Tedesco late mail.
    4. Sea Eagles over Storm - market/model lean; volatile neutral-site game.
    5. Dolphins over Broncos - strong market protect; Broncos downgraded without Adam Reynolds.
    6. Rabbitohs over Eels - strong market protect with Souths forwards returning.
    7. Raiders over Knights - even market, home/model edge.
    8. Sharks over Dragons - strongest protect pick.
  - Sportsbet Round 23 head-to-head market checked Thursday 6 August 2026 at about 7:55am AEST:
    - Cowboys `$1.58`
    - Panthers `$1.53`
    - Roosters `$1.35`
    - Sea Eagles `$1.72`
    - Dolphins `$1.42`
    - Rabbitohs `$1.37`
    - Raiders and Knights both `$1.92`
    - Sharks `$1.19`
  - Strategy:
    - Match six clear market favourites: Cowboys, Roosters, Sea Eagles, Dolphins, Rabbitohs and Sharks.
    - Split on Warriors over Panthers because P5 needs upside, Warriors are at home and FootyForecaster leans Warriors despite Sportsbet favouring Penrith.
    - Take Raiders over Knights in the even-money game because GIO Stadium and the model give Canberra a slight edge.
    - Do not add more than two differentials without a fresh ladder screenshot showing the exact gap to 2nd.
  - Charity ledger:
    - No Round 23 charity bet is locked.
    - Ledger remains `3-2`, `$31.50` invested, `$32.03` returned, `+$0.53` settled profit.
  - Sources checked on Thursday 6 August 2026:
    - Sportsbet NRL Round 23 head-to-head market
    - NRL Countdown Round 23 fixture sync
    - FootyForecaster Round 23 model
    - Daily Telegraph Round 23 late-mail snippets
  - Notion milestone note added to the `TipBot NRL` Command Centre page on Thursday 6 August 2026. Repo-local docs remain authoritative.

## Previous Round 22 Result Session

- Round 22 result/P5 update:
  - User confirmed `Prince_of_Penrith` is now P5 in the tipping comp.
  - Updated `data/briefing.json` from Round 22 preview mode to Round 22 settled P5 recovery mode.
  - Updated `data/live-round.json` with official full-time result lines for all eight Round 22 games.
  - Updated `README.md` with the settled Round 22 `6-2` result and P5 recovery guidance.
  - Round 22 was validated as `6-2` from official NRL Round 22 result lines:
    1. Roosters over Cowboys - correct, Roosters 82 def Cowboys 12
    2. Dolphins over Dragons - correct, Dolphins 28 def Dragons 22
    3. Bulldogs over Storm - correct, Bulldogs 36 def Storm 22
    4. Titans over Warriors - missed, Warriors 42 def Titans 6
    5. Panthers over Raiders - correct, Panthers 42 def Raiders 18
    6. Broncos over Knights - missed, Knights 30 def Broncos 6
    7. Sharks over Rabbitohs - correct, Sharks 32 def Rabbitohs 16
    8. Eels over Wests Tigers - correct, Eels 16 def Wests Tigers 13
  - Strategic read:
    - P5 means Round 23 can take a little more ladder-value risk than the previous P3 plan.
    - Do not switch to reckless all-underdog chasing.
    - Build Round 23 from current market favourites, official team lists and a fresh comp screenshot.
    - Likely default for Round 23: two controlled differentials if the gap to 2nd is meaningful.
    - Downgrade Broncos until their injury and form picture stabilises.
  - Charity ledger:
    - No Round 22 charity bet was locked in the app before kickoff.
    - Ledger remains `3-2`, `$31.50` invested, `$32.03` returned, `+$0.53` settled profit.
  - Sources checked on Sunday 2 August 2026:
    - Official NRL Team Lists Round 22 result lines
    - Prior Sportsbet NRL Round 22 head-to-head market used for pre-round strategy
  - Notion milestone note added to the `TipBot NRL` Command Centre page on Sunday 2 August 2026. Repo-local docs remain authoritative.

## Previous Round 22 Preview Session

- Round 22 update:
  - Updated `data/briefing.json` from Round 21 mode to Round 22 ladder-protect chase mode.
  - Updated `data/live-round.json` with the Round 22 fixture board, source list, current Sportsbet prices, alerts, and eight recommended tips.
  - Updated `README.md` with the current Round 22 snapshot and source list.
  - User confirmed `Prince_of_Penrith` is currently 3rd in the tipping-comp ladder.
  - Round 21 was validated as `5-3` from official NRL Round 21 result lines:
    1. Panthers over Eels - correct, Panthers 24 def Eels 18
    2. Roosters over Knights - correct, Roosters 23 def Knights 22
    3. Storm over Rabbitohs - missed, Rabbitohs 28 def Storm 26
    4. Raiders over Wests Tigers - correct, Raiders 56 def Wests Tigers 10
    5. Warriors over Bulldogs - missed, Bulldogs 18 def Warriors 6
    6. Broncos over Cowboys - missed, Cowboys 18 def Broncos 10
    7. Titans over Dragons - correct, Titans 38 def Dragons 18
    8. Sharks over Sea Eagles - correct, Sharks 48 def Sea Eagles 12
  - Round 22 tips:
    1. Roosters over Cowboys - favourite match
    2. Dolphins over Dragons - heavy favourite protect pick
    3. Bulldogs over Storm - favourite match
    4. Titans over Warriors - controlled split
    5. Panthers over Raiders - favourite protect pick
    6. Broncos over Knights - home favourite match
    7. Sharks over Rabbitohs - heavy favourite protect pick
    8. Eels over Wests Tigers - favourite match
  - Sportsbet Round 22 head-to-head favourites captured from the public NRL market page on Thursday 30 July 2026:
    - Roosters `$1.53`
    - Dolphins `$1.24`
    - Bulldogs `$1.52`
    - Warriors `$1.57`
    - Panthers `$1.35`
    - Broncos `$1.50`
    - Sharks `$1.27`
    - Eels `$1.41`
  - Strategy:
    - Match seven of eight Sportsbet favourites: Roosters, Dolphins, Bulldogs, Panthers, Broncos, Sharks and Eels.
    - Split only on Titans over Warriors because Gold Coast are at home, carry attacking momentum and the Warriors lose Taine Tuaupiki at fullback.
    - Do not add more underdogs while sitting 3rd unless a fresh ladder screenshot shows the gap has widened.
  - Charity ledger:
    - No Round 22 charity bet is locked.
    - Ledger remains `3-2`, `$31.50` invested, `$32.03` returned, `+$0.53` settled profit.
  - Sources checked on Thursday 30 July 2026:
    - Official NRL Team Lists Round 22
    - Sportsbet NRL Round 22 head-to-head market
    - Sportsbet NRL Round 22 tips
    - Official NRL Team Lists Round 21 for final result-line validation
  - Notion milestone note added to the `TipBot NRL` Command Centre page on Thursday 30 July 2026. Repo-local docs remain authoritative.

## Previous Round 21 Session

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

- Round: Round 23, 2026
- Mode: Pre-lockout P5 ladder protection and controlled climb
- Tipping comp handle: `Prince_of_Penrith`
- Ladder target: top 2 before finals; user confirmed now P5, exact gap needs a fresh comp screenshot
- Tip card at update time:
  1. Cowboys over Titans
  2. Warriors over Panthers
  3. Roosters over Bulldogs
  4. Sea Eagles over Storm
  5. Dolphins over Broncos
  6. Rabbitohs over Eels
  7. Raiders over Knights
  8. Sharks over Dragons
- Charity bet status: `No Round 23 bet locked`
- Charity ledger: `3-2`, `+$0.53`
- Bye team: Wests Tigers
- Main source logic:
  - User confirmed `Prince_of_Penrith` is now P5.
  - The app should hold P5 first, then create two controlled climb lanes.
  - Sportsbet favourites remain leader-behaviour signals.
  - Warriors over Panthers is the main controlled differential.
  - Raiders over Knights is the second edge because the market is even and the model/home lean supports Canberra.
  - No Round 23 charity result should be added without a pre-recorded stake, price and explicit user confirmation.

## Verified So Far

- Round 23 pre-lockout update:
  - JSON parse validation passed for `data/briefing.json` and `data/live-round.json`.
  - `npm run build` completed successfully.
  - Root `index.html` was synced from `dist/index.html`.
  - `git diff --check` passed.
  - Notion milestone note added to the `TipBot NRL` Command Centre page.
  - Round 23 content commit created and pushed:
    - `94212f9 Update TipBot for Round 23`
  - GitHub Pages build for `94212f98b3d16e3fc121f438f5b62c11a693666a` completed successfully:
    - Build status: `built`
    - Created at `2026-08-05T22:21:06Z`
    - Updated at `2026-08-05T22:21:22Z`
  - Live cache-busted page responded at `https://mrummler17.github.io/nrl-tipbot/?v=round23-94212f9`.
  - Live page contains Round 23 markers:
    - `Round 23 tips live`
    - `Round 23 pre-lockout card`
    - `Recommended Round 23 tips: Cowboys, Warriors, Roosters, Sea Eagles, Dolphins, Rabbitohs, Raiders and Sharks`
    - `Main controlled differential: Warriors over Panthers`
    - `Second edge: Raiders over Knights`
    - `No Round 23 charity play is locked`
  - Live page does not contain stale headline markers `Round 22 result tracker live` or `Round 22 settled, P5 recovery mode`.

- JSON parse validation passed for `data/briefing.json` and `data/live-round.json`.
- `npm run build` completed successfully.
- Root `index.html` was synced from `dist/index.html`.
- `git diff --check` passed.
- Round 22 P5 content commit created and pushed:
  - `f8e1766 Update TipBot Round 22 results for P5`
- GitHub Pages build for `f8e1766a41b6521c86f243672310aae59d0f4d97` completed successfully:
  - Build status: `built`
  - Created at `2026-08-02T12:07:01Z`
  - Updated at `2026-08-02T12:07:30Z`
- Live cache-busted page responded at `https://mrummler17.github.io/nrl-tipbot/?v=round22-p5-f8e1766`.
- Live page contains P5/result markers:
  - `Round 22 result tracker live`
  - `Round 22 settled, P5 recovery mode`
  - `Prince_of_Penrith is now P5`
  - `Round 22 settled: TipBot card went 6 from 8`
  - `Roosters 82 def Cowboys 12`
  - `Warriors 42 def Titans 6`
  - `Knights 30 def Broncos 6`
  - `No Round 22 charity play was locked`
- Live page does not contain stale preview markers `Round 22 briefing live`, `Round 22 ladder-protect chase`, `Awaiting kickoff`, or `Round 22 card live`.
- Notion milestone note was added to the `TipBot NRL` Command Centre page; repo docs remain authoritative.

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
- Do not casually expand the Round 22 underdog set: it intentionally matches seven Sportsbet favourites and splits only Titans over Warriors while the user is 3rd.
- Round 23 should be built from P5 recovery logic: likely two controlled differentials if the fresh ladder gap supports it, but never an all-underdog chase.

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

- Sportsbet NRL Round 23 head-to-head market: `https://www.sportsbet.com.au/betting/rugby-league/nrl`
- NRL Countdown Round 23 fixture sync: `https://nrlcountdown.com/nrl-schedule-2026/`
- FootyForecaster Round 23 model: `https://footyforecaster.com/NRL/RoundForecast/2026_Round_23`
- Daily Telegraph Round 23 late-mail snippets: `https://www.dailytelegraph.com.au/sport/nrl/supercoach-news/nrl-round-23-late-mail-roosters-sweat-with-james-tedesco-in-doubt-for-bulldogs-clash/news-story/ed64624c53566f667f73bb4ad248feb5`

## Risks / Unfinished

- Disaster recovery pack is local/repo authoritative; Notion is optional shared continuity only.
- Round 23 is a pre-lockout card. Recheck final 24-hour and 90-minute team updates before each game if possible.
- No Round 23 charity bet is locked. Do not add one retrospectively.
- The current top-two plan starts from P5, so fresh ladder gap and leader tips matter more than earlier P3 assumptions.
- Warriors over Panthers is an intentional ladder differential, not a low-risk protect pick.
- Round 18 full final tip count still needs clean score cross-checking before it is published as a final wrap.
- Browser cache may briefly retain an older page; use a cache-busted URL after this Round 23 deploy.

## Recommended Next Steps

- Get a fresh tipping-comp ladder screenshot showing P5, current points and exact gap to 2nd.
- Submit tips before Titans v Cowboys kicks off on Thursday 6 August 2026 at 7:50pm AEST.
- Add a leader-differential column in a future update: likely NourilM tip, likely Kristy W13 tip, recommended `Prince_of_Penrith` action.
- Re-check Round 23 team lists and late mail before any locks.
- Keep charity bets separate from tipping-comp ladder aggression.
- Add GitHub Actions JSON/build validation for resilience.
- Store backup archives outside the repo on an encrypted external or cloud location.
