/**
 * GLOBAL FAQs — homepage + /faq. Service-specific FAQs live in services.ts.
 * Written to sweep the real objections: speed, cost, insurance, safety, trust.
 */

export interface Faq {
  q: string;
  a: string;
}

export const globalFaqs: Faq[] = [
  {
    q: "How quickly can you get to my home?",
    a: "Our average emergency response across Greater Austin is 60 minutes, 24/7 — including nights, weekends, and holidays. When you call, a dispatcher (a person, not a menu) confirms a realistic arrival window for your address before you hang up.",
  },
  {
    q: "How much does restoration cost?",
    a: "It depends on the damage, which is why assessments and estimates are free and itemized. For covered losses, your insurer pays us directly and your out-of-pocket cost is typically your deductible. We put pricing in writing before work begins — no surprises on the final invoice.",
  },
  {
    q: "Do you work with my insurance company?",
    a: "Yes — with all major carriers. We photograph and document everything, prepare industry-standard (Xactimate) estimates adjusters expect, and bill your insurer directly. One thing to be clear about: we work for you, not the insurance company.",
  },
  {
    q: "Are you licensed and certified?",
    a: "Yes. We're an IICRC-certified firm, licensed for mold remediation in Texas, and fully insured. Every technician is IICRC-trained and background-checked. Our license number is in the footer of this site — feel free to verify it.",
  },
  {
    q: "Do I need to leave my home during the work?",
    a: "Usually not. Most water and mold jobs let you stay while equipment runs in contained areas. Where conditions genuinely make staying unsafe — major fire damage, whole-home contamination — we tell you directly and document it for your policy's loss-of-use coverage.",
  },
  {
    q: "How long does the process take?",
    a: "Typical structural drying runs 3–5 days; mold remediation 1–5 days depending on spread; fire restoration ranges from days to weeks by severity. You get a written timeline after assessment, updated as readings come in — you'll always know what day you're on and what's next.",
  },
  {
    q: "What should I do while I wait for the crew?",
    a: "The dispatcher will walk you through the immediate steps for your exact situation — shutting off water, cutting power to wet rooms, what to move and what not to touch. Every service page on this site also has a 'do this right now' checklist.",
  },
  {
    q: "Do you guarantee your work?",
    a: "Yes — in writing. Drying is verified with calibrated moisture meters, mold clearance can be confirmed by independent third-party testing, and our workmanship is warrantied. If something isn't right, we come back and make it right.",
  },
];
