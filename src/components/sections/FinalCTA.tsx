import Image from "next/image";
import { Phone, MessageSquare } from "lucide-react";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { withBasePath } from "@/lib/utils";

interface FinalCTAProps {
  title?: string;
  lede?: string;
}

/** Peak-end rule: the page ends on reassurance + one obvious action. */
export function FinalCTA({
  title = "It's fixable. Call now.",
  lede = `A real person answers 24/7 and sends a crew right away. Average arrival: ${site.responseTimeMinutes} minutes.`,
}: FinalCTAProps) {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-16 text-white sm:py-20 lg:py-24">
      <Image
        src={withBasePath("/images/crew-dusk-arrival.png")}
        alt=""
        fill
        className="object-cover opacity-30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/90 to-brand-950/70"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(50rem_25rem_at_50%_120%,rgba(194,65,12,0.25),transparent)]"
      />
      <Container className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{lede}</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={`tel:${site.phoneE164}`} size="lg" dataCta="final-cta-call">
            <Phone aria-hidden="true" className="h-5 w-5" />
            Call {site.phone}
          </Button>
          <Button href="/contact" variant="dark" size="lg" dataCta="final-cta-form" className="border border-white/15">
            <MessageSquare aria-hidden="true" className="h-5 w-5" />
            Request Help Online
          </Button>
        </div>
        <p className="mt-6 text-sm text-white/50">
          Free estimates · Direct insurance billing · {site.hoursLabel}
        </p>
      </Container>
    </section>
  );
}
