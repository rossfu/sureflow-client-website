import Link from "next/link";
import Image from "next/image";
import { Phone, ChevronDown, MapPin } from "lucide-react";
import { site } from "@/config/site";
import { services } from "@/config/services";
import { cities } from "@/config/cities";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { withBasePath } from "@/lib/utils";

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Insurance", href: "/insurance" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} — home`}>
          <Image src={withBasePath("/images/logo-mark.png")} alt="" width={40} height={40} className="h-10 w-10 rounded-lg" />
          <span className="font-display text-lg font-bold leading-tight tracking-tight text-brand-900">
            {site.name}
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {/* Services — hover dropdown */}
          <div className="group relative">
            <Link
              href="/services"
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-brand-900"
            >
              Services
              <ChevronDown aria-hidden="true" className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </Link>
            <div className="invisible absolute left-1/2 top-full z-20 w-[38rem] -translate-x-1/2 pt-2 opacity-0 transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-1 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-150 hover:bg-brand-50"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-900 text-accent-500">
                      <ServiceIcon icon={s.icon} />
                    </span>
                    <span className="text-sm font-semibold text-brand-900">{s.shortName}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Service Areas — hover dropdown */}
          <div className="group relative">
            <Link
              href="/service-areas"
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-brand-900"
            >
              Service Areas
              <ChevronDown aria-hidden="true" className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </Link>
            <div className="invisible absolute left-1/2 top-full z-20 w-64 -translate-x-1/2 pt-2 opacity-0 transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100">
              <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-lg">
                {cities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/service-areas/${c.slug}`}
                    className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-semibold text-brand-900 transition-colors duration-150 hover:bg-brand-50"
                  >
                    <MapPin aria-hidden="true" className="h-4 w-4 text-accent-600" />
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-brand-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden text-right xl:block">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">24/7 Emergency</p>
            <a
              href={`tel:${site.phoneE164}`}
              data-cta="header-number"
              className="font-display text-lg font-bold text-brand-900 transition-colors duration-200 hover:text-accent-600"
            >
              {site.phone}
            </a>
          </div>
          <Button href={`tel:${site.phoneE164}`} dataCta="header-button" className="!hidden lg:!inline-flex">
            <Phone aria-hidden="true" className="h-5 w-5" />
            Call Now
          </Button>

          <a
            href={`tel:${site.phoneE164}`}
            data-cta="header-mobile-icon"
            aria-label={`Call ${site.name} at ${site.phone}`}
            className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-600 text-white transition-colors duration-200 hover:bg-accent-700 lg:hidden"
          >
            <Phone aria-hidden="true" className="h-5 w-5" />
          </a>
          <MobileMenu links={navLinks} />
        </div>
      </Container>
    </header>
  );
}
