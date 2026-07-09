import Image from "next/image";
import Link from "next/link";
import { cn, withBasePath } from "@/lib/utils";
import { site } from "@/config/site";

/**
 * Icon mark + wordmark lockup, using the brand's real logo assets
 * (see /public/images/logo-mark.png, logo-wordmark.png) rather than a
 * recreated approximation — keeps the site in sync with the source
 * files in the parent repo's /assets folder.
 */
export function Logo({ className }: { onDark?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-3", className)} aria-label={`${site.name} — home`}>
      <Image
        src={withBasePath("/images/logo-mark.png")}
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 shrink-0 rounded-lg"
      />
      <Image
        src={withBasePath("/images/logo-wordmark.png")}
        alt={site.name}
        width={1264}
        height={848}
        className="h-10 w-auto rounded-md sm:h-12"
      />
    </Link>
  );
}
