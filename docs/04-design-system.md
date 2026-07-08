# Design System

Implemented as Tailwind CSS v4 `@theme` tokens in `src/app/globals.css`. Rebranding = editing that one block.

## Color

| Token | Value | Use |
|---|---|---|
| `brand-950` | `#081625` | Hero/footer/emergency-strip backgrounds |
| `brand-900` | `#0C1F33` | Dark surfaces, headings on light |
| `brand-800` | `#142B42` | Dark cards, hover on dark |
| `brand-700` | `#1E3A57` | Borders on dark, secondary buttons |
| `brand-100/50` | `#E8EEF4 / #F4F7FA` | Tinted section backgrounds |
| `accent-500` | `#EA580C` | Icons, eyebrows, highlights |
| `accent-600` | `#C2410C` | **Primary CTA background** (4.9:1 with white — AA) |
| `accent-700` | `#9A3412` | CTA hover/active |
| `slate-600/900` | Tailwind | Body text / headings (≥7:1) |
| `emerald-500` | Tailwind | Availability indicator only |

Rules: orange appears **only** on actionable or attention elements. Body text never lighter than slate-600 on white. Dark sections use `white/70` minimum for body text.

## Typography

- **Display:** Archivo (variable) — H1–H3, stats, buttons-optional. Tight tracking (`-0.02em`), bold.
- **Body:** Inter (variable) — everything else. 16px minimum on mobile.

| Role | Scale |
|---|---|
| H1 | `text-4xl sm:text-5xl lg:text-6xl` bold, tracking-tight |
| H2 | `text-3xl sm:text-4xl` bold |
| H3 | `text-xl sm:text-2xl` semibold |
| Eyebrow | `text-sm` semibold uppercase `tracking-widest` accent-600 |
| Body | `text-base/lg`, `leading-relaxed`, max-w-prose (≈65ch) |
| Fine print | `text-sm` slate-500 |

## Spacing & layout

- 4px base scale. Section rhythm: `py-16 sm:py-20 lg:py-24`.
- Container: `max-w-7xl` + `px-4 sm:px-6 lg:px-8` everywhere (one container, no drift).
- Grid gaps: `gap-6` cards, `gap-12`+ between text/media pairs.
- Content column: `max-w-2xl` centered for section intros.

## Radii, borders, elevation

- Buttons/inputs `rounded-lg` (8), cards `rounded-2xl` (16).
- Cards: `border border-slate-200 bg-white` + `shadow-sm`; hover → `shadow-md` + `border-slate-300` (color/shadow transitions only — no scale transforms, no layout shift).
- Dark cards: `bg-brand-800 border-brand-700`.

## Buttons

| Variant | Style | Use |
|---|---|---|
| `primary` | accent-600 bg, white text, hover accent-700 | Call CTAs only |
| `secondary` | white bg, brand-900 text, border | Paired secondary action |
| `dark` | brand-800 bg, white text | On light sections, non-call actions |
| `ghost` | transparent, brand-900 text | Tertiary links |

All: `h-12 px-6` (≥48px touch target), `rounded-lg font-semibold`, visible `focus-visible:ring-2 ring-offset-2`, `transition-colors duration-200`, icon size 20.

## Forms

Labels always visible (never placeholder-as-label). Inputs `h-12 rounded-lg border-slate-300`, focus ring accent. Errors: red-600 text adjacent to field + `aria-invalid`. Submit disables + shows progress while pending. Success state = confirmation card with next steps + phone number.

## Iconography & imagery

Lucide icons only, `strokeWidth 2`, sized 20/24, in accent or brand colors. Photography: real jobsite/team photos, documentary style, well-lit — no staged stock. Every image through `next/image` with meaningful `alt`. Placeholder SVGs ship in `/public/images` and are listed in the README replacement checklist.

## Motion & accessibility

150–300ms `transition-colors`/`opacity`/`transform` only; `prefers-reduced-motion` disables the availability pulse and slider animations. Semantic landmarks (`header/main/section/footer`), one H1 per page, logical heading order, skip-to-content link, keyboard-operable menu/accordion/slider, WCAG AA contrast throughout.

## Z-index scale

`10` sticky header · `20` mobile sticky call bar · `30` mobile menu sheet · `50` skip link.
