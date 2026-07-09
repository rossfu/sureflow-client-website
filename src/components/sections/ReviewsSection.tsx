"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Review } from "@/config/reviews";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StarRating } from "@/components/ui/StarRating";

/**
 * Scroll-snap review rail. Cards are plain HTML; the only JS is the
 * prev/next scroll behavior. Never auto-rotates — motion the user didn't
 * ask for erodes trust and accessibility.
 */
export function ReviewsSection({ reviews, title = "What your neighbors say" }: { reviews: Review[]; title?: string }) {
  const railRef = useRef<HTMLUListElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector("li");
    const width = card ? card.getBoundingClientRect().width + 24 : 400;
    rail.scrollBy({ left: dir * width, behavior: "smooth" });
  };

  if (reviews.length === 0) return null;

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            align="left"
            eyebrow="Reviews"
            title={title}
            lede={`${site.rating.value} stars from ${site.rating.count}+ real customers.`}
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous reviews"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-slate-300 text-brand-900 transition-colors duration-200 hover:bg-slate-50"
            >
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next reviews"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-slate-300 text-brand-900 transition-colors duration-200 hover:bg-slate-50"
            >
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>

        <ul
          ref={railRef}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth"
        >
          {reviews.map((review) => (
            <li
              key={`${review.name}-${review.date}`}
              className="flex w-[85%] shrink-0 snap-start flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:w-[26rem]"
            >
              <StarRating rating={review.rating} />
              <blockquote className="mt-4 flex-1 leading-relaxed text-slate-600">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <footer className="mt-5 border-t border-slate-100 pt-4">
                <p className="font-display font-bold text-brand-900">{review.name}</p>
                <p className="text-sm text-slate-500">{review.location}</p>
              </footer>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
