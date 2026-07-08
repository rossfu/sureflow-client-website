import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";

/** Visual proof of competence: the outcome, made vivid. */
export function BeforeAfterSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <BeforeAfterSlider
            beforeSrc="/images/before-1.svg"
            afterSrc="/images/after-1.svg"
            beforeAlt="Living room with standing water and saturated drywall before restoration"
            afterAlt="The same living room fully dried, repaired, and repainted after restoration"
          />
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">The Work, Not the Words</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
            Drag the slider. That's the whole pitch.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Every job is photographed from first walkthrough to final coat — partly for your
            insurance file, partly because the results speak better than we do. Browse real
            projects from homes across {`Greater Austin`}.
          </p>
          <Link
            href="/gallery"
            className="mt-6 inline-flex items-center gap-1.5 font-semibold text-accent-600 transition-colors duration-200 hover:text-accent-700"
          >
            See the before & after gallery
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
