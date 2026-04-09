# NRL TipBot

NRL TipBot is a Codex-maintained takeover of the original Claude prototype briefing.

The attached JSX was a good first pass, but it mixed content, layout, and behavior into one fragile file. This version separates the data from the UI so each new round is easier to update, safer to review, and simpler to reuse.

## What's better

- Structured briefing data in `data/briefing.json`
- Separate live overlay in `data/live-round.json`
- Generated static dashboard in `dist/index.html`
- Proper Sydney time formatting via `Intl.DateTimeFormat`
- Cleaner hero metrics, ticker, notes, and section badges
- Mobile-friendly layout with denser information architecture
- Clear snapshot labelling so stale content is easier to spot

## Update workflow

1. Edit `/Users/marcusrummler/Documents/New project/nrl-tipbot/data/briefing.json` for reusable season/board content
2. Edit `/Users/marcusrummler/Documents/New project/nrl-tipbot/data/live-round.json` for official current-round updates
3. Run `npm run build` inside `/Users/marcusrummler/Documents/New project/nrl-tipbot`
4. Open `/Users/marcusrummler/Documents/New project/nrl-tipbot/dist/index.html`

## Notes

- This initial data set is seeded from the attached `nrl-tipbot-briefing.jsx` snapshot.
- The live overlay now includes verified Round 6 updates from official NRL.com pages checked on Friday 10 April 2026.
- It is still a curated workflow rather than a fully automated feed, so round facts should be re-checked before publishing or betting.
