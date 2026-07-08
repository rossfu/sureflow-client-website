import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

/**
 * Replaces fear of the unknown with a script the visitor can rehearse.
 * Calling becomes "step 1 of 4" instead of a leap into the dark.
 */
export function ProcessTimeline() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeader
          eyebrow="What Happens When You Call"
          title="A clear plan from the first ring"
          lede="No mystery, no pressure. Here is exactly what the next few hours look like."
        />
        <ol className="mt-14 grid gap-10 lg:grid-cols-4 lg:gap-8">
          {site.process.map((step, i) => (
            <li key={step.title} className="relative flex gap-5 lg:block">
              {/* Connector line (desktop) */}
              {i < site.process.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-6 top-14 hidden h-px w-[calc(100%-1rem)] translate-x-8 bg-slate-200 lg:block"
                />
              )}
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-900 font-display text-lg font-bold text-accent-500">
                {i + 1}
              </span>
              <div className="lg:mt-5">
                <h3 className="font-display text-lg font-bold text-brand-900">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
