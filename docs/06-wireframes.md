# Wireframes

## Homepage — mobile (375px)

```
┌─────────────────────────────────┐
│ ⚡ 24/7 Emergency · (512) 555-0134 │  emergency strip (brand-950)
├─────────────────────────────────┤
│ [Logo]              [📞] [☰]    │  sticky header
├─────────────────────────────────┤
│  ● Crews available now · Austin │  availability pill (emerald pulse)
│                                 │
│  Water. Fire. Mold.             │  H1 display type
│  Restored — fast.               │
│                                 │
│  24/7 emergency restoration in  │  subhead
│  Austin. On-site in 60 minutes, │
│  and we bill your insurance     │
│  directly.                      │
│                                 │
│  [ 📞 Call (512) 555-0134 ]     │  primary, full-width
│  [ Request Help Online      ]   │  secondary, full-width
│                                 │
│  ✓ IICRC   ✓ Licensed & Insured │  trust chips
│  ★ 4.9 (300+)  ✓ Insurance OK   │
├─────────────────────────────────┤
│  TrustBar: certs 2×2            │
├─────────────────────────────────┤
│  OUR SERVICES (eyebrow)         │
│  H2 + 6 service cards stacked   │
├─────────────────────────────────┤
│  Process: 4 steps vertical      │
├─────────────────────────────────┤
│  Insurance callout (tinted bg)  │
├─────────────────────────────────┤
│  Stats band (dark) 2×2          │
├─────────────────────────────────┤
│  Why us: 6 items stacked        │
├─────────────────────────────────┤
│  Before/after slider            │
├─────────────────────────────────┤
│  Reviews: swipe rail, 1/view    │
├─────────────────────────────────┤
│  Service areas: 2×3 city cards  │
├─────────────────────────────────┤
│  FAQ accordion ×6               │
├─────────────────────────────────┤
│  Final CTA (dark band)          │
├─────────────────────────────────┤
│  Footer: NAP → links → legal    │
├─────────────────────────────────┤
│ [ 📞 CALL NOW ] [ GET HELP ]    │  sticky bottom bar, 56px
└─────────────────────────────────┘
```

## Homepage — desktop (1280px)

```
┌──────────────────────────────────────────────────────────────┐
│ ⚡ 24/7 Emergency Service — On-site in 60 min   📞 (512) 555-0134 │
├──────────────────────────────────────────────────────────────┤
│ [Logo]   Services  Areas  Insurance  Reviews  About  Contact │
│                                    24/7 line │ [📞 Call Now]  │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ● Crews available now in Austin      ┌────────────────────┐ │
│                                       │  RESPONSE PROMISE  │ │
│  Water. Fire. Mold.                   │  ⏱ 60-min arrival  │ │
│  Restored — fast.                     │  📋 Free estimate  │ │
│                                       │  🛡 Direct insurance│ │
│  Subhead (2 lines, max-w-xl)          │     billing        │ │
│  [📞 Call Now]  [Request Help]        │  ✓ IICRC certified │ │
│  ✓ chips row                          └────────────────────┘ │
│                                                              │
├──────────────── TrustBar: 4 items, single row ───────────────┤
├──────────────── Services: 3×2 card grid ─────────────────────┤
├──────────────── Process: 4 steps horizontal ─────────────────┤
├──────────────── Insurance: copy | checklist split ───────────┤
├──────────────── Stats band: 4-up dark ───────────────────────┤
├──────────────── Why us: 3×2 grid ────────────────────────────┤
├──────────────── Before/after: slider | copy split ───────────┤
├──────────────── Reviews: 3-up rail + arrows ─────────────────┤
├──────────────── Areas: 3×2 + coverage note ──────────────────┤
├──────────────── FAQ: centered column ────────────────────────┤
├──────────────── Final CTA: dark, phone + button inline ──────┤
└──────────────── Footer: 4 columns ───────────────────────────┘
```

## Service page (`/services/water-damage-restoration`)

```
Breadcrumbs
H1 + intro + dual CTA + trust chips        (mini-hero, dark)
EmergencySteps: "Do this right now" ×5     (education-first — authority)
Damage types handled (grid)
Process timeline (service-specific copy)
Why timing matters (educational, calm)
Insurance callout
Reviews (filtered where tagged)
FAQ (service-specific, schema)
Cities we serve this service in (6 links)  (internal linking)
Related services (2 cards)
Final CTA
```

## City page (`/service-areas/austin-tx`)

```
Breadcrumbs
H1 "Restoration Services in Austin, TX" + response-time note + CTA
Neighborhood coverage chips
All 6 services in Austin (cards → combo pages)
Process + Insurance (shared sections)
City-tagged reviews
FAQ (localized)
Final CTA
```

## Combo page (`/services/water-damage-restoration/austin-tx`)

Mini-hero with "Water Damage Restoration in Austin, TX" + city response note → EmergencySteps → process → insurance → sibling cities links → parent links → FAQ → Final CTA. Unique copy assembled from city data fields.

## Emergency page (`/emergency`)

Header + huge phone number + 3 reassurance bullets + LeadForm + process strip. No nav distractions beyond header. Built as ad/GBP landing target.
