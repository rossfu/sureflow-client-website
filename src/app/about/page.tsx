import type { Metadata } from "next";
import { BadgeCheck, Users, HeartHandshake, GraduationCap } from "lucide-react";
import { site } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MiniHero } from "@/components/sections/MiniHero";
import { StatsBand } from "@/components/sections/StatsBand";
import { WhyUs } from "@/components/sections/WhyUs";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = buildMetadata({
  title: `About ${site.name} — ${site.serviceRegion} Restoration Since ${site.foundedYear}`,
  description: `${site.name} has restored 4,800+ properties across ${site.serviceRegion} since ${site.foundedYear}. IICRC-certified, licensed & insured, and built around one number that always answers.`,
  path: "/about",
});

const values = [
  {
    icon: BadgeCheck,
    title: "Certified, not just confident",
    body: "IICRC certification isn't a sticker for us — every technician trains to it, and our drying logs prove the standard was met on your job specifically.",
  },
  {
    icon: Users,
    title: "Employees, not day labor",
    body: "The crew in your home is our crew: background-checked, uniformed, and accountable to the same person you'll talk to if anything's not right.",
  },
  {
    icon: HeartHandshake,
    title: "The bad-day business, taken seriously",
    body: "Nobody calls us on a good day. That shapes everything — how we answer the phone, how we explain options, and why we never sell fear.",
  },
  {
    icon: GraduationCap,
    title: "Honest scoping, in writing",
    body: "If it can be dried, we dry it. If it must be removed, we show you why. If you don't need us at all, we'll say so — that honesty is why neighbors refer us.",
  },
];

export default function AboutPage() {
  return (
    <>
      <MiniHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
        title={`The crew ${site.serviceRegion.replace(", TX", "")} calls at 2am`}
        intro={`${site.name} started in ${site.foundedYear} with one truck and a conviction: the restoration industry had an honesty problem, and the fix was simple — answer the phone, show up when you said, document everything, and never bill for work a homeowner didn't need. ${new Date().getFullYear() - site.foundedYear} years and 4,800+ properties later, that's still the whole playbook.`}
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeader
            eyebrow="How We Work"
            title="Four things we refuse to compromise on"
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50">
                  <Icon aria-hidden="true" className="h-5 w-5 text-accent-600" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-900">{title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <StatsBand />
      <WhyUs />
      <FinalCTA
        title="Meet us the way most people do — mid-emergency."
        lede={`Or don't wait for one: call ${site.phone} with any question about your property, and get a straight answer from a certified tech.`}
      />
    </>
  );
}
