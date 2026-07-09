import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { services, getService } from "@/config/services";
import { cities } from "@/config/cities";
import { reviewsForService, reviews } from "@/config/reviews";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceIcon, serviceColor } from "@/components/ui/ServiceIcon";
import { MiniHero } from "@/components/sections/MiniHero";
import { EmergencySteps } from "@/components/sections/EmergencySteps";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

interface Params {
  service: string;
}

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ service: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const serviceReviews = reviewsForService(service.slug);
  const displayReviews = serviceReviews.length >= 2 ? serviceReviews : [...reviews];
  const color = serviceColor[service.icon];

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <MiniHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.shortName, path: `/services/${service.slug}` },
        ]}
        title={service.name}
        intro={service.heroIntro}
      />

      <EmergencySteps steps={[...service.emergencySteps]} serviceName={service.shortName} />

      {/* What we handle */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeader eyebrow="What We Handle" title={`${service.shortName} — every case`} />
          <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
            {service.damageTypes.map((type) => (
              <li
                key={type}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 font-medium text-brand-900"
              >
                <CheckCircle2 aria-hidden="true" className="h-5 w-5 shrink-0 text-accent-600" />
                {type}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Why timing matters — one bold stat callout, not a lecture */}
      <section className={`relative overflow-hidden py-14 text-white sm:py-16 ${color}`}>
        <Container className="relative flex flex-wrap items-center gap-6 sm:gap-10">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15">
            <Zap aria-hidden="true" className="h-8 w-8" />
          </span>
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{service.whyTiming.title}</h2>
            <p className="mt-2 max-w-2xl text-white/90">{service.whyTiming.body}</p>
          </div>
        </Container>
      </section>

      <ReviewsSection reviews={displayReviews} title={`${service.shortName} results`} />
      <FAQSection faqs={[...service.faqs]} title={`${service.shortName} questions`} lede="" />

      {/* City links: internal linking + local relevance */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeader eyebrow="Where We Work" title="Find your city" />
          <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`/services/${service.slug}/${city.slug}`}
                  className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4 font-medium text-brand-900 transition-[border-color,box-shadow] duration-200 hover:border-slate-300 hover:shadow-sm"
                >
                  {city.label}
                  <ArrowRight aria-hidden="true" className="h-4 w-4 text-slate-300 transition-colors duration-200 group-hover:text-accent-600" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Related services */}
          <div className="mx-auto mt-14 max-w-4xl border-t border-slate-200 pt-10">
            <h3 className="font-display text-lg font-bold text-brand-900">Often needed together</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {service.related.map((relSlug) => {
                const rel = getService(relSlug);
                if (!rel) return null;
                return (
                  <Link
                    key={rel.slug}
                    href={`/services/${rel.slug}`}
                    className="group flex items-center gap-4 rounded-xl border border-slate-200 p-5 transition-[border-color,box-shadow] duration-200 hover:border-slate-300 hover:shadow-sm"
                  >
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white ${serviceColor[rel.icon]}`}>
                      <ServiceIcon icon={rel.icon} className="h-5 w-5" />
                    </span>
                    <span className="font-display font-bold text-brand-900">{rel.shortName}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA title={`${service.shortName} emergency? We're already awake.`} />
    </>
  );
}
