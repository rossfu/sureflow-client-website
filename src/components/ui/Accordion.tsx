import { ChevronDown } from "lucide-react";
import type { Faq } from "@/config/faqs";

/**
 * Zero-JS accordion using native <details>/<summary> — keyboard accessible
 * by default, works with JS disabled, costs nothing in the bundle.
 */
export function Accordion({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {items.map((item) => (
        <details key={item.q} className="group px-6 py-5">
          <summary className="flex cursor-pointer items-center justify-between gap-4 text-left font-display text-lg font-semibold text-brand-900 marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 rounded-md">
            {item.q}
            <ChevronDown
              aria-hidden="true"
              className="accordion-chevron h-5 w-5 shrink-0 text-accent-600 transition-transform duration-200"
            />
          </summary>
          <p className="mt-3 leading-relaxed text-slate-600">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
