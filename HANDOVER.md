# NRL TipBot Handover

## Current State

- Repo: `/Users/marcusrummler/Documents/New project/nrl-tipbot`
- Remote: `https://github.com/mrummler17/nrl-tipbot.git`
- Branch: `main`
- Latest commit: `1e12570 Wrap TipBot Round 12 results`
- Deployment target: GitHub Pages at `https://mrummler17.github.io/nrl-tipbot/`
- Production entry file: `index.html` at repo root, synced from `dist/index.html`
- Generated dist file: `dist/index.html`
- GitHub repo About metadata:
  - Description: `Codex-managed NRL tipping dashboard with weekly verified round notes, charity bet tracking, and static GitHub Pages deployment.`
  - Website: `https://mrummler17.github.io/nrl-tipbot/`
  - Topics: `nrl`, `tipping`, `github-pages`, `static-site`, `sports-dashboard`

## Changed This Session

- Updated `data/briefing.json` from Round 12 preview/setup to Round 12 wrap.
- Updated `data/live-round.json` to verified Round 12 results.
- Regenerated `dist/index.html` and `dist/README.md` with `npm run build`.
- Synced `dist/index.html` to root `index.html` for GitHub Pages.
- Added this `HANDOVER.md`.
- Updated GitHub repo About metadata with description, website URL, and topics.

## Verified

- JSON parse validation passed for `data/briefing.json` and `data/live-round.json`.
- `npm run build` completed successfully.
- Root `index.html` was synced from `dist/index.html`.
- Local browser QA passed at `http://127.0.0.1:4173/index.html`: page title rendered, 5/5 result rendered, Cowboys 30-18 rendered, no-bet copy rendered, ledger values rendered, and browser console had 0 errors.
- GitHub Pages build for `1e12570` completed successfully.
- Live page responded at `https://mrummler17.github.io/nrl-tipbot/`.
- GitHub repo About metadata was updated through `gh repo edit`.
- Round 12 tips are marked validated through official NRL results:
  - Dolphins over Raiders: won 30-22.
  - Bulldogs over Storm: won 30-20.
  - Warriors over Dragons: won 30-12.
  - Sea Eagles over Titans: won 12-10.
  - Cowboys over Rabbitohs: won 30-18.

## Must Not Change Casually

- Do not convert the Bulldogs shortlist/read into a charity bet result. No Round 12 charity bet was locked.
- Charity ledger remains `2-2`, invested `$25.00`, returned `$21.50`, profit `-$3.50`.
- The validated Round 12 5 from 5 tip result should not be changed without re-checking official NRL scores.
- Keep `index.html` synced with `dist/index.html` before deploy because GitHub Pages serves the root entry.

## Important Files

- `data/briefing.json`: Durable dashboard content, charity ledger, feature panels, and round narrative.
- `data/live-round.json`: Current verified round tracker, sources, results, and live alerts.
- `generate.js`: Static generator that merges briefing data and live round data.
- `dist/index.html`: Generated dashboard.
- `index.html`: Public GitHub Pages entry file.
- `dist/README.md`: Generated text summary.

## Commands

- Validate JSON:
  `node -e 'JSON.parse(require("fs").readFileSync("data/briefing.json","utf8")); JSON.parse(require("fs").readFileSync("data/live-round.json","utf8")); console.log("json ok")'`
- Build:
  `npm run build`
- Sync public entry:
  `cp dist/index.html index.html`
- Check repo:
  `git status --short --branch`

## Sources Used

- NRL Draw: `https://www.nrl.com/draw`
- NRL Team Lists Round 12: `https://www.nrl.com/news/2026/05/19/nrl-team-lists-round-12/`
- NRL Late Mail Round 12: `https://www.nrl.com/news/2026/05/20/nrl-late-mail-round-12-farnworth-drops-out-kiraz-back-in/`
- NRL live blog snippets confirmed final scores for Raiders-Dolphins, Bulldogs-Storm, Dragons-Warriors, Sea Eagles-Titans, and Cowboys-Rabbitohs.

## Risks / Unfinished

- `HANDOVER.md` has a local metadata-note update after the `1e12570` deployment commit. Commit and push it if you want the handover note preserved remotely.

## Recommended Next Steps

- Commit and push the latest `HANDOVER.md` note if desired.
- For the next weekly update, edit `data/briefing.json` and `data/live-round.json`, run `npm run build`, sync `dist/index.html` to `index.html`, verify locally, commit, and push `main`.
