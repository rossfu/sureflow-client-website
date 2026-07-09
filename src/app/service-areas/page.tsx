import type { Metadata } from "next";
import { site } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { MiniHero } from "@/components/sections/MiniHero";
import { ServiceAreasGrid } from "@/components/sections/ServiceAreasGrid";
import { StatsBand } from "@/components/sections/StatsBand";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = buildMetadata({
  title: `Service Areas — Restoration Crews Across ${site.serviceRegion}`,
  description: `${site.name} serves ${site.serviceRegion} with staged emergency crews and a ${site.responseTimeMinutes}-minute average response: Houston, Katy, Sugar Land, The Woodlands, Pearland, Cypress.`,
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <>
      <MiniHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
        ]}
        title={`We cover ${site.serviceRegion}`}
        intro="Pick your city for local coverage and response times."
      />
      <ServiceAreasGrid />
      <StatsBand />
      <FinalCTA />
    </>
  );
}
