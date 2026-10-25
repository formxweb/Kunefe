import type { Metadata, Viewport } from "next";
import { Alegreya_Sans, Fraunces } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/MotionProvider";
import { site } from "@/lib/data";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const alegreya = Alegreya_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-alegreya",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Antephan Künefe | Gaziantep’ten Gelen Özel Lezzet",
    template: "%s | Antephan Künefe",
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: site.name,
    title: "Antephan Künefe | Her Lokmada Antep’in İmzası",
    description: site.description,
    images: [{ url: `${site.url}/images/brand/og.jpg`, width: 1200, height: 630, alt: "Antephan Künefe" }],
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
  robots: site.noindex ? { index: false, follow: false } : undefined,
};

export const viewport: Viewport = {
  themeColor: "#f3ebdd",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${fraunces.variable} ${alegreya.variable}`}>
      <body className="min-h-dvh">
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important;clip-path:none!important}`}</style>
        </noscript>
        <a
          href="#icerik"
          className="sr-only z-[100] bg-choco px-4 py-3 font-bold text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          İçeriğe geç
        </a>
        <MotionProvider>
          <Header />
          <main id="icerik">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
