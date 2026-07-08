import type { Metadata } from "next";
import { reviews } from "@/config/reviews";
import { getService } from "@/config/services";
import { site } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { reviewsPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { Container } from "@/components/ui/Container";
import { StarRating } from "@/components/ui/StarRating";
import { MiniHero } from "@/components/sections/MiniHero";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = buildMetadata({
  title: `Reviews — ${site.rating.value}★ from ${site.rating.count}+ ${site.serviceRegion} Homeowners`,
  description: `Real reviews from real addresses: what ${site.serviceRegion} homeowners say about ${site.name} after water, fire, mold, storm, and sewage emergencies.`,
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      {/* Rating schema is config-gated: real reviews only (see site.ts) */}
      {site.rating.showSchema && <JsonLd data={reviewsPageSchema([...reviews])} />}
      <MiniHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews" },
        ]}
        title={`${site.rating.value} stars. ${site.rating.count}+ reviews. Names and neighborhoods included.`}
        intro="Anonymous praise isn't proof, so every review here carries a name, a neighborhood, and the service performed. This is what the work looks like from the homeowner's side of it."
      />

      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="columns-1 gap-6 md:columns-2 xl:columns-3 [&>*]:mb-6">
            {reviews.map((review) => (
              <article
                key={`${review.name}-${review.date}`}
                className="break-inside-avoid rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="flex items-center justify-between gap-4">
                  <StarRating rating={review.rating} />
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-800">
                    {getService(review.serviceSlug)?.shortName}
                  </span>
                </div>
                <blockquote className="mt-4 leading-relaxed text-slate-600">&ldquo;{review.text}&rdquo;</blockquote>
                <footer className="mt-5 border-t border-slate-100 pt-4">
                  <p className="font-display font-bold text-brand-900">{review.name}</p>
                  <p className="text-sm text-slate-500">{review.location}</p>
                </footer>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA
        title="The next review could be about your kitchen."
        lede={`Every one of these started with the same phone call. ${site.phone} — a person answers, 24/7.`}
      />
    </>
  );
}
