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

const chipColors = ["bg-sky-600", "bg-orange-600", "bg-emerald-600", "bg-violet-600", "bg-rose-600", "bg-cyan-700"];

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
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {site.whyUs.map((item, i) => {
            const Icon = iconMap[item.icon] ?? ShieldCheck;
            const color = chipColors[i % chipColors.length];
            return (
              <div key={item.title} className="flex gap-4">
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white ${color}`}>
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-900">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{item.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
