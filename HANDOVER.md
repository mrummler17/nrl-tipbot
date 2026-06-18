# NRL TipBot Handover

## Current State

- Repo: `/Users/marcusrummler/AI Developer Files/New project/nrl-tipbot`
- Remote: `https://github.com/mrummler17/nrl-tipbot.git`
- Branch: `main`
- Latest Round 16 content commit: `9b40188 Update TipBot for Round 16`
- Deployment target: GitHub Pages at `https://mrummler17.github.io/nrl-tipbot/`
- Production entry file: `index.html` at repo root, synced from `dist/index.html`
- Generated dist file: `dist/index.html`
- Current production-intended version: Round 16, 2026 preview

## Changed This Session

- Updated `data/briefing.json` from Round 15 preview to Round 16 preview.
- Updated `data/live-round.json` with Round 16 fixtures, tips, sources, alerts, and match notes.
- Regenerated `dist/index.html` and `dist/README.md`.
- Synced root `index.html` from `dist/index.html`.
- Updated `README.md` current snapshot and source list.
- Kept the Mark Hughes Foundation ledger unchanged:
  - Record: `3-2`
  - Invested: `$31.50`
  - Returned: `$32.03`
  - Settled profit: `+$0.53`

## Current Published Content To Verify

- Round: Round 16, 2026
- Mode: Preview
- Tip card:
  1. Storm over Raiders
  2. Warriors over Cowboys
  3. Panthers over Titans
  4. Dolphins over Wests Tigers
  5. Bulldogs over Sea Eagles
  6. Roosters over Sharks
  7. Knights over Dragons
- Charity bet status: `No bet locked`
- Charity ledger: `3-2`, `+$0.53`
- Bye teams: Broncos, Eels, Rabbitohs

## Verified So Far

- JSON parse validation passed for `data/briefing.json` and `data/live-round.json`.
- `npm run build` completed successfully.
- Root `index.html` was synced from `dist/index.html`.
- Local browser QA passed at `http://127.0.0.1:4173/index.html`:
  - Page title rendered as `NRL TipBot Briefing 2026`.
  - Round 16 content rendered.
  - Ledger record `3-2` and profit `+$0.53` rendered.
  - `No bet locked` rendered.
  - `Storm over Raiders` and `Warriors over Cowboys` tips rendered.
  - Round 16 bye copy rendered.
  - Browser console had 0 errors.

## Must Not Change Casually

- Do not move the charity ledger without recorded TAB odds, stake, result, and explicit user confirmation.
- Do not roll the Round 13 `$10.53` collect into any new bet by default.
- Round 15 had no locked charity bet, so the ledger remains `3-2`, `$31.50` invested, `$32.03` returned, `+$0.53` profit.
- Round 12 validated 5 from 5 and Round 13 settled 5 from 7 should not be changed without re-checking official NRL scores.
- Round 14 Sharks v Dragons was not used as a final tip-count headline because a clean official-score cross-check was not found.
- Round 15 exact tip count is not published in this update because Eels v Raiders and Wests Tigers v Titans still need clean official-score cross-checks.
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

## Sources Used

- NRL Draw: `https://www.nrl.com/draw`
- NRL teams Round 16: `https://www.dailytelegraph.com.au/sport/nrl/supercoach-news/nrl-teams-round-16-nicho-hynes-blayke-brailey-named-for-remodelled-sharks/news-story/9381912a00d3d4a6388a80d93df87ecd`
- Round 16 team lists: `https://www.news.com.au/sport/nrl/round-16-team-lists-sharks-set-to-receive-double-boost-as-clubs-make-huge-calls-on-origin-stars/news-story/7b31f313ea3768ee076c1df5b6a2bdef`
- Round 16 late mail: `https://www.dailytelegraph.com.au/sport/nrl/supercoach-news/nrl-late-mail-round-16-tony-sukkar-out-to-cement-spot-as-kai-pearcepaul-out-longterm/news-story/fd01c7a3b67db7f285e2683191dce3e0`
- Round 16 early mail: `https://www.dailytelegraph.com.au/sport/nrl/supercoach-news/nrl-early-mail-round-16-key-cronulla-forward-toby-rudolf-sidelined-with-knee-injury/news-story/adbb68c658c26a3f884a689f2188124b`
- Round 16 fixture table: `https://en.wikipedia.org/wiki/2026_NRL_season_results`

## Risks / Unfinished

- GitHub push, GitHub Pages build, and live-page verification are not yet complete.
- Round 16 tips are preview reads only. Final 24-hour and 90-minute team updates can still move the risk profile.
- No Round 16 charity bet is locked. Any bet requires a fresh TAB price and explicit user confirmation.
- Round 15 Eels v Raiders and Wests Tigers v Titans need clean official-score sources before publishing a final Round 15 tip-count headline.

## Recommended Next Steps

- Push the Round 16 content update if QA passes.
- Verify the GitHub Pages build and live site after push.
- Re-check final 24-hour team updates before any charity-bet discussion.
