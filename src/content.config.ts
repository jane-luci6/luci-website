import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    personas: z.array(z.string()).optional(),
    industries: z.array(z.string()).optional(),
    topics: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };
