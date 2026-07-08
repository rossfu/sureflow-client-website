import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/**
 * A 404 during an emergency is a conversion emergency —
 * so even this page can dispatch a crew.
 */
export default function NotFound() {
  return (
    <section className="bg-brand-950 text-white">
      <Container className="py-24 text-center sm:py-32">
        <p className="font-display text-7xl font-bold text-accent-500">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          This page is gone. Your problem doesn't have to be.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-white/70">
          The link is broken — but if you're dealing with water, fire, or mold, the phone line
          isn't.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={`tel:${site.phoneE164}`} dataCta="404">
            <Phone aria-hidden="true" className="h-5 w-5" />
            Call {site.phone}
          </Button>
          <Button href="/" variant="dark" className="border border-white/15">
            Back to homepage
          </Button>
        </div>
        <nav aria-label="Helpful links" className="mt-10 text-sm text-white/60">
          <Link href="/services" className="underline-offset-4 hover:text-white hover:underline">
            Services
          </Link>
          <span className="mx-3">·</span>
          <Link href="/service-areas" className="underline-offset-4 hover:text-white hover:underline">
            Service Areas
          </Link>
          <span className="mx-3">·</span>
          <Link href="/contact" className="underline-offset-4 hover:text-white hover:underline">
            Contact
          </Link>
        </nav>
      </Container>
    </section>
  );
}
