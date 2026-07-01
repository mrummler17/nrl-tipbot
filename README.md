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

- Round: Round 18, 2026
- Tip card: five-game Round 18 preview
- Charity bet status: no Round 18 bet locked
- Charity ledger: 3-2, $31.50 invested, $32.03 returned, +$0.53 profit
- Validation rule: do not move the charity ledger without recorded TAB odds, stake, result, and user confirmation

Round 18 tips:

1. Sharks over Broncos - best raw edge; Brisbane are missing Walsh, Haas, Carrigan and multiple forwards
2. Sea Eagles over Eels - Manly keep Tom Trbojevic and Fogarty while Parramatta lose Mitchell Moses
3. Knights over Dolphins - Newcastle at home against a Dolphins spine missing Katoa and Tabuai-Fidow
4. Dragons over Wests Tigers - home lean with Tigers missing Luai and Taylan May
5. Rabbitohs over Panthers - upset lean only with Penrith missing Cleary, Yeo, Martin and Papali'i

Round 18 notes:

- This is an Origin-distorted short round with only five games.
- Sharks are the only serious charity-bet watch candidate, but no price or stake has been locked.
- Rabbitohs over Panthers is deliberately marked as an upset lean, not a bet anchor.
- Byes: Raiders, Bulldogs, Titans, Storm, Warriors, Cowboys and Roosters.

Round 17 notes carried forward:

- The user selected the Round 17 TipBot card externally and reported losses on Panthers and Storm.
- Those external slip results are not charity-bet ledger movement because no Round 17 charity bet was locked with stake, price, and confirmation.
- Do not publish a final Round 17 tip count until all remaining scores have clean public cross-checks.

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

Recent Round 18 updates used:

- NRL Team Lists Round 18: https://www.nrl.com/news/2026/06/30/nrl-team-lists-round-18/
- NRL Draw Round 18: https://www.nrl.com/draw/?competition=111&round=18&season=2026
- Round 18 fixture table: https://en.wikipedia.org/wiki/2026_NRL_season_results
- Round 18 late mail: https://www.dailytelegraph.com.au/sport/nrl/supercoach-news/nrl-late-mail-round-18-oryn-keeley-set-to-start-as-ativalu-lisati-ruled-out-for-up-to-two-months/news-story/e3e99476ba2c9cff60053d6cca70703e

## License

Private personal project unless a license is added.
