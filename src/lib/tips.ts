import { getCollection } from "astro:content";

const visuals = import.meta.glob<string>("../visuals/*.svg", {
  query: "?raw",
  import: "default",
  eager: true,
});

export type Tip = Awaited<ReturnType<typeof getTips>>[number];

export async function getTips() {
  const entries = await getCollection("tips");
  return entries
    .map((e) => {
      const svg = visuals[`../visuals/${e.id}.svg`];
      if (!svg) throw new Error(`図がありません: src/visuals/${e.id}.svg`);
      return { slug: e.id, ...e.data, no: String(e.data.id).padStart(2, "0"), svg };
    })
    .sort((a, b) => a.id - b.id);
}

/** base を付けたサイト内パス。path は "/" 始まり。 */
export function url(path: string) {
  return import.meta.env.BASE_URL.replace(/\/$/, "") + path;
}

export const tipUrl = (slug: string) => url(`/tips/${slug}/`);
