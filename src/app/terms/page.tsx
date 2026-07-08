import type { Metadata } from "next";
import { site } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: `Terms governing use of the ${site.name} website and services.`,
  path: "/terms",
});

/** PLACEHOLDER LEGAL TEXT — attorney review required before launch. */
export default function TermsPage() {
  return (
    <>
      <section className="bg-brand-950 text-white">
        <Container className="py-12 sm:py-16">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Terms of Service", path: "/terms" },
            ]}
          />
          <h1 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">Terms of Service</h1>
          <p className="mt-3 text-white/60">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
        </Container>
      </section>
      <section className="bg-white py-16">
        <Container className="mx-auto max-w-3xl space-y-8 leading-relaxed text-slate-600">
          <div>
            <h2 className="font-display text-xl font-bold text-brand-900">Use of this website</h2>
            <p className="mt-3">
              This website provides information about {site.legalName} and a way to request
              services. Content is provided for general information; emergency guidance on this
              site does not replace professional on-site assessment.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-brand-900">Estimates and services</h2>
            <p className="mt-3">
              Assessments and estimates are free unless stated otherwise. Work is performed under a
              separate written service agreement provided before work begins, which governs scope,
              pricing, and warranties.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-brand-900">Limitation of liability</h2>
            <p className="mt-3">
              To the fullest extent permitted by law, {site.legalName} is not liable for damages
              arising from use of this website. Nothing here limits liability that cannot be limited
              under applicable law.
            </p>
          </div>
          <p className="rounded-xl bg-slate-50 p-5 text-sm">
            This template text is a starting structure, not legal advice — have your attorney review
            and finalize it for your business and jurisdiction before launch.
          </p>
        </Container>
      </section>
    </>
  );
}
