
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://belovedjohndev.github.io',
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
