import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { withBasePath } from "@/lib/utils";
import { site } from "@/config/site";
import { services } from "@/config/services";
import { cities } from "@/config/cities";
import { Container } from "@/components/ui/Container";

const resources = [
  { label: "Insurance Claims Help", href: "/insurance" },
  { label: "Customer Reviews", href: "/reviews" },
  { label: "Before & After Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Guides & Articles", href: "/blog" },
  { label: "Emergency Service", href: "/emergency" },
];

/** Site-wide internal-linking engine + NAP consistency for local SEO. */
export function Footer() {
  return (
    <footer className="bg-brand-950 text-white">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* NAP block — must match Google Business Profile exactly */}
        <div>
          <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} — home`}>
            <Image src={withBasePath("/images/logo-mark.png")} alt="" width={40} height={40} className="h-10 w-10 rounded-lg" />
            <span className="font-display text-lg font-bold tracking-tight">{site.name}</span>
          </Link>
          <ul className="mt-6 space-y-3 text-sm text-white/70">
            <li>
              <a
                href={`tel:${site.phoneE164}`}
                data-cta="footer"
                className="flex items-center gap-2 font-semibold text-white transition-colors duration-200 hover:text-accent-400"
              >
                <Phone aria-hidden="true" className="h-4 w-4 text-accent-500" />
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail aria-hidden="true" className="h-4 w-4 shrink-0 text-accent-500" />
              <a href={`mailto:${site.email}`} className="transition-colors duration-200 hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
              <span>
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Clock aria-hidden="true" className="h-4 w-4 shrink-0 text-accent-500" />
              {site.hoursLabel}
            </li>
          </ul>
          <ul className="mt-6 space-y-1.5 text-xs text-white/50">
            {site.certifications.map((c) => (
              <li key={c}>✓ {c}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-white/50">Services</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-white/70 transition-colors duration-200 hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-white/50">Areas We Serve</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/service-areas/${c.slug}`}
                  className="text-white/70 transition-colors duration-200 hover:text-white"
                >
                  Restoration in {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-white/50">Resources</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {resources.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="text-white/70 transition-colors duration-200 hover:text-white">
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved. {site.license}
          </p>
          <p className="flex gap-4">
            <Link href="/privacy-policy" className="transition-colors duration-200 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors duration-200 hover:text-white">
              Terms of Service
            </Link>
          </p>
        </Container>
      </div>
    </footer>
  );
}
