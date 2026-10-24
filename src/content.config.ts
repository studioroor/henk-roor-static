import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The editable content. Its fields are described for Drikus CMS in .drikus/config.yml;
// keep both in sync when adding a field.

const home = defineCollection({
  loader: glob({ pattern: 'home.md', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    heading: z.string(),
    callToAction: z.string().optional(),
    bodyBelow: z.string().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    order: z.number().default(99),
    sidebar: z.enum(['default', 'photo']).optional().default('default'),
  }),
});

export const collections = { home, pages };
