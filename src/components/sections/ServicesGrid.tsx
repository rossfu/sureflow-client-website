"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { services } from "@/config/services";
import { Container } from "@/components/ui/Container";
import { withBasePath } from "@/lib/utils";

interface ServicesGridProps {
  /** When set, cards link to /services/[slug]/[citySlug] combo pages */
  citySlug?: string;
  cityName?: string;
  eyebrow?: string;
  title?: string;
  lede?: string;
}

/** Real photography per service — a scannable rail, no generic icon tiles. */
const serviceImage: Record<string, string> = {
  droplets: "/images/service-water.jpg",
  flame: "/images/service-fire.jpg",
  microscope: "/images/service-mold.jpg",
  "cloud-lightning": "/images/service-storm.jpg",
  waves: "/images/service-sewage.jpg",
  biohazard: "/images/service-biohazard.jpg",
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
            const img = serviceImage[service.icon] ?? serviceImage.droplets;
            return (
              <li key={service.slug} className="w-[80%] shrink-0 snap-start sm:w-[20rem]">
                <Link
                  href={href}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={withBasePath(img)}
                      alt={service.name}
                      fill
                      sizes="(min-width: 640px) 20rem, 80vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/10 to-transparent"
                    />
                    <h3 className="absolute inset-x-4 bottom-3 font-display text-lg font-bold text-white drop-shadow-sm">
                      {cityName ? `${service.shortName} — ${cityName}` : service.shortName}
                    </h3>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-sm leading-relaxed text-slate-600">{service.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 transition-colors duration-200 group-hover:text-accent-700">
                      Get help now
                      <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
