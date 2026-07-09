import Link from "next/link";
import { Phone, PhoneCall, Timer, ScanSearch, Wrench, ArrowRight } from "lucide-react";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const steps = [
  { icon: PhoneCall, label: "You call" },
  { icon: Timer, label: `We arrive in ${site.responseTimeMinutes} min` },
  { icon: ScanSearch, label: "We assess & document" },
  { icon: Wrench, label: "We fix it, insurance billed" },
];

/**
 * Homepage-only: replaces the full ProcessTimeline + InsuranceCallout pair
 * (still used in full on /insurance and /services) with one compact,
 * colorful band. Action-first, not an explainer.
 */
export function HowItWorksBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-950 to-accent-900 py-16 text-white sm:py-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(40rem_20rem_at_85%_0%,rgba(234,88,12,0.25),transparent)]"
      />
      <Container className="relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">How It Works</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Call. We handle the rest.
            </h2>
          </div>
          <Button href={`tel:${site.phoneE164}`} dataCta="how-it-works-call">
            <Phone aria-hidden="true" className="h-5 w-5" />
            Call {site.phone}
          </Button>
        </div>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, label }, i) => (
            <li
              key={label}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 font-display text-sm font-bold text-accent-400">
                {i + 1}
              </span>
              <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-accent-400" />
              <span className="text-sm font-semibold text-white">{label}</span>
            </li>
          ))}
        </ol>

        <p className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-white/70">
          We bill {site.insurers.slice(0, 3).join(", ")} and every other insurer directly — you just pay your deductible.
          <Link
            href="/insurance"
            className="inline-flex items-center gap-1 font-semibold text-accent-400 transition-colors duration-200 hover:text-accent-300"
          >
            See how claims work
            <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
          </Link>
        </p>
      </Container>
    </section>
  );
}
