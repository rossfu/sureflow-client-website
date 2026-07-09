import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";

/** Quantified authority — specific numbers beat adjectives. */
export function StatsBand() {
  return (
    <section
      aria-label="Company statistics"
      className="relative overflow-hidden bg-gradient-to-r from-brand-950 via-brand-900 to-brand-950 py-14 text-white sm:py-16"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(30rem_16rem_at_15%_0%,rgba(234,88,12,0.2),transparent),radial-gradient(30rem_16rem_at_85%_100%,rgba(56,189,248,0.15),transparent)]"
      />
      <Container className="relative grid grid-cols-2 gap-10 lg:grid-cols-4">
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
