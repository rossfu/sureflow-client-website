import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { services, getService } from "@/config/services";
import { cities, getCity } from "@/config/cities";
import { reviewsForCity, reviews } from "@/config/reviews";
import { site } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { serviceColor } from "@/components/ui/ServiceIcon";
import { MiniHero } from "@/components/sections/MiniHero";
import { EmergencySteps } from "@/components/sections/EmergencySteps";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

interface Params {
  service: string;
  city: string;
}

/** 6 services × 6 cities = 36 statically generated local pages. */
export function generateStaticParams(): Params[] {
  return services.flatMap((s) => cities.map((c) => ({ service: s.slug, city: c.slug })));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { service: serviceSlug, city: citySlug } = await params;
  const service = getService(serviceSlug);
  const city = getCity(citySlug);
  if (!service || !city) return {};
  return buildMetadata({
    title: `${service.name} in ${city.label} — 24/7 Emergency Response`,
    description: `${service.shortName} emergency? ${site.name} serves ${city.label} 24/7 with certified crews, free estimates, and direct insurance billing.`,
    path: `/services/${service.slug}/${city.slug}`,
  });
}

export default async function ServiceCityPage({ params }: { params: Promise<Params> }) {
  const { service: serviceSlug, city: citySlug } = await params;
  const service = getService(serviceSlug);
  const city = getCity(citySlug);
  if (!service || !city) notFound();

  const cityReviews = reviewsForCity(city.slug);
  const displayReviews = cityReviews.length >= 2 ? cityReviews : [...reviews];
  const siblingCities = cities.filter((c) => c.slug !== city.slug);
  const color = serviceColor[service.icon];

  return (
    <>
      <JsonLd data={serviceSchema(service, city)} />
      <MiniHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.shortName, path: `/services/${service.slug}` },
          { name: city.label, path: `/services/${service.slug}/${city.slug}` },
        ]}
        title={`${service.name} in ${city.label}`}
        intro={city.localNote}
      />

      <EmergencySteps steps={[...service.emergencySteps]} serviceName={service.shortName} />

      {/* Local coverage — genuine per-city data keeps these pages unique */}
      <section className={`py-14 text-white sm:py-16 ${color}`}>
        <Container className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/80">{city.name} Coverage</p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">Neighborhoods we serve</h2>
          <ul className="mt-7 flex flex-wrap justify-center gap-3">
            {city.neighborhoods.map((n) => (
              <li
                key={n}
                className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur"
              >
                <MapPin aria-hidden="true" className="h-4 w-4" />
                {n}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ReviewsSection reviews={displayReviews} title={`Recent work near ${city.name}`} />
      <FAQSection faqs={[...service.faqs]} title={`${service.shortName} in ${city.name}`} lede="" />

      {/* Sibling links: crawlable lattice, useful navigation */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="mx-auto max-w-4xl">
          <SectionHeader align="left" eyebrow="Nearby" title={`${service.shortName} in other cities`} />
          <ul className="mt-6 flex flex-wrap gap-3">
            {siblingCities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/services/${service.slug}/${c.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-brand-900 transition-colors duration-200 hover:border-slate-300 hover:bg-slate-50"
                >
                  {c.label}
                  <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 text-slate-400" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-slate-200 pt-6 text-sm font-semibold">
            <Link href={`/services/${service.slug}`} className="text-accent-600 transition-colors duration-200 hover:text-accent-700">
              All {service.shortName} services →
            </Link>
            <Link href={`/service-areas/${city.slug}`} className="text-accent-600 transition-colors duration-200 hover:text-accent-700">
              All services in {city.label} →
            </Link>
          </div>
        </Container>
      </section>

      <FinalCTA title={`${service.shortName} in ${city.name}? Crews are close.`} />
    </>
  );
}
