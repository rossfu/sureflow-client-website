import type { Metadata } from "next";
import { site } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects your information.`,
  path: "/privacy-policy",
});

/**
 * PLACEHOLDER LEGAL TEXT — have each client's attorney review and replace
 * before launch. Structure is provided so nothing ships with a dead link.
 */
export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-brand-950 text-white">
        <Container className="py-12 sm:py-16">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Privacy Policy", path: "/privacy-policy" },
            ]}
          />
          <h1 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">Privacy Policy</h1>
          <p className="mt-3 text-white/60">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
        </Container>
      </section>
      <section className="bg-white py-16">
        <Container className="mx-auto max-w-3xl space-y-8 leading-relaxed text-slate-600">
          <div>
            <h2 className="font-display text-xl font-bold text-brand-900">Information we collect</h2>
            <p className="mt-3">
              When you call us or submit a form, we collect the contact details you provide — name,
              phone number, city, and a description of your situation — solely to respond to your
              request and provide restoration services.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-brand-900">How we use it</h2>
            <p className="mt-3">
              To dispatch crews, prepare estimates, communicate about your project, and — where you
              engage our services — document work for your insurance claim. We do not sell your
              personal information.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-brand-900">Sharing</h2>
            <p className="mt-3">
              Project documentation is shared with your insurance carrier only as needed to process
              your claim, and with service providers who help us operate (e.g., scheduling and
              communication tools) under confidentiality obligations.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-brand-900">Your choices</h2>
            <p className="mt-3">
              You may request access to or deletion of your information at any time by contacting{" "}
              {site.email} or calling {site.phone}.
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
