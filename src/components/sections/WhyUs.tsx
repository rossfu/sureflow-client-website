import {
  Clock,
  FileCheck,
  BadgeCheck,
  ScanSearch,
  ShieldCheck,
  Home,
  type LucideIcon,
} from "lucide-react";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const iconMap: Record<string, LucideIcon> = {
  clock: Clock,
  "file-check": FileCheck,
  "badge-check": BadgeCheck,
  "scan-search": ScanSearch,
  "shield-check": ShieldCheck,
  home: Home,
};

/** Differentiation for the comparison shopper (Mode B). */
export function WhyUs() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeader
          eyebrow="Why Homeowners Choose Us"
          title="Why people trust us"
          lede="No jargon. Just what we actually do for you."
        />
        <div className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {site.whyUs.map((item) => {
            const Icon = iconMap[item.icon] ?? ShieldCheck;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition-colors duration-200 hover:border-accent-200"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600 ring-1 ring-accent-100">
                  <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-brand-900">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{item.body}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
