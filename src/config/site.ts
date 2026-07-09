/**
 * SITE CONFIG — the single source of truth for branding and business facts.
 * Rebranding a client: edit this file + the @theme block in globals.css +
 * replace /public/images. Components never need to change.
 *
 * All demo values below are placeholders (555 phone, fictional company).
 */

export const site = {
  name: "SureFlow Restoration",
  legalName: "SureFlow Restoration LLC",
  tagline: "Water. Fire. Mold. Fixed fast.",
  description:
    "24/7 emergency water, fire, and mold cleanup in Greater Houston, TX. We arrive in 60 minutes. Licensed, certified, and we bill your insurance directly.",

  /** Canonical URL — set NEXT_PUBLIC_SITE_URL in production */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sureflowrestoration.com",

  phone: "(713) 555-0134",
  /** E.164 for tel: links and schema */
  phoneE164: "+17135550134",
  email: "help@sureflowrestoration.com",

  address: {
    street: "4006 Dumbarton St",
    city: "Houston",
    state: "TX",
    zip: "77025",
    country: "US",
  },
  geo: { lat: 29.7075, lng: -95.4194 },

  hoursLabel: "Open 24/7 — nights, weekends, holidays",
  responseTimeMinutes: 60,
  serviceRegion: "Greater Houston, TX",
  foundedYear: 2009,

  /** Quantified authority — shown in StatsBand and hero promise card */
  stats: [
    { value: "60 min", label: "Average time to arrive" },
    { value: "4,800+", label: "Homes fixed since 2009" },
    { value: "4.9★", label: "Rating from 312 reviews" },
    { value: "100%", label: "Certified crew" },
  ],

  rating: {
    value: 4.9,
    count: 312,
    /**
     * COMPLIANCE GATE: only set true once reviews.ts contains this client's
     * real reviews. Emits AggregateRating schema on /reviews.
     */
    showSchema: false,
  },

  certifications: [
    "IICRC Certified",
    "Licensed & Insured",
    "EPA Lead-Safe Certified",
    "BBB A+ Rated",
  ],
  license: "TX Mold Remediation Contractor License #MRC-0000 (placeholder)",

  insurers: ["State Farm", "Allstate", "USAA", "Farmers", "Liberty Mutual", "Travelers"],

  social: {
    google: "https://g.page/example",
    facebook: "https://facebook.com/example",
    instagram: "https://instagram.com/example",
  },

  /** Differentiators — WhyUs section */
  whyUs: [
    {
      icon: "clock",
      title: "We arrive in 60 minutes",
      body: "Day or night. Weekends and holidays too. A real person answers and sends help now.",
    },
    {
      icon: "file-check",
      title: "We deal with your insurance",
      body: "We send photos and paperwork straight to your adjuster. You don't have to.",
    },
    {
      icon: "badge-check",
      title: "Trained, background-checked crew",
      body: "Every tech is certified and checked before they walk into your home.",
    },
    {
      icon: "scan-search",
      title: "We find hidden damage",
      body: "We use moisture sensors and thermal cameras on every job. Hidden water becomes mold.",
    },
    {
      icon: "shield-check",
      title: "No surprise bills",
      body: "We give you a price in writing before we start. Simple as that.",
    },
    {
      icon: "home",
      title: "One crew, start to finish",
      body: "The same team handles cleanup and repairs. No handoffs, no confusion.",
    },
  ],

  /** The 4-step process — shown site-wide */
  process: [
    {
      title: "Call us",
      body: "A real person answers. We send a crew while you're still on the phone.",
    },
    {
      title: "We arrive fast",
      body: "On-site in about 60 minutes. We stop the damage and explain what's next.",
    },
    {
      title: "We check everything",
      body: "We find all the damage, even what you can't see, and write it down for your claim.",
    },
    {
      title: "We fix it",
      body: "We clean, dry, and repair your home. We handle your insurance claim too.",
    },
  ],
} as const;

export type Site = typeof site;
