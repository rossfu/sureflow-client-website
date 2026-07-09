import type { Metadata } from "next";
import { site } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { MiniHero } from "@/components/sections/MiniHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = buildMetadata({
  title: `Restoration Services in ${site.serviceRegion} — Water, Fire, Mold & More`,
  description: `Six certified emergency restoration services across ${site.serviceRegion}: water, fire & smoke, mold, storm, sewage, and biohazard. 24/7 response, insurance billed direct.`,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <MiniHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
        title="One team. Every kind of damage."
        intro={`On-site in ${site.responseTimeMinutes} minutes. Insurance billed direct.`}
      />
      <ServicesGrid eyebrow="All Services" title="Pick your situation" />
      <FinalCTA />
    </>
  );
}
