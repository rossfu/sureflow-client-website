import Image from "next/image";
import { Phone, MessageSquare } from "lucide-react";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { withBasePath } from "@/lib/utils";

/**
 * The 3-second test lives here: what, where, how fast, why trust, one action.
 * Call CTA is the loudest thing on the page — everything else supports it.
 * No checklist card in the fold — that's a distraction from the one action
 * that matters here. It lives in full on /insurance and /services instead.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-950 text-white">
      <Image
        src={withBasePath("/images/hero-van-crew.png")}
        alt=""
        fill
        priority
        className="object-cover opacity-40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/80 to-brand-950/40"
      />
      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/90">
            <span className="relative flex h-2.5 w-2.5">
              <span className="availability-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Crews ready now in Houston
          </p>

          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            The Best Cleaning and Restoration Team in <span className="text-accent-500">Houston</span>
          </h1>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={`tel:${site.phoneE164}`} size="lg" dataCta="hero-call" className="text-xl">
              <Phone aria-hidden="true" className="h-6 w-6" />
              Call {site.phone}
            </Button>
            <Button href="/contact" variant="dark" size="lg" dataCta="hero-form" className="border border-white/15">
              <MessageSquare aria-hidden="true" className="h-5 w-5" />
              Request Help Online
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            <Badge onDark label="Certified" />
            <Badge onDark label="Licensed & Insured" />
            <Badge onDark label={`${site.rating.value}★ · ${site.rating.count}+ reviews`} />
            <Badge onDark label="We Bill Insurance" />
          </div>
        </div>
      </Container>
    </section>
  );
}
