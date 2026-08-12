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

/** Site-wide "how it works" summary: one compact, colorful band. Action-first, not an explainer. */
export function HowItWorksBand() {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-16 text-white sm:py-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(45rem_25rem_at_10%_0%,rgba(234,88,12,0.3),transparent),radial-gradient(35rem_20rem_at_95%_100%,rgba(56,189,248,0.18),transparent)]"
      />
      <Container className="relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">How It Works</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Call. <span className="text-accent-500">We handle the rest.</span>
            </h2>
          </div>
          <Button href={`tel:${site.phoneE164}`} size="lg" dataCta="how-it-works-call">
            <Phone aria-hidden="true" className="h-5 w-5" />
            Call {site.phone}
          </Button>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, label }, i) => (
            <li
              key={label}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors duration-200 hover:border-accent-500/40 hover:bg-white/[0.07]"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400 ring-1 ring-accent-500/25">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </span>
                <span className="font-display text-4xl font-black tabular-nums text-white/15 transition-colors duration-200 group-hover:text-white/25">
                  0{i + 1}
                </span>
              </div>
              <p className="mt-5 text-lg font-bold leading-snug text-white">{label}</p>
            </li>
          ))}
        </ol>

        <p className="mt-9 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-white/70">
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
