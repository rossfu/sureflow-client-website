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
    localNote:
      "Austin's mix of 1930s pier-and-beam homes and new slab-on-grade builds means water travels differently in every house — flash-flood season and aging galvanized supply lines drive most of the calls we run here.",
    responseNote:
      "Our headquarters is off US-290 in Southwest Austin, with crews staged north and south of the river around the clock.",
  },
  {
    slug: "round-rock-tx",
    name: "Round Rock",
    state: "TX",
    label: "Round Rock, TX",
    neighborhoods: [
      "Forest Creek",
      "Teravista",
      "Behrens Ranch",
      "Stone Oak",
      "Sonoma",
      "Walsh Ranch",
    ],
    localNote:
      "Round Rock's 1990s–2000s housing stock is hitting the age where PEX fittings, water heaters, and washing-machine lines fail — most of our calls here are supply-line floods caught hours too late.",
    responseNote:
      "A dedicated crew stages off I-35 and SH-45, putting most Round Rock addresses inside a 35-minute response.",
  },
  {
    slug: "cedar-park-tx",
    name: "Cedar Park",
    state: "TX",
    label: "Cedar Park, TX",
    neighborhoods: [
      "Buttercup Creek",
      "Anderson Mill West",
      "Cypress Canyon",
      "Ranch at Brushy Creek",
      "Twin Creeks",
    ],
    localNote:
      "Cedar Park's hail corridors and fast-moving spring storms make roof breaches and attic water intrusion the most common emergency we see — often discovered days later as ceiling stains.",
    responseNote:
      "Crews cover Cedar Park from the 183A corridor, typically arriving in 30–45 minutes.",
  },
  {
    slug: "georgetown-tx",
    name: "Georgetown",
    state: "TX",
    label: "Georgetown, TX",
    neighborhoods: [
      "Sun City",
      "Berry Creek",
      "Wolf Ranch",
      "Old Town",
      "Teravista North",
    ],
    localNote:
      "From historic Old Town homes to Sun City's large single-story footprints, Georgetown properties tend to hide slow leaks in long plumbing runs — we bring thermal imaging to every assessment here.",
    responseNote:
      "Georgetown is served by our northern crew off I-35, with a 45-minute typical arrival.",
  },
  {
    slug: "pflugerville-tx",
    name: "Pflugerville",
    state: "TX",
    label: "Pflugerville, TX",
    neighborhoods: [
      "Falcon Pointe",
      "Blackhawk",
      "Avalon",
      "Highland Park",
      "Villages of Hidden Lake",
    ],
    localNote:
      "Pflugerville's clay-heavy soil shifts foundations enough to stress slab plumbing — slab leaks and sewage backups are the calls we run most on this side of the metro.",
    responseNote:
      "Crews reach most Pflugerville homes in 30–40 minutes via SH-130 and SH-45.",
  },
  {
    slug: "leander-tx",
    name: "Leander",
    state: "TX",
    label: "Leander, TX",
    neighborhoods: ["Crystal Falls", "Travisso", "Bryson", "Summerlyn", "Mason Hills"],
    localNote:
      "Leander's rapid new construction means builder-grade water heaters and supply fittings failing in year 8–12 — usually inside finished second-story laundry rooms, where gravity does the rest.",
    responseNote:
      "Leander calls dispatch from the 183A corridor crew, typically on-site within 45 minutes.",
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
