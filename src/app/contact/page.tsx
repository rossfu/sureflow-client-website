import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { site } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { MiniHero } from "@/components/sections/MiniHero";
import { LeadForm } from "@/components/forms/LeadForm";

export const metadata: Metadata = buildMetadata({
  title: `Contact — 24/7 Emergency Line ${site.phone}`,
  description: `Reach ${site.name} 24/7: call ${site.phone} for emergencies or request a callback online — we respond to emergency requests within 5 minutes.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <MiniHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
        title="Call now, or request a callback."
        intro="A person answers 24/7. The form gets a callback in 5 minutes."
        cta={false}
      />

      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[24rem_1fr] lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-bold text-brand-900">Direct lines</h2>
            <ul className="mt-6 space-y-6">
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-900">
                  <Phone aria-hidden="true" className="h-5 w-5 text-accent-500" />
                </span>
                <div>
                  <p className="text-sm font-medium text-slate-500">24/7 Emergency Line</p>
                  <a
                    href={`tel:${site.phoneE164}`}
                    data-cta="contact-page"
                    className="font-display text-xl font-bold text-brand-900 transition-colors duration-200 hover:text-accent-600"
                  >
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-900">
                  <Mail aria-hidden="true" className="h-5 w-5 text-accent-500" />
                </span>
                <div>
                  <p className="text-sm font-medium text-slate-500">Email (non-urgent)</p>
                  <a href={`mailto:${site.email}`} className="font-semibold text-brand-900 transition-colors duration-200 hover:text-accent-600">
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-900">
                  <MapPin aria-hidden="true" className="h-5 w-5 text-accent-500" />
                </span>
                <div>
                  <p className="text-sm font-medium text-slate-500">Office</p>
                  <p className="font-semibold text-brand-900">
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.state} {site.address.zip}
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-900">
                  <Clock aria-hidden="true" className="h-5 w-5 text-accent-500" />
                </span>
                <div>
                  <p className="text-sm font-medium text-slate-500">Hours</p>
                  <p className="font-semibold text-brand-900">{site.hoursLabel}</p>
                </div>
              </li>
            </ul>
            <p className="mt-8 rounded-xl bg-white p-5 text-sm leading-relaxed text-slate-600 shadow-sm">
              <strong className="text-brand-900">Active emergency?</strong> Skip the form. Call.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-brand-900">Request a callback</h2>
            <p className="mt-2 text-slate-600">Four fields. We call you back.</p>
            <div className="mt-6">
              <LeadForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
