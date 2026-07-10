# NRL TipBot Handover

## Current State

- Repo: `/Users/marcusrummler/AI Developer Files/New project/nrl-tipbot`
- Remote: `https://github.com/mrummler17/nrl-tipbot.git`
- Branch: `main`
- Latest known commit before this Round 19 update: `39e5fff Record Round 18 deployment handover`
- Latest Round 19 content commit: `c40c172 Update TipBot for Round 19`
- Latest commit before disaster recovery work: `a654fb6 Record Round 19 deployment handover`
- Latest disaster recovery pack commit: `b060a0c Add disaster recovery pack`
- Deployment target: GitHub Pages at `https://mrummler17.github.io/nrl-tipbot/`
- Production entry file: `index.html` at repo root, synced from `dist/index.html`
- Generated dist file: `dist/index.html`
- Current production version: Round 19, 2026 preview

## Changed This Session

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
- NRL Team Lists Round 19: `https://www.nrl.com/news/2026/07/07/nrl-team-lists-round-19/`
- Round 19 fixture table: `https://en.wikipedia.org/wiki/2026_NRL_season_results`

## Risks / Unfinished

- Disaster recovery pack is local/repo authoritative; Notion was updated as optional shared continuity only.
- Round 19 is currently a preview, not a result tracker.
- No Round 19 charity bet is locked. Any future bet requires a fresh TAB price and explicit user confirmation.
- Storm and Sharks are price-watch candidates only.
- Origin back-up calls can still materially alter Dolphins v Sharks, Bulldogs v Raiders, Roosters v Eels, Rabbitohs v Knights, Sea Eagles v Cowboys and Storm v Titans.
- Round 18 full final tip count still needs clean score cross-checking before it is published as a final wrap.
- Browser cache may briefly retain the previous Round 18 page; a hard refresh or cache-busted URL showed the Round 19 production page correctly.

## Recommended Next Steps

- Re-check final team cuts before kickoff, especially Tigers v Warriors and Dolphins v Sharks.
- Only convert Storm or Sharks from price watch to charity bet if fresh odds, stake and explicit user confirmation are recorded before kickoff.
- Add GitHub Actions JSON/build validation for resilience.
- Store backup archives outside the repo on an encrypted external or cloud location.
