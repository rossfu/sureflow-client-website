import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";

/**
 * Free value before any ask (reciprocity + authority): genuinely useful
 * emergency guidance, given away above the sales content.
 */
export function EmergencySteps({ steps, serviceName }: { steps: string[]; serviceName: string }) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="max-w-4xl">
        <div className="rounded-2xl border-2 border-accent-200 bg-accent-50 p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-700">
            Before We Arrive
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-brand-900 sm:text-3xl">
            Do this right now
          </h2>
          <ol className="mt-7 space-y-4">
            {steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-600 font-display text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="pt-1 leading-relaxed text-slate-700">{step}</p>
              </li>
            ))}
          </ol>
          <p className="mt-7 border-t border-accent-200 pt-5 text-sm leading-relaxed text-slate-600">
            Not sure what to do? Call{" "}
            <a href={`tel:${site.phoneE164}`} data-cta="emergency-steps" className="font-semibold text-accent-700 hover:text-accent-800">
              {site.phone}
            </a>{" "}
            and we'll walk you through it.
          </p>
        </div>
      </Container>
    </section>
  );
}
