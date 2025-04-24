import { defineCollection, z } from 'astro:content'

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishDate: z.date(),
    image: z.string(),
    draft: z.boolean().default(false),
  }),
})

export const collections = {
  blog: blogCollection,
}
