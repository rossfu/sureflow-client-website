/**
 * SITE CONFIG — the single source of truth for branding and business facts.
 * Rebranding a client: edit this file + the @theme block in globals.css +
 * replace /public/images. Components never need to change.
 *
 * All demo values below are placeholders (555 phone, fictional company).
 */

export const site = {
  name: "Meridian Restoration",
  legalName: "Meridian Restoration LLC",
  tagline: "Water. Fire. Mold. Restored — fast.",
  description:
    "24/7 emergency water, fire, mold, storm, sewage & biohazard restoration in Greater Austin, TX. On-site in 60 minutes. IICRC-certified, licensed & insured, direct insurance billing.",

  /** Canonical URL — set NEXT_PUBLIC_SITE_URL in production */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.meridianrestoration.com",

  phone: "(512) 555-0134",
  /** E.164 for tel: links and schema */
  phoneE164: "+15125550134",
  email: "help@meridianrestoration.com",

  address: {
    street: "4501 Industrial Oaks Blvd, Suite 200",
    city: "Austin",
    state: "TX",
    zip: "78735",
    country: "US",
  },
  geo: { lat: 30.2672, lng: -97.7431 },

  hoursLabel: "24/7 — nights, weekends & holidays",
  responseTimeMinutes: 60,
  serviceRegion: "Greater Austin, TX",
  foundedYear: 2009,

  /** Quantified authority — shown in StatsBand and hero promise card */
  stats: [
    { value: "60 min", label: "Average emergency response" },
    { value: "4,800+", label: "Properties restored since 2009" },
    { value: "4.9★", label: "Google rating across 312 reviews" },
    { value: "100%", label: "IICRC-certified technicians" },
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
    "IICRC-Certified Firm",
    "Licensed & Fully Insured",
    "EPA Lead-Safe Certified",
    "BBB Accredited — A+",
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
      title: "On-site in 60 minutes, 24/7",
      body: "Crews are staged across the metro around the clock. Nights, weekends, holidays — the person who answers dispatches immediately.",
    },
    {
      icon: "file-check",
      title: "We bill your insurance directly",
      body: "Photo documentation, moisture logs, and itemized Xactimate estimates go straight to your adjuster. You handle recovery; we handle paperwork.",
    },
    {
      icon: "badge-check",
      title: "IICRC-certified, background-checked techs",
      body: "Every technician is certified to industry standards and background-checked before they ever enter a home.",
    },
    {
      icon: "scan-search",
      title: "We find what others miss",
      body: "Thermal imaging and calibrated moisture meters on every job — because the damage you can't see is the damage that becomes mold.",
    },
    {
      icon: "shield-check",
      title: "Straight answers, in writing",
      body: "Free assessments, itemized scopes, and a simple rule: if something can't be saved, we tell you before we bill you.",
    },
    {
      icon: "home",
      title: "One crew, start to finish",
      body: "Mitigation through rebuild with a single point of contact — no handoffs between three subcontractors while your house sits open.",
    },
  ],

  /** The 4-step process — shown site-wide */
  process: [
    {
      title: "Call — a human answers",
      body: "No phone tree, no callback queue. Describe what happened; we dispatch the nearest crew while you're still on the line.",
    },
    {
      title: "On-site within 60 minutes",
      body: "We stop the source, make the property safe, and walk you through exactly what happens next — in plain English.",
    },
    {
      title: "Assess, document, contain",
      body: "Thermal imaging and moisture mapping define the real damage. Every reading is photographed and logged for your insurance claim.",
    },
    {
      title: "Restore — and handle the claim",
      body: "Drying, cleanup, and full repairs by one accountable team, with documentation sent directly to your adjuster.",
    },
  ],
} as const;

export type Site = typeof site;
