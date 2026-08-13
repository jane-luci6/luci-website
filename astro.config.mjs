// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://lucisystems.com',
  integrations: [
    sitemap({
      // Exclude utility/noindex pages from the sitemap.
      filter: (page) => !page.includes('/contact/thanks'),
    }),
  ],
});
