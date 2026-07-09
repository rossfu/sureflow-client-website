/**
 * BLOG SEED CONTENT — informational capture + internal links to services.
 * Pattern: "what to do after X" guides with a commercial-anchor link.
 */

export interface PostSection {
  heading: string;
  paragraphs: string[];
}

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  serviceSlug: string;
  readMinutes: number;
  sections: PostSection[];
}

export const posts: Post[] = [
  {
    slug: "what-to-do-after-a-burst-pipe",
    title: "Burst Pipe? Do These 6 Things in the Next 10 Minutes",
    description:
      "A burst pipe releases up to 8 gallons a minute. Here's exactly what to do — in order — before help arrives.",
    date: "2026-05-14",
    serviceSlug: "water-damage-restoration",
    readMinutes: 4,
    sections: [
      {
        heading: "1. Shut off the main water valve",
        paragraphs: [
          "Every minute matters: a typical burst supply line releases 4–8 gallons per minute. Your main shutoff is usually in the garage, a front closet, or a covered box near the street. Turn it clockwise until it stops. If you can't find it, your water meter box at the curb has a shutoff too — a crescent wrench works.",
          "Do this before anything else. Everything below assumes the water has stopped rising.",
        ],
      },
      {
        heading: "2. Kill power to wet rooms",
        paragraphs: [
          "If water has reached outlets, cords, or appliances, flip the breakers for those rooms. Don't stand in water while touching the panel — if the panel area is wet, leave it and keep everyone out of the room instead.",
        ],
      },
      {
        heading: "3. Open a faucet and relieve the pressure",
        paragraphs: [
          "Open the lowest faucet in the house (a tub works) to drain remaining water out of the lines instead of out of the break.",
        ],
      },
      {
        heading: "4. Move what matters",
        paragraphs: [
          "Electronics, documents, photos, rugs. Put aluminum foil or plastic under the legs of furniture you can't move — furniture stain wicking into wet carpet is a fight you don't need.",
        ],
      },
      {
        heading: "5. Photograph everything",
        paragraphs: [
          "Wide shots of each room, close-ups of the pipe and standing water, timestamps on. Your insurance claim is built on this documentation, and it takes three minutes.",
        ],
      },
      {
        heading: "6. Call for professional drying — even if it 'looks' minor",
        paragraphs: [
          "Water you can see is the smaller problem. Water inside walls, under flooring, and in insulation is what turns a plumbing repair into a mold remediation three weeks later. Professional crews measure moisture instead of guessing.",
          "Our water damage restoration team answers 24/7 and averages 60 minutes to your door across Greater Houston — and sudden pipe failures are covered by most homeowner's policies.",
        ],
      },
    ],
  },
  {
    slug: "early-warning-signs-of-hidden-mold",
    title: "7 Early Warning Signs of Hidden Mold (Before You Can See It)",
    description:
      "Most mold problems announce themselves before they show themselves. Here's what to look — and smell — for.",
    date: "2026-04-02",
    serviceSlug: "mold-remediation",
    readMinutes: 5,
    sections: [
      {
        heading: "The smell test beats the eye test",
        paragraphs: [
          "A persistent musty, earthy smell — especially one that's stronger in one room, after rain, or when the AC first kicks on — is the single most reliable early indicator. Mold produces gases (MVOCs) as it grows; your nose detects colonies your eyes can't.",
        ],
      },
      {
        heading: "Watch the walls",
        paragraphs: [
          "Paint that bubbles or peels in one spot, drywall that feels soft or cool to the touch, faint tea-colored staining on ceilings, and baseboards that are darkening or lifting all point to moisture inside the wall assembly — mold's habitat.",
        ],
      },
      {
        heading: "Watch your body",
        paragraphs: [
          "Allergy symptoms that improve when you leave the house, worsen in a specific room, or hit one family member harder (often a child or someone with asthma) frequently trace back to indoor air quality.",
        ],
      },
      {
        heading: "Check the usual suspects",
        paragraphs: [
          "Under sinks, behind toilets, around the water heater, the AC drip pan, window sills, and any room that flooded — even 'dried out' — in the past year. Mold from an old leak can colonize slowly for months.",
        ],
      },
      {
        heading: "What to do if you suspect it",
        paragraphs: [
          "Don't tear into the wall, and don't spray bleach — both spread spores. Note where the smell is strongest and any leak history, then have it assessed properly. Our mold remediation team inspects with moisture meters and thermal imaging, tells you honestly whether you have a problem, and fixes the moisture source so removal actually sticks.",
        ],
      },
    ],
  },
  {
    slug: "fire-insurance-claim-guide",
    title: "After the Fire: A Calm Guide to Your Insurance Claim",
    description:
      "The week after a house fire is paperwork on top of shock. Here's the claim process, step by step, in plain English.",
    date: "2026-03-10",
    serviceSlug: "fire-damage-restoration",
    readMinutes: 6,
    sections: [
      {
        heading: "First 24 hours: report and protect",
        paragraphs: [
          "Call your insurer's claim line and get a claim number — that's all the first call needs to do. Your policy requires 'reasonable steps to prevent further damage,' which means board-up and roof tarping. Restoration companies do this same-day and bill it to the claim.",
        ],
      },
      {
        heading: "Understand who the adjuster works for",
        paragraphs: [
          "The adjuster is professional and usually fair — and works for the insurance company. You're entitled to your own documentation, your own itemized estimates, and your own choice of restoration contractor. You are never required to use the insurer's 'preferred vendor.'",
        ],
      },
      {
        heading: "Document like it's your job (this week, it is)",
        paragraphs: [
          "Photograph every room before anything is moved. Keep receipts for every expense — hotel, meals, board-up — because loss-of-use coverage reimburses them. A restoration contractor's inventory of damaged contents becomes the backbone of your personal property claim.",
        ],
      },
      {
        heading: "Where claims go sideways",
        paragraphs: [
          "The three common mistakes: cleaning soot yourself (it sets permanently and destroys evidence), accepting the first settlement figure before hidden damage is scoped, and signing over the entire claim to a contractor sight unseen. Slow down; get everything itemized.",
        ],
      },
      {
        heading: "What a good restoration partner changes",
        paragraphs: [
          "Our fire damage restoration crews prepare the same industry-standard estimates adjusters use, document hidden smoke and water damage before it's painted over, and bill the insurer directly — so the claim moves on evidence, not arguments.",
        ],
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
