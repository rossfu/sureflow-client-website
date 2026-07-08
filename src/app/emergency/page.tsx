import type { Metadata } from "next";
import { Phone, Timer, FileCheck, BadgeCheck } from "lucide-react";
import { site } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { LeadForm } from "@/components/forms/LeadForm";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";

export const metadata: Metadata = buildMetadata({
  title: `Emergency Service — Call Now, On-Site in ${site.responseTimeMinutes} Minutes`,
  description: `Active water, fire, mold, or sewage emergency in ${site.serviceRegion}? Call ${site.phone} now — crews dispatched 24/7, on-site in ${site.responseTimeMinutes} minutes on average.`,
  path: "/emergency",
});

/**
 * Stripped-down landing target for ads and the Google Business Profile
 * link: one giant phone number, three reassurances, one form. Nothing else.
 */
export default function EmergencyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-950 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(70rem_35rem_at_50%_-10%,rgba(70,104,138,0.35),transparent)]"
        />
        <Container className="relative py-16 text-center sm:py-24">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium">
            <span className="relative flex h-2.5 w-2.5">
              <span className="availability-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Crews available now — dispatching 24/7
          </p>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Emergency? You've found the right number.
          </h1>
          <a
            href={`tel:${site.phoneE164}`}
            data-cta="emergency-hero"
            className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-accent-600 px-8 py-5 font-display text-3xl font-bold text-white shadow-lg transition-colors duration-200 hover:bg-accent-700 sm:px-12 sm:text-4xl"
          >
            <Phone aria-hidden="true" className="h-8 w-8" />
            {site.phone}
          </a>
          <p className="mt-4 text-sm text-white/60">Tap to call · A person answers, not a menu</p>

          <dl className="mx-auto mt-12 grid max-w-3xl gap-6 text-left sm:grid-cols-3">
            {[
              { icon: Timer, term: `${site.responseTimeMinutes}-minute arrival`, detail: "Average across the metro, day or night." },
              { icon: FileCheck, term: "Insurance billed direct", detail: "We document and handle the claim." },
              { icon: BadgeCheck, term: "Certified crews", detail: "IICRC-trained, background-checked." },
            ].map(({ icon: Icon, term, detail }) => (
              <div key={term} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <Icon aria-hidden="true" className="h-6 w-6 text-accent-500" />
                <dt className="mt-3 font-display font-bold">{term}</dt>
                <dd className="mt-1 text-sm text-white/60">{detail}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <Container className="mx-auto max-w-2xl">
          <h2 className="text-center font-display text-2xl font-bold text-brand-900 sm:text-3xl">
            Can't talk right now? We'll call you.
          </h2>
          <p className="mt-3 text-center text-slate-600">
            Emergency callbacks within 5 minutes, 24/7.
          </p>
          <div className="mt-8">
            <LeadForm />
          </div>
        </Container>
      </section>

      <ProcessTimeline />
    </>
  );
}
