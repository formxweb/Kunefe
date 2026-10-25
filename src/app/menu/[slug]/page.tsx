import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { ArrowRight, PinIcon } from "@/components/icons";
import { getCategory, getProduct, products, site } from "@/lib/data";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  const c = getCategory(p.category);
  return {
    title: `${p.name} | ${c.label}`,
    description: `${p.name}: ${p.description} Antephan Künefe şubelerinde.`,
    alternates: { canonical: `/menu/${p.slug}/` },
    openGraph: { images: [{ url: p.image, width: 430, height: 430, alt: p.name }] },
  };
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const c = getCategory(p.category);
  const siblings = products.filter((x) => x.category === p.category && x.slug !== p.slug);
  const isKunefe = p.category === "kunefe";

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "MenuItem",
          name: p.name,
          description: p.description,
          image: `${site.url}${p.image}`,
          url: `${site.url}/menu/${p.slug}/`,
        }}
      />

      <article className="pb-20 md:pb-28">
        <div className="shell pt-8 lg:pt-12">
          <nav aria-label="Sayfa konumu" className="text-[0.95rem] text-muted">
            <ol className="flex flex-wrap gap-2">
              <li><Link href="/" className="hover:text-choco">Ana Sayfa</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/#menumuz" className="hover:text-choco">Menümüz</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-bold text-choco">{p.name}</li>
            </ol>
          </nav>
        </div>

        <div className="shell mt-8 grid gap-10 lg:mt-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div className="relative lg:order-2">
            <div aria-hidden="true" className="absolute -right-3 -top-3 hidden h-full w-full border-[1.5px] border-pistachio sm:block" />
            <Photo
              src={p.image}
              alt={`${p.name}, üstten görünüm`}
              sizes="(min-width: 1024px) 34rem, 92vw"
              className={p.category === "kunefe" ? "relative aspect-square" : "relative aspect-[430/558]"}
              priority
            />
          </div>

          <div className="lg:order-1 lg:pt-6">
            <p className="eyebrow text-ember">{c.label}</p>
            <h1 className="mt-4 text-[clamp(3rem,8vw,6rem)] leading-[0.92]">{p.name}</h1>
            <p className="mt-6 max-w-lg text-[1.3rem] leading-relaxed text-muted">{p.description}</p>

            <dl className="mt-10 divide-y divide-line border-y border-line text-[1.08rem]">
              {isKunefe && (
                <>
                  <div className="grid grid-cols-[9rem_1fr] gap-4 py-4">
                    <dt className="font-bold">Porsiyon</dt>
                    <dd className="text-muted">Tek, iki ve dört kişilik seçenekler</dd>
                  </div>
                  <div className="grid grid-cols-[9rem_1fr] gap-4 py-4">
                    <dt className="font-bold">Servis</dt>
                    <dd className="text-muted">Siparişle anında hazırlanır, dilerseniz dondurmayla</dd>
                  </div>
                </>
              )}
              <div className="grid grid-cols-[9rem_1fr] gap-4 py-4">
                <dt className="font-bold">Fiyat</dt>
                <dd className="text-muted">
                  {typeof p.price === "number"
                    ? `${new Intl.NumberFormat("tr-TR").format(p.price)} ₺`
                    : "Şubeye göre değişir; güncel fiyat için şubenizi arayın."}
                </dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/subeler/"
                className="group inline-flex h-14 items-center justify-between gap-8 rounded-[3px] bg-pistachio px-6 text-[1.08rem] font-bold text-paper transition-colors duration-200 hover:bg-pistachio-deep"
              >
                <span className="inline-flex items-center gap-2"><PinIcon /> En yakın şubeyi bul</span>
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/#menumuz"
                className="inline-flex h-14 items-center justify-center rounded-[3px] border-[1.5px] border-choco px-6 text-[1.08rem] font-bold transition-colors duration-200 hover:bg-choco hover:text-paper"
              >
                Menüye dön
              </Link>
            </div>
          </div>
        </div>
      </article>

      {siblings.length > 0 && (
        <section aria-labelledby="diger-baslik" className="border-t border-line bg-paper py-16 md:py-24">
          <div className="shell">
            <h2 id="diger-baslik" className="text-[clamp(2rem,4.5vw,3.25rem)]">
              Diğer <span className="display-italic text-pistachio">{c.label.toLocaleLowerCase("tr")}</span> çeşitleri
            </h2>
            <ul className="no-scrollbar -mx-5 mt-10 flex snap-x gap-5 overflow-x-auto px-5 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 lg:grid-cols-5">
              {siblings.map((x, i) => (
                <li key={x.slug} className="w-[62vw] shrink-0 snap-start md:w-auto">
                  <Reveal delay={i * 0.05}>
                    <Link href={`/menu/${x.slug}/`} className="group block">
                      <div className="overflow-hidden">
                        <Photo
                          src={x.image}
                          alt=""
                          sizes="(min-width: 1024px) 15rem, (min-width: 768px) 30vw, 62vw"
                          className="aspect-square"
                          imgClassName="transition-transform duration-700 ease-[var(--ease-soft)] group-hover:scale-[1.05]"
                        />
                      </div>
                      <p className="mt-3 font-display text-[1.4rem] leading-tight">{x.name}</p>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
