# User Journey & Conversion Strategy

## Two visitor modes, one site

**Mode A — Emergency (≈70% of high-value traffic, mostly mobile).**
Query: "water damage repair near me", 11pm, phone in hand, standing in the problem.
Goal: get them to tap Call in under 15 seconds. Everything they need is in the hero + sticky bar. They should never *need* to scroll.

**Mode B — Researcher (≈30%, mixes mobile/desktop).**
Mold discovery, insurance claim in progress, comparing 2–3 companies, or a property manager. Higher scroll depth, reads process/insurance/reviews. Goal: win the comparison on credibility, then convert via form or scheduled call.

The page order serves Mode A first (act now) and layers Mode B's evidence beneath.

## Homepage section order and the psychology of each

| # | Section | Job | Mechanism |
|---|---|---|---|
| 0 | Emergency top strip + header | Prompt: number always one tap away | Fogg "prompt"; mere-exposure of the number |
| 1 | Hero | Pass the 3-second test; primary CTA | Certainty (60-min promise), availability cue |
| 2 | Trust bar | Instantly validate the hero's claims | Authority (IICRC, licensed, rating, jobs count) |
| 3 | Services grid | Self-identification: "they handle *my* problem" | Category confirmation reduces bounce |
| 4 | Process timeline | Replace fear of unknown with a script | Certainty; goal-gradient (call = step 1 of 4) |
| 5 | Insurance callout | Kill objection #2 (claims nightmare) | Risk reversal |
| 6 | Stats band | Quantified authority | Specificity beats adjectives |
| 7 | Why us | Differentiation for Mode B comparisons | Contrast effect |
| 8 | Before/after slider | Visual proof of competence | Availability heuristic — outcome made vivid |
| 9 | Reviews | Social proof from neighbors | Similarity/unity bias |
| 10 | Service areas | Local relevance + SEO internal links | "They're actually here" |
| 11 | FAQ | Sweep remaining objections | Handles cost, time, safety, insurance |
| 12 | Final CTA | Close the loop for full-scrollers | Peak-end rule: end on reassurance + action |

## CTA system

- **Primary:** `tel:` call button. Orange, identical style everywhere → learned once, recognized always.
- **Secondary:** "Request Help Online" → short form. For people who can't call (at work, 3am texture-of-choice, deaf/HoH users, tenants collecting quotes).
- **Mobile sticky bottom bar:** Call (primary) + Get Help (secondary), 56px tall, thumb-zone, always visible. This is the single highest-converting element on the site.
- **Desktop:** phone number with hours note in header, persistent.
- CTA appears in hero, after process, after reviews, final section, and sticky bar — ≥5 exposures per page (Rule of 7 across a short session).

## Form philosophy (form-CRO)

Four fields: name, phone, city, what happened. Nothing else. Every extra field costs conversions from people with wet floors. No account, no email required (phone-first industry). Submit button: "Request a Callback — 5 Minutes or Less". Success state tells them *exactly what happens next* (peak-end rule) and repeats the phone number in case urgency spikes.

## Urgency without panic

Allowed: response-time facts, 24/7 availability, "damage spreads within hours — here's what to do while we drive" (educational framing).
Banned: countdown timers, fake scarcity, red flashing anything, fear-based imagery of destroyed homes as decoration.

## Trust-building strategy (layered)

1. **Institutional:** IICRC certification, license number in footer, insured, EPA guidelines, BBB.
2. **Quantified:** years in business, properties restored, average response minutes, review rating + count.
3. **Social:** named, neighborhood-tagged reviews; before/after evidence.
4. **Behavioral:** free-value emergency checklists; honest copy about what can't be saved; transparent process; "we work for you, not the insurance company."
5. **Local:** city names in H1s, neighborhoods on city pages, local landmarks in service-area copy.

## Measurement plan (for the agency)

Track: `tel:` clicks (split by placement via `data-cta` attributes), form submits, sticky-bar impressions vs. clicks, scroll depth to process section. First A/B candidates: hero subhead (insurance-first vs. speed-first), sticky bar label ("Call Now" vs. number itself), process placement (position 4 vs. 6).
