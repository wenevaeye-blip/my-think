import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		slug: z.string().optional(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		draft: z.boolean().default(false),
		category: z.string().default('General'),
		tags: z.array(z.string()).default([]),
		heroImage: z.string().optional(),
		lang: z.literal('en').default('en'),
		author: z.string().default('wenevaeye-blip'),
	}),
});

export const collections = { blog };
