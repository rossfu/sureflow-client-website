import { ChevronDown } from "lucide-react";
import type { Faq } from "@/config/faqs";

/**
 * Zero-JS accordion using native <details>/<summary> — keyboard accessible
 * by default, works with JS disabled, costs nothing in the bundle.
 */
export function Accordion({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {items.map((item) => (
        <details key={item.q} className="group px-6 py-5 transition-colors duration-200 open:bg-brand-50/40">
          <summary className="flex cursor-pointer items-center justify-between gap-4 text-left font-display text-lg font-semibold text-brand-900 marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 rounded-md">
            {item.q}
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600 transition-colors duration-200 group-open:bg-accent-600 group-open:text-white">
              <ChevronDown
                aria-hidden="true"
                className="accordion-chevron h-4 w-4 transition-transform duration-200"
              />
            </span>
          </summary>
          <p className="mt-3 leading-relaxed text-slate-600">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
