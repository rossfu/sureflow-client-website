import Image from "next/image";
import Link from "next/link";
import { cn, withBasePath } from "@/lib/utils";
import { site } from "@/config/site";

/**
 * Single combined lockup (icon + wordmark composited into one image —
 * see /public/images/logo-combined.png) rather than two separate images,
 * so there's no gap/alignment to maintain between mark and wordmark.
 */
export function Logo({ className }: { onDark?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center", className)} aria-label={`${site.name} — home`}>
      <Image
        src={withBasePath("/images/logo-combined.png")}
        alt={site.name}
        width={1099}
        height={472}
        priority
        className="h-9 w-auto rounded-md sm:h-11"
      />
    </Link>
  );
}
