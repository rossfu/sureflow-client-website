import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";
import { cities, getCity } from "@/config/cities";
import { reviewsForCity, reviews } from "@/config/reviews";
import { globalFaqs } from "@/config/faqs";
import { site } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MiniHero } from "@/components/sections/MiniHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { InsuranceCallout } from "@/components/sections/InsuranceCallout";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

interface Params {
  city: string;
}

export function generateStaticParams(): Params[] {
  return cities.map((c) => ({ city: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return buildMetadata({
    title: `Restoration Company in ${city.label} — Water, Fire & Mold, 24/7`,
    description: `${site.name} serves ${city.label} with 24/7 water, fire, mold, storm, sewage & biohazard restoration. ${city.responseNote} Free estimates, insurance billed direct.`,
    path: `/service-areas/${city.slug}`,
  });
}

export default async function CityPage({ params }: { params: Promise<Params> }) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const cityReviews = reviewsForCity(city.slug);
  const displayReviews = cityReviews.length >= 2 ? cityReviews : [...reviews];

  return (
    <>
      <MiniHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
          { name: city.label, path: `/service-areas/${city.slug}` },
        ]}
        title={`Restoration services in ${city.label}`}
        intro={`${city.localNote} ${city.responseNote}`}
      />

      {/* Neighborhood chips — local proof, not decoration */}
      <section className="border-b border-slate-200 bg-white py-10">
        <Container>
          <ul className="flex flex-wrap justify-center gap-3">
            {city.neighborhoods.map((n) => (
              <li
                key={n}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-brand-900"
              >
                <MapPin aria-hidden="true" className="h-4 w-4 text-accent-600" />
                {n}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ServicesGrid
        citySlug={city.slug}
        cityName={city.name}
        eyebrow={`Services in ${city.name}`}
        title={`Every emergency we handle in ${city.label}`}
        lede={`Tap your situation for local details, response notes, and a "do this right now" checklist.`}
      />
      <ProcessTimeline />
      <InsuranceCallout />
      <ReviewsSection reviews={displayReviews} title={`What ${city.name} homeowners say`} />
      <FAQSection faqs={globalFaqs.slice(0, 5)} title={`Common questions from ${city.name}`} />
      <FinalCTA title={`Need help in ${city.name} right now?`} />
    </>
  );
}
