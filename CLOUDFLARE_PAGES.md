# Cloudflare Pages Setup

Use these settings when connecting this repo to Cloudflare Pages:

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`

## Environment variables

Set this for the production environment:

- `SITE_URL=https://your-domain.com`

If you do not set `SITE_URL`, the site falls back to Cloudflare's `CF_PAGES_URL`.

## Why this matters

- Canonical URLs use `SITE_URL`
- `sitemap.xml` uses `SITE_URL`
- `robots.txt` uses `SITE_URL`
- Structured data and Open Graph image URLs use `SITE_URL`

## Recommended launch steps

1. Create the Pages project and connect this repository.
2. Add the production `SITE_URL` variable.
3. Deploy once to the default `pages.dev` domain.
4. Attach your custom domain in Cloudflare Pages.
5. Redeploy after the custom domain is active.
6. Disable GitHub Pages for this repository after DNS is switched.

## Notes

- `public/_headers` includes security headers, asset caching, and `noindex` for `pages.dev` preview domains.
- `robots.txt` is generated dynamically from the configured site URL.
- The old `vercel.json` file has been removed because this repo is now prepared for Cloudflare Pages instead.
