import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/config/services";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

interface ServicesGridProps {
  /** When set, cards link to /services/[slug]/[citySlug] combo pages */
  citySlug?: string;
  cityName?: string;
  eyebrow?: string;
  title?: string;
  lede?: string;
}

/** Self-identification step: "they handle my exact problem." */
export function ServicesGrid({
  citySlug,
  cityName,
  eyebrow = "What We Fix",
  title = "Every disaster, one number",
  lede = "Certified crews for all six emergencies. Pick yours below.",
}: ServicesGridProps) {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} lede={lede} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const href = citySlug ? `/services/${service.slug}/${citySlug}` : `/services/${service.slug}`;
            return (
              <Link
                key={service.slug}
                href={href}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-[box-shadow,border-color] duration-200 hover:border-slate-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-900 text-accent-500">
                  <ServiceIcon icon={service.icon} />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-brand-900">
                  {cityName ? `${service.shortName} — ${cityName}` : service.name}
                </h3>
                <p className="mt-2 flex-1 leading-relaxed text-slate-600">{service.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 transition-colors duration-200 group-hover:text-accent-700">
                  Learn more
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
