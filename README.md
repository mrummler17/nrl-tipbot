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

- Round: Round 14, 2026
- Tip card: eight-game preview
- Charity bet status: no Round 14 bet locked
- Charity ledger: 3-2, $31.50 invested, $32.03 returned, +$0.53 profit
- Validation rule: do not roll the Round 13 collect into a new Round 14 charity bet without recorded TAB odds, stake, and user confirmation

Round 14 tips currently published:

1. Panthers over Wests Tigers
2. Sharks over Dragons
3. Broncos over Titans
4. Sea Eagles over Rabbitohs
5. Roosters over Raiders
6. Storm over Knights
7. Dolphins over Cowboys
8. Bulldogs over Eels

Round 13 is settled:

- Tip result: 5 from 7
- Charity bet: Penrith Panthers H2H at TAB $1.62 won 20-18, returning $10.53 from a $6.50 stake

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

Recent Round 14 updates used:

- NRL Draw: https://www.nrl.com/draw
- NRL Team Lists Round 14: https://www.nrl.com/news/2026/06/02/nrl-team-lists-round-14/
- NRL Fantasy Team List Analysis Round 14: https://www.nrl.com/news/2026/06/02/lone-scouts-fantasyteamlistanalysisround14/
- Round 14 Team Lists and Fixtures: https://rugbyleaguezone.com/nrl-round-14-team-lists-2026-430190/
- Sportsbet Round 14 Tips: https://www.sportsbet.com.au/huddle/nrl/predictions/round-14-tips-2026
- Round 13 Saturday Results: https://www.roosters.com.au/news/2026/05/30/match-report--round-13-v-storm/
- Round 13 Sunday Results: https://www.nrl.com/news/2026/05/31/sizzling-sunday-broncos-v-dragons-raiders-v-cowboys-panthers-v-warriors/

## License

Private personal project unless a license is added.
