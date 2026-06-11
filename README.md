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

- Round: Round 15, 2026
- Tip card: five-game Origin-bye preview
- Charity bet status: no Round 15 bet locked
- Charity ledger: 3-2, $31.50 invested, $32.03 returned, +$0.53 profit
- Validation rule: do not move the charity ledger without recorded TAB odds, stake, result, and user confirmation

Round 15 tips currently published:

1. Warriors over Sharks
2. Dolphins over Roosters
3. Raiders over Eels
4. Titans over Wests Tigers
5. Rabbitohs over Broncos

Round 14 notes:

- No charity bet was locked, so the Mark Hughes Foundation ledger stayed unchanged.
- Verified result notes used for the update include Manly 28-14 Rabbitohs, Storm 32-30 Knights, Roosters 26-0 Raiders, Dolphins 40-14 Cowboys, Titans 28-23 Broncos, Penrith 68-0 Wests Tigers, and Bulldogs 14-12 Eels.
- Sharks v Dragons result still needs a clean official-score cross-check before using Round 14 as a final tip-count headline.

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

Recent Round 15 updates used:

- NRL Draw: https://www.nrl.com/draw
- NRL teams Round 15: https://www.dailytelegraph.com.au/sport/nrl/supercoach-news/nrl-teams-round-15-nicho-hynes-races-clock-rookies-galore-as-origin-stars-out/news-story/ffd093cbbf3f5afd347528a753944b60
- Round 15 team lists: https://www.news.com.au/sport/nrl/round-15-team-lists-souths-name-jai-arrow-in-touching-act-as-ezra-mam-remains-on-the-broncos-bench/news-story/7351f114ebb128e84079d20c148782c2
- Round 15 early mail: https://www.dailytelegraph.com.au/sport/nrl/supercoach-news/nrl-round-15-early-mail-surprise-origin-selections-rip-apart-teams-jaydn-sua-pec-injury/news-story/ef33cae0fcc52940d02dedbfb5c03d39
- Round 14 Manly result: https://www.dailytelegraph.com.au/sport/nrl/nrl-round-14-manly-sea-eagles-win-2814-over-south-sydney-rabbitohs/news-story/a2cb34925bb2f5db7ac913acc9ded47d
- Round 14 Storm result: https://www.dailytelegraph.com.au/sport/nrl/nrl-round-14-phoenix-crossland-taken-to-hospital-in-knights-v-storm-clash/news-story/a7de6d131fc490e9c6cbceab3e1921ce
- Round 14 Roosters result: https://www.dailytelegraph.com.au/sport/nrl/nrl-round-14-sydney-roosters-win-260-over-canberra-raiders/news-story/60545427a9c3f952ad385c7fd90836e8
- Round 14 Dolphins result: https://www.dailytelegraph.com.au/sport/nrl/nrl-round-14-dolphins-win-4014-over-north-queensland-cowboys/news-story/7227bdb3e8f92f46700006719513c119
- Round 14 Titans result: https://www.couriermail.com.au/sport/nrl/nrl-round-14-keano-kini-steals-victory-as-gold-coast-titans-win-2823-over-brisbane-broncos/news-story/db3b0bb3d1d5f09b73358319fc9af389
- Round 14 Panthers review: https://www.dailytelegraph.com.au/sport/nrl/the-tackle-why-the-bunker-must-be-given-more-power-after-play-the-ball-howlers/news-story/e98a9d9058e8b430cb5f90e3227e9d49
- Round 14 Bulldogs result: https://www.dailytelegraph.com.au/sport/bulldogs-snatch-thrilling-win-over-eels-after-controversial-late-penalty-call/news-story/dff262036f2d60496208983999d71a64

## License

Private personal project unless a license is added.
