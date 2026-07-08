# SEO Strategy

SEO acquires the visitor; design converts them. Nothing below adds visible clutter.

## Keyword architecture

| Page type | Target pattern | Example |
|---|---|---|
| Home | `{brand} + restoration {city}` | water damage restoration austin |
| Service | `{service}` + variants | fire damage restoration, smoke damage cleanup |
| Combo | `{service} {city}` — the money keywords | mold remediation round rock tx |
| City | `restoration company {city}` | restoration company georgetown tx |
| Insurance | `{service} insurance claim` | water damage insurance claim help |
| Blog | informational long-tail | what to do after a burst pipe |

Emergency intent dominates: titles lead with the service + city and carry "24/7" — matching how people search at 2am and lifting CTR.

## Technical implementation (all shipped in code)

- **Rendering:** every route statically generated (`generateStaticParams` for services, cities, combos) — instant TTFB, fully crawlable HTML.
- **Metadata:** central `buildMetadata()` factory → unique title/description per page, canonical URLs via `metadataBase`, Open Graph + Twitter cards.
- **Structured data** (`src/lib/schema.ts`, JSON-LD):
  - `LocalBusiness` (+`HomeAndConstructionBusiness`) site-wide: NAP, geo, 24/7 `openingHoursSpecification`, `areaServed`, sameAs.
  - `Service` on service/combo pages with `areaServed` per city.
  - `FAQPage` on FAQ-bearing pages (questions match visible content exactly).
  - `BreadcrumbList` on all interior pages.
  - `AggregateRating`/`Review` on the reviews page only, config-gated — agencies must populate with **real** review data before enabling.
- **`sitemap.ts`:** generates all ~65 URLs from config. **`robots.ts`:** allow all, reference sitemap.
- **Semantics:** one H1/page, ordered headings, landmark elements, descriptive link text (no "click here"), image `alt` text.
- **Performance = ranking:** static HTML, ~0 JS on most sections, `next/image`, `next/font` (self-hosted, zero CLS), no third-party scripts. Targets: LCP < 1.8s, CLS ≈ 0, INP < 200ms.

## Local SEO integration

NAP identical in footer, contact page, and schema (Google cross-references these). License number in footer (trust + E-E-A-T). City pages name real neighborhoods and local context fields — the agency fills these per client for uniqueness. The site pairs with a Google Business Profile: `/emergency` is the designed GBP link target.

## Content strategy

Blog exists for informational capture and internal linking, not volume: "what to do after X" guides map to each service and link to it with commercial anchors. Three seed posts included as patterns.

## Guardrails

No keyword stuffing — city/service names appear where a human would say them. Combo pages assemble genuinely different data (neighborhoods, response notes, local factors) — thin duplicates are the #1 programmatic-SEO failure mode. Review schema stays off until real reviews exist (policy compliance).
