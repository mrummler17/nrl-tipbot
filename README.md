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

- Round: Round 25, 2026
- Mode: live-round update with five remaining selections
- Tipping comp handle: `Prince_of_Penrith`
- Ladder context: last confirmed P5 on 238 before Round 24; current ladder screenshot required
- Remaining tip card: Knights, Warriors, Bulldogs, Sharks, Roosters
- Charity bet status: no Round 25 bet is locked
- Charity ledger: 3-2, $31.50 invested, $32.03 returned, +$0.53 profit
- Validation rule: do not move the charity ledger without recorded odds, stake, result, and user confirmation

Round 25 remaining tips:

1. Knights over Sea Eagles - market/model protect
2. Warriors over Rabbitohs - market/model lean; lowest-confidence remaining pick
3. Bulldogs over Dragons - market/model protect
4. Sharks over Titans - market/model protect; monitor the halves without Trindall
5. Roosters over Wests Tigers - strongest safe pick

Round 25 notes:

- This update began after Storm v Panthers and Raiders v Broncos finished and Dolphins v Eels kicked off, so only five games remain actionable.
- Panthers beat Storm 22-14 and Broncos beat Raiders 34-30. Dolphins v Eels is recorded as live/locked rather than a retrospective tip.
- Sportsbet prices checked Friday 21 August at about 9:10pm AEST: Knights $1.43, Warriors $1.57, Bulldogs $1.48, Sharks $1.43 and Roosters $1.06.
- FootyForecaster agrees on all five remaining picks: Knights 77.0%, Warriors 54.8%, Bulldogs 67.4%, Sharks 72.2% and Roosters 93.6%.
- Warriors is the danger game because South Sydney named Cody Walker, Brandon Smith, Cameron Murray and David Fifita.
- No Round 25 charity bet is locked, so the Mark Hughes Foundation ledger stays unchanged.

Round 24 settled notes:

- The published Round 24 card finished 4 from 8.
- Correct tips: Dolphins, Warriors, Knights and Dragons.
- Missed tips: Panthers, Bulldogs, Sharks and Cowboys.
- No Round 24 charity bet was locked, so the ledger stayed unchanged.

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

Current Round 25 update uses:

- Round 25 fixtures and live results: https://www.legz.com.au/nrl/matches/2026/round-25
- Round 25 team lists: https://www.zerotackle.com/round-25-team-lists-2026-237113/
- Sportsbet NRL Round 25 market: https://www.sportsbet.com.au/betting/rugby-league/nrl/round-25
- FootyForecaster Round 25 model: https://footyforecaster.com/NRL/RoundForecast/2026_Round_25

## License

Private personal project unless a license is added.
