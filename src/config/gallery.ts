/**
 * GALLERY CONFIG — replace placeholder SVGs in /public/images with real
 * project photography (same filenames = zero code changes).
 */

export interface GalleryItem {
  before: string;
  after: string;
  title: string;
  location: string;
  serviceSlug: string;
  description: string;
}

export const gallery: GalleryItem[] = [
  {
    before: "/images/before-1.svg",
    after: "/images/after-1.svg",
    title: "Burst pipe — living room & hallway",
    location: "West University, Houston",
    serviceSlug: "water-damage-restoration",
    description: "Overnight supply-line failure. Extracted, dried in 4 days, drywall and flooring restored.",
  },
  {
    before: "/images/before-2.svg",
    after: "/images/after-2.svg",
    title: "Kitchen fire & smoke damage",
    location: "The Heights, Houston",
    serviceSlug: "fire-damage-restoration",
    description: "Cabinet fire with whole-home smoke. Soot neutralized, odor eliminated, kitchen rebuilt.",
  },
  {
    before: "/images/before-3.svg",
    after: "/images/after-3.svg",
    title: "Bathroom mold remediation",
    location: "Telfair, Sugar Land",
    serviceSlug: "mold-remediation",
    description: "Hidden valve leak fed growth behind the vanity. Contained, removed, source repaired, clearance passed.",
  },
  {
    before: "/images/before-4.svg",
    after: "/images/after-4.svg",
    title: "Storm damage — roof & ceiling",
    location: "Sterling Ridge, The Woodlands",
    serviceSlug: "storm-damage-restoration",
    description: "Hail breach tarped same-day; interior dried and ceiling restored after the storm system passed.",
  },
  {
    before: "/images/before-5.svg",
    after: "/images/after-5.svg",
    title: "Sewage backup — two bathrooms",
    location: "Shadow Creek Ranch, Pearland",
    serviceSlug: "sewage-cleanup",
    description: "Category 3 main-line backup. Extracted under containment, disinfected, verified, and rebuilt.",
  },
  {
    before: "/images/before-6.svg",
    after: "/images/after-6.svg",
    title: "Flood recovery — first floor",
    location: "Meyerland, Houston",
    serviceSlug: "storm-damage-restoration",
    description: "Flash-flood intrusion across 900 sq ft. Contents packed out, structure dried, floors replaced.",
  },
];
