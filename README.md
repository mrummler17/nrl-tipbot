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

- Round: Round 17, 2026
- Tip card: partial Round 17 result tracker
- Charity bet status: no Round 17 bet locked; external slip losses do not move the ledger
- Charity ledger: 3-2, $31.50 invested, $32.03 returned, +$0.53 profit
- Validation rule: do not move the charity ledger without recorded TAB odds, stake, result, and user confirmation

Round 17 tips currently tracked:

1. Rabbitohs over Eels - correct, Rabbitohs 32 def Eels 12
2. Bulldogs over Titans - correct, Bulldogs 30 def Titans 12
3. Panthers over Cowboys - missed, exact score pending clean cross-check
4. Storm over Sea Eagles - missed, exact score pending clean cross-check
5. Roosters over Broncos - pending clean result check
6. Dolphins over Warriors - pending clean result check
7. Raiders over Dragons - Sunday pending
8. Knights over Wests Tigers - Sunday pending

Round 17 notes:

- The user selected the TipBot card externally and reported losses on Panthers and Storm.
- Those external slip results are not charity-bet ledger movement because no Round 17 charity bet was locked with stake, price, and confirmation.
- Do not publish a final Round 17 tip count until the Panthers and Storm scores, Broncos v Roosters, Dolphins v Warriors, and Sunday games have clean public cross-checks.

Round 16 notes:

- No charity bet was locked, so the Mark Hughes Foundation ledger stayed unchanged.
- Current-source result notes support Knights over Dragons, Dolphins over Wests Tigers, and Bulldogs over Sea Eagles as correct, and Panthers over Titans as a miss.
- Sunday Round 16 games still need clean official-score cross-checks before using Round 16 as a final tip-count headline.

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

Recent Round 17 updates used:

- NRL Draw: https://www.nrl.com/draw
- NRL teams Round 17: https://www.dailytelegraph.com.au/sport/nrl/supercoach-news/nrl-teams-round-17-jackson-ford-ruled-out-for-1012-weeks-with-pectoral-injury/news-story/44bfb71903f585a72d4c6d518b1c5a02
- Round 17 late mail: https://www.dailytelegraph.com.au/sport/nrl/supercoach-news/nrl-late-mail-round-17-alex-twal-trains-with-rehab-group-samuela-fainu-eyes-early-return/news-story/f57d09280ff63aeb741b681b1e99f8e4
- Round 17 result and fixture table: https://en.wikipedia.org/wiki/2026_NRL_season_results
- Round 17 live scores and updates: https://www.dailytelegraph.com.au/sport/nrl/nrl-live-scores-and-updates-every-saturday-fixture-plus-news-from-around-the-grounds/news-story/ac58d7f3abf73cdebeb0380a357e9622
- Round 16 result: Knights 22-20 Dragons: https://www.dailytelegraph.com.au/sport/nrl/nrl-round-16-heartbreak-for-saints-as-knights-win-2220-over-dragons/news-story/8e1bead5870457b0bdc55ef5202ecea6
- Round 16 result: Dolphins 36-22 Wests Tigers: https://www.dailytelegraph.com.au/sport/nrl/nrl-round-16-dolphins-win-3622-over-wests-tigers/news-story/d60954cfd473bc75fde5d600770a32d6
- Round 16 result: Titans 19-18 Panthers: https://www.dailytelegraph.com.au/sport/nrl/nrl-round-16-zane-harrison-stars-as-gold-coast-titans-win-1918-over-penrith-panthers/news-story/910997d676a77a79f5639ed1a5b30bdb
- Round 16 result: Bulldogs 13-12 Sea Eagles: https://www.dailytelegraph.com.au/sport/nrl/nrl-round-16-bulldogs-win-1312-over-manly-sea-eagles-in-golden-point-thriller/news-story/49d7af9e7585233397fb8c8ba8d81959

## License

Private personal project unless a license is added.
