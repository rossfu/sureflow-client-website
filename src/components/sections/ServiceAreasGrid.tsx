import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { cities } from "@/config/cities";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

/** Local relevance + the internal-linking hub for city pages. */
export function ServiceAreasGrid() {
  return (
    <section className="bg-brand-50 py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeader
          eyebrow="Where We Work"
          title={`We cover ${site.serviceRegion}`}
          lede={`Crews are close by, ready in about ${site.responseTimeMinutes} minutes.`}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/service-areas/${city.slug}`}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-[box-shadow,border-color] duration-200 hover:border-slate-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50">
                  <MapPin aria-hidden="true" className="h-5 w-5 text-accent-600" />
                </span>
                <span>
                  <span className="block font-display font-bold text-brand-900">{city.label}</span>
                  <span className="block text-sm text-slate-500">{city.neighborhoods.length}+ neighborhoods covered</span>
                </span>
              </span>
              <ArrowRight
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-slate-300 transition-colors duration-200 group-hover:text-accent-600"
              />
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          Don't see your area? Call us anyway. We cover nearby towns too.
        </p>
      </Container>
    </section>
  );
}
