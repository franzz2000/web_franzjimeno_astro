import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const authors = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/authors' }),
  schema: z.object({
    name: z.string(),
    avatar: z.string().optional(),
    occupation: z.string().optional(),
    company: z.string().optional(),
    email: z.email().optional(), // Cambiado a optional para evitar fallos si falta en algún MD
    twitter: z.url().optional(),
    linkedin: z.url().optional(),
    github: z.url().optional(),
    layout: z.string().optional(), // Corregido: ya no exige formato URL
    shortBio: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({image}) => z.object({
    title: z.string(),
    cover: image().optional(),
    // Soporta tanto 'date' como 'pubDate' sin romper entradas antiguas
    date: z.coerce.date().optional(),
    pubDate: z.coerce.date().optional(),
    tags: z.array(reference('tags')).optional().default([]),
    lastmod: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    summary: z.string().optional(),
    description: z.string().optional(), // Añadido soporte para 'description'
    images: z.union([z.string(), z.array(z.string())]).optional(),
    authors: z.array(reference('authors')).optional().default([]),
    layout: z.string().optional(),
    bibliography: z.string().optional(),
    canonicalUrl: z.string().optional(),
    related: z.array(reference('blog')).optional().default([]),
  }).transform((data) => ({
    ...data,
    // Garantiza que siempre exista 'date' usando pubDate o la fecha actual como fallback
    date: data.date || data.pubDate || new Date(),
    summary: data.summary || data.description || '',
  })),
});

const tags = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/tags' }),
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { blog, authors, tags };
