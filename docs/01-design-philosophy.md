# Design Philosophy & Rationale

## The core insight: this visitor is not a normal visitor

A restoration customer is standing in two inches of water at 2am, or smelling smoke, or staring at a black patch behind the washing machine. They are stressed, sleep-deprived, and afraid of two things: the damage itself, and being taken advantage of while vulnerable.

Standard landing-page frameworks (PAS — Problem, Agitate, Solve) are built for cold traffic that needs motivation. **This traffic needs zero motivation.** Their motivation is maxed out. Per the Fogg Behavior Model (Behavior = Motivation × Ability × Prompt), the only levers left are:

- **Ability** — make calling effortless. Tap-to-call everywhere, sticky call bar, zero-friction form.
- **Prompt** — the phone number is the most repeated element on the site, always visible.

Therefore the design principle is **calm authority**: never agitate, never hype, never add fear. The site behaves like the best emergency dispatcher you've ever spoken to — composed, specific, and already moving.

## Why every major decision was made

| Decision | First-principles reason |
|---|---|
| Deep navy base palette | Navy encodes institutional trust (banks, uniforms, authority) and *lowers* arousal. A panicked visitor needs down-regulation, not red alarm colors. |
| Safety-orange accent, used only for actions | One color = one meaning. Orange is the color of high-visibility work gear — urgency and competence without the panic signal of red. If everything shouts, nothing does. |
| Exactly two actions site-wide (Call / Request Help) | Hick's Law: decision time grows with options. A stressed brain gets one primary path (call) and one fallback (form) — nothing else competes. |
| Response-time promise in the hero ("on-site in 60 minutes") | The visitor's #1 unspoken question is "how fast can someone be here?" Answering it in the first 3 seconds is the single highest-leverage trust move. Specific numbers beat adjectives (certainty > "fast"). |
| Live availability indicator (pulsing dot, "Crews available now") | Availability heuristic: makes rescue vivid and imaginable. Converts an abstract company into a truck that is currently idling nearby. |
| 4-step process timeline on every page path | Fear of the unknown is the second-biggest anxiety. Showing exactly what happens after the call replaces uncertainty with a script the visitor can rehearse. |
| Insurance section placed high, not buried | "Will insurance be a nightmare?" is the #2 objection. "We bill your insurer directly and document everything" is risk-reversal — it removes the *second* disaster (paperwork). |
| Education before selling ("What to do right now" checklists) | Reciprocity + authority. Giving genuinely useful emergency steps before asking for anything proves expertise and generosity simultaneously. |
| Honest constraint copy ("If it can't be saved, we'll tell you") | Pratfall effect: admitting a limit makes every other claim more believable. |
| Reviews with names + neighborhoods | Unity/similarity bias: "someone three streets over" is worth ten anonymous 5-star quotes. |
| No stock-photo hero requirement | The hero is typographic + gradient by default, so the template never ships looking broken. Real jobsite photography slots in and *upgrades* it. Fake-looking stock photos are a trust leak. |
| Generous whitespace, large type | Cognitive fluency: stressed users process less. Density reads as cheap and confusing; space reads as competence. |

## Aesthetic direction

Modern, premium, editorial. Large Archivo display type (industrial grotesque — reads like professional equipment, not a law firm), Inter for body. Squared-off radii (8–16px), subtle single-layer shadows, no gradients except the hero's tonal navy, no decorative animation. Motion is limited to 150–300ms state transitions and one pulsing availability dot — the only permitted "always moving" element, because it carries meaning.

**Never:** carousels that auto-rotate text, emoji as icons, badge walls of fake logos, countdown timers, popups. Each is a known trust leak for this audience.

## The 3–5 second test

On load, above the fold, a visitor sees: what the company does (restoration), where (city name), how fast (60 minutes), that they're legitimate (licensed • insured • IICRC), that humans are ready (availability dot), and exactly one obvious thing to do (the orange call button). Nothing else is allowed above the fold.
