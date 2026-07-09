"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { services } from "@/config/services";
import { Container } from "@/components/ui/Container";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

interface ServicesGridProps {
  /** When set, cards link to /services/[slug]/[citySlug] combo pages */
  citySlug?: string;
  cityName?: string;
  eyebrow?: string;
  title?: string;
  lede?: string;
}

/** One color per card — a scannable, servpro-style rail instead of a wall of identical tiles. */
const cardTheme: Record<string, { chip: string; ring: string }> = {
  droplets: { chip: "bg-sky-600", ring: "hover:border-sky-300" },
  flame: { chip: "bg-orange-600", ring: "hover:border-orange-300" },
  microscope: { chip: "bg-emerald-600", ring: "hover:border-emerald-300" },
  "cloud-lightning": { chip: "bg-violet-600", ring: "hover:border-violet-300" },
  waves: { chip: "bg-cyan-700", ring: "hover:border-cyan-300" },
  biohazard: { chip: "bg-rose-600", ring: "hover:border-rose-300" },
};

/**
 * Self-identification step, reframed as a question: "what's going on?"
 * Horizontal scroll rail (servpro.com pattern) beats a dense info grid.
 */
export function ServicesGrid({
  citySlug,
  cityName,
  eyebrow = "What's Going On?",
  title = "Tell us what happened. We'll send the right crew.",
  lede,
}: ServicesGridProps) {
  const railRef = useRef<HTMLUListElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector("li");
    const width = card ? card.getBoundingClientRect().width + 20 : 320;
    rail.scrollBy({ left: dir * width, behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-to-b from-brand-50 via-white to-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">{eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
              {title}
            </h2>
            {lede ? <p className="mt-3 text-lg leading-relaxed text-slate-600">{lede}</p> : null}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-slate-300 text-brand-900 transition-colors duration-200 hover:bg-white"
            >
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-slate-300 text-brand-900 transition-colors duration-200 hover:bg-white"
            >
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>

        <ul
          ref={railRef}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2"
        >
          {services.map((service) => {
            const href = citySlug ? `/services/${service.slug}/${citySlug}` : `/services/${service.slug}`;
            const theme = cardTheme[service.icon] ?? cardTheme.droplets;
            return (
              <li key={service.slug} className="w-[78%] shrink-0 snap-start sm:w-[19rem]">
                <Link
                  href={href}
                  className={`group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-[box-shadow,border-color] duration-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 ${theme.ring}`}
                >
                  <span className={`flex h-12 w-12 items-center justify-center rounded-xl text-white ${theme.chip}`}>
                    <ServiceIcon icon={service.icon} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-brand-900">
                    {cityName ? `${service.shortName} — ${cityName}` : service.shortName}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 transition-colors duration-200 group-hover:text-accent-700">
                    Get help now
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
