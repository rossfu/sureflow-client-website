import { Award, ShieldCheck, Star, Building2 } from "lucide-react";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";

const items = [
  { icon: Award, label: "IICRC-Certified Firm", sub: "Industry-standard training" },
  { icon: ShieldCheck, label: "Licensed & Insured", sub: "Verify our license below" },
  { icon: Star, label: `${site.rating.value} Rating`, sub: `${site.rating.count}+ Google reviews` },
  { icon: Building2, label: "BBB Accredited A+", sub: `Serving ${site.serviceRegion} since ${site.foundedYear}` },
];

/** Immediate validation of the hero's claims — institutional trust, quantified. */
export function TrustBar() {
  return (
    <section aria-label="Credentials" className="border-b border-slate-200 bg-white">
      <Container className="grid grid-cols-2 gap-6 py-8 lg:grid-cols-4">
        {items.map(({ icon: Icon, label, sub }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50">
              <Icon aria-hidden="true" className="h-5 w-5 text-brand-700" />
            </span>
            <div>
              <p className="font-display text-sm font-bold text-brand-900">{label}</p>
              <p className="text-xs text-slate-500">{sub}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
