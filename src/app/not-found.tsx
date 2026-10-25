import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="eyebrow text-ember">404</p>
      <h1 className="mt-4 text-[clamp(2.8rem,8vw,5.5rem)] leading-[0.95]">
        Bu sayfa <span className="display-italic text-pistachio">tepside kalmış.</span>
      </h1>
      <p className="mt-6 max-w-md text-[1.2rem] text-muted">Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir.</p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="inline-flex h-14 items-center gap-6 rounded-[3px] bg-pistachio px-6 font-bold text-paper hover:bg-pistachio-deep">
          Ana sayfaya dön <ArrowRight />
        </Link>
        <Link href="/subeler/" className="inline-flex h-14 items-center rounded-[3px] border-[1.5px] border-choco px-6 font-bold hover:bg-choco hover:text-paper">
          Şubelerimiz
        </Link>
      </div>
    </section>
  );
}
