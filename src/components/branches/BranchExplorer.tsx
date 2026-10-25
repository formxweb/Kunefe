"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Photo } from "../Photo";
import { ArrowRight, PhoneIcon, PinIcon, SearchIcon } from "../icons";
import { BranchPlaceholder } from "./BranchPlaceholder";
import {
  branches,
  directionsUrl,
  getRegion,
  regions,
  telHref,
  type Branch,
  type RegionId,
} from "@/lib/data";
import { normalize } from "@/lib/text";

type Filter = "tumu" | RegionId;

const isRegion = (v: string | null): v is RegionId => !!v && regions.some((r) => r.id === v);

const index = branches.map((b) => ({
  branch: b,
  haystack: normalize([b.name, b.district, b.city, b.address, getRegion(b.region).label].join(" ")),
}));

export function BranchExplorer() {
  // Sunucuda tüm şubeler hazır gelir; adresteki filtre yüklendikten sonra uygulanır
  const [region, setRegion] = useState<Filter>("tumu");
  const [query, setQuery] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const r = params.get("bolge");
    if (isRegion(r)) setRegion(r);
    setQuery(params.get("q") ?? "");
    setReady(true);
  }, []);

  // Filtreyi adres çubuğuna yaz: bağlantı paylaşılabilir olsun
  useEffect(() => {
    if (!ready) return;
    const url = new URL(window.location.href);
    if (region === "tumu") url.searchParams.delete("bolge");
    else url.searchParams.set("bolge", region);
    if (query.trim()) url.searchParams.set("q", query.trim());
    else url.searchParams.delete("q");
    window.history.replaceState(window.history.state, "", url.pathname + url.search + url.hash);
  }, [region, query, ready]);

  const groups = useMemo(() => {
    const terms = normalize(query.trim()).split(/\s+/).filter(Boolean);
    const matches = index
      .filter(({ branch, haystack }) =>
        (region === "tumu" || branch.region === region) && terms.every((t) => haystack.includes(t))
      )
      .map(({ branch }) => branch);
    return regions
      .map((r) => ({
        region: r,
        items: matches.filter((b) => b.region === r.id).sort((a, b) => a.name.localeCompare(b.name, "tr")),
      }))
      .filter((g) => g.items.length > 0);
  }, [region, query]);

  const total = groups.reduce((n, g) => n + g.items.length, 0);

  const reset = () => {
    setRegion("tumu");
    setQuery("");
  };

  return (
    <div>
      <div className="sticky top-[4.5rem] z-30 border-b border-line bg-cream">
        <div className="shell grid gap-3 py-4 lg:grid-cols-[17rem_1fr] lg:items-center lg:gap-6">
          <label className="relative block">
            <span className="sr-only">Şube, semt veya ilçe ara</span>
            <SearchIcon size={20} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Şube, semt veya ilçe ara"
              autoComplete="off"
              className="h-12 w-full rounded-[2px] border-[1.5px] border-line bg-paper pl-12 pr-4 text-[1.05rem] text-choco placeholder:text-muted/80 focus:border-pistachio focus:outline-none"
            />
          </label>
          <div role="group" aria-label="Bölgeye göre filtrele" className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:flex-wrap lg:px-0">
            {[{ id: "tumu" as Filter, short: "Tümü" }, ...regions].map((r) => {
              const on = region === r.id;
              const count = r.id === "tumu" ? branches.length : branches.filter((b) => b.region === r.id).length;
              return (
                <button
                  key={r.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setRegion(r.id)}
                  className={`inline-flex h-11 shrink-0 items-center gap-2 rounded-full border-[1.5px] px-3.5 text-[0.98rem] font-bold transition-colors duration-200 ${
                    on ? "border-choco bg-choco text-paper" : "border-line bg-paper text-choco hover:border-choco/50"
                  }`}
                >
                  {r.short}
                  <span className={`text-[0.82rem] tabular-nums ${on ? "text-pistachio-soft" : "text-muted"}`}>{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="shell pb-24 pt-8">
        <p aria-live="polite" className="text-[1rem] font-bold text-muted">
          {total === branches.length ? `${total} şubenin tamamı listeleniyor` : `${total} şube bulundu`}
        </p>

        {total === 0 && (
          <div className="mt-8 border border-dashed border-line px-6 py-14 text-center">
            <p className="font-display text-[1.8rem]">Bu aramayla eşleşen şube yok.</p>
            <p className="mt-2 text-muted">Semt ya da ilçe adını farklı yazmayı deneyin.</p>
            <button type="button" onClick={reset} className="mt-6 inline-flex h-12 items-center border-[1.5px] border-choco px-5 font-bold hover:bg-choco hover:text-paper">
              Aramayı temizle
            </button>
          </div>
        )}

        <AnimatePresence initial={false}>
          {groups.map((g) => (
            <motion.section
              key={g.region.id}
              layout="position"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              aria-labelledby={`bolge-${g.region.id}`}
              className="mt-12 first-of-type:mt-8"
            >
              <h2 id={`bolge-${g.region.id}`} className="flex items-baseline gap-3 border-b-2 border-choco pb-3 text-[clamp(1.8rem,3.4vw,2.6rem)]">
                {g.region.label}
                <span className="font-sans text-[1rem] font-bold text-ember">{g.items.length} şube</span>
              </h2>
              <ul className="mt-6 grid gap-5 md:grid-cols-2 md:gap-6">
                {g.items.map((b) => (
                  <BranchCard key={b.slug} branch={b} />
                ))}
              </ul>
            </motion.section>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

function BranchCard({ branch: b }: { branch: Branch }) {
  const detail = `/subeler/${b.slug}/`;
  return (
    <li className="flex flex-col bg-paper">
      <Link href={detail} tabIndex={-1} aria-hidden="true" className="group block overflow-hidden">
        {b.photo ? (
          <Photo
            src={`/images/branches/${b.slug}.webp`}
            alt=""
            sizes="(min-width: 1312px) 38rem, (min-width: 768px) 46vw, 100vw"
            className="aspect-[1170/435]"
            imgClassName="transition-transform duration-700 ease-[var(--ease-soft)] group-hover:scale-[1.03]"
          />
        ) : (
          <BranchPlaceholder name={b.name} className="aspect-[1170/435]" compact />
        )}
      </Link>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-5 sm:px-7 sm:pb-7">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h3 className="text-[2rem] leading-none">
            <Link href={detail} className="hover:text-pistachio">
              <span className="sr-only">Antephan Künefe </span>
              {b.name}
            </Link>
          </h3>
          <a href={telHref(b.phone)} className="inline-flex items-center gap-2 text-[1.1rem] font-bold tabular-nums hover:text-pistachio">
            <PhoneIcon size={18} className="text-pistachio" />
            {b.phone}
          </a>
        </div>
        <p className="mt-3 flex gap-2 text-[1.05rem] leading-snug text-muted">
          <PinIcon size={18} className="mt-0.5 shrink-0 text-pistachio" />
          <span>
            {b.address}, {b.district} / {b.city}
          </span>
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
          <a
            href={directionsUrl(b)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-[3px] bg-pistachio px-4 font-bold text-paper transition-colors duration-200 hover:bg-pistachio-deep sm:flex-none"
          >
            <PinIcon size={18} /> Yol tarifi
          </a>
          <a
            href={telHref(b.phone)}
            className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-[3px] border-[1.5px] border-choco/70 px-4 font-bold transition-colors duration-200 hover:bg-choco hover:text-paper sm:flex-none"
          >
            <PhoneIcon size={18} /> Ara
          </a>
          <Link href={detail} className="inline-flex h-11 w-full items-center justify-center gap-2 px-2 font-bold underline-offset-4 hover:underline sm:ml-auto sm:w-auto">
            Şube sayfası <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </li>
  );
}
