# PMG Website

The studio marketing site for **PlayersMakingGames**, creators of [Focus](https://pmg.cards/focus). Next.js (App Router) + Tailwind v4, deployed on Vercel at [pmg.cards](https://pmg.cards).

## Pages

- **Home** — mission, studio values, Focus spotlight, latest news
- **About** — studio philosophy, values, and our AI-assisted/human-designed development manifesto
- **Games** — Focus feature page, plus a roadmap slot for future titles
- **News** — dev log / patch notes
- **Support** — FAQ and contact

## `/focus`

`pmg.cards/focus` isn't a page in this app — it's proxied via `rewrites()` in `next.config.mjs` to [Focus_Website](https://github.com/PlayersMakingGames/Focus_Website), a separate Next.js deployment (its own repo, own Vercel project, own Supabase reads for the live leaderboard/shop). That project sets `basePath: "/focus"` so its routes and assets already expect this prefix — if its deployment URL ever changes, update the `destination` in `next.config.mjs`.

`data/links.js` holds `FOCUS_HUB_PATH` (`/focus`) and `DISCORD_INVITE_URL` as the single source of truth for those destinations — update there, not per-usage.

## Running locally

```bash
npm install
npm run dev
```

## Deploying

Pushing to `master` auto-deploys via Vercel's GitHub integration — no manual build/deploy step.
