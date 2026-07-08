import type { Metadata } from "next";
import { site } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { MiniHero } from "@/components/sections/MiniHero";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = buildMetadata({
  title: "Before & After Gallery — Real Restoration Projects",
  description: `Drag-to-compare before and after photos from real ${site.serviceRegion} restoration projects: water, fire, mold, storm, and sewage recoveries by ${site.name}.`,
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <MiniHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ]}
        title="Before and after — drag the sliders yourself"
        intro="Every project is photographed start to finish, partly for the insurance file and partly because this page makes a better argument than any headline could. These are real local jobs, not stock photos."
      />
      <GalleryGrid />
      <FinalCTA
        title="Your 'before' photo doesn't have to be the end of the story."
      />
    </>
  );
}
