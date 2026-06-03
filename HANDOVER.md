# NRL TipBot Handover

## Current State

- Repo: `/Users/marcusrummler/Documents/New project/nrl-tipbot`
- Remote: `https://github.com/mrummler17/nrl-tipbot.git`
- Branch: `main`
- Latest deployed commit before this update: `a60cbb9 Record Penrith bet deployment handover`
- Deployment target: GitHub Pages at `https://mrummler17.github.io/nrl-tipbot/`
- Production entry file: `index.html` at repo root, synced from `dist/index.html`
- Generated dist file: `dist/index.html`
- Current version being prepared: Round 14, 2026 preview

## Changed This Session

- Settled Round 13:
  - Tip result: `5 from 7`.
  - Correct tips: Sharks, Knights, Storm, Raiders, Panthers.
  - Missed tips: Bulldogs, Broncos.
  - Charity bet: Penrith Panthers H2H at TAB `$1.62` won 20-18.
  - Stake: `$6.50`.
  - Return: `$10.53`.
  - Profit on Round 13 bet: `$4.03`.
- Updated Mark Hughes Foundation ledger:
  - Record: `3-2`.
  - Invested: `$31.50`.
  - Returned: `$32.03`.
  - Settled profit: `+$0.53`.
- Updated `data/briefing.json` to a Round 14 preview with no new charity bet locked.
- Updated `data/live-round.json` with Round 14 fixtures, tips, sources, alerts, and match notes.
- Updated `README.md` current snapshot and source list.

## Verified So Far

- JSON parse validation passed for `data/briefing.json` and `data/live-round.json`.
- `npm run build` completed successfully.
- Root `index.html` was synced from `dist/index.html`.
- Generated outputs contain Round 14 content, `3-2`, `+$0.53`, `No bet locked`, and `Panthers over Wests Tigers`, with no stale `2-2 + 1 pending` text.
- Local browser QA passed at `http://127.0.0.1:4173/index.html`:
  - Page title rendered as `NRL TipBot Briefing 2026`.
  - Round 14 preview status rendered.
  - Ledger record `3-2` rendered.
  - Profit `+$0.53` rendered.
  - `No bet locked` rendered.
  - Panthers over Wests Tigers tip rendered.
  - Warriors bye copy rendered.
  - Round 13 settled copy rendered.
  - Browser console had 0 errors.
- Captured local QA screenshot at `/private/tmp/nrl-tipbot-round14-qa.png`.

## Must Not Change Casually

- Do not roll the Round 13 `$10.53` collect into a new Round 14 bet without user confirmation.
- Do not change the settled Round 13 Penrith charity win unless an official score or TAB settlement correction is found.
- Charity ledger is now `3-2`, invested `$31.50`, returned `$32.03`, settled profit `+$0.53`.
- Round 14 charity bet status is `No bet locked`.
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
- NRL Team Lists Round 14: `https://www.nrl.com/news/2026/06/02/nrl-team-lists-round-14/`
- NRL Fantasy Team List Analysis Round 14: `https://www.nrl.com/news/2026/06/02/lone-scouts-fantasyteamlistanalysisround14/`
- Round 14 Team Lists and Fixtures: `https://rugbyleaguezone.com/nrl-round-14-team-lists-2026-430190/`
- Sportsbet Round 14 Tips: `https://www.sportsbet.com.au/huddle/nrl/predictions/round-14-tips-2026`
- Round 13 Saturday Results: `https://www.roosters.com.au/news/2026/05/30/match-report--round-13-v-storm/`
- Round 13 Sunday Results: `https://www.nrl.com/news/2026/05/31/sizzling-sunday-broncos-v-dragons-raiders-v-cowboys-panthers-v-warriors/`
- Panthers v Warriors Round 13 final score cross-check: `https://www.zerotackle.com/fulltime-panthers-warriors-round-13-2026-mc10396413-234074/`
- User-confirmed Round 13 TAB price from previous session: Penrith H2H `$1.62`, stake `$6.50`, potential collect `$10.53`.

## Risks / Unfinished

- Commit, push, GitHub Pages build check, and live page check are still required for this Round 14 update.
- Round 14 tips are preview reads only. Final 24-hour and 90-minute team updates can still move the risk profile.
- No Round 14 charity bet is locked. Any bet requires a fresh TAB price and explicit user confirmation.

## Recommended Next Steps

- Commit and push the Round 14 update.
- Confirm GitHub Pages build completes and the live URL serves Round 14 content.
