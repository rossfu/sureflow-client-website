# Site Architecture & Information Architecture

## Page hierarchy

```
/                               Home (conversion hub)
/emergency                      Stripped-down emergency landing (ads/GBP link target)
/services                       Services index
/services/[service]             6 service pages (water, fire, mold, storm, sewage, biohazard)
/services/[service]/[city]      36 service × city pages (programmatic SEO)
/service-areas                  Cities index + coverage map
/service-areas/[city]           6 city pages
/insurance                      Insurance claims assistance
/about                          Company, team, credentials
/reviews                        All reviews + rating schema
/gallery                        Before/after project gallery
/faq                            Full FAQ (FAQPage schema)
/contact                        Contact + form + NAP
/blog                           Guides index
/blog/[slug]                    Educational articles
/privacy-policy, /terms         Legal
/404                            Branded not-found with emergency CTA
```

## URL design

- Service-first combo URLs (`/services/water-damage-restoration/austin-tx`) mirror query order ("water damage restoration austin") and concentrate topical authority under `/services/`.
- Kebab-case, lowercase, no trailing slashes, no query params, city slugs carry state (`austin-tx`) for disambiguation and CTR.

## Navigation

**Header (desktop):** Services (dropdown-free — links to index; the mega-menu is a v2 option), Service Areas, Insurance, Reviews, About, Contact + persistent phone CTA.
**Header (mobile):** logo + call button + hamburger. The menu is a full-screen sheet with big tap targets and the phone number at top.
**Footer:** 4 columns — company/NAP + licenses, services (all 6), cities (all 6), resources (insurance, FAQ, reviews, blog, gallery). The footer is the site-wide internal-linking engine.
**Breadcrumbs:** on all interior pages, with BreadcrumbList schema.

## Internal linking model (hub-and-spoke ×2)

- **Service hubs:** each service page links to its 6 city variants, 2 related services, insurance page, and relevant blog guides.
- **City hubs:** each city page links to all 6 service-in-city combos and back to `/services`.
- **Combo pages:** link up to both parents (service, city) + sibling cities — keeps crawl depth ≤3 from home for every page.
- Blog posts link down into service pages (commercial anchor) — never the reverse-only.

## Avoiding doorway-page thinness on combo pages

Each combo page assembles: city-specific intro (from per-city data: neighborhoods, response-time note, local context), the service's full process and FAQs, city-tagged reviews when available, and cross-links. Unique data per page comes from `config/cities.ts` fields — agencies extend those fields per client for stronger uniqueness.

## Scalability

Adding a city = one object in `config/cities.ts` → creates the city page + 6 combo pages, sitemap entries, footer/nav links, schema `areaServed`. Adding a service = one object in `config/services.ts` → service page + one combo per city. Zero component edits.
