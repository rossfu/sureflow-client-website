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
  /** e.g. "Austin, TX" */
  label: string;
  neighborhoods: string[];
  /** Local risk/context sentence used in city + combo page intros */
  localNote: string;
  /** Where crews stage / response context for this city */
  responseNote: string;
}

export const cities: City[] = [
  {
    slug: "austin-tx",
    name: "Austin",
    state: "TX",
    label: "Austin, TX",
    neighborhoods: [
      "Downtown",
      "Hyde Park",
      "Tarrytown",
      "Mueller",
      "Zilker",
      "Circle C Ranch",
      "Northwest Hills",
      "East Austin",
    ],
    localNote: "Old homes and flash floods mean water problems show up differently across Austin.",
    responseNote: "Our crews are based off US-290 and stage on both sides of the river all day.",
  },
  {
    slug: "round-rock-tx",
    name: "Round Rock",
    state: "TX",
    label: "Round Rock, TX",
    neighborhoods: ["Forest Creek", "Teravista", "Behrens Ranch", "Stone Oak", "Sonoma", "Walsh Ranch"],
    localNote: "Older pipes and water heaters here are starting to fail, causing flooded floors.",
    responseNote: "A crew stages off I-35 and SH-45. Most Round Rock calls get a 35-minute arrival.",
  },
  {
    slug: "cedar-park-tx",
    name: "Cedar Park",
    state: "TX",
    label: "Cedar Park, TX",
    neighborhoods: ["Buttercup Creek", "Anderson Mill West", "Cypress Canyon", "Ranch at Brushy Creek", "Twin Creeks"],
    localNote: "Hail and fast storms make roof leaks the most common call we get here.",
    responseNote: "Crews cover Cedar Park from the 183A corridor, usually arriving in 30–45 minutes.",
  },
  {
    slug: "georgetown-tx",
    name: "Georgetown",
    state: "TX",
    label: "Georgetown, TX",
    neighborhoods: ["Sun City", "Berry Creek", "Wolf Ranch", "Old Town", "Teravista North"],
    localNote: "Long plumbing runs here hide slow leaks, so we bring thermal cameras to every job.",
    responseNote: "A northern crew off I-35 handles Georgetown, usually within 45 minutes.",
  },
  {
    slug: "pflugerville-tx",
    name: "Pflugerville",
    state: "TX",
    label: "Pflugerville, TX",
    neighborhoods: ["Falcon Pointe", "Blackhawk", "Avalon", "Highland Park", "Villages of Hidden Lake"],
    localNote: "Shifting soil here stresses slab plumbing, so slab leaks are the most common call.",
    responseNote: "Crews reach most Pflugerville homes in 30–40 minutes via SH-130 and SH-45.",
  },
  {
    slug: "leander-tx",
    name: "Leander",
    state: "TX",
    label: "Leander, TX",
    neighborhoods: ["Crystal Falls", "Travisso", "Bryson", "Summerlyn", "Mason Hills"],
    localNote: "Newer homes here often have builder-grade water heaters that fail early.",
    responseNote: "Leander calls dispatch from our 183A corridor crew, usually within 45 minutes.",
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
