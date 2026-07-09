/**
 * SERVICE AREA CONFIG.
 * Adding a city here automatically creates:
 *   /service-areas/[slug] + one /services/[service]/[slug] page per service,
 *   sitemap entries, footer links, and schema areaServed.
 *
 * The per-city fields exist to keep programmatic pages genuinely unique —
 * fill them with real local detail for each client.
 */

export interface City {
  slug: string;
  name: string;
  state: string;
  /** e.g. "Houston, TX" */
  label: string;
  neighborhoods: string[];
  /** Local risk/context sentence used in city + combo page intros */
  localNote: string;
  /** Where crews stage / response context for this city */
  responseNote: string;
}

export const cities: City[] = [
  {
    slug: "houston-tx",
    name: "Houston",
    state: "TX",
    label: "Houston, TX",
    neighborhoods: ["West University", "The Heights", "Montrose", "River Oaks", "Meyerland", "Bellaire", "Memorial"],
    localNote: "Houston's humidity and clay soil make slab leaks and hidden mold the calls we run most.",
    responseNote: "Our HQ is off Buffalo Speedway near West University, with crews staged inside the loop and beyond.",
  },
  {
    slug: "katy-tx",
    name: "Katy",
    state: "TX",
    label: "Katy, TX",
    neighborhoods: ["Cinco Ranch", "Cross Creek Ranch", "Grand Lakes", "Falcon Ranch", "Kelliwood"],
    localNote: "Katy's newer subdivisions still flood fast when neighborhood drainage backs up in heavy rain.",
    responseNote: "Crews stage off I-10 and the Grand Parkway, usually arriving in 35–45 minutes.",
  },
  {
    slug: "sugar-land-tx",
    name: "Sugar Land",
    state: "TX",
    label: "Sugar Land, TX",
    neighborhoods: ["Telfair", "Riverstone", "First Colony", "Greatwood", "New Territory"],
    localNote: "Sugar Land's spot along the Brazos River makes storm-season flooding the top call here.",
    responseNote: "A dedicated crew covers Sugar Land from US-59, typically inside 40 minutes.",
  },
  {
    slug: "the-woodlands-tx",
    name: "The Woodlands",
    state: "TX",
    label: "The Woodlands, TX",
    neighborhoods: ["Alden Bridge", "Sterling Ridge", "Cochran's Crossing", "Grogan's Mill", "Panther Creek"],
    localNote: "Tall pines and heavy storms make fallen-tree roof damage the most common call through The Woodlands.",
    responseNote: "Crews reach The Woodlands via I-45, usually within 45 minutes.",
  },
  {
    slug: "pearland-tx",
    name: "Pearland",
    state: "TX",
    label: "Pearland, TX",
    neighborhoods: ["Shadow Creek Ranch", "Silverlake", "Country Place", "Southdown"],
    localNote: "Pearland's flat, low-lying lots mean standing water after storms is the most common call.",
    responseNote: "A southside crew covers Pearland via SH-288, typically arriving in 30–40 minutes.",
  },
  {
    slug: "cypress-tx",
    name: "Cypress",
    state: "TX",
    label: "Cypress, TX",
    neighborhoods: ["Bridgeland", "Towne Lake", "Fairfield", "Coles Crossing"],
    localNote: "Cypress's rapid growth means new-build plumbing failures are the most common call we run.",
    responseNote: "Crews stage off US-290 and the Grand Parkway, usually arriving in 35–45 minutes.",
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
