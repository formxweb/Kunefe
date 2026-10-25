import type { Metadata } from "next";
import Link from "next/link";
import { BranchExplorer } from "@/components/branches/BranchExplorer";
import { Photo } from "@/components/Photo";
import { JsonLd } from "@/components/JsonLd";
import { branches, cityCount, site, visitFaq } from "@/lib/data";
import { openGraph } from "@/lib/seo";

const description = `Antephan Künefe’nin ${cityCount} şehirdeki ${branches.length} şubesi: adresler, telefonlar ve Google Haritalar yol tarifi.`;

export const metadata: Metadata = {
  title: "Şubelerimiz",
  description,
  alternates: { canonical: "/subeler/" },
  openGraph: openGraph("Şubelerimiz", description, "/images/branches/esenler.webp"),
};

export default function BranchesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${site.url}/` },
            { "@type": "ListItem", position: 2, name: "Şubelerimiz", item: `${site.url}/subeler/` },
          ],
        }}
      />

      <section aria-labelledby="sayfa-baslik" className="border-b border-line">
        <div className="shell grid gap-10 pb-12 pt-10 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:pb-16 lg:pt-14">
          <div>
            <nav aria-label="Sayfa konumu" className="text-[0.95rem] text-muted">
              <ol className="flex gap-2">
                <li><Link href="/" className="hover:text-choco">Ana Sayfa</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="font-bold text-choco">Şubelerimiz</li>
              </ol>
            </nav>
            <h1 id="sayfa-baslik" className="mt-6 text-[clamp(3rem,9vw,6.5rem)] leading-[0.92]">
              Şubelerimiz<span className="text-ember-bright">.</span>
            </h1>
            <p className="mt-6 max-w-lg text-[1.2rem] text-muted">
              {cityCount} şehirde {branches.length} şube. Size en yakın Antephan’ı seçin; tek dokunuşla arayın ya da yol tarifi alın.
            </p>
          </div>
          <figure>
            <Photo
              src="/images/branches/esenler.webp"
              alt="Antephan Künefe Esenler şubesinin dış cephesi ve tabelası"
              sizes="(min-width: 1024px) 38rem, 92vw"
              className="aspect-[1170/435]"
              priority
            />
            <figcaption className="mt-3 text-[0.95rem] text-muted">Esenler şubesi, Kazım Karabekir Caddesi</figcaption>
          </figure>
        </div>
      </section>

      <BranchExplorer />

      <section aria-labelledby="sss-baslik" className="bg-paper py-20 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="eyebrow text-ember">Ziyaretten önce</p>
            <h2 id="sss-baslik" className="mt-4 text-[clamp(2.2rem,4.5vw,3.5rem)]">Sıkça sorulanlar</h2>
          </div>
          <div className="border-t border-line">
            {visitFaq.map((f) => (
              <details key={f.q} className="group border-b border-line">
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-sans text-[1.2rem] font-bold tracking-normal">{f.q}</h3>
                  <span aria-hidden="true" className="relative h-4 w-4 shrink-0">
                    <span className="absolute left-0 top-1/2 h-[1.5px] w-4 bg-choco" />
                    <span className="absolute left-1/2 top-0 h-4 w-[1.5px] bg-choco transition-transform duration-300 group-open:scale-y-0" />
                  </span>
                </summary>
                <p className="pb-6 pr-10 text-[1.08rem] text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
