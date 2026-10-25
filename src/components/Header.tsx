"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { ArrowRight, CloseIcon, InstagramIcon, MailIcon } from "./icons";
import { site } from "@/lib/data";

const nav = [
  { href: "/", label: "Ana Sayfa", match: (p: string) => p === "/" },
  { href: "/#menumuz", label: "Menümüz", match: (p: string) => p.startsWith("/menu") },
  { href: "/#hakkimizda", label: "Hakkımızda", match: () => false },
  { href: "/subeler/", label: "Şubelerimiz", match: (p: string) => p.startsWith("/subeler") },
  { href: "#iletisim", label: "İletişim", match: () => false },
];

export function Header() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [panelTop, setPanelTop] = useState(0);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLElement>(null);

  // Sayfa değişince menüyü kapat
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && panelRef.current && toggleRef.current) {
        const items = [toggleRef.current, ...panelRef.current.querySelectorAll<HTMLElement>("a, button")];
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div className="bg-choco text-cream">
        <p className="shell flex h-9 items-center justify-center whitespace-nowrap text-center text-[0.64rem] font-bold uppercase tracking-[0.14em] xs:text-[0.7rem] xs:tracking-[0.2em] sm:text-[0.78rem] sm:tracking-[0.24em]">
          Gaziantep Lezzet Geleneği <span className="mx-2 text-ember-soft sm:mx-3" aria-hidden="true">•</span> Antephan Künefe
        </p>
      </div>

      <header ref={barRef} className="sticky top-0 z-50 border-b border-line bg-cream">
        <div className="shell flex h-[4.5rem] items-center justify-between gap-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <Link href="/" className="justify-self-start" aria-label="Antephan Künefe ana sayfa">
            <Logo size="sm" />
          </Link>

          <nav aria-label="Ana menü" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => {
                const active = item.match(pathname);
                const cls = `relative inline-flex h-11 items-center px-4 text-[1.02rem] font-medium transition-colors duration-200 ${
                  active ? "text-choco" : "text-muted hover:text-choco"
                }`;
                const content = (
                  <>
                    {item.label}
                    {active && (
                      <span
                        aria-hidden="true"
                        className="absolute bottom-1.5 left-1/2 h-[5px] w-[5px] -translate-x-1/2 rotate-45 bg-ember-bright"
                      />
                    )}
                  </>
                );
                return (
                  <li key={item.href}>
                    {item.href.startsWith("#") ? (
                      <a href={item.href} className={cls}>{content}</a>
                    ) : (
                      <Link href={item.href} className={cls} aria-current={active ? "page" : undefined}>
                        {content}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2 justify-self-end">
            <Link
              href="/#menumuz"
              className="group hidden h-11 items-center gap-2 rounded-[3px] bg-pistachio px-5 text-[1rem] font-bold text-paper transition-colors duration-200 hover:bg-pistachio-deep sm:inline-flex"
            >
              Menüyü İncele
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <button
              ref={toggleRef}
              type="button"
              className="inline-flex h-11 items-center gap-2.5 px-2 text-[1rem] font-bold text-choco lg:hidden"
              aria-expanded={open}
              aria-controls="mobil-menu"
              onClick={() => {
                setPanelTop(barRef.current?.getBoundingClientRect().bottom ?? 0);
                setOpen((v) => !v);
              }}
            >
              <span>{open ? "Kapat" : "Menü"}</span>
              {open ? (
                <CloseIcon size={22} />
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M3 8h18M9 16h12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobil-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menüsü"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{ top: panelTop }}
            className="fixed inset-x-0 bottom-0 z-40 flex flex-col overflow-y-auto bg-cream-deep lg:hidden"
          >
            <nav aria-label="Mobil menü" className="shell flex-1 pt-6">
              <ol className="border-t border-line">
                {nav.map((item, i) => {
                  const active = item.match(pathname);
                  const cls = "flex items-baseline gap-5 border-b border-line py-5";
                  const inner = (
                    <>
                      <span className="w-7 font-sans text-sm font-bold text-ember">{String(i + 1).padStart(2, "0")}</span>
                      <span className={`font-display text-[2.4rem] leading-none ${active ? "display-italic text-pistachio" : ""}`}>
                        {item.label}
                      </span>
                    </>
                  );
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.12 + i * 0.05, duration: 0.5 }}
                    >
                      {item.href.startsWith("#") ? (
                        <a href={item.href} className={cls} onClick={() => setOpen(false)}>{inner}</a>
                      ) : (
                        <Link href={item.href} className={cls} onClick={() => setOpen(false)} aria-current={active ? "page" : undefined}>
                          {inner}
                        </Link>
                      )}
                    </motion.li>
                  );
                })}
              </ol>
            </nav>
            <div className="shell grid gap-3 pb-8 pt-8">
              <Link
                href="/subeler/"
                className="flex h-14 items-center justify-between bg-choco px-5 text-lg font-bold text-paper"
                onClick={() => setOpen(false)}
              >
                Size en yakın şubeyi bulun
                <ArrowRight />
              </Link>
              <div className="flex gap-3">
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="flex h-12 flex-1 items-center justify-center gap-2 border border-choco/30 font-bold">
                  <InstagramIcon size={18} /> Instagram
                </a>
                <a href={`mailto:${site.email}`} className="flex h-12 flex-1 items-center justify-center gap-2 border border-choco/30 font-bold">
                  <MailIcon size={18} /> E-posta
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
