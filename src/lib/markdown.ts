import { createMarkdownProcessor } from '@astrojs/markdown-remark';
import rehypeSiteUrls from './rehype-site-urls.mjs';

// Renders Markdown stored in a frontmatter field (Astro only renders the body itself).
const processor = await createMarkdownProcessor({
  smartypants: false,
  rehypePlugins: [[rehypeSiteUrls, { base: import.meta.env.BASE_URL }]],
});

export async function renderMarkdown(markdown: string | undefined): Promise<string> {
  if (!markdown?.trim()) return '';
  return (await processor.render(markdown)).code;
}
