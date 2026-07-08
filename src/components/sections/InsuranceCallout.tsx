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
            You've had enough surprises today. Your claim won't be one.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            We work with every major carrier and bill your insurer directly. Our estimates use the
            same software your adjuster uses, so claims move on evidence instead of arguments. And
            to be clear about whose side we're on: <strong className="text-brand-900">we work for you, not the
            insurance company.</strong>
          </p>
          <Link
            href="/insurance"
            className="mt-6 inline-flex items-center gap-1.5 font-semibold text-accent-600 transition-colors duration-200 hover:text-accent-700"
          >
            How the claims process works
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          <p className="mt-8 text-sm font-medium text-slate-500">
            Carriers we work with regularly: {site.insurers.join(" · ")} — and all others.
          </p>
        </div>

        <ul className="space-y-5">
          {[
            {
              icon: Camera,
              title: "Everything documented",
              body: "Photos, moisture logs, and daily readings — the evidence file your claim is built on, kept for you automatically.",
            },
            {
              icon: Calculator,
              title: "Adjuster-standard estimates",
              body: "Itemized Xactimate scopes in the exact format carriers expect. Fewer disputes, faster approvals.",
            },
            {
              icon: FileCheck,
              title: "Billed direct — you pay your deductible",
              body: "For covered losses we invoice your insurer directly. No fronting five figures and waiting on reimbursement.",
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
