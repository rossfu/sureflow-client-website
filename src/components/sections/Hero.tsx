import Image from "next/image";
import { Phone, Clock, ShieldCheck, Star } from "lucide-react";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { LeadForm } from "@/components/forms/LeadForm";
import { withBasePath } from "@/lib/utils";

/**
 * The 3-second test lives here: what, where, how fast, why trust — and the
 * one action, made frictionless. The lead form sits in the fold (no "request
 * help online" detour): people standing in water fill it in place.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-950 text-white">
      <Image
        src={withBasePath("/images/hero-team.jpg")}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-45"
      />
      {/* Directional wash: darkest at the left where the copy sits */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/85 to-brand-950/45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-brand-950/30"
      />

      <Container className="relative py-12 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* ---------- Left: promise ---------- */}
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="availability-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              Crews available now in {site.address.city}
            </p>

            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Water, fire &amp; mold damage?{" "}
              <span className="text-accent-500">We&rsquo;re on the way.</span>
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-white/80 sm:text-xl">
              24/7 emergency restoration across {site.serviceRegion}. On-site in about{" "}
              <strong className="font-semibold text-white">{site.responseTimeMinutes} minutes</strong> — and we bill
              your insurance directly.
            </p>

            <div className="mt-8">
              <a
                href={`tel:${site.phoneE164}`}
                data-cta="hero-call"
                className="inline-flex h-16 items-center justify-center gap-3 rounded-xl bg-accent-600 px-7 text-xl font-bold text-white shadow-lg shadow-accent-900/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950"
              >
                <Phone aria-hidden="true" className="h-6 w-6" />
                {site.phone}
              </a>
              <p className="mt-3 text-sm text-white/60">
                A real person answers — day, night, weekends &amp; holidays.
              </p>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white/85">
              <li className="inline-flex items-center gap-2">
                <Clock aria-hidden="true" className="h-4 w-4 text-accent-400" />
                {site.responseTimeMinutes}-min response
              </li>
              <li className="inline-flex items-center gap-2">
                <ShieldCheck aria-hidden="true" className="h-4 w-4 text-accent-400" />
                Licensed &amp; insured
              </li>
              <li className="inline-flex items-center gap-2">
                <Star aria-hidden="true" className="h-4 w-4 text-accent-400" />
                {site.rating.value}★ · {site.rating.count}+ reviews
              </li>
            </ul>
          </div>

          {/* ---------- Right: the form, right here ---------- */}
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[1.75rem] bg-accent-500/10 blur-2xl" aria-hidden="true" />
            <div className="rounded-2xl bg-white/95 p-1 shadow-2xl ring-1 ring-black/5 backdrop-blur">
              <div className="rounded-[0.9rem] bg-gradient-to-r from-accent-600 to-accent-500 px-5 py-4 text-center">
                <p className="font-display text-lg font-bold text-white">Get help now — free estimate</p>
                <p className="mt-0.5 text-sm text-white/85">Tell us what happened. We&rsquo;ll call you back fast.</p>
              </div>
              <div className="p-4 sm:p-5">
                <LeadForm variant="bare" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
