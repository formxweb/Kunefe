import type { MetadataRoute } from "next";
import { branches, products, site } from "@/lib/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-25");
  return [
    { url: `${site.url}/`, lastModified, priority: 1 },
    { url: `${site.url}/subeler/`, lastModified, priority: 0.9 },
    ...branches.map((b) => ({ url: `${site.url}/subeler/${b.slug}/`, lastModified, priority: 0.8 })),
    ...products.map((p) => ({ url: `${site.url}/menu/${p.slug}/`, lastModified, priority: 0.7 })),
    { url: `${site.url}/gizlilik/`, lastModified, priority: 0.2 },
    { url: `${site.url}/kullanim-kosullari/`, lastModified, priority: 0.2 },
  ];
}
