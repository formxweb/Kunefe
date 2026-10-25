import { imageMeta } from "./images";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** public/ altındaki dosyalar için basePath'i ekler. */
export function asset(path: string) {
  return `${basePath}${path}`;
}

export function meta(path: string) {
  return imageMeta[path] ?? { w: 800, h: 600, color: "#d9c9ad" };
}
