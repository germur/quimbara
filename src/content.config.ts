import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

function removeDupsAndLowerCase(array: string[]) {
  if (!array.length) return array
  const lowercaseItems = array.map((str) => str.toLowerCase())
  const distinctItems = new Set(lowercaseItems)
  return Array.from(distinctItems)
}

// Define blog collection
const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  // Required
  schema: ({ image }) =>
    z.object({
      // Required
      title: z.string().max(60),
      description: z.string().max(160),
      publishDate: z.coerce.date(),
      // Optional
      updatedDate: z.coerce.date().optional(),
      heroImage: z.any().optional(),
      tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
      language: z.string().optional(),
      draft: z.boolean().default(false),
      // Special fields
      comment: z.boolean().default(true)
    })
})

// Define docs collection
const docs = defineCollection({
  loader: glob({ base: './src/content/docs', pattern: '**/*.{md,mdx}' }),
  schema: () =>
    z.object({
      title: z.string().max(60),
      description: z.string().max(160),
      publishDate: z.coerce.date().optional(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
      draft: z.boolean().default(false),
      // Special fields
      order: z.number().default(999)
    })
})

// Define fighter data collection
const fighterData = defineCollection({
  loader: glob({ base: './src/content/fighter-data', pattern: '**/*.json' }),
  schema: z.object({
    profile: z.object({
      id: z.number(),
      name: z.string(),
      slug: z.string().optional().nullable(),
      nickname: z.string().optional().nullable(),
      photo: z.string().optional().nullable(),
      division: z.string().optional().nullable(),
      team: z.object({ name: z.string().optional().nullable() }).optional().nullable(),
      height: z.string().optional().nullable(),
      weight: z.string().optional().nullable(),
      reach: z.string().optional().nullable(),
      stance: z.string().optional().nullable(),
      birth: z.object({ date: z.string().optional().nullable(), country: z.string().optional().nullable() }).optional().nullable(),
      career_start: z.string().optional().nullable(),
      description: z.string().optional().nullable()
    }).nullable(),
    records: z.any().optional(), // Simplifying for now
    fights: z.array(z.any()).optional(),
    cachedAt: z.string().optional()
  })
})

// Define analisis collection (El Octágono Digital)
const analisis = defineCollection({
  loader: glob({ base: './src/content/analisis', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      // Core metadata
      title: z.string().max(80),
      description: z.string().max(160),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      // Visual assets
      heroImage: z.object({
        src: z.string(),
        alt: z.string(),
        caption: z.string().optional()
      }).optional(),
      // Categorization
      category: z.enum(['prediccion', 'tecnica', 'biomecanica', 'prospecto', 'historia']),
      featured: z.boolean().default(false),
      priority: z.number().default(999),
      // Fight/Fighter context
      fighters: z.array(z.string()).optional(),
      event: z.string().optional(),
      division: z.string().optional(),
      // SEO
      tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
      // Stats & Data
      statistics: z.record(z.any()).optional(),
      draft: z.boolean().default(false)
    })
})

export const collections = { blog, docs, fighterData, analisis }
