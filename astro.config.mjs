import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeSiteUrls from './src/lib/rehype-site-urls.mjs';

const base = '/henk-roor-static';

// https://astro.build/config
export default defineConfig({
  site: 'https://studioroor.github.io',
  base,
  integrations: [mdx(), sitemap()],
  outDir: './_site',
  publicDir: './public',
  markdown: {
    smartypants: false,
    rehypePlugins: [[rehypeSiteUrls, { base }]],
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
