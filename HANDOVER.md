# NRL TipBot Handover

## Current State

- Repo: `/Users/marcusrummler/AI Developer Files/New project/nrl-tipbot`
- Remote: `https://github.com/mrummler17/nrl-tipbot.git`
- Branch: `main`
- Latest Round 17 content commit: `7dd0b10 Update TipBot for Round 17`
- Latest Round 17 handover commit: `454c5b3 Record Round 17 deployment handover`
- Deployment target: GitHub Pages at `https://mrummler17.github.io/nrl-tipbot/`
- Production entry file: `index.html` at repo root, synced from `dist/index.html`
- Generated dist file: `dist/index.html`
- Current production-intended version: Round 17, 2026 partial result tracker

## Changed This Session

- Updated `data/briefing.json` from Round 17 preview to Round 17 partial result tracking.
- Updated `data/live-round.json` with verified Rabbitohs/Bulldogs results and user-reported Panthers/Storm misses.
- Updated `README.md` with the partial Round 17 tracker, source list, and ledger caution.
- Kept the Mark Hughes Foundation ledger unchanged:
  - Record: `3-2`
  - Invested: `$31.50`
  - Returned: `$32.03`
  - Settled profit: `+$0.53`

## Current Published Content To Verify

- Round: Round 17, 2026
- Mode: Partial result tracking
- Tip card status:
  1. Rabbitohs over Eels - correct, Rabbitohs 32 def Eels 12
  2. Bulldogs over Titans - correct, Bulldogs 30 def Titans 12
  3. Panthers over Cowboys - missed, exact score pending clean cross-check
  4. Storm over Sea Eagles - missed, exact score pending clean cross-check
  5. Roosters over Broncos - pending clean result check
  6. Dolphins over Warriors - pending clean result check
  7. Raiders over Dragons - Sunday pending
  8. Knights over Wests Tigers - Sunday pending
- Charity bet status: `No bet locked`
- Charity ledger: `3-2`, `+$0.53`
- Bye team: Sharks
- User reported external slip losses on Panthers and Storm.
- External slip losses do not move the charity ledger because no Round 17 charity bet was locked.

## Verified So Far

- JSON parse validation passed for `data/briefing.json` and `data/live-round.json`.
- `npm run build` completed successfully.
- Root `index.html` was synced from `dist/index.html`.
- Current source checks were performed on Wednesday 24 June 2026.
- NRL Draw page is presenting Round 17, 2026.
- Daily Telegraph Round 17 team-list and late-mail reports are current for this update.
- Wikipedia result table verified Rabbitohs 32 def Eels 12 and Bulldogs 30 def Titans 12.
- User reported Panthers and Storm losses; exact scores still require clean public cross-checks.
- Local browser QA passed at `http://127.0.0.1:4173/index.html` after the partial result-tracker update:
  - `Round 17 result tracking` rendered.
  - `2-2 known` rendered.
  - `Rabbitohs 32 def Eels 12` and `Bulldogs 30 def Titans 12` rendered.
  - `Panthers over Cowboys - missed` and `Storm over Sea Eagles - missed` rendered.
  - `external slip damage`, ledger record `3-2`, and profit `+$0.53` rendered.
  - Browser console had 0 errors.
- Round 17 partial tracker commit created and pushed:
  - `d64ba94 Track Round 17 tip results`
- GitHub Pages build for `d64ba947173bb4780de698c3c6810bbe3b12b48d` completed successfully:
  - Build status: `built`
  - Created at `2026-06-27T12:27:24Z`
  - Updated at `2026-06-27T12:27:41Z`
- Live page responded at `https://mrummler17.github.io/nrl-tipbot/` and served the Round 17 result-tracker HTML.
- Production browser QA passed with cache-busted URL `https://mrummler17.github.io/nrl-tipbot/?v=round17-results-d64ba94`:
  - `Round 17 result tracking` rendered.
  - `2-2 known` rendered.
  - `Rabbitohs 32 def Eels 12` and `Bulldogs 30 def Titans 12` rendered.
  - `Panthers over Cowboys - missed` and `Storm over Sea Eagles - missed` rendered.
  - `external slip damage`, ledger record `3-2`, and profit `+$0.53` rendered.
  - Browser console had 0 errors.
- Local browser QA passed at `http://127.0.0.1:4173/index.html`:
  - Page title rendered as `NRL TipBot Briefing 2026`.
  - Round 17 content rendered.
  - Ledger record `3-2` and profit `+$0.53` rendered.
  - `No bet locked` rendered.
  - `Panthers over Cowboys` and `Roosters over Broncos` tips rendered.
  - Sharks bye copy rendered.
  - Browser console had 0 errors.
- Round 17 content commit created:
  - `7dd0b10 Update TipBot for Round 17`
- Pushed `main` to GitHub with:
  - `7dd0b10 Update TipBot for Round 17`
  - `454c5b3 Record Round 17 deployment handover`
- GitHub Pages build for `454c5b35f2d562d9d8806a78f9d659a9f4bfea3e` completed successfully after one clean rebuild:
  - First automatic/manual overlapping builds produced cancelled/failed deployment statuses.
  - Clean rebuild created at `2026-06-24T14:02:11Z` finished with status `built` at `2026-06-24T14:02:30Z`.
- Live page responded at `https://mrummler17.github.io/nrl-tipbot/` and served Round 17 HTML, including the Round 17 meta description.
- Production browser QA passed with cache-busted URL `https://mrummler17.github.io/nrl-tipbot/?v=round17-454c5b3`:
  - Round 17 content rendered.
  - Ledger record `3-2` and profit `+$0.53` rendered.
  - `No bet locked` rendered.
  - `Panthers over Cowboys` and `Roosters over Broncos` rendered.
  - Sharks bye copy rendered.
  - Browser console had 0 errors.

## Must Not Change Casually

- Do not move the charity ledger without recorded TAB odds, stake, result, and explicit user confirmation.
- Do not record any Round 17 price-watch candidate as a charity bet without a fresh TAB price and user confirmation.
- Do not move the ledger for the user's external all-tips slip; it was not recorded as a charity bet before kickoff.
- Do not roll the Round 13 `$10.53` collect into any new bet by default.
- Round 16 had no locked charity bet, so the ledger remains `3-2`, `$31.50` invested, `$32.03` returned, `+$0.53` profit.
- Round 12 validated 5 from 5 and Round 13 settled 5 from 7 should not be changed without re-checking official NRL scores.
- Do not publish a final Round 16 tip-count headline until the Sunday Round 16 games have clean official-score cross-checks.
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

- NRL Draw: `https://www.nrl.com/draw`
- NRL teams Round 17: `https://www.dailytelegraph.com.au/sport/nrl/supercoach-news/nrl-teams-round-17-jackson-ford-ruled-out-for-1012-weeks-with-pectoral-injury/news-story/44bfb71903f585a72d4c6d518b1c5a02`
- Round 17 late mail: `https://www.dailytelegraph.com.au/sport/nrl/supercoach-news/nrl-late-mail-round-17-alex-twal-trains-with-rehab-group-samuela-fainu-eyes-early-return/news-story/f57d09280ff63aeb741b681b1e99f8e4`
- Round 17 result and fixture table: `https://en.wikipedia.org/wiki/2026_NRL_season_results`
- Round 17 live scores and updates: `https://www.dailytelegraph.com.au/sport/nrl/nrl-live-scores-and-updates-every-saturday-fixture-plus-news-from-around-the-grounds/news-story/ac58d7f3abf73cdebeb0380a357e9622`
- Round 16 result, Knights 22-20 Dragons: `https://www.dailytelegraph.com.au/sport/nrl/nrl-round-16-heartbreak-for-saints-as-knights-win-2220-over-dragons/news-story/8e1bead5870457b0bdc55ef5202ecea6`
- Round 16 result, Dolphins 36-22 Wests Tigers: `https://www.dailytelegraph.com.au/sport/nrl/nrl-round-16-dolphins-win-3622-over-wests-tigers/news-story/d60954cfd473bc75fde5d600770a32d6`
- Round 16 result, Titans 19-18 Panthers: `https://www.dailytelegraph.com.au/sport/nrl/nrl-round-16-zane-harrison-stars-as-gold-coast-titans-win-1918-over-penrith-panthers/news-story/910997d676a77a79f5639ed1a5b30bdb`
- Round 16 result, Bulldogs 13-12 Sea Eagles: `https://www.dailytelegraph.com.au/sport/nrl/nrl-round-16-bulldogs-win-1312-over-manly-sea-eagles-in-golden-point-thriller/news-story/49d7af9e7585233397fb8c8ba8d81959`

## Risks / Unfinished

- Round 17 is a partial result tracker, not a final wrap.
- No Round 17 charity bet was locked. Any future bet requires a fresh TAB price and explicit user confirmation.
- Panthers and Storm exact scores still need clean public cross-checks.
- Broncos v Roosters and Dolphins v Warriors still need clean result checks.
- Sunday games remain pending.
- Round 16 Sunday games need clean official-score sources before publishing a final Round 16 tip-count headline.
- No deployment work is currently unfinished.
- Browser cache may retain the previous Round 16 page briefly; a hard refresh or cache-busted URL showed the Round 17 production page correctly.

## Recommended Next Steps

- Re-check and finalise Round 17 results after Sunday games before publishing a final Round 17 tip count.
