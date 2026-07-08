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
import { MiniHero } from "@/components/sections/MiniHero";
import { EmergencySteps } from "@/components/sections/EmergencySteps";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { InsuranceCallout } from "@/components/sections/InsuranceCallout";
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
    description: `${service.shortName} emergency? ${site.name} serves ${city.label} 24/7 with IICRC-certified crews, free estimates, and direct insurance billing. ${city.responseNote}`,
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
        intro={`${city.localNote} ${city.responseNote}`}
      />

      <EmergencySteps steps={[...service.emergencySteps]} serviceName={service.shortName} />

      {/* Local coverage — genuine per-city data keeps these pages unique */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container className="mx-auto max-w-4xl">
          <SectionHeader
            eyebrow={`${city.name} Coverage`}
            title={`${city.name} neighborhoods we serve`}
            lede={`Crews respond to ${service.shortName.toLowerCase()} calls throughout ${city.label} — including these areas and everywhere between.`}
          />
          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {city.neighborhoods.map((n) => (
              <li
                key={n}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-brand-900"
              >
                <MapPin aria-hidden="true" className="h-4 w-4 text-accent-600" />
                {n}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ProcessTimeline />
      <InsuranceCallout />
      <ReviewsSection reviews={displayReviews} title={`Recent work near ${city.name}`} />
      <FAQSection
        faqs={[...service.faqs]}
        title={`${service.shortName} in ${city.name} — common questions`}
      />

      {/* Sibling links: crawlable lattice, useful navigation */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="mx-auto max-w-4xl">
          <h2 className="font-display text-lg font-bold text-brand-900">
            {service.shortName} in nearby cities
          </h2>
          <ul className="mt-4 flex flex-wrap gap-3">
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
