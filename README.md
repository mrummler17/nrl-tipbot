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

- Round: Round 22, 2026
- Mode: Round 22 settled, P5 recovery mode
- Tipping comp handle: `Prince_of_Penrith`
- Ladder context: user confirmed now P5; exact gap to 2nd still needs a fresh screenshot
- Last card: Round 22 validated 6 from 8
- Settled card: correct Roosters, Dolphins, Bulldogs, Panthers, Sharks and Eels; missed Titans and Broncos
- Charity bet status: no Round 22 bet was locked
- Charity ledger: 3-2, $31.50 invested, $32.03 returned, +$0.53 profit
- Validation rule: do not move the charity ledger without recorded TAB odds, stake, result, and user confirmation

Round 22 settled results:

1. Roosters over Cowboys - correct, Roosters won 82-12
2. Dolphins over Dragons - correct, Dolphins won 28-22
3. Bulldogs over Storm - correct, Bulldogs won 36-22
4. Titans over Warriors - missed, Warriors won 42-6
5. Panthers over Raiders - correct, Panthers won 42-18
6. Broncos over Knights - missed, Knights won 30-6
7. Sharks over Rabbitohs - correct, Sharks won 32-16
8. Eels over Wests Tigers - correct, Eels won 16-13

Round 22 notes:

- The board now prioritises getting `Prince_of_Penrith` to 2nd before finals without reckless full-card chasing.
- User confirmed `Prince_of_Penrith` is now P5; a fresh ladder screenshot is still needed for exact gap modelling.
- Round 22 landed 6 from 8, but P5 means Round 23 should probably use two controlled differentials if the ladder gap supports it.
- Use betting-market favourites each week as a proxy for safe leader picks; NourilM and Kristy W13 are likely to protect position by backing favourites.
- Classify every game as favourite match, controlled split, or avoid before lockout.
- Do not overreact to the Titans miss; differentials still need market and team-news support.
- Downgrade Broncos until their injury and form picture stabilises.
- No Round 22 charity bet was locked, so the Mark Hughes Foundation ledger stays unchanged regardless of tipping-comp outcomes.

Round 22 pre-round notes carried forward:

- Sportsbet favourites for Round 22 were Roosters, Dolphins, Bulldogs, Warriors, Panthers, Broncos, Sharks and Eels.
- TipBot matched seven favourites and split only on Titans over Warriors.
- That structure landed six tips, but the single controlled split missed badly.

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

Recent Round 22 updates used:

- NRL Team Lists Round 22: https://www.nrl.com/news/2026/07/28/nrl-team-lists-round-22/
- Sportsbet NRL Round 22 market: https://www.sportsbet.com.au/betting/rugby-league/nrl
- Sportsbet NRL Round 22 tips: https://www.sportsbet.com.au/huddle/nrl/predictions/round-22-tips-2026
- NRL Team Lists Round 21: https://www.nrl.com/news/2026/07/21/nrl-team-lists-round-21/

## License

Private personal project unless a license is added.
