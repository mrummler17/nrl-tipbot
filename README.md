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
- Mode: live tracker and ladder-chase strategy
- Tipping comp handle: `Prince_of_Penrith`
- Ladder target: 3rd on 194 points, 5 points behind 2nd from the supplied Round 19 screenshot
- Tip card: 3 correct, 4 missed after a user-reported Storm win over the Titans
- Charity bet status: no Round 19 bet locked
- Charity ledger: 3-2, $31.50 invested, $32.03 returned, +$0.53 profit
- Validation rule: do not move the charity ledger without recorded TAB odds, stake, result, and user confirmation

Round 19 tracker:

1. Warriors over Wests Tigers - correct, Warriors 32 def Wests Tigers 6
2. Sharks over Dolphins - correct, Sharks 66 def Dolphins 0
3. Bulldogs over Raiders - missed, Raiders 40 def Bulldogs 16
4. Eels over Roosters - missed, Roosters 28 def Eels 12
5. Knights over Rabbitohs - missed, Rabbitohs 26 def Knights 24
6. Sea Eagles over Cowboys - missed, Cowboys 19 def Sea Eagles 18 in golden point
7. Storm over Titans - correct from user-reported final result; exact score pending official cross-check

Round 19 notes:

- The board now prioritises getting `Prince_of_Penrith` to 2nd before finals without reckless full-card chasing.
- A 5-point swing is the immediate target; 1st place is a longer chase and should not distort weekly risk.
- Use one or two controlled differentials per full round after modelling likely leader tips.
- Use betting-market favourites each week as a proxy for safe leader picks; NourilM and Kristy W13 are likely to protect position by backing favourites.
- Classify every game as favourite match, controlled split, or avoid before lockout.
- No Round 19 charity bet was locked, so the Mark Hughes Foundation ledger stays unchanged regardless of tipping-comp outcomes.
- Storm v Titans exact score still needs official confirmation before publishing the final score line.

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
- Treat market prices as tipping-comp intelligence first, not as permission to place a bet.
- Do not retrospectively count an unplaced lean as a charity bet.
- Keep the Mark Hughes Foundation ledger factual and conservative.
- Re-check official NRL sources before publishing a round preview, wrap, or result correction.
- Keep `HANDOVER.md` current before risky changes, deploys, or long context-heavy sessions.

## Sources

Recent Round 19 updates used:

- NRL Live Round 19: https://www.nrl.com/news/2026/07/12/nrl-live-round-19-rabbitohs-v-knights-sea-eagles-v-cowboys-storm-v-titans/
- NRL Late Mail Round 19: https://www.nrl.com/news/2026/07/09/nrl-late-mail-round-19-all-eyes-on-origin-stars-deardon-eyes-return/
- NRL Team Lists Round 19: https://www.nrl.com/news/2026/07/07/nrl-team-lists-round-19/
- Round 19 results cross-check: https://en.wikipedia.org/wiki/2026_NRL_season_results

## License

Private personal project unless a license is added.
