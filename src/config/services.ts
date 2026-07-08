/**
 * SERVICES CONFIG — full page content for each service.
 * Adding a service creates its page + one combo page per city, nav/footer
 * links, sitemap entries, and Service schema. Icons map in ServiceIcon.tsx.
 */

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  /** Short label for cards/nav */
  shortName: string;
  icon: "droplets" | "flame" | "microscope" | "cloud-lightning" | "waves" | "biohazard";
  /** One-sentence card description */
  excerpt: string;
  /** Mini-hero intro paragraph */
  heroIntro: string;
  /** "Do this right now" — free value before any ask */
  emergencySteps: string[];
  /** What we handle grid */
  damageTypes: string[];
  /** Calm, educational urgency */
  whyTiming: { title: string; body: string };
  faqs: ServiceFaq[];
  related: [string, string];
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: "water-damage-restoration",
    name: "Water Damage Restoration",
    shortName: "Water Damage",
    icon: "droplets",
    excerpt:
      "Burst pipes, appliance failures, and flooding — extracted, dried, and rebuilt with moisture readings to prove it.",
    heroIntro:
      "Standing water is moving into your walls and subfloor right now, but this is a solvable problem — and it's the one we solve most. We extract, dry, and verify with calibrated moisture meters, then repair what the water touched. Most homes we reach within the first day never develop mold.",
    emergencySteps: [
      "If it's safe, shut off the water at the main valve — usually near the street or where the line enters the house.",
      "Turn off electricity to affected rooms at the breaker if outlets or cords are wet.",
      "Move electronics, documents, and rugs out of the water. Put foil under furniture legs you can't move.",
      "Don't run a shop vac on deep water or use your household vacuum at all.",
      "Take photos of everything before moving it — your claim will thank you.",
    ],
    damageTypes: [
      "Burst & frozen pipes",
      "Water heater failures",
      "Washing machine & dishwasher lines",
      "Slab leaks",
      "Roof & window intrusion",
      "Toilet & tub overflows",
      "Basement & crawlspace flooding",
      "HVAC condensation leaks",
    ],
    whyTiming: {
      title: "Why the first 24 hours decide everything",
      body: "Drywall wicks water upward at about an inch an hour. Within 24–48 hours, wet materials cross the threshold where mold begins colonizing and 'dry it out' becomes 'cut it out.' Fast extraction is the difference between drying your home and demolishing parts of it — that's why we answer at 2am.",
    },
    faqs: [
      {
        q: "How fast can you actually get here?",
        a: "Our average emergency response across the Austin metro is 60 minutes, 24/7. The dispatcher who answers will give you a realistic arrival window for your address before you hang up.",
      },
      {
        q: "Will my homeowner's insurance cover this?",
        a: "Sudden water damage — a burst pipe, a failed supply line — is covered by most policies. Gradual leaks and outside flooding usually aren't (flooding needs separate flood insurance). We document everything either way and bill your insurer directly when it's covered.",
      },
      {
        q: "Can't I just dry it with fans?",
        a: "Surface-drying with house fans leaves moisture inside walls, under flooring, and in insulation — where mold starts. We use commercial dehumidifiers and air movers, then verify with moisture meters until readings return to normal. You get the readings in writing.",
      },
      {
        q: "Do I need to move out?",
        a: "Usually not. Most water losses let you stay home while equipment runs in the affected rooms. If conditions make staying unsafe, we tell you honestly and document it for your insurance's loss-of-use coverage.",
      },
    ],
    related: ["mold-remediation", "storm-damage-restoration"],
    metaTitle: "Water Damage Restoration — 24/7, On-Site in 60 Min",
    metaDescription:
      "24/7 water damage restoration: extraction, structural drying & repairs, verified with moisture readings. Direct insurance billing. On-site in 60 minutes.",
  },
  {
    slug: "fire-damage-restoration",
    name: "Fire & Smoke Damage Restoration",
    shortName: "Fire & Smoke",
    icon: "flame",
    excerpt:
      "Soot removal, smoke odor elimination, and structural repair — plus the water damage fire trucks leave behind.",
    heroIntro:
      "After the fire department leaves, you're left with three problems: fire damage, acidic soot that keeps corroding surfaces, and thousands of gallons of water. We handle all three with one crew — securing the structure the same day, then restoring what the fire touched and neutralizing what the smoke did.",
    emergencySteps: [
      "Don't re-enter until the fire department clears the structure — heat can compromise framing you can't see.",
      "Don't wipe soot off walls or furniture; without the right cleaners it smears and sets permanently.",
      "Don't run the HVAC — it pulls soot into every room through the ductwork.",
      "Photograph rooms and damaged items before anything is moved.",
      "Call your insurer to open the claim, then call us — we board up and tarp the same day.",
    ],
    damageTypes: [
      "Structural fire damage",
      "Smoke & soot contamination",
      "Odor removal & air scrubbing",
      "Firefighting water damage",
      "Board-up & roof tarping",
      "Contents cleaning & pack-out",
      "Kitchen & electrical fires",
      "Duct & HVAC decontamination",
    ],
    whyTiming: {
      title: "Soot doesn't wait for the adjuster",
      body: "Soot is acidic. Within hours it starts etching glass, pitting metal, and permanently yellowing plaster and countertops. The difference between 'cleaned' and 'replaced' is usually how fast neutralization starts — which is why our crews begin stabilizing surfaces the day of the fire, not after the paperwork clears.",
    },
    faqs: [
      {
        q: "The fire was small — do I really need professional cleanup?",
        a: "A small kitchen fire can push smoke residue through the whole house via the HVAC system. If you can smell it two rooms away, it's on surfaces two rooms away. We assess for free and tell you honestly whether it's a DIY job or not.",
      },
      {
        q: "Can you get the smoke smell out, permanently?",
        a: "Yes — but not with sprays. Permanent odor removal means removing the soot source, cleaning or sealing affected surfaces, and treating air with hydroxyl or ozone equipment. Masking products wear off in weeks; this doesn't.",
      },
      {
        q: "What happens to our belongings?",
        a: "We inventory, photograph, and pack out salvageable contents for specialized cleaning, and document unsalvageable items for your claim. You get the full inventory list — nothing leaves without a record.",
      },
      {
        q: "Will insurance cover fire restoration?",
        a: "Fire is the most clearly covered peril in homeowner's policies, including smoke damage and the water used to extinguish it. We work directly with your adjuster and bill the insurer, so you're not fronting the cost of major repairs.",
      },
    ],
    related: ["water-damage-restoration", "biohazard-cleanup"],
    metaTitle: "Fire & Smoke Damage Restoration — 24/7 Response",
    metaDescription:
      "Fire & smoke damage restoration: same-day board-up, soot removal, permanent odor elimination, and full rebuild. Direct insurance billing, 24/7.",
  },
  {
    slug: "mold-remediation",
    name: "Mold Remediation",
    shortName: "Mold",
    icon: "microscope",
    excerpt:
      "Licensed mold assessment, containment, and removal — fixed at the moisture source so it doesn't come back.",
    heroIntro:
      "Finding mold is unsettling, but here's the truth: mold is a moisture problem wearing a disguise. We contain the area, remove the growth under negative air pressure, and — the part most companies skip — find and fix the water source that fed it. Remove mold without fixing moisture and you've bought it a vacation, not an eviction.",
    emergencySteps: [
      "Don't disturb it — scrubbing or spraying bleach releases spores and usually makes spread worse.",
      "Close the door to the affected room and turn off HVAC to that zone if you can.",
      "Don't tape plastic directly over growth; trapped humidity accelerates it.",
      "Note any musty smell locations, water stains, or recent leaks — that history helps us find the source.",
      "If anyone in the home has respiratory issues, keep them out of the affected area.",
    ],
    damageTypes: [
      "Black mold (Stachybotrys) removal",
      "Attic & crawlspace mold",
      "Bathroom & kitchen growth",
      "HVAC & duct contamination",
      "Post-flood mold prevention",
      "Moisture source diagnosis",
      "Containment & HEPA air filtration",
      "Third-party clearance testing",
    ],
    whyTiming: {
      title: "Mold spreads on a schedule",
      body: "A colony the size of a dinner plate releases millions of spores that ride your HVAC system into every room. What starts as a bathroom corner becomes an attic problem in weeks, not months. Early remediation is measured in hundreds of dollars; ignored mold is measured in thousands — and in air quality your family breathes.",
    },
    faqs: [
      {
        q: "Is the mold in my house dangerous?",
        a: "It depends on the species and the people in the home — children, elderly family members, and anyone with asthma or allergies are most affected. We don't diagnose health issues, but we can test what's growing and remove it safely under containment either way.",
      },
      {
        q: "Can't I just spray it with bleach?",
        a: "Bleach kills surface mold on non-porous material but can't reach roots inside drywall or wood — and the moisture in bleach often feeds regrowth. Porous materials with active growth need removal, not spraying. We'll tell you honestly which situation you have.",
      },
      {
        q: "Do you test before and after?",
        a: "Yes. We assess and can arrange independent third-party clearance testing after remediation, so the 'all clear' comes from someone who doesn't work for us. That's how it should be.",
      },
      {
        q: "Does insurance cover mold remediation?",
        a: "When mold results from a covered water loss — like a burst pipe — remediation is usually covered, often with a policy cap. Mold from long-term neglect typically isn't. We document the moisture source, which is what determines coverage.",
      },
    ],
    related: ["water-damage-restoration", "sewage-cleanup"],
    metaTitle: "Mold Remediation — Licensed, Contained, Source-Fixed",
    metaDescription:
      "Licensed mold remediation: containment, HEPA filtration, safe removal, and moisture-source repair with independent clearance testing available.",
  },
  {
    slug: "storm-damage-restoration",
    name: "Storm & Flood Damage Restoration",
    shortName: "Storm & Flood",
    icon: "cloud-lightning",
    excerpt:
      "Emergency tarping, flood water extraction, and full repairs after hail, wind, and Central Texas flash floods.",
    heroIntro:
      "Storms cause two emergencies at once: the hole in your roof and the water already inside. We respond with both crews — emergency tarping and board-up to stop the intrusion, extraction and drying to handle what got in, and full repair once the weather clears. One call, both problems.",
    emergencySteps: [
      "Stay out of rooms with sagging ceilings — bulging drywall can hold gallons of water.",
      "If water is entering, place buckets and poke a small relief hole in a bulging ceiling to prevent collapse.",
      "Don't climb on the roof — that's what our tarping crew is for.",
      "Photograph exterior damage from the ground and interior water entry points.",
      "Treat outdoor flood water as contaminated — keep kids and pets away from it.",
    ],
    damageTypes: [
      "Roof damage & emergency tarping",
      "Flash flood water extraction",
      "Hail damage",
      "Wind-driven rain intrusion",
      "Fallen tree damage & board-up",
      "Contaminated flood water cleanup",
      "Structural drying",
      "Full storm repairs & rebuild",
    ],
    whyTiming: {
      title: "The second storm is the one that gets you",
      body: "An unprotected roof breach turns the next rain — often days later — into a second, larger loss that insurers can classify as preventable. Same-day tarping protects both your home and your claim. That's why tarping calls jump our dispatch queue during storm season.",
    },
    faqs: [
      {
        q: "Everyone's slammed after the storm — how fast can you come?",
        a: "We pre-stage crews when severe weather is forecast and triage by severity: active water intrusion and structural openings first. Call early; even if repairs queue, emergency tarping happens fast.",
      },
      {
        q: "Is flood damage covered by homeowner's insurance?",
        a: "Wind, hail, and rain entering through storm damage: usually covered. Rising water from outside: that's flood insurance (NFIP or private), a separate policy. We document the water's entry path carefully because that distinction decides your coverage.",
      },
      {
        q: "Do you handle the roof repair too, or just the tarp?",
        a: "Both. Emergency tarping stabilizes immediately, then our repair crew handles the permanent roof, exterior, and interior work — one contractor and one claim file, start to finish.",
      },
      {
        q: "Should I start cleanup before the adjuster sees it?",
        a: "You should prevent further damage (that's actually required by most policies) but document everything first. We photograph and log conditions before touching anything, so mitigation never undermines your claim.",
      },
    ],
    related: ["water-damage-restoration", "fire-damage-restoration"],
    metaTitle: "Storm & Flood Damage Restoration — Emergency Tarping 24/7",
    metaDescription:
      "Storm damage restoration: same-day emergency tarping, flood extraction, structural drying, and complete repairs. Insurance documented & billed directly.",
  },
  {
    slug: "sewage-cleanup",
    name: "Sewage Cleanup",
    shortName: "Sewage",
    icon: "waves",
    excerpt:
      "Category 3 water safely extracted, disinfected, and verified — protecting your family from what backed up.",
    heroIntro:
      "Sewage backups are the emergency people most regret cleaning themselves. This is Category 3 water — carrying bacteria, viruses, and parasites — and it contaminates everything porous it touches. Our crews extract it in full protective equipment, remove what can't be disinfected, and sanitize what can, with antimicrobial verification before we call it done.",
    emergencySteps: [
      "Keep everyone — especially children and pets — completely away from affected areas.",
      "Don't run water or flush anywhere in the house; it feeds the backup.",
      "Turn off HVAC to avoid circulating airborne contaminants.",
      "Don't try to shop-vac or mop it; household equipment can't be safely decontaminated afterward.",
      "If sewage is near outlets or appliances, cut power to those rooms at the breaker.",
    ],
    damageTypes: [
      "Main line & drain backups",
      "Toilet overflows (Category 3)",
      "Sump pump failures",
      "Septic system overflows",
      "Slab leak sewage intrusion",
      "Crawlspace contamination",
      "Antimicrobial treatment",
      "Contaminated material removal",
    ],
    whyTiming: {
      title: "Contamination spreads by contact — and by air",
      body: "Every hour, contaminated moisture wicks deeper into drywall, subfloor, and framing, and bacteria multiply on every wet surface. What a fast response handles with extraction and disinfection, a slow one handles with demolition. This is the one damage type where waiting until morning genuinely isn't safe.",
    },
    faqs: [
      {
        q: "Is it really unsafe to clean up myself?",
        a: "For anything beyond a small, contained toilet overflow of clean water — yes. Category 3 water carries pathogens like E. coli and hepatitis A. Without PPE, extraction equipment, and proper disposal, DIY cleanup risks your health and usually spreads contamination further.",
      },
      {
        q: "What has to be thrown away?",
        a: "Porous materials that absorbed sewage — carpet and pad, upholstered furniture, drywall it soaked into — can't be reliably disinfected and are removed and documented for your claim. Hard surfaces are cleaned, disinfected, and tested.",
      },
      {
        q: "Does insurance cover sewage backups?",
        a: "Often only if your policy has a water/sewer backup endorsement — a cheap add-on many homeowners don't know exists. We document the cause either way and can tell you what we typically see approved.",
      },
      {
        q: "How do I know it's actually safe afterward?",
        a: "We apply antimicrobial treatment, dry to verified moisture targets, and confirm surfaces meet sanitation standards before removing containment. You get the documentation — not just a 'looks clean.'",
      },
    ],
    related: ["water-damage-restoration", "biohazard-cleanup"],
    metaTitle: "Sewage Cleanup — Safe Category 3 Water Removal, 24/7",
    metaDescription:
      "Emergency sewage cleanup: protective extraction, disinfection, antimicrobial verification, and insurance documentation. Crews on-site in 60 minutes.",
  },
  {
    slug: "biohazard-cleanup",
    name: "Biohazard & Trauma Cleanup",
    shortName: "Biohazard",
    icon: "biohazard",
    excerpt:
      "Discreet, compassionate biohazard remediation by certified technicians — handled quietly and completely.",
    heroIntro:
      "Some situations shouldn't be cleaned by family, and can't be cleaned by a regular service. Our biohazard team handles trauma scenes, unattended deaths, and hazardous contamination with certified protocols, unmarked vehicles on request, and the discretion these moments deserve. You make one call; we handle everything else.",
    emergencySteps: [
      "Don't enter or clean the area — bloodborne pathogens require certified handling and disposal.",
      "If the situation involves a death or crime, wait for law enforcement to release the scene.",
      "Keep the area closed off and HVAC to that zone off if possible.",
      "You don't need to face this alone — one call and we coordinate everything, including with your insurer.",
      "Ask us about unmarked vehicles if privacy from neighbors matters to you.",
    ],
    damageTypes: [
      "Trauma & accident scene cleanup",
      "Unattended death remediation",
      "Blood & bodily fluid removal",
      "Hoarding cleanup",
      "Drug lab & chemical residue",
      "Infectious disease disinfection",
      "Odor neutralization",
      "Certified waste transport & disposal",
    ],
    whyTiming: {
      title: "Handled quickly, handled quietly",
      body: "Biological material becomes more hazardous and harder to fully remediate with every passing day, and lingering scenes prolong trauma for families. Rapid, complete remediation — including what soaked below the surface — is how a space stops being a scene and becomes a home again.",
    },
    faqs: [
      {
        q: "Will neighbors know what happened?",
        a: "Not from us. Unmarked vehicles are available on request, our technicians don't discuss the work, and we schedule at hours you choose. Discretion is part of the service, not an add-on.",
      },
      {
        q: "Is this covered by insurance?",
        a: "Homeowner's policies frequently cover biohazard and trauma remediation. We handle the claim paperwork directly with your insurer, so you never have to describe the scene twice.",
      },
      {
        q: "Are your technicians certified for this?",
        a: "Yes — bloodborne pathogen (OSHA) trained, with certified biohazard waste transport and disposal. This work is regulated for good reason, and we follow every protocol.",
      },
      {
        q: "How soon can you be here?",
        a: "Biohazard calls are prioritized 24/7 and we coordinate with law enforcement on scene release. Once released, we're typically on-site within hours — and we stay until it's done.",
      },
    ],
    related: ["sewage-cleanup", "fire-damage-restoration"],
    metaTitle: "Biohazard & Trauma Cleanup — Discreet, Certified, 24/7",
    metaDescription:
      "Compassionate biohazard and trauma scene cleanup: certified technicians, unmarked vehicles on request, complete remediation, insurance handled.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
