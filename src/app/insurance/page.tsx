import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { site } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MiniHero } from "@/components/sections/MiniHero";
import { InsuranceCallout } from "@/components/sections/InsuranceCallout";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = buildMetadata({
  title: "Insurance Claims Help — We Bill Your Insurer Directly",
  description: `${site.name} documents your loss, prepares adjuster-standard estimates, and bills your insurance company directly. Here's how the claims process actually works.`,
  path: "/insurance",
});

const claimSteps = [
  {
    title: "You report the loss",
    body: "One call to your insurer's claim line gets you a claim number. That's all you need before mitigation starts — policies require you to prevent further damage, and our emergency work counts.",
  },
  {
    title: "We document everything",
    body: "Photos of every affected room and item, moisture readings mapped and logged daily, and a cause-of-loss report. This file is what your claim gets paid on.",
  },
  {
    title: "We scope it in the adjuster's language",
    body: "Our estimates are written in Xactimate — the same software nearly every carrier uses. When both sides price from the same book, approvals move faster and disputes shrink.",
  },
  {
    title: "We meet the adjuster on-site",
    body: "You don't have to translate between a contractor and an insurance company. We walk the loss with your adjuster and answer the technical questions directly.",
  },
  {
    title: "The insurer pays us — you pay your deductible",
    body: "For covered losses we bill the carrier directly. No fronting five figures, no waiting on reimbursement checks.",
  },
];

const insuranceFaqs = [
  {
    q: "Do I have to use the company my insurance recommends?",
    a: "No. In Texas — as in most states — you have the legal right to choose your own restoration contractor. Insurer 'preferred vendors' work under volume agreements with the carrier; we work for you. Either way, the carrier pays covered costs at fair market rates.",
  },
  {
    q: "Will filing a claim raise my rates?",
    a: "It can affect renewal pricing, which is why for smaller losses we give you an honest repair number first — sometimes paying out of pocket beats filing. We'll tell you what we'd do in your position, then you decide.",
  },
  {
    q: "What if my claim is denied or underpaid?",
    a: "Our documentation — photos, moisture logs, itemized scope — is the evidence a supplement or appeal is built on. We regularly prepare supplements when adjusters miss hidden damage, and it's resolved between professionals, not in arguments.",
  },
  {
    q: "What's typically covered vs. not?",
    a: "Generally covered: sudden events — burst pipes, appliance failures, fire, storm damage, and resulting mold. Generally not: long-term neglect, gradual leaks, and outside flooding (that's separate flood insurance). The cause determines coverage, and documenting cause is our job.",
  },
];

export default function InsurancePage() {
  return (
    <>
      <MiniHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Insurance", path: "/insurance" },
        ]}
        title="The insurance claim, handled like it's our job — because it is"
        intro="Most people file one property claim in their life; we handle them every week. Here's exactly how it works when you call us first, and why the paperwork stops being your problem."
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="The Claims Process"
            title="Five steps, none of them yours to worry about"
            align="left"
          />
          <ol className="mt-12 space-y-8 border-l-2 border-brand-100 pl-8">
            {claimSteps.map((step, i) => (
              <li key={step.title} className="relative">
                <span className="absolute -left-[2.85rem] flex h-9 w-9 items-center justify-center rounded-full bg-brand-900 font-display text-sm font-bold text-accent-500">
                  {i + 1}
                </span>
                <h3 className="font-display text-xl font-bold text-brand-900">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 rounded-2xl bg-brand-50 p-8">
            <h3 className="font-display text-lg font-bold text-brand-900">Carriers we work with weekly</h3>
            <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {site.insurers.map((carrier) => (
                <li key={carrier} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <CheckCircle2 aria-hidden="true" className="h-4 w-4 shrink-0 text-accent-600" />
                  {carrier}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate-500">…and every other carrier. If they write property policies, we've billed them.</p>
          </div>
        </Container>
      </section>

      <InsuranceCallout />
      <FAQSection faqs={insuranceFaqs} title="Insurance questions, answered honestly" />
      <FinalCTA
        title="Start the claim right — call before you file."
        lede="Two minutes on the phone now can save weeks of claim friction later. We'll tell you what to say, what to photograph, and whether filing even makes sense."
      />
    </>
  );
}
