import Image from "next/image";
import { Phone, MessageSquare, Timer, ClipboardCheck, FileCheck, BadgeCheck } from "lucide-react";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { withBasePath } from "@/lib/utils";

/**
 * The 3-second test lives here: what, where, how fast, why trust, one action.
 * Call CTA is the loudest thing on the page — everything else supports it.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-950 text-white">
      <Image
        src={withBasePath("/images/hero-van-crew.png")}
        alt=""
        fill
        priority
        className="object-cover opacity-40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/80 to-brand-950/40"
      />
      <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_24rem] lg:gap-16 lg:py-28">
        <div>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/90">
            <span className="relative flex h-2.5 w-2.5">
              <span className="availability-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Crews ready now in {site.address.city}
          </p>

          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Water. Fire. Mold.
            <br />
            <span className="text-accent-500">Fixed fast.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
            We arrive in {site.responseTimeMinutes} minutes. We bill your insurance directly. Call now.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={`tel:${site.phoneE164}`} size="lg" dataCta="hero-call" className="text-xl">
              <Phone aria-hidden="true" className="h-6 w-6" />
              Call {site.phone}
            </Button>
            <Button href="/contact" variant="dark" size="lg" dataCta="hero-form" className="border border-white/15">
              <MessageSquare aria-hidden="true" className="h-5 w-5" />
              Request Help Online
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            <Badge onDark label="Certified" />
            <Badge onDark label="Licensed & Insured" />
            <Badge onDark label={`${site.rating.value}★ · ${site.rating.count}+ reviews`} />
            <Badge onDark label="We Bill Insurance" />
          </div>
        </div>

        {/* Response promise card — the anxiety checklist, answered */}
        <aside className="hidden rounded-2xl border border-white/10 bg-white/10 p-8 backdrop-blur lg:block">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-accent-400">
            What You Get
          </h2>
          <ul className="mt-6 space-y-5">
            <li className="flex gap-4">
              <Timer aria-hidden="true" className="h-6 w-6 shrink-0 text-accent-500" />
              <div>
                <p className="font-semibold text-white">Arrive in {site.responseTimeMinutes} minutes</p>
                <p className="mt-0.5 text-sm text-white/70">Day or night.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <ClipboardCheck aria-hidden="true" className="h-6 w-6 shrink-0 text-accent-500" />
              <div>
                <p className="font-semibold text-white">Free written estimate</p>
                <p className="mt-0.5 text-sm text-white/70">Before we start any work.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <FileCheck aria-hidden="true" className="h-6 w-6 shrink-0 text-accent-500" />
              <div>
                <p className="font-semibold text-white">We bill your insurance</p>
                <p className="mt-0.5 text-sm text-white/70">You don't deal with the adjuster.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <BadgeCheck aria-hidden="true" className="h-6 w-6 shrink-0 text-accent-500" />
              <div>
                <p className="font-semibold text-white">Certified crew</p>
                <p className="mt-0.5 text-sm text-white/70">Trained and background-checked.</p>
              </div>
            </li>
          </ul>
        </aside>
      </Container>
    </section>
  );
}
