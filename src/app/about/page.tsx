import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck, Users, HeartHandshake, GraduationCap } from "lucide-react";
import { site } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { withBasePath } from "@/lib/utils";
import { MiniHero } from "@/components/sections/MiniHero";
import { StatsBand } from "@/components/sections/StatsBand";
import { WhyUs } from "@/components/sections/WhyUs";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = buildMetadata({
  title: `About ${site.name} — ${site.serviceRegion} Restoration Since ${site.foundedYear}`,
  description: `${site.name} has restored 4,800+ properties across ${site.serviceRegion} since ${site.foundedYear}.`,
  path: "/about",
});

const values = [
  { icon: BadgeCheck, title: "Certified", color: "bg-sky-600" },
  { icon: Users, title: "Our own crew, never day labor", color: "bg-orange-600" },
  { icon: HeartHandshake, title: "We never sell fear", color: "bg-emerald-600" },
  { icon: GraduationCap, title: "Honest scoping, in writing", color: "bg-violet-600" },
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
        intro={`Since ${site.foundedYear}. 4,800+ properties restored. One number that always answers.`}
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 aspect-[4/5] overflow-hidden rounded-2xl lg:order-1">
            <Image
              src={withBasePath("/images/technician-portrait.png")}
              alt="A certified SureFlow Restoration technician"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeader align="left" eyebrow="How We Work" title="What we won't compromise on" />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {values.map(({ icon: Icon, title, color }) => (
                <div key={title} className="flex items-center gap-3">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white ${color}`}>
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <p className="font-semibold text-brand-900">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <StatsBand />
      <WhyUs />
      <FinalCTA title="Meet us the way most people do — mid-emergency." lede="" />
    </>
  );
}
