import type { Metadata } from "next";
import { site } from "./data";

/** Sayfaya özel Open Graph bilgisi; görsel verilmezse marka görseli kullanılır. */
export function openGraph(title: string, description: string, image?: string): Metadata["openGraph"] {
  return {
    type: "website",
    locale: "tr_TR",
    siteName: site.name,
    title: `${title} | ${site.name}`,
    description,
    images: [{ url: `${site.url}${image ?? "/images/brand/og.jpg"}`, alt: title }],
  };
}
