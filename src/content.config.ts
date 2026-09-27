import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import categories from "./data/categories.json";

// 1件 = src/content/tips/<slug>.json。図は src/visuals/<slug>.svg。
const tips = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/tips" }),
  schema: z.object({
    id: z.number().int().positive(),
    category: z.enum(categories as [string, ...string[]]),
    title: z.string(),
    claim: z.string(),
    why: z.string(),
    apply: z.string(),
    visualLabel: z.string(),
  }),
});

export const collections = { tips };
