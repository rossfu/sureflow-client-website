# Restoration Company Website Template

A premium, conversion-first Next.js template for restoration companies (water, fire, mold, storm, sewage, biohazard) — built for agencies to redeploy per client by editing **config, tokens, and images only**. Components never need to change.

**Demo brand:** "Meridian Restoration" (Austin, TX) — all business details are placeholders.

## Stack

Next.js 15 (App Router) · TypeScript strict · Tailwind CSS v4 · React 19 · lucide-react · fully static (SSG) — ~65 pages generated from config, zero runtime data dependencies.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build — statically generates every route
```

## Rebrand a client in 6 steps

1. **`src/config/site.ts`** — name, phone, address (must match Google Business Profile exactly), hours, stats, certifications, license, insurers, differentiators, process copy. Set `NEXT_PUBLIC_SITE_URL` in `.env`.
2. **`src/app/globals.css`** — the `@theme` block holds both brand color scales. Keep white-on-`accent-600` at ≥4.5:1 contrast.
3. **`/public/images/`** — replace `before-*.svg` / `after-*.svg` placeholders with real jobsite photos (keep filenames → zero code changes). Swap `src/app/icon.svg` and the logo mark in `Header.tsx`/`Footer.tsx`.
4. **`src/config/cities.ts`** — the client's real service area: neighborhoods, local risk notes, response notes. Each city auto-generates a city page + 6 service-combo pages, sitemap entries, and footer links.
5. **`src/config/reviews.ts`** — the client's real reviews (then set `rating.showSchema: true` in `site.ts` to emit rating schema). `faqs.ts`, `services.ts`, `posts.ts`, `gallery.ts` refine per client as needed.
6. **`src/app/actions.ts`** — wire `submitLead()` to the client's lead destination (`LEAD_WEBHOOK_URL` env var, or replace with Resend/Twilio/CRM). **Test a submission before launch.**

Full launch checklist: `docs/08-architecture-and-plan.md`.

## Documentation

| Doc | Contents |
|---|---|
| `docs/01-design-philosophy.md` | The "calm authority" thesis + rationale for every major decision |
| `docs/02-conversion-strategy.md` | User journey, section-order psychology, CTA system, trust strategy |
| `docs/03-site-architecture.md` | IA, URL design, internal-linking model, programmatic-SEO guardrails |
| `docs/04-design-system.md` | Tokens, type scale, color, buttons, forms, motion, a11y rules |
| `docs/05-component-inventory.md` | Every component, its responsibility, and responsive behavior |
| `docs/06-wireframes.md` | Homepage (mobile + desktop) and interior page wireframes |
| `docs/07-seo-strategy.md` | Keyword architecture, schema plan, local SEO, content strategy |
| `docs/08-architecture-and-plan.md` | Folder structure, architectural decisions, per-client runbook |

## What's already handled

Semantic HTML + one-H1 pages · LocalBusiness/Service/FAQPage/BreadcrumbList/BlogPosting JSON-LD · metadata factory with canonicals + OG/Twitter · `sitemap.ts` + `robots.ts` generated from config · WCAG AA contrast, focus states, skip link, keyboard-operable menu/accordion/slider, reduced-motion support · mobile sticky call bar with safe-area padding · 4-field lead form with server-action validation, honeypot, and "what happens next" success state · only 5 client components — everything else ships as static HTML.

## Before any client launch

- Replace all placeholder facts: phone, address, license number, stats, reviews, insurer list, legal pages (attorney review).
- Verify NAP matches the Google Business Profile character-for-character.
- Point the GBP website link at `/emergency` or `/`, submit `sitemap.xml` in Search Console, run Lighthouse (target 95+).
