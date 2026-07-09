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
    q: "How fast can you get to my home?",
    a: "About 60 minutes, any time, day or night. A real person answers and tells you the exact time before you hang up.",
  },
  {
    q: "How much does this cost?",
    a: "It depends on the damage. We give you a free, written estimate first. If insurance covers it, we bill them directly. You usually only pay your deductible.",
  },
  {
    q: "Do you work with my insurance company?",
    a: "Yes, with every major carrier. We document everything and bill your insurer directly. We work for you, not them.",
  },
  {
    q: "Are you licensed and certified?",
    a: "Yes. We're certified, licensed, and insured. Every technician is trained and background-checked. Our license number is in the footer.",
  },
  {
    q: "Do I have to leave my home during the work?",
    a: "Usually not. Most jobs let you stay while we work in the affected rooms. If it's not safe, we'll tell you directly.",
  },
  {
    q: "How long does the work take?",
    a: "Drying usually takes 3–5 days. Mold removal takes 1–5 days. Fire repairs can take days to weeks. We give you a written timeline after we assess the damage.",
  },
  {
    q: "What should I do while I wait?",
    a: "We'll walk you through it on the phone: turning off water, cutting power to wet rooms, what to move. Every service page also has a quick checklist.",
  },
  {
    q: "Do you guarantee your work?",
    a: "Yes, in writing. We check drying with meters and back our repairs. If something's not right, we come back and fix it.",
  },
];
