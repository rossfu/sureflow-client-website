# Component Inventory, Responsibilities & Responsive Behavior

RSC = React Server Component (zero client JS). Client = ships JS (kept to 7 small components).

## Layout

| Component | Type | Responsibility | Mobile → Desktop |
|---|---|---|---|
| `EmergencyStrip` | RSC | Top strip: 24/7 message + tel link | Single line, number only → message + number + response promise |
| `Header` | RSC | Logo, nav, phone CTA; sticky | Logo + call icon-button + hamburger → full nav + phone block + CTA |
| `MobileMenu` | Client | Full-screen sheet, focus-trapped, ESC/backdrop close | Mobile only (`lg:hidden`) |
| `StickyCallBar` | Client | Bottom fixed Call + Get Help; hides when footer visible (IntersectionObserver) | Mobile only; desktop relies on sticky header |
| `Footer` | RSC | NAP, license, 4-column links, certifications, legal | 1 col → 2 → 4; NAP block first |
| `Breadcrumbs` | RSC | Trail + BreadcrumbList JSON-LD | Horizontal scroll if long; truncates middle on mobile |

## UI primitives

| Component | Type | Responsibility |
|---|---|---|
| `Button` | RSC | 4 variants, renders `<a>` or `<button>`, `data-cta` tracking attribute |
| `Container` | RSC | Single max-width/padding source of truth |
| `SectionHeader` | RSC | Eyebrow + H2 + lede, centered or left |
| `Badge` | RSC | Trust chips (icon + label) |
| `StarRating` | RSC | Accessible stars (aria-label, not color-only) |
| `PhoneLink` | RSC | Formats number, `tel:` href, tracking attribute |
| `Accordion` | RSC | Native `<details>/<summary>` — zero-JS, keyboard-free FAQ |

## Sections

| Component | Type | Responsibility | Mobile → Desktop |
|---|---|---|---|
| `Hero` | RSC | H1, subhead, dual CTA, availability dot, trust chips | Stacked, CTAs full-width, chips wrap → two-column with response-promise card |
| `TrustBar` | RSC | Certifications + rating + jobs count | 2×2 grid → single row |
| `ServicesGrid` | RSC | 6 service cards (icon, name, 2-line desc, link) | 1 col → 2 → 3 |
| `ProcessTimeline` | RSC | 4 numbered steps with connector line | Vertical timeline → horizontal 4-up |
| `InsuranceCallout` | RSC | Direct-billing promise, carrier logos area, 3 bullets | Stacked → split 2-col |
| `StatsBand` | RSC | 4 quantified stats on dark band | 2×2 → 4-up |
| `WhyUs` | RSC | 6 differentiators w/ icons | 1 col → 2 → 3 |
| `BeforeAfterSlider` | Client | Range-input clip reveal; keyboard arrows; reduced-motion safe | Full width → paired with copy |
| `ReviewsSection` | Client (buttons only) | Scroll-snap review rail + prev/next; cards are static | 1 card/view → 3 |
| `ServiceAreasGrid` | RSC | City link cards + coverage line | 2 col → 3 |
| `FAQSection` | RSC | Accordion list + FAQPage schema | Single column both (readability) |
| `FinalCTA` | RSC | Dark closing band: reassurance line, phone, form link | Stacked → inline |
| `GalleryGrid` | RSC | Before/after project cards | 1 → 2 → 3 |
| `EmergencySteps` | RSC | "Do this right now" checklist per service | Single column list |

## Forms

| Component | Type | Responsibility |
|---|---|---|
| `LeadForm` | Client | 4 fields, server-action submit, inline validation, pending state, success card with next-steps script |

## Composition rule

Pages are thin assemblies: `page.tsx` = data lookup (from `src/config`) + metadata + ordered section components. No section fetches its own data; everything flows down from config → props, so a rebrand or content change never touches component code.
