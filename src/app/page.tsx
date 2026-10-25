import { Hero } from "@/components/home/Hero";
import { Signature } from "@/components/home/Signature";
import { MenuSection } from "@/components/home/MenuSection";
import { BrandStory } from "@/components/home/BrandStory";
import { BranchesTeaser } from "@/components/home/BranchesTeaser";
import { InstagramGallery } from "@/components/home/InstagramGallery";
import { JsonLd } from "@/components/JsonLd";
import { branches, site } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": `${site.url}/#organization`,
          name: site.name,
          url: `${site.url}/`,
          logo: `${site.url}/images/brand/logo-badge.webp`,
          email: site.email,
          sameAs: [site.instagram],
          department: branches.map((b) => ({ "@type": "Restaurant", name: `Antephan Künefe ${b.name}`, url: `${site.url}/subeler/${b.slug}/` })),
        }}
      />
      <Hero />
      <Signature />
      <MenuSection />
      <BrandStory />
      <BranchesTeaser />
      <InstagramGallery />
    </>
  );
}
