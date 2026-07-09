# Beloved John Dev

Static Astro consultant website for an independent business systems developer focused on custom business systems, client portals, estimator tools, and automation for companies that have outgrown spreadsheets and manual workflows.

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
- Static branded Open Graph PNG images
- Static deployment-ready architecture

## Stack

- Astro
- TypeScript
- CSS with shared design tokens
- Cloudflare Pages
- Static site output

## Key Pages

- `/` home sales page
- `/services` offer and pricing guidance
- `/case-studies` case study index
- `/case-studies/[slug]` individual case studies
- `/insights` authority and article index
- `/insights/[slug]` individual insight pages
- `/process` delivery process
- `/about` consultant positioning and trust
- `/contact` structured project inquiry intake
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
  pages/
    about.astro
    contact.astro
    home-service-estimator.astro
    index.astro
    process.astro
    case-studies/
    insights/
    services/
  styles/
    global.css
    tokens.css
public/
  og/
  robots.txt
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
- insights
- positioning
- FAQ
- contact links
- contact intake content
- process steps

## Deployment

This project is prepared for Cloudflare Pages as a static Astro site.

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

The contact page includes a structured project inquiry form designed to qualify consulting leads before the first conversation.

The current submission path uses a static external form backend rather than custom server code, which keeps the site deployable as a simple static Astro project.

### Open Graph images

Static branded PNG social share images live in:

- [`public/og/`](public/og/)

### SEO and metadata

The site includes:

- canonical URLs
- Open Graph metadata
- Twitter metadata
- structured data
- static `robots.txt`
- generated `sitemap-index.xml` and `sitemap-0.xml`

## Contact

- Website: [belovedjohndev.com](https://belovedjohndev.com)
- Demo: [demo.belovedjohndev.com](https://demo.belovedjohndev.com)
- Email: [support@belovedjohndev.com](mailto:support@belovedjohndev.com)
