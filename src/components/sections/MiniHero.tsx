import { Phone, MessageSquare } from "lucide-react";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";

interface MiniHeroProps {
  crumbs: Crumb[];
  title: string;
  intro: string;
  /** Show CTA pair (default true) */
  cta?: boolean;
  children?: React.ReactNode;
}

/** Interior-page hero: breadcrumbs, H1, intro, CTAs, trust chips. */
export function MiniHero({ crumbs, title, intro, cta = true, children }: MiniHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-950 to-brand-950 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(50rem_28rem_at_85%_-15%,rgba(234,88,12,0.25),transparent),radial-gradient(40rem_24rem_at_-5%_110%,rgba(56,189,248,0.15),transparent)]"
      />
      <Container className="relative py-12 sm:py-16 lg:py-20">
        <Breadcrumbs items={crumbs} />
        <h1 className="mt-6 max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{intro}</p>
        {cta && (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={`tel:${site.phoneE164}`} dataCta="mini-hero-call">
              <Phone aria-hidden="true" className="h-5 w-5" />
              Call {site.phone}
            </Button>
            <Button href="/contact" variant="dark" dataCta="mini-hero-form" className="border border-white/15">
              <MessageSquare aria-hidden="true" className="h-5 w-5" />
              Request Help Online
            </Button>
          </div>
        )}
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
          <Badge onDark label="24/7 Emergency Response" />
          <Badge onDark label="Free Estimates" />
          <Badge onDark label="Insurance Billed Direct" />
        </div>
        {children}
      </Container>
    </section>
  );
}
