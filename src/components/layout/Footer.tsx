import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { site } from "@/config/site";
import { services } from "@/config/services";
import { cities } from "@/config/cities";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

const resources = [
  { label: "Insurance Help", href: "/insurance" },
  { label: "Reviews", href: "/reviews" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
];

/** Site-wide internal-linking engine + NAP consistency for local SEO. Kept short — footers are skimmed, not read. */
export function Footer() {
  return (
    <footer className="bg-brand-950 text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
        {/* NAP block — must match Google Business Profile exactly */}
        <div className="lg:col-span-2">
          <Logo onDark />
          <a
            href={`tel:${site.phoneE164}`}
            data-cta="footer"
            className="mt-6 flex items-center gap-2 font-display text-xl font-bold text-white transition-colors duration-200 hover:text-accent-400"
          >
            <Phone aria-hidden="true" className="h-5 w-5 text-accent-500" />
            {site.phone}
          </a>
          <p className="mt-2 text-sm text-white/60">{site.hoursLabel}</p>
          <ul className="mt-5 space-y-2 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Mail aria-hidden="true" className="h-4 w-4 shrink-0 text-accent-500" />
              <a href={`mailto:${site.email}`} className="transition-colors duration-200 hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin aria-hidden="true" className="h-4 w-4 shrink-0 text-accent-500" />
              {site.address.city}, {site.address.state}
            </li>
          </ul>
          <p className="mt-5 text-xs text-white/40">
            {site.certifications.join(" · ")}
          </p>
        </div>

        <div>
          <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-white/40">Services</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-white/70 transition-colors duration-200 hover:text-white">
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-white/40">Areas</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/service-areas/${c.slug}`}
                  className="text-white/70 transition-colors duration-200 hover:text-white"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-white/40">More</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
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
        <Container className="flex flex-col gap-2 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.legalName}</p>
          <p className="flex gap-4">
            <Link href="/privacy-policy" className="transition-colors duration-200 hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors duration-200 hover:text-white">
              Terms
            </Link>
          </p>
        </Container>
      </div>
    </footer>
  );
}
