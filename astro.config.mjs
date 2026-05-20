
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site =
  process.env.SITE_URL ??
  process.env.CF_PAGES_URL ??
  'https://belovedjohndev.com';

export default defineConfig({
  site,
  base: '/',
  output: 'static',
  integrations: [sitemap()],
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto'
  },
  vite: {
    build: {
      cssMinify: true
    }
  },
});
