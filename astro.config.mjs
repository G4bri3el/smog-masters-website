import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://smogmasterssmogcheck.com',
  output: 'static',
  integrations: [sitemap()],
});

