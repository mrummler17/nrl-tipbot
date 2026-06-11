# NRL TipBot Handover

## Current State

- Repo: `/Users/marcusrummler/AI Developer Files/New project/nrl-tipbot`
- Remote: `https://github.com/mrummler17/nrl-tipbot.git`
- Branch: `main`
- Latest Round 15 content commit: `ca4fe1f Update TipBot for Round 15`
- Deployment target: GitHub Pages at `https://mrummler17.github.io/nrl-tipbot/`
- Production entry file: `index.html` at repo root, synced from `dist/index.html`
- Generated dist file: `dist/index.html`
- Current production-intended version: Round 15, 2026 preview

## Changed This Session

- Updated `data/briefing.json` from Round 14 preview to Round 15 preview.
- Updated `data/live-round.json` with Round 15 fixtures, tips, sources, alerts, and match notes.
- Regenerated `dist/index.html` and `dist/README.md`.
- Synced root `index.html` from `dist/index.html`.
- Updated `README.md` current snapshot and source list.
- Kept the Mark Hughes Foundation ledger unchanged:
  - Record: `3-2`
  - Invested: `$31.50`
  - Returned: `$32.03`
  - Settled profit: `+$0.53`

## Current Published Content To Verify

- Round: Round 15, 2026
- Mode: Preview
- Tip card:
  1. Warriors over Sharks
  2. Dolphins over Roosters
  3. Raiders over Eels
  4. Titans over Wests Tigers
  5. Rabbitohs over Broncos
- Charity bet status: `No bet locked`
- Charity ledger: `3-2`, `+$0.53`
- Bye teams: Bulldogs, Sea Eagles, Storm, Knights, Cowboys, Panthers, Dragons

## Verified So Far

- JSON parse validation passed for `data/briefing.json` and `data/live-round.json`.
- `npm run build` completed successfully.
- Root `index.html` was synced from `dist/index.html`.
- Local browser QA passed at `http://127.0.0.1:4173/index.html`:
  - Page title rendered as `NRL TipBot Briefing 2026`.
  - Round 15 content rendered.
  - Ledger record `3-2` and profit `+$0.53` rendered.
  - `No bet locked` rendered.
  - `Warriors over Sharks` and `Dolphins over Roosters` tips rendered.
  - Round 15 bye copy rendered.
  - Browser console had 0 errors.

## Must Not Change Casually

- Do not move the charity ledger without recorded TAB odds, stake, result, and explicit user confirmation.
- Do not roll the Round 13 `$10.53` collect into any new bet by default.
- Round 14 had no locked charity bet, so the ledger remains `3-2`, `$31.50` invested, `$32.03` returned, `+$0.53` profit.
- Round 12 validated 5 from 5 and Round 13 settled 5 from 7 should not be changed without re-checking official NRL scores.
- The Round 14 Sharks v Dragons result was not used as a final tip-count headline in this update because a clean official-score cross-check was not found during the session.
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
- NRL teams Round 15: `https://www.dailytelegraph.com.au/sport/nrl/supercoach-news/nrl-teams-round-15-nicho-hynes-races-clock-rookies-galore-as-origin-stars-out/news-story/ffd093cbbf3f5afd347528a753944b60`
- Round 15 team lists: `https://www.news.com.au/sport/nrl/round-15-team-lists-souths-name-jai-arrow-in-touching-act-as-ezra-mam-remains-on-the-broncos-bench/news-story/7351f114ebb128e84079d20c148782c2`
- Round 15 early mail: `https://www.dailytelegraph.com.au/sport/nrl/supercoach-news/nrl-round-15-early-mail-surprise-origin-selections-rip-apart-teams-jaydn-sua-pec-injury/news-story/ef33cae0fcc52940d02dedbfb5c03d39`
- Round 14 Manly result: `https://www.dailytelegraph.com.au/sport/nrl/nrl-round-14-manly-sea-eagles-win-2814-over-south-sydney-rabbitohs/news-story/a2cb34925bb2f5db7ac913acc9ded47d`
- Round 14 Storm result: `https://www.dailytelegraph.com.au/sport/nrl/nrl-round-14-phoenix-crossland-taken-to-hospital-in-knights-v-storm-clash/news-story/a7de6d131fc490e9c6cbceab3e1921ce`
- Round 14 Roosters result: `https://www.dailytelegraph.com.au/sport/nrl/nrl-round-14-sydney-roosters-win-260-over-canberra-raiders/news-story/60545427a9c3f952ad385c7fd90836e8`
- Round 14 Dolphins result: `https://www.dailytelegraph.com.au/sport/nrl/nrl-round-14-dolphins-win-4014-over-north-queensland-cowboys/news-story/7227bdb3e8f92f46700006719513c119`
- Round 14 Titans result: `https://www.couriermail.com.au/sport/nrl/nrl-round-14-keano-kini-steals-victory-as-gold-coast-titans-win-2823-over-brisbane-broncos/news-story/db3b0bb3d1d5f09b73358319fc9af389`
- Round 14 Panthers review: `https://www.dailytelegraph.com.au/sport/nrl/the-tackle-why-the-bunker-must-be-given-more-power-after-play-the-ball-howlers/news-story/e98a9d9058e8b430cb5f90e3227e9d49`
- Round 14 Bulldogs result: `https://www.dailytelegraph.com.au/sport/bulldogs-snatch-thrilling-win-over-eels-after-controversial-late-penalty-call/news-story/dff262036f2d60496208983999d71a64`

## Risks / Unfinished

- GitHub push, GitHub Pages build, and live-page verification are not yet complete.
- Round 15 tips are preview reads only. Final 24-hour and 90-minute team updates can still move the risk profile.
- No Round 15 charity bet is locked. Any bet requires a fresh TAB price and explicit user confirmation.
- Sharks v Dragons Round 14 needs a clean official-score source before publishing a final Round 14 tip-count headline.

## Recommended Next Steps

- Run local browser QA against `index.html`.
- Push the Round 15 content update if QA passes.
- Verify the GitHub Pages build and live site after push.
- Re-check final 24-hour team updates before any charity-bet discussion.
