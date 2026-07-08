import type { Metadata } from "next";
import { site } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { MiniHero } from "@/components/sections/MiniHero";
import { ServiceAreasGrid } from "@/components/sections/ServiceAreasGrid";
import { StatsBand } from "@/components/sections/StatsBand";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = buildMetadata({
  title: `Service Areas — Restoration Crews Across ${site.serviceRegion}`,
  description: `${site.name} serves ${site.serviceRegion} with staged emergency crews and a ${site.responseTimeMinutes}-minute average response: Austin, Round Rock, Cedar Park, Georgetown, Pflugerville, Leander.`,
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
        title={`Emergency restoration across ${site.serviceRegion}`}
        intro={`Response time is the metric that matters in this business, so we don't cover the metro from one garage. Crews stage across the region 24/7 — pick your city to see local coverage, response notes, and neighborhood detail.`}
      />
      <ServiceAreasGrid />
      <StatsBand />
      <FinalCTA />
    </>
  );
}
