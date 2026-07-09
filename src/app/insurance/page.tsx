import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { site } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MiniHero } from "@/components/sections/MiniHero";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = buildMetadata({
  title: "Insurance Claims Help — We Bill Your Insurer Directly",
  description: `${site.name} documents your loss and bills your insurance company directly.`,
  path: "/insurance",
});

const claimSteps = [
  "You call, we open the claim number with you.",
  "We document everything — photos, moisture readings, cause of loss.",
  "We write the estimate in the format your adjuster expects.",
  "We meet your adjuster on-site. You don't have to.",
  "The insurer pays us directly. You pay your deductible.",
];

const insuranceFaqs = [
  {
    q: "Do I have to use my insurer's recommended contractor?",
    a: "No. You can choose your own restoration company. The carrier still pays covered costs either way.",
  },
  {
    q: "Will filing a claim raise my rates?",
    a: "It can. For smaller losses, we'll give you a repair price first so you can decide if filing makes sense.",
  },
  {
    q: "What if my claim is denied or underpaid?",
    a: "Our photos and documentation are the evidence for an appeal. We prepare supplements when adjusters miss damage.",
  },
  {
    q: "What's usually covered?",
    a: "Sudden events — burst pipes, fire, storm damage — are usually covered. Neglect and outside flooding usually aren't.",
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
        title="We handle your claim. Not you."
        intro="We document the loss, deal with your adjuster, and bill the insurer directly."
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container className="mx-auto max-w-3xl">
          <SectionHeader eyebrow="The Process" title="Five steps. All ours." align="left" />
          <ol className="mt-10 space-y-5">
            {claimSteps.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-900 font-display text-sm font-bold text-accent-500">
                  {i + 1}
                </span>
                <p className="pt-1.5 font-medium text-brand-900">{step}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 rounded-2xl bg-brand-50 p-8">
            <h3 className="font-display text-lg font-bold text-brand-900">Carriers we bill weekly</h3>
            <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {site.insurers.map((carrier) => (
                <li key={carrier} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <CheckCircle2 aria-hidden="true" className="h-4 w-4 shrink-0 text-accent-600" />
                  {carrier}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate-500">— and every other carrier that writes property policies.</p>
          </div>
        </Container>
      </section>

      <FAQSection faqs={insuranceFaqs} title="Insurance questions" lede="" />
      <FinalCTA title="Call before you file. It helps." lede="" />
    </>
  );
}
