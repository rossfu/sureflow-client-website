import Link from "next/link";
import { FileCheck, Camera, Calculator, ArrowRight } from "lucide-react";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";

/**
 * Kills objection #2: "will insurance be a nightmare?"
 * Risk reversal — we absorb the paperwork burden.
 */
export function InsuranceCallout() {
  return (
    <section className="bg-brand-50 py-16 sm:py-20 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">Insurance, Handled</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
            We deal with your insurance. You don't have to.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            We bill your insurer directly and send them everything they need.{" "}
            <strong className="text-brand-900">We work for you, not the insurance company.</strong>
          </p>
          <Link
            href="/insurance"
            className="mt-6 inline-flex items-center gap-1.5 font-semibold text-accent-600 transition-colors duration-200 hover:text-accent-700"
          >
            How claims work
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          <p className="mt-8 text-sm font-medium text-slate-500">
            We work with: {site.insurers.join(" · ")} — and all others.
          </p>
        </div>

        <ul className="space-y-5">
          {[
            {
              icon: Camera,
              title: "We document everything",
              body: "Photos and reports, kept for your claim automatically.",
            },
            {
              icon: Calculator,
              title: "Estimates adjusters expect",
              body: "Written the way your insurer needs them. Fewer disputes, faster approval.",
            },
            {
              icon: FileCheck,
              title: "You just pay your deductible",
              body: "We bill your insurer directly. No fronting big money and waiting.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <li key={title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-900">
                <Icon aria-hidden="true" className="h-5 w-5 text-accent-500" />
              </span>
              <div>
                <h3 className="font-display font-bold text-brand-900">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
