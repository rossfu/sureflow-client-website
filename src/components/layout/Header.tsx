import Link from "next/link";
import { Phone, ShieldCheck } from "lucide-react";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";

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
        {/* Logo — swap for the client's SVG logo; keep the accessible name */}
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} — home`}>
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-900">
            <ShieldCheck aria-hidden="true" className="h-6 w-6 text-accent-500" />
          </span>
          <span className="font-display text-lg font-bold leading-tight tracking-tight text-brand-900">
            {site.name}
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-brand-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Desktop: number + hours; the CTA is learned once, recognized always */}
          <div className="hidden text-right xl:block">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">24/7 Emergency Line</p>
            <a
              href={`tel:${site.phoneE164}`}
              data-cta="header-number"
              className="font-display text-lg font-bold text-brand-900 transition-colors duration-200 hover:text-accent-600"
            >
              {site.phone}
            </a>
          </div>
          <Button href={`tel:${site.phoneE164}`} dataCta="header-button" className="hidden lg:inline-flex">
            <Phone aria-hidden="true" className="h-5 w-5" />
            Call Now
          </Button>

          {/* Mobile: call icon + menu */}
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
