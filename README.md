# NRL TipBot

Codex-managed NRL tipping dashboard with weekly verified round notes, charity bet tracking, and static GitHub Pages deployment.

Live site: https://mrummler17.github.io/nrl-tipbot/

## What It Does

NRL TipBot is a static weekly command board for:

- NRL round previews, wraps, and tip confidence
- Official-source team news and late-mail notes
- Charity betting discipline and ledger tracking
- A compact live-round tracker for results and validation notes
- GitHub Pages publishing from a generated `index.html`

The app started as a single prototype file and now keeps content, live round data, and presentation separated so weekly updates are easier to review.

## Current Snapshot

- Round: Round 19, 2026
- Tip card: seven-game Round 19 preview
- Charity bet status: no Round 19 bet locked
- Charity ledger: 3-2, $31.50 invested, $32.03 returned, +$0.53 profit
- Validation rule: do not move the charity ledger without recorded TAB odds, stake, result, and user confirmation

Round 19 tips:

1. Storm over Titans - best raw edge with Hughes, Meaney and Howarth returning
2. Sharks over Dolphins - Dolphins lose Bostock and still have Origin availability calls
3. Warriors over Wests Tigers - Tigers lose Api Koroisau while Warriors regain James Fisher-Harris and Leka Halasima
4. Knights over Rabbitohs - Ponga and Bradman Best are expected to back up while Souths lose Cody Walker
5. Sea Eagles over Cowboys - Manly home lean with Trbojevic, Fogarty and Olakau'atu
6. Bulldogs over Raiders - home lean only, with several Origin/injury watch points
7. Eels over Roosters - upset lean with Tedesco set to miss and Moses expected to back up

Round 19 notes:

- This is a post-Origin round, so late mail and final cut-downs matter.
- Storm and Sharks are price-watch candidates only; no stake or price is locked.
- James Tedesco and Jack Bostock are set to miss after Origin head knocks.
- Warriors lose Mitchell Barnett and Kurt Capewell, but regain James Fisher-Harris, Leka Halasima and Alofiana Khan-Pereira.
- Byes: Broncos, Panthers and Dragons.

Round 18 notes carried forward:

- No Round 18 charity bet was locked, so the Mark Hughes Foundation ledger stayed unchanged.
- Round 18 should not be published as a final tip-count wrap without clean result cross-checking.

Round 12 remains validated as a 5 from 5 result and must not be changed without re-checking official NRL scores.

## Project Structure

```text
.
|-- data/
|   |-- briefing.json      # Main dashboard content, charity ledger, sections, and narrative
|   `-- live-round.json    # Current round tracker, sources, alerts, and results
|-- dist/
|   |-- index.html         # Generated dashboard output
|   `-- README.md          # Generated text summary
|-- generate.js            # Static generator
|-- index.html             # GitHub Pages entry file, synced from dist/index.html
|-- HANDOVER.md            # Continuity notes for future sessions
|-- package.json
`-- README.md
```

## Update Workflow

1. Edit `data/briefing.json` for the durable board content.
2. Edit `data/live-round.json` for current round status, sources, alerts, and results.
3. Validate the JSON:

   ```bash
   node -e 'JSON.parse(require("fs").readFileSync("data/briefing.json","utf8")); JSON.parse(require("fs").readFileSync("data/live-round.json","utf8")); console.log("json ok")'
   ```

4. Build the static output:

   ```bash
   npm run build
   ```

5. Sync the generated page to the GitHub Pages entry file:

   ```bash
   cp dist/index.html index.html
   ```

6. Check the result locally, then commit and push `main`.

## Development Commands

```bash
npm run build     # Generate dist/index.html and dist/README.md
npm run sync      # Alias for the same generator
npm run snapshot  # Alias for the same generator
```

Optional local preview:

```bash
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173/index.html`.

## Deployment

GitHub Pages serves the root `index.html`, not `dist/index.html`.

Always run the build and copy `dist/index.html` to `index.html` before pushing. A successful push to `main` should trigger the Pages build for:

https://mrummler17.github.io/nrl-tipbot/

## Data Discipline

- Treat NRL tips and charity bets as separate records.
- Do not retrospectively count an unplaced lean as a charity bet.
- Keep the Mark Hughes Foundation ledger factual and conservative.
- Re-check official NRL sources before publishing a round preview, wrap, or result correction.
- Keep `HANDOVER.md` current before risky changes, deploys, or long context-heavy sessions.

## Sources

Recent Round 19 updates used:

- NRL Late Mail Round 19: https://www.nrl.com/news/2026/07/09/nrl-late-mail-round-19-all-eyes-on-origin-stars-deardon-eyes-return/
- NRL Team Lists Round 19: https://www.nrl.com/news/2026/07/07/nrl-team-lists-round-19/
- Round 19 fixture table: https://en.wikipedia.org/wiki/2026_NRL_season_results

## License

Private personal project unless a license is added.
