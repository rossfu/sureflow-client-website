import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/config/site";

/**
 * Typographic lockup — a hand-built wordmark plus one crafted droplet mark,
 * deliberately not a raster/AI logo image. Rebrand = edit the text below.
 * `onDark` flips the wordmark for use on the dark footer.
 */
export function Logo({ onDark = false, className }: { onDark?: boolean; className?: string }) {
  const [first, ...rest] = site.name.split(" ");
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-2.5", className)}
      aria-label={`${site.name} — home`}
    >
      <span
        aria-hidden="true"
        className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 shadow-sm ring-1 ring-black/5 sm:h-10 sm:w-10"
      >
        {/* Crafted water-drop mark */}
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white sm:h-[1.35rem] sm:w-[1.35rem]" fill="none">
          <path
            d="M12 3.2c2.9 3.6 5.6 6.7 5.6 9.9A5.6 5.6 0 0 1 12 18.7a5.6 5.6 0 0 1-5.6-5.6c0-3.2 2.7-6.3 5.6-9.9Z"
            fill="currentColor"
          />
          <path d="M9.4 12.6a2.6 2.6 0 0 0 2.6 2.6" stroke="#c2410c" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.05rem] font-extrabold tracking-tight sm:text-lg">
          <span className={onDark ? "text-white" : "text-brand-900"}>{first}</span>
          <span className="text-accent-500">{rest.join(" ")}</span>
        </span>
        <span
          className={cn(
            "mt-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.2em]",
            onDark ? "text-white/55" : "text-slate-500",
          )}
        >
          Water · Fire · Mold
        </span>
      </span>
    </Link>
  );
}
