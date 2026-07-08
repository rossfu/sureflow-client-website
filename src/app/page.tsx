import type { Metadata } from "next";
import { site } from "@/config/site";
import { globalFaqs } from "@/config/faqs";
import { reviews } from "@/config/reviews";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { InsuranceCallout } from "@/components/sections/InsuranceCallout";
import { StatsBand } from "@/components/sections/StatsBand";
import { WhyUs } from "@/components/sections/WhyUs";
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
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <ProcessTimeline />
      <InsuranceCallout />
      <StatsBand />
      <WhyUs />
      <BeforeAfterSection />
      <ReviewsSection reviews={[...reviews]} />
      <ServiceAreasGrid />
      <FAQSection faqs