# Next.js Architecture, Folder Structure & Implementation Plan

## Stack

Next.js 15 (App Router) · TypeScript strict · Tailwind CSS v4 · React 19 · lucide-react · next/font (Archivo + Inter) · Server Actions for the lead form. No CMS, no UI kit, no client state library — content is typed config, which is the fastest thing an agency can duplicate per client.

## Folder structure

```
client_website/
├── docs/                      # This strategy set
├── public/images/             # Placeholder SVGs → replace per client
├── src/
│   ├── config/                # ★ THE ONLY LAYER AGENCIES EDIT
│   │   ├── site.ts            # Brand, phone, NAP, hours, stats, licenses, socials
│   │   ├── services.ts        # 6 services: full page content each
│   │   ├── cities.ts          # 6 cities: neighborhoods, local notes
│   │   ├── reviews.ts         # Reviews (name, city, service, text)
│   │   ├── faqs.ts            # Global + per-service FAQs
│   │   └── posts.ts           # Blog seed content
│   ├── lib/
│   │   ├── seo.ts             # buildMetadata() factory
│   │   ├── schema.ts          # JSON-LD builders
│   │   └── utils.ts           # cn(), phone formatting
│   ├── components/
│   │   ├── ui/                # Button, Container, SectionHeader, Badge, ...
│   │   ├── layout/            # Header, MobileMenu, Footer, StickyCallBar, ...
│   │   ├── sections/          # Hero, ServicesGrid, ProcessTimeline, ...
│   │   └── forms/LeadForm.tsx
│   └── app/
│       ├── layout.tsx         # Fonts, chrome, LocalBusiness schema
│       ├── page.tsx           # Home
│       ├── globals.css        # ★ Design tokens (@theme) — rebrand here
│       ├── actions.ts         # submitLead server action (CRM/webhook stub)
│       ├── services/[service]/([city]/)page.tsx   # SSG
│       ├── service-areas/([city]/)page.tsx        # SSG
│       ├── emergency|insurance|about|reviews|gallery|faq|contact/
│       ├── blog/[slug]/page.tsx
│       ├── sitemap.ts · robots.ts · not-found.tsx
│       └── privacy-policy/ · terms/
```

## Architectural decisions

- **Config-as-CMS:** every string, number, and list renders from `src/config`. Rebranding a client = edit `site.ts` + swap tokens in `globals.css` + replace `/public/images`. Components are never touched — the reuse guarantee.
- **RSC-first:** only 4 client components (MobileMenu, StickyCallBar, BeforeAfterSlider, ReviewsSection controls, LeadForm). Everything else is server-rendered HTML — the Lighthouse 95+ budget is structural, not aspirational.
- **Full SSG:** no runtime data → `generateStaticParams` everywhere; deploys as static HTML on any host.
- **Typed content:** `Service`, `City`, `Review` interfaces make config self-documenting; a missing field fails the build, not production.
- **Lead capture:** Server Action validates and hands off at one clearly-marked integration point (`app/actions.ts`) — wire Resend/Twilio/webhook/CRM there per client.

## Implementation plan (as executed)

1. Strategy docs (this folder).
2. Scaffold: package.json, tsconfig, Tailwind v4, tokens, fonts.
3. Config layer with full demo content (Meridian Restoration, Austin TX).
4. lib: utils → seo → schema.
5. UI primitives → layout chrome → sections → form.
6. Pages: home → services → cities → combos → supporting → legal → 404.
7. SEO plumbing: sitemap, robots, per-page metadata + JSON-LD.
8. Placeholder imagery.
9. **Verification:** `npm run build` — all routes must SSG cleanly, zero type errors.
10. Git init → GitHub `client-website` → push.

## Per-client launch checklist (agency runbook)

1. `src/config/site.ts` — name, phone, address, hours, stats, license, GBP/social URLs, `NEXT_PUBLIC_SITE_URL`.
2. `globals.css` `@theme` block — two brand color scales if the client has colors.
3. Replace `/public/images/*` + logo; keep filenames to avoid code edits.
4. `cities.ts` — real service area, neighborhoods, local notes.
5. `reviews.ts` — real reviews only; then enable rating schema flag in `site.ts`.
6. Wire `app/actions.ts` to the client's lead destination; test a submission.
7. Verify NAP matches GBP exactly · run Lighthouse · submit sitemap in Search Console.
