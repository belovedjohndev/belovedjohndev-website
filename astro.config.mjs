
import { defineConfig } from 'astro/config';

const site =
  process.env.SITE_URL ??
  process.env.CF_PAGES_URL ??
  'https://belovedjohndev.pages.dev';

export default defineConfig({
  site,
  base: '/',
  output: 'static',
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
