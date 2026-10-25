import Link from "next/link";

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <article className="pb-24">
      <div className="shell pt-8 lg:pt-12">
        <nav aria-label="Sayfa konumu" className="text-[0.95rem] text-muted">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="hover:text-choco">Ana Sayfa</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-bold text-choco">{title}</li>
          </ol>
        </nav>
        <h1 className="mt-8 max-w-4xl text-[clamp(2.6rem,7vw,5rem)] leading-[0.95]">{title}</h1>
        <p className="mt-5 text-muted">Son güncelleme: {updated}</p>
      </div>
      <div className="shell mt-12 grid lg:grid-cols-[1fr_44rem_1fr]">
        <div className="legal max-w-[44rem] text-[1.12rem] leading-relaxed text-choco lg:col-start-2 [&_a]:font-bold [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mb-3 [&_h2]:mt-12 [&_h2]:text-[1.9rem] [&_li]:mt-2 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-[square] [&_ul]:pl-6 [&_ul]:marker:text-pistachio">
          {children}
        </div>
      </div>
    </article>
  );
}
