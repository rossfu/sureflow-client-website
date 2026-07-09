import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";

/** Quantified authority — specific numbers beat adjectives. */
export function StatsBand() {
  return (
    <section
      aria-label="Company statistics"
      className="bg-gradient-to-r from-brand-950 via-brand-900 to-brand-950 py-14 text-white sm:py-16"
    >
      <Container className="grid grid-cols-2 gap-10 lg:grid-cols-4">
        {site.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-4xl font-bold tracking-tight text-accent-500 sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm font-medium text-white/70">{stat.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
