import type { Metadata } from "next";
import { site } from "@/config/site";
import { globalFaqs } from "@/config/faqs";
import { reviews } from "@/config/reviews";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { HowItWorksBand } from "@/components/sections/HowItWorksBand";
import { StatsBand } from "@/components/sections/StatsBand";
import { CrewSection } from "@/components/sections/CrewSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ServiceAreasGrid } from "@/components/sections/ServiceAreasGrid";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

// Brand name comes from the layout title template — don't duplicate it here.
export const metadata: Metadata = buildMetadata({
  title: `24/7 Water, Fire & Mold Restoration in ${site.address.city}, ${site.address.state}`,
  description: site.description,
  path: "/",
});

/**
 * Section order = conversion psychology (docs/02-conversion-strategy.md):
 * act now → validate → identify → de-risk → prove → localize → close.
 * Kept intentionally short: every section earns its place or it's cut.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <StatsBand />
      <ServicesGrid />
      <HowItWorksBand />
      <CrewSection />
      <BeforeAfterSection />
      <ReviewsSection reviews={[...reviews]} />
      <ServiceAreasGrid />
      <FAQSection faqs={globalFaqs.slice(0, 6)} />
      <FinalCTA />
    </>
  );
}
