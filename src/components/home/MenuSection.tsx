"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Photo } from "../Photo";
import { Reveal } from "../Reveal";
import { ArrowRight } from "../icons";
import { categories, products, type CategoryId } from "@/lib/data";

type Filter = "tumu" | CategoryId;

const filters: { id: Filter; label: string; count: number }[] = [
  { id: "tumu", label: "Tümü", count: products.length },
  ...categories.map((c) => ({ id: c.id, label: c.label, count: products.filter((p) => p.category === c.id).length })),
];

// Son satırda kalan boşluğu "şube bul" alanı doldurur
const spans = {
  base: ["col-span-2", "col-span-1"],
  sm: ["sm:col-span-2", "sm:col-span-1"],
  lg: ["lg:col-span-3", "lg:col-span-2", "lg:col-span-1"],
  xl: ["xl:col-span-4", "xl:col-span-3", "xl:col-span-2", "xl:col-span-1"],
};
function ctaSpan(n: number) {
  return [spans.base[(n - 1) % 2], spans.sm[n % 2], spans.lg[n % 3], spans.xl[n % 4]].join(" ");
}

const catLabel = Object.fromEntries(categories.map((c) => [c.id, c.label])) as Record<CategoryId, string>;

export function MenuSection() {
  const [active, setActive] = useState<Filter>("tumu");
  const list = active === "tumu" ? products : products.filter((p) => p.category === active);
  const note = active === "tumu" ? null : categories.find((c) => c.id === active)?.note;

  return (
    <section id="menumuz" aria-labelledby="menu-baslik" className="scroll-mt-28 py-20 md:py-28">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow text-ember">Menümüz</p>
            <h2 id="menu-baslik" className="mt-4 text-[clamp(2.6rem,6.5vw,5.25rem)]">
              Tepsiden <span className="display-italic text-pistachio">tabağa.</span>
            </h2>
          </Reveal>

          <div role="group" aria-label="Kategoriye göre filtrele" className="no-scrollbar -mx-5 flex gap-1 overflow-x-auto px-5 md:mx-0 md:px-0">
            {filters.map((f) => {
              const on = f.id === active;
              return (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setActive(f.id)}
                  className={`relative flex h-14 shrink-0 items-baseline gap-1.5 px-4 font-display text-[1.45rem] transition-colors duration-200 md:text-[1.6rem] ${
                    on ? "text-choco" : "text-muted/90 hover:text-choco"
                  }`}
                >
                  <span className={on ? "display-italic" : ""}>{f.label}</span>
                  <span className="font-sans text-[0.85rem] font-bold tabular-nums">{f.count}</span>
                  {on && (
                    <motion.span
                      layoutId="menu-filter-bar"
                      className="absolute inset-x-4 bottom-1 h-[3px] bg-pistachio"
                      transition={{ type: "spring", stiffness: 420, damping: 38 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex min-h-[3.5rem] flex-col gap-2 border-y border-line py-4 text-[1.02rem] text-muted md:flex-row md:items-center md:justify-between">
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={active}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
            >
              {note ?? "Künefe, baklava ve katmer: Gaziantep usulü, gerçek Antep fıstığıyla."}
            </motion.p>
          </AnimatePresence>
          <p className="shrink-0 text-[0.95rem]">Fiyatlar şubeye göre değişir; güncel fiyat için şubenizi arayın.</p>
        </div>

        <motion.ul layout className="mt-10 grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout" initial={false}>
            {list.map((p, i) => (
              <motion.li
                key={p.slug}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4 }}
                className={i === 0 ? "col-span-2 sm:col-span-1" : ""}
              >
                <Link href={`/menu/${p.slug}/`} className="group block" aria-label={`${p.name}, ${catLabel[p.category]}: detayları gör`}>
                  <div className="overflow-hidden rounded-[2px]">
                    <Photo
                      src={p.image}
                      alt=""
                      sizes="(min-width: 1280px) 18rem, (min-width: 1024px) 30vw, 45vw"
                      className={i === 0 ? "aspect-[4/3] sm:aspect-square" : "aspect-square"}
                      imgClassName="transition-transform duration-700 ease-[var(--ease-soft)] group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="mt-3 sm:mt-5">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className={`leading-tight ${i === 0 ? "text-[1.9rem]" : "text-[1.3rem]"} sm:text-[1.6rem]`}>{p.name}</h3>
                      <span className="hidden shrink-0 text-[0.78rem] font-bold uppercase tracking-[0.16em] text-pistachio sm:inline">
                        {catLabel[p.category]}
                      </span>
                    </div>
                    <p className={`mt-2 line-clamp-2 text-[1.05rem] leading-snug text-muted ${i === 0 ? "" : "hidden sm:block"}`}>{p.description}</p>
                    <div className="mt-2 flex items-center justify-between gap-3 sm:mt-4 sm:border-t sm:border-line sm:pt-3">
                      {typeof p.price === "number" && (
                        <span className="font-bold">{new Intl.NumberFormat("tr-TR").format(p.price)} ₺</span>
                      )}
                      <span className="inline-flex items-center gap-1.5 text-[0.98rem] font-bold sm:h-9 sm:border sm:border-choco/70 sm:px-3 sm:transition-colors sm:duration-200 sm:group-hover:bg-choco sm:group-hover:text-paper">
                        Detay <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.li>
            ))}
            <motion.li key={`cta-${active}`} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={ctaSpan(list.length)}>
              <div className="@container flex h-full min-h-56 bg-choco p-5 text-cream sm:p-8">
                <div className="flex w-full flex-col justify-between gap-6 @lg:flex-row @lg:items-end">
                  <p className="font-display text-[clamp(1.7rem,2.6vw,2.3rem)] leading-[1.05] text-paper">
                    Canınız hangisini <span className="display-italic text-pistachio-soft">çekti?</span>
                  </p>
                  <Link
                    href="/subeler/"
                    className="group inline-flex h-12 shrink-0 items-center justify-between gap-4 self-stretch bg-pistachio-soft px-4 font-bold text-choco-deep transition-colors duration-200 hover:bg-paper @2xs:gap-6 @2xs:self-start @2xs:px-5 @lg:self-auto"
                  >
                    <span className="@2xs:hidden">Şube bul</span>
                    <span className="hidden @2xs:inline">En yakın şubeyi bul</span>
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.li>
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}
