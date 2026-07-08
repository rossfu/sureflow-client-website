import type { Metadata } from "next";
import { site } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { MiniHero } from "@/components/sections/MiniHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { InsuranceCallout } from "@/components/sections/InsuranceCallout";
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
        title="One certified team for every kind of property damage"
        intro={`Water, fire, mold, storm, sewage, biohazard — different emergencies, same standard: on-site in ${site.responseTimeMinutes} minutes, documented for your insurance, restored by IICRC-certified technicians.`}
      />
      <ServicesGrid
        eyebrow="All Services"
        title="Choose your situation"
        lede="Each service page includes a 'do this right now' checklist — useful before you've even decided to call."
      />
      <ProcessTimeline />
      <InsuranceCallout />
      <FinalCTA />
    </>
  );
}
