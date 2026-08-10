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

- Round: Round 24, 2026
- Mode: early-card P5 ladder protection with one controlled climb edge
- Tipping comp handle: `Prince_of_Penrith`
- Ladder context: P5 on 238; P4 on 239; P2 is tied on 242; P6 is on 237
- Tip card: Panthers, Dolphins, Bulldogs, Sharks, Cowboys, Warriors, Knights, Dragons
- Charity bet status: no Round 24 bet is locked
- Charity ledger: 3-2, $31.50 invested, $32.03 returned, +$0.53 profit
- Validation rule: do not move the charity ledger without recorded odds, stake, result, and user confirmation

Round 24 early tips:

1. Panthers over Roosters - market/model lean; Yeo, Edwards and Tedesco watch
2. Dolphins over Sea Eagles - market protect; Manly injuries override the early model split
3. Bulldogs over Rabbitohs - market protect pending Souths spine news
4. Sharks over Raiders - strong market/model protect
5. Cowboys over Eels - market protect; Parramatta availability risk overrides the model split
6. Warriors over Broncos - market/model protect
7. Knights over Titans - strongest safe pick
8. Dragons over Wests Tigers - sole controlled edge in a near-even market

Round 24 notes:

- The screenshot confirms P2 is only four points away, but P6 is one point behind and P7 is two behind.
- TipBot follows seven Sportsbet favourites and takes Dragons over Wests Tigers as the only controlled split.
- Sportsbet prices checked Monday 10 August at about 12:07pm AEST: Panthers $1.74, Dolphins $1.40, Bulldogs $1.64, Sharks $1.30, Cowboys $1.57, Warriors $1.47, Knights $1.25, Wests Tigers $1.90 and Dragons $1.94.
- FootyForecaster agrees on Panthers, Sharks, Warriors and Knights; its Sea Eagles, Rabbitohs and Eels disagreements are rejected on the early card because current availability risk supports the market favourites.
- Official Round 24 team lists are due Tuesday and must be rechecked before Thursday lockout.
- No Round 24 charity bet is locked, so the Mark Hughes Foundation ledger stays unchanged regardless of tipping-comp outcomes.

Round 23 notes carried forward:

- The deployed pre-lockout card was Cowboys, Warriors, Roosters, Sea Eagles, Dolphins, Rabbitohs, Raiders and Sharks.
- The user ultimately selected Panthers over Warriors as a heart/safe override on the actual tipping slip.
- No Round 23 charity bet was locked, so the ledger stayed unchanged.

Round 22 notes carried forward:

- Round 22 was validated as 6 from 8.
- Correct tips: Roosters, Dolphins, Bulldogs, Panthers, Sharks and Eels.
- Missed tips: Titans and Broncos.
- No Round 22 charity bet was locked, so the ledger stayed unchanged.

Round 21 notes carried forward:

- Round 21 card was validated as 5 from 8 from official NRL result lines.
- Correct tips: Panthers, Roosters, Raiders, Titans and Sharks.
- Missed tips: Storm, Warriors and Broncos.
- No Round 21 charity bet was locked, so the Mark Hughes Foundation ledger stayed unchanged.

Round 20 notes carried forward:

- Round 20 card was validated as 8 from 8 from official NRL result lines.
- Correct tips: Broncos, Sharks, Roosters, Raiders, Warriors, Bulldogs, Titans and Dolphins.
- No Round 20 charity bet was locked, so the Mark Hughes Foundation ledger stayed unchanged.

Round 19 notes carried forward:

- Round 19 card finished as 3 correct and 4 missed after a user-reported Storm win over the Titans.
- Storm v Titans exact score still needs official confirmation before publishing the final score line, but the tip direction is treated as correct.

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

Current Round 24 update uses:

- Official NRL Round 24 draw: https://www.nrl.com/draw/?competition=111&round=24&season=2026
- Official NRL casualty ward: https://www.nrl.com/news/2026/01/01/nrl-casualty-ward-how-your-club-is-shaping-heading-into-2026/
- Sportsbet NRL Round 24 market: https://www.sportsbet.com.au/betting/rugby-league/nrl
- FootyForecaster Round 24 model: https://footyforecaster.com/NRL/RoundForecast/2026_Round_24

## License

Private personal project unless a license is added.
