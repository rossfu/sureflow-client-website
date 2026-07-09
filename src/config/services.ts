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
    excerpt: "Burst pipes and floods. We pull the water out, dry your home, and fix what's damaged.",
    heroIntro:
      "Water is soaking into your walls and floor right now. We can fix this. We pull out the water, dry everything, and check our work with meters. Homes we reach fast almost never get mold.",
    emergencySteps: [
      "Turn off the main water valve if it's safe to do so.",
      "Turn off power to wet rooms at the breaker.",
      "Move electronics and rugs away from the water.",
      "Don't use a shop vac or vacuum on the water.",
      "Take photos before you move anything.",
    ],
    damageTypes: [
      "Burst & frozen pipes",
      "Water heater failures",
      "Washing machine & dishwasher leaks",
      "Slab leaks",
      "Roof & window leaks",
      "Toilet & tub overflows",
      "Flooded basements",
      "AC condensation leaks",
    ],
    whyTiming: {
      title: "The first 24 hours matter most",
      body: "Wet drywall grows mold within 1–2 days. Fast drying saves your walls. Slow drying means we have to cut them out. That's why we come at 2am.",
    },
    faqs: [
      {
        q: "How fast can you get here?",
        a: "About 60 minutes, any time of day. We'll tell you the exact time when you call.",
      },
      {
        q: "Will insurance pay for this?",
        a: "Sudden damage, like a burst pipe, is usually covered. Slow leaks and outside floods usually aren't. We handle the paperwork either way.",
      },
      {
        q: "Can't I just use fans to dry it?",
        a: "Fans dry the surface, not inside your walls. That hidden water turns into mold. We use commercial dryers and check with meters until it's truly dry.",
      },
      {
        q: "Do I have to move out?",
        a: "Usually no. You can stay home while we work. If it's not safe, we'll tell you and help with your insurance.",
      },
    ],
    related: ["mold-remediation", "storm-damage-restoration"],
    metaTitle: "Water Damage Restoration — 24/7, On-Site in 60 Min",
    metaDescription:
      "24/7 water damage cleanup. We pull out water, dry your home, and repair the damage. We bill your insurance directly. On-site in 60 minutes.",
  },
  {
    slug: "fire-damage-restoration",
    name: "Fire & Smoke Damage Restoration",
    shortName: "Fire & Smoke",
    icon: "flame",
    excerpt: "Fire, smoke, and the water firefighters left behind. One crew fixes all of it.",
    heroIntro:
      "After a fire, you're left with three problems: fire damage, smoke, and water from the hose. One crew handles all three. We secure your home the same day, then repair and clean.",
    emergencySteps: [
      "Don't go back in until firefighters say it's safe.",
      "Don't wipe soot off walls. It can smear and stain for good.",
      "Don't run your AC. It spreads soot through your home.",
      "Take photos of every room before anything is moved.",
      "Call your insurer to start the claim, then call us.",
    ],
    damageTypes: [
      "Structure damage",
      "Smoke & soot",
      "Smoke odor",
      "Water from firefighting",
      "Board-up & roof tarps",
      "Cleaning your belongings",
      "Kitchen & electrical fires",
      "Duct cleaning",
    ],
    whyTiming: {
      title: "Soot damages fast",
      body: "Soot eats into glass, metal, and countertops within hours. Fast cleanup saves things. Slow cleanup means replacing them. We start the day of the fire.",
    },
    faqs: [
      {
        q: "The fire was small. Do I still need help?",
        a: "Yes, often. Smoke spreads through your whole house, even from a small fire. We check for free and tell you the truth about what you need.",
      },
      {
        q: "Can you really remove the smoke smell?",
        a: "Yes, for good. We remove the source, clean every surface, and treat the air. Sprays only hide the smell for a few weeks. This doesn't.",
      },
      {
        q: "What happens to my things?",
        a: "We photograph and list everything. What can be saved, we clean. What can't, we document for your claim.",
      },
      {
        q: "Does insurance cover fire damage?",
        a: "Yes, almost always, including smoke and water damage. We work with your adjuster and bill them directly.",
      },
    ],
    related: ["water-damage-restoration", "biohazard-cleanup"],
    metaTitle: "Fire & Smoke Damage Restoration — 24/7 Response",
    metaDescription:
      "Fire and smoke damage cleanup. Same-day board-up, soot removal, and repairs. We bill your insurance directly. Available 24/7.",
  },
  {
    slug: "mold-remediation",
    name: "Mold Remediation",
    shortName: "Mold",
    icon: "microscope",
    excerpt: "We remove mold and fix the water problem behind it, so it doesn't come back.",
    heroIntro:
      "Mold is a water problem in disguise. We seal off the area, remove the mold, and find the leak that caused it. Remove mold without fixing the leak, and it just comes back.",
    emergencySteps: [
      "Don't scrub it or spray bleach. That can spread spores.",
      "Close the door to that room. Turn off the AC to that area.",
      "Don't tape plastic over it. Trapped moisture makes it worse.",
      "Note any past leaks or musty smells nearby.",
      "Keep anyone with breathing problems away from the area.",
    ],
    damageTypes: [
      "Black mold removal",
      "Attic & crawlspace mold",
      "Bathroom & kitchen mold",
      "Mold in ducts",
      "Post-flood mold check",
      "Finding the water source",
      "Sealed containment & air filters",
      "Independent clearance testing",
    ],
    whyTiming: {
      title: "Mold spreads fast",
      body: "A small patch releases millions of spores through your AC system. A bathroom corner becomes an attic problem in weeks. Early fixes cost hundreds. Late fixes cost thousands.",
    },
    faqs: [
      {
        q: "Is the mold dangerous?",
        a: "It depends on the type and who's in the home. Kids, older people, and anyone with allergies are most at risk. We test what's growing and remove it safely either way.",
      },
      {
        q: "Can't I just spray bleach on it?",
        a: "Bleach only kills mold on the surface. It can't reach roots inside drywall or wood, and often the moisture feeds new growth. We'll tell you honestly what your situation needs.",
      },
      {
        q: "Do you test before and after?",
        a: "Yes. We can arrange independent testing after the work, so the all-clear comes from someone who doesn't work for us.",
      },
      {
        q: "Does insurance cover mold removal?",
        a: "Usually yes, if it came from a covered leak, like a burst pipe. Mold from long-term neglect usually isn't covered.",
      },
    ],
    related: ["water-damage-restoration", "sewage-cleanup"],
    metaTitle: "Mold Remediation — Licensed, Contained, Source-Fixed",
    metaDescription:
      "Licensed mold removal with sealed containment, air filtering, and the leak fixed for good. Independent clearance testing available.",
  },
  {
    slug: "storm-damage-restoration",
    name: "Storm & Flood Damage Restoration",
    shortName: "Storm & Flood",
    icon: "cloud-lightning",
    excerpt: "Roof damage and flood water from storms. We tarp, dry, and rebuild.",
    heroIntro:
      "A storm causes two problems at once: a hole in your roof and water already inside. We send both crews. One tarps the roof. One dries the water. Then we rebuild.",
    emergencySteps: [
      "Stay out of rooms with sagging ceilings.",
      "Place buckets under leaks. Poke a small hole in a bulging ceiling to release water.",
      "Don't climb on the roof. That's our job.",
      "Photograph damage outside and any water coming in.",
      "Treat flood water as dirty. Keep kids and pets away.",
    ],
    damageTypes: [
      "Roof damage & tarping",
      "Flood water removal",
      "Hail damage",
      "Wind & rain damage",
      "Fallen tree damage",
      "Dirty flood water cleanup",
      "Drying the structure",
      "Full storm repairs",
    ],
    whyTiming: {
      title: "The second storm is the real risk",
      body: "An unprotected roof turns the next rain into a bigger loss. Fast tarping stops that. That's why tarping calls jump to the front of our line during storm season.",
    },
    faqs: [
      {
        q: "Everyone's busy after a storm. How fast can you come?",
        a: "We stage crews before storms hit and go to the worst damage first. Call early. Even if repairs take longer, we tarp fast.",
      },
      {
        q: "Does insurance cover storm damage?",
        a: "Wind, hail, and rain damage: usually yes. Rising flood water from outside: that needs separate flood insurance. We document how the water got in either way.",
      },
      {
        q: "Do you fix the roof too, or just tarp it?",
        a: "Both. We tarp it fast, then repair the roof and everything inside. One team, one claim.",
      },
      {
        q: "Should I clean up before the adjuster sees it?",
        a: "Stop further damage first, that's required. But photograph everything before you touch it. We do this for you.",
      },
    ],
    related: ["water-damage-restoration", "fire-damage-restoration"],
    metaTitle: "Storm & Flood Damage Restoration — Emergency Tarping 24/7",
    metaDescription:
      "Storm damage repair. Same-day roof tarping, flood water removal, drying, and full repairs. We bill your insurance directly.",
  },
  {
    slug: "sewage-cleanup",
    name: "Sewage Cleanup",
    shortName: "Sewage",
    icon: "waves",
    excerpt: "Sewage backups are dangerous to clean yourself. We remove and disinfect it safely.",
    heroIntro:
      "Sewage water carries bacteria and germs. It's not safe to clean yourself. Our crew removes it in protective gear, takes out what can't be cleaned, and disinfects the rest.",
    emergencySteps: [
      "Keep everyone, especially kids and pets, away from the area.",
      "Don't run water or flush anywhere in the house.",
      "Turn off the AC so it doesn't spread germs through the air.",
      "Don't try to mop or vacuum it yourself.",
      "Cut power to any rooms near the water.",
    ],
    damageTypes: [
      "Drain & main line backups",
      "Toilet overflows",
      "Sump pump failures",
      "Septic overflows",
      "Slab leak sewage",
      "Crawlspace contamination",
      "Disinfecting treatment",
      "Removing damaged material",
    ],
    whyTiming: {
      title: "This can't wait until morning",
      body: "Every hour, germs spread deeper into your walls and floor. Fast action means we clean it. Slow action means we tear it out.",
    },
    faqs: [
      {
        q: "Is it really unsafe to clean myself?",
        a: "Yes, beyond a small clean-water overflow. Sewage carries germs that can make you sick. We have the gear and training to do it safely.",
      },
      {
        q: "What has to be thrown away?",
        a: "Things that soaked it up, like carpet and furniture, usually can't be cleaned. We remove those and document them for your claim. Hard surfaces we clean and disinfect.",
      },
      {
        q: "Does insurance cover sewage backups?",
        a: "Often only with a sewer backup add-on to your policy. We check what your policy covers and document the cause.",
      },
      {
        q: "How do I know it's safe after?",
        a: "We disinfect, dry it fully, and test the surfaces. You get proof it's clean, not just our word.",
      },
    ],
    related: ["water-damage-restoration", "biohazard-cleanup"],
    metaTitle: "Sewage Cleanup — Safe Category 3 Water Removal, 24/7",
    metaDescription:
      "Emergency sewage cleanup. Safe removal, disinfecting, and insurance paperwork. Crews on-site in 60 minutes.",
  },
  {
    slug: "biohazard-cleanup",
    name: "Biohazard & Trauma Cleanup",
    shortName: "Biohazard",
    icon: "biohazard",
    excerpt: "Difficult cleanups handled with care, discretion, and certified safety.",
    heroIntro:
      "Some situations shouldn't be cleaned by family. Our team handles trauma scenes and hazardous cleanup with care and privacy. One call, and we handle everything else.",
    emergencySteps: [
      "Don't enter or clean the area yourself.",
      "If police are involved, wait until they release the scene.",
      "Keep the area closed off and the AC off to that zone.",
      "You don't have to face this alone. We handle it, including your insurance.",
      "Ask about unmarked vehicles if you want privacy from neighbors.",
    ],
    damageTypes: [
      "Trauma & accident cleanup",
      "Unattended death cleanup",
      "Blood & fluid removal",
      "Hoarding cleanup",
      "Chemical residue",
      "Disease disinfection",
      "Odor removal",
      "Certified waste disposal",
    ],
    whyTiming: {
      title: "Handled fast, handled quietly",
      body: "Waiting makes cleanup harder and prolongs the pain for families. Fast, complete cleanup is how a space becomes a home again.",
    },
    faqs: [
      {
        q: "Will the neighbors find out?",
        a: "Not from us. We offer unmarked vehicles, our team doesn't discuss the job, and we work at hours you choose.",
      },
      {
        q: "Is this covered by insurance?",
        a: "Often, yes. We handle the claim paperwork directly with your insurer.",
      },
      {
        q: "Are your technicians certified?",
        a: "Yes. They're trained and certified for safe handling and disposal, and we follow every safety rule.",
      },
      {
        q: "How fast can you come?",
        a: "We prioritize these calls 24/7 and coordinate with police on scene release. Once released, we're usually there within hours.",
      },
    ],
    related: ["sewage-cleanup", "fire-damage-restoration"],
    metaTitle: "Biohazard & Trauma Cleanup — Discreet, Certified, 24/7",
    metaDescription:
      "Discreet biohazard and trauma scene cleanup by certified technicians. Complete cleanup, insurance handled.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
