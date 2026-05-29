# NRL TipBot Handover

## Current State

- Repo: `/Users/marcusrummler/Documents/New project/nrl-tipbot`
- Remote: `https://github.com/mrummler17/nrl-tipbot.git`
- Branch: `main`
- Latest deployed Round 13 content commit: `3a9c5d1 Update TipBot for Round 13`
- Deployment target: GitHub Pages at `https://mrummler17.github.io/nrl-tipbot/`
- Production entry file: `index.html` at repo root, synced from `dist/index.html`
- Generated dist file: `dist/index.html`
- Current production version: Round 13, 2026 preview

## Changed This Session

- Updated `data/briefing.json` from the Round 12 wrap to a Round 13 preview board.
- Updated `data/live-round.json` with Round 13 fixtures, tips, late-mail notes, sources, and live alerts.
- Kept the Mark Hughes Foundation ledger unchanged at `2-2`, `$25.00` invested, `$21.50` returned, `-$3.50` profit.
- Marked the Round 13 charity bet as not locked; `Knights H2H` is shortlist only and has no recorded odds or stake.
- Regenerated `dist/index.html` and `dist/README.md` with `npm run build`.
- Synced `dist/index.html` to root `index.html` for GitHub Pages.
- Updated `README.md` current snapshot and source list for Round 13.
- Captured local QA screenshot at `/private/tmp/nrl-tipbot-round13-qa.png`.

## Verified

- JSON parse validation passed for `data/briefing.json` and `data/live-round.json`.
- `npm run build` completed successfully.
- Root `index.html` was synced from `dist/index.html`.
- Local browser QA passed at `http://127.0.0.1:4173/index.html`:
  - Page title rendered as `NRL TipBot Briefing 2026`.
  - Round 13 preview content rendered.
  - `Shortlist only: Knights H2H` rendered.
  - `No bet locked` rendered.
  - Ledger values `2-2` and `-$3.50` rendered.
  - Round 12 guard copy rendered.
  - Browser console had 0 errors.
- GitHub Pages build for `3a9c5d19cf258265033bcad07cce28eaecc6c149` completed successfully.
- Live page responded at `https://mrummler17.github.io/nrl-tipbot/` and served the Round 13 generated HTML.
- Round 12 remains validated through official NRL results:
  - Dolphins over Raiders: won 30-22.
  - Bulldogs over Storm: won 30-20.
  - Warriors over Dragons: won 30-12.
  - Sea Eagles over Titans: won 12-10.
  - Cowboys over Rabbitohs: won 30-18.

## Must Not Change Casually

- Do not convert `Knights H2H` from shortlist to charity bet without recorded odds, stake, and final team confirmation before kickoff.
- Charity ledger remains `2-2`, invested `$25.00`, returned `$21.50`, profit `-$3.50`.
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
- NRL Team Lists Round 13: `https://www.nrl.com/news/2026/05/26/nrl-team-lists-round-13/`
- NRL Late Mail Round 13: `https://www.nrl.com/news/2026/05/28/nrl-late-mail-round-13---haas-primed-haumole-rested/`
- NRL Expert Tipping Round 13: `https://www.nrl.com/news/2026/05/29/expert-tipping-nrl-round-13/`

## Risks / Unfinished

- Round 13 is still pre-match/live-week content. Re-check 24-hour and 90-minute team updates before kickoff, especially for Origin back-up decisions.
- `Knights H2H` is only a shortlist note; no bet has been placed or priced in the app.
- Deployment for the Round 13 content commit has been verified. Re-check the live page if a later handover-only commit triggers another Pages build.

## Recommended Next Steps

- After Round 13, update results carefully and keep the Round 12 validated 5 from 5 history intact.
- Before any charity bet is recorded, add the actual price, stake, and final team confirmation source.
