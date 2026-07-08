"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, MessageSquare } from "lucide-react";
import { site } from "@/config/site";

/**
 * Mobile-only bottom bar — the highest-converting element on the site.
 * Hides when the footer is on screen (the footer has its own NAP/CTA and
 * covering the legal links would be hostile).
 */
export function StickyCallBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden={hidden}
      className={`fixed inset-x-0 bottom-0 z-20 border-t border-brand-800 bg-brand-950/95 backdrop-blur transition-transform duration-300 lg:hidden ${
        hidden ? "invisible translate-y-full" : "visible translate-y-0"
      }`}
    >
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        <a
          href={`tel:${site.phoneE164}`}
          data-cta="sticky-bar-call"
          className="flex h-12 items-center justify-center gap-2 rounded-lg bg-accent-600 font-semibold text-white transition-colors duration-200 hover:bg-accent-700"
        >
          <Phone aria-hidden="true" className="h-5 w-5" />
          Call Now
        </a>
        <Link
          href="/contact"
          data-cta="sticky-bar-form"
          className="flex h-12 items-center justify-center gap-2 rounded-lg border border-white/20 font-semibold text-white transition-colors duration-200 hover:bg-white/10"
        >
          <MessageSquare aria-hidden="true" className="h-5 w-5" />
          Get Help
        </Link>
      </div>
    </div>
  );
}
