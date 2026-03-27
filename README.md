# Beloved John Dev

Marketing site for an independent business systems consultant focused on custom business systems, client portals, estimator tools, and automation for companies that have outgrown spreadsheets and manual workflows.

Live site: [belovedjohndev.com](https://belovedjohndev.com)

## Overview

This project is an Astro-based consultant site built to communicate a sharper offer than a typical developer portfolio.

The site is positioned around:

- Custom business systems
- Client portals and estimator tools
- Automation and integrations

It also includes:

- Consultant-style service and process pages
- Case study pages with proof points
- Insight articles for authority building
- A structured contact intake flow
- Branded Open Graph image generation

## Stack

- Astro
- TypeScript
- CSS with shared design tokens
- Cloudflare Pages

## Key Pages

- `/` home sales page
- `/services` offer and pricing guidance
- `/case-studies` case study index
- `/case-studies/[slug]` individual case studies
- `/insights` authority and article index
- `/insights/[slug]` individual insight pages
- `/process` delivery process
- `/about` consultant positioning and trust
- `/contact` structured project brief intake
- `/home-service-estimator` focused niche offer page

## Project Structure

```text
src/
  components/
    sections/
    ui/
  data/
    siteContent.ts
  layouts/
    MainLayout.astro
  lib/
    og.ts
  pages/
    about.astro
    contact.astro
    process.astro
    services.astro
    case-studies/
    insights/
    og/
    robots.txt.ts
    sitemap.xml.ts
  styles/
    global.css
    tokens.css
```

## Local Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Content Model

Most marketing content is centralized in:

- [`src/data/siteContent.ts`](src/data/siteContent.ts)

That file drives:

- services
- case studies
- testimonials
- insights
- contact links
- process steps

## Deployment

This project is prepared for Cloudflare Pages.

Recommended settings:

- Framework preset: `Astro`
- Build command: `npm run build`
- Output directory: `dist`
- Root directory: `/`

Required production environment variable:

```bash
SITE_URL=https://belovedjohndev.com
```

Additional deployment notes are in:

- [`CLOUDFLARE_PAGES.md`](CLOUDFLARE_PAGES.md)

## Notable Features

### Structured project intake

The contact page includes a structured project brief form that helps qualify leads before the first conversation.

### Dynamic OG images

Reusable SVG-based social share images are generated from:

- [`src/lib/og.ts`](src/lib/og.ts)
- [`src/pages/og/[slug].svg.ts`](src/pages/og/[slug].svg.ts)
- [`src/pages/og/case-studies/[slug].svg.ts`](src/pages/og/case-studies/[slug].svg.ts)
- [`src/pages/og/insights/[slug].svg.ts`](src/pages/og/insights/[slug].svg.ts)

### SEO and metadata

The site includes:

- canonical URLs
- Open Graph metadata
- Twitter metadata
- structured data
- generated `robots.txt`
- generated `sitemap.xml`

## Contact

- Website: [belovedjohndev.com](https://belovedjohndev.com)
- Demo: [demo.belovedjohndev.com](https://demo.belovedjohndev.com)
- Email: [support@belovedjohndev.com](mailto:support@belovedjohndev.com)
