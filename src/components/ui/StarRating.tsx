import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

/** Accessible star display — value conveyed via aria-label, not color alone. */
export function StarRating({ rating, className }: { rating: number; className?: string }) {
  return (
    <span
      className={cn("inline-flex items-center gap-0.5", className)}
      role="img"
      aria-label={`Rated ${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={cn("h-4 w-4", i < Math.round(rating) ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200")}
        />
      ))}
    </span>
  );
}
