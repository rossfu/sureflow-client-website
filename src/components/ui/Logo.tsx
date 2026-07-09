import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/config/site";

/**
 * Icon mark + wordmark lockup, built as one unit (not icon + plain text).
 * Mirrors the van livery mark: navy badge, orange dual-wave "flow" glyph.
 */
export function Logo({ onDark = false, className }: { onDark?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-3", className)} aria-label={`${site.name} — home`}>
      <svg viewBox="0 0 40 40" className="h-10 w-10 shrink-0" aria-hidden="true">
        <rect width="40" height="40" rx="11" fill="#0c1f33" />
        <path d="M7 16c2.8-4 6.6-4 9.5 0s6.7 4 9.5 0 6.6-4 9.5 0" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M7 24c2.8-4 6.6-4 9.5 0s6.7 4 9.5 0 6.6-4 9.5 0" stroke="#fdba74" strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>
      <span className="leading-none">
        <span
          className={cn(
            "block font-display text-xl font-extrabold tracking-tight",
            onDark ? "text-white" : "text-brand-900",
          )}
        >
          SureFlow
        </span>
        <span
          className={cn(
            "block text-[0.65rem] font-semibold uppercase tracking-[0.3em]",
            onDark ? "text-accent-400" : "text-accent-600",
          )}
        >
          Restoration
        </span>
      </span>
    </Link>
  );
}
