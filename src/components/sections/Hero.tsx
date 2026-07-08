import { Phone, MessageSquare, Timer, ClipboardCheck, FileCheck, BadgeCheck } from "lucide-react";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

/**
 * The 3-second test lives here: what, where, how fast, why trust, one action.
 * Typographic hero by default — never depends on photography to look finished.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-950 text-white">
      {/* Tonal depth only — no imagery required */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(80rem_40rem_at_70%_-10%,rgba(70,104,138,0.35),transparent)]"
      />
      <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_24rem] lg:gap-16 lg:py-28">
        <div>
          {/* Availability cue: converts "a company" into "a crew nearby, right now" */}
          <p className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/90">
            <span className="relative flex h-2.5 w-2.5">
              <span className="availability-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Crews available now in {site.address.city}
          </p>

          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Water. Fire. Mold.
            <br />
            <span className="text-accent-500">Restored — fast.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
            24/7 emergency restoration across {site.serviceRegion}. On-site in{" "}
            {site.responseTimeMinutes} minutes, and we bill your insurance directly — so you can
            focus on your family, not the paperwork.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={`tel:${site.phoneE164}`} size="lg" dataCta="hero-call">
              <Phone aria-hidden="true" className="h-5 w-5" />
              Call {site.phone}
            </Button>
            <Button href="/contact" variant="dark" size="lg" dataCta="hero-form" className="border border-white/15">
              <MessageSquare aria-hidden="true" className="h-5 w-5" />
              Request Help Online
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            <Badge onDark label="IICRC-Certified Firm" />
            <Badge onDark label="Licensed & Insured" />
            <Badge onDark label={`${site.rating.value}★ · ${site.rating.count}+ reviews`} />
            <Badge onDark label="Insurance Billed Direct" />
          </div>
        </div>

        {/* Response promise card — the anxiety checklist, answered */}
        <aside className="hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur lg:block">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-accent-400">
            Our Response Promise
          </h2>
          <ul className="mt-6 space-y-5">
            <li className="flex gap-4">
              <Timer aria-hidden="true" className="h-6 w-6 shrink-0 text-accent-500" />
              <div>
                <p className="font-semibold text-white">{site.responseTimeMinutes}-minute arrival</p>
                <p className="mt-0.5 text-sm text-white/60">Average across {site.serviceRegion}, day or night.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <ClipboardCheck aria-hidden="true" className="h-6 w-6 shrink-0 text-accent-500" />
              <div>
                <p className="font-semibold text-white">Free assessment & estimate</p>
                <p className="mt-0.5 text-sm text-white/60">Itemized, in writing, before work begins.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <FileCheck aria-hidden="true" className="h-6 w-6 shrink-0 text-accent-500" />
              <div>
                <p className="font-semibold text-white">Direct insurance billing</p>
                <p className="mt-0.5 text-sm text-white/60">We document and deal with your adjuster.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <BadgeCheck aria-hidden="true" className="h-6 w-6 shrink-0 text-accent-500" />
              <div>
                <p className="font-semibold text-white">Certified technicians</p>
                <p className="mt-0.5 text-sm text-white/60">IICRC-trained and background-checked.</p>
              </div>
            </li>
          </ul>
        </aside>
      </Container>
    </section>
  );
}
