# NRL TipBot Handover

## Current State

- Repo: `/Users/marcusrummler/AI Developer Files/New project/nrl-tipbot`
- Remote: `https://github.com/mrummler17/nrl-tipbot.git`
- Branch: `main`
- Latest commit before Round 17 work: `7da52a8 Record Round 16 deployment verification`
- Deployment target: GitHub Pages at `https://mrummler17.github.io/nrl-tipbot/`
- Production entry file: `index.html` at repo root, synced from `dist/index.html`
- Generated dist file: `dist/index.html`
- Current production-intended version: Round 17, 2026 preview

## Changed This Session

- Updated `data/briefing.json` from Round 16 preview to Round 17 preview.
- Updated `data/live-round.json` with Round 17 fixtures, tips, sources, alerts, and match notes.
- Updated `README.md` with the Round 17 snapshot, source list, and Round 16 result-note caution.
- Kept the Mark Hughes Foundation ledger unchanged:
  - Record: `3-2`
  - Invested: `$31.50`
  - Returned: `$32.03`
  - Settled profit: `+$0.53`

## Current Published Content To Verify

- Round: Round 17, 2026
- Mode: Preview
- Tip card:
  1. Panthers over Cowboys
  2. Roosters over Broncos
  3. Raiders over Dragons
  4. Dolphins over Warriors
  5. Knights over Wests Tigers
  6. Bulldogs over Titans
  7. Storm over Sea Eagles
  8. Rabbitohs over Eels
- Charity bet status: `No bet locked`
- Charity ledger: `3-2`, `+$0.53`
- Bye team: Sharks
- Strongest raw read: Panthers over Cowboys
- Price-watch only: Panthers H2H, Roosters H2H, Dolphins H2H

## Verified So Far

- JSON parse validation passed for `data/briefing.json` and `data/live-round.json`.
- `npm run build` completed successfully.
- Root `index.html` was synced from `dist/index.html`.
- Current source checks were performed on Wednesday 24 June 2026.
- NRL Draw page is presenting Round 17, 2026.
- Daily Telegraph Round 17 team-list and late-mail reports are current for this update.
- Local browser QA passed at `http://127.0.0.1:4173/index.html`:
  - Page title rendered as `NRL TipBot Briefing 2026`.
  - Round 17 content rendered.
  - Ledger record `3-2` and profit `+$0.53` rendered.
  - `No bet locked` rendered.
  - `Panthers over Cowboys` and `Roosters over Broncos` tips rendered.
  - Sharks bye copy rendered.
  - Browser console had 0 errors.

## Must Not Change Casually

- Do not move the charity ledger without recorded TAB odds, stake, result, and explicit user confirmation.
- Do not record any Round 17 price-watch candidate as a charity bet without a fresh TAB price and user confirmation.
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
- Round 17 fixture table: `https://en.wikipedia.org/wiki/2026_NRL_season_results`
- Round 16 result, Knights 22-20 Dragons: `https://www.dailytelegraph.com.au/sport/nrl/nrl-round-16-heartbreak-for-saints-as-knights-win-2220-over-dragons/news-story/8e1bead5870457b0bdc55ef5202ecea6`
- Round 16 result, Dolphins 36-22 Wests Tigers: `https://www.dailytelegraph.com.au/sport/nrl/nrl-round-16-dolphins-win-3622-over-wests-tigers/news-story/d60954cfd473bc75fde5d600770a32d6`
- Round 16 result, Titans 19-18 Panthers: `https://www.dailytelegraph.com.au/sport/nrl/nrl-round-16-zane-harrison-stars-as-gold-coast-titans-win-1918-over-penrith-panthers/news-story/910997d676a77a79f5639ed1a5b30bdb`
- Round 16 result, Bulldogs 13-12 Sea Eagles: `https://www.dailytelegraph.com.au/sport/nrl/nrl-round-16-bulldogs-win-1312-over-manly-sea-eagles-in-golden-point-thriller/news-story/49d7af9e7585233397fb8c8ba8d81959`

## Risks / Unfinished

- Round 17 tips are preview reads only. Final 24-hour and 90-minute team updates can still move the risk profile.
- No Round 17 charity bet is locked. Any bet requires a fresh TAB price and explicit user confirmation.
- Round 16 Sunday games need clean official-score sources before publishing a final Round 16 tip-count headline.
- Commit, push, Pages build check, and live-site verification still need to be completed for the Round 17 update.

## Recommended Next Steps

- Commit and push to GitHub.
- Check GitHub Pages build status and live page content.
- Re-check final 24-hour team updates before any charity-bet discussion.
