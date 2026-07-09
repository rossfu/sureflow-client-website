/**
 * REVIEWS CONFIG — replace with the client's REAL reviews before launch.
 * Specific outcomes convert; hype doesn't. Keep name + neighborhood + service.
 * Only enable site.rating.showSchema once these are real.
 */

export interface Review {
  name: string;
  location: string;
  citySlug: string;
  serviceSlug: string;
  rating: 5 | 4;
  date: string;
  text: string;
}

export const reviews: Review[] = [
  {
    name: "Rachel M.",
    location: "West University, Houston",
    citySlug: "houston-tx",
    serviceSlug: "water-damage-restoration",
    rating: 5,
    date: "2026-03",
    text: "Water heater let go at 11pm on a Sunday. A real person answered on the second ring, and the crew was in my driveway in 40 minutes. They had the water stopped and extraction running before midnight — and the moisture readings they left me matched what the adjuster asked for exactly.",
  },
  {
    name: "David & Priya K.",
    location: "Cinco Ranch, Katy",
    citySlug: "katy-tx",
    serviceSlug: "water-damage-restoration",
    rating: 5,
    date: "2026-01",
    text: "A washing machine line flooded half our downstairs while we were at work. They walked me through shutting off the main over the phone before they even arrived. Four days of drying, zero mold, and they dealt with State Farm directly — I never filled out a single form.",
  },
  {
    name: "Tom H.",
    location: "Sterling Ridge, The Woodlands",
    citySlug: "the-woodlands-tx",
    serviceSlug: "storm-damage-restoration",
    rating: 5,
    date: "2025-11",
    text: "Hail punched through our roof in the April storm. They tarped it the same afternoon while every other company quoted me 'next week.' The rain that came two days later would have destroyed the ceiling. Repairs done in three weeks, one point of contact the whole time.",
  },
  {
    name: "Angela R.",
    location: "Telfair, Sugar Land",
    citySlug: "sugar-land-tx",
    serviceSlug: "mold-remediation",
    rating: 5,
    date: "2026-02",
    text: "Found mold behind a bathroom vanity and panicked. They didn't upsell me — the tech actually showed me the leaking valve that caused it and explained what needed removal versus what just needed cleaning. Independent air test after the work came back clear.",
  },
  {
    name: "Marcus T.",
    location: "The Heights, Houston",
    citySlug: "houston-tx",
    serviceSlug: "fire-damage-restoration",
    rating: 5,
    date: "2025-09",
    text: "Kitchen fire — small flames, unbelievable smoke. They boarded the window that night and started soot removal the next morning. Six months later there is genuinely zero smell. The contents team even saved my grandmother's photographs. I didn't expect that.",
  },
  {
    name: "Jennifer L.",
    location: "Shadow Creek Ranch, Pearland",
    citySlug: "pearland-tx",
    serviceSlug: "sewage-cleanup",
    rating: 5,
    date: "2026-04",
    text: "Main line backed up into two bathrooms and the hallway. Disgusting, and I was 8 months pregnant. The crew was suited up and working within the hour, sealed off the area, and explained exactly what had to go and why. It felt handled — that's the only word for it.",
  },
  {
    name: "Robert C.",
    location: "Bridgeland, Cypress",
    citySlug: "cypress-tx",
    serviceSlug: "water-damage-restoration",
    rating: 5,
    date: "2025-12",
    text: "Upstairs laundry room, failed supply fitting, water through the ceiling. What sold me: the estimator found moisture in a wall two rooms away with the thermal camera that I'd never have caught. That wall is why I don't have a mold problem today.",
  },
  {
    name: "Sandra W.",
    location: "First Colony, Sugar Land",
    citySlug: "sugar-land-tx",
    serviceSlug: "biohazard-cleanup",
    rating: 5,
    date: "2025-10",
    text: "After my brother passed unattended, I couldn't face the room. They came in an unmarked van, were unfailingly kind, and handled everything including the insurance call. I never had to see it again. I hope no one needs this service, but if you do — these are the people.",
  },
  {
    name: "Luis & Carmen O.",
    location: "Meyerland, Houston",
    citySlug: "houston-tx",
    serviceSlug: "storm-damage-restoration",
    rating: 5,
    date: "2026-05",
    text: "Flash flood put four inches of water through our first floor. They ran three trucks that night across the neighborhood and still got to us by 1am. Honest about what the flood policy would and wouldn't cover before work started — nobody else led with that.",
  },
];

export function reviewsForCity(citySlug: string): Review[] {
  return reviews.filter((r) => r.citySlug === citySlug);
}

export function reviewsForService(serviceSlug: string): Review[] {
  return reviews.filter((r) => r.serviceSlug === serviceSlug);
}
