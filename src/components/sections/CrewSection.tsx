import Image from "next/image";
import { Phone } from "lucide-react";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { withBasePath } from "@/lib/utils";

/** Faces (and branded trucks) build trust faster than paragraphs. */
export function CrewSection() {
  return (
    <section className="bg-gradient-to-b from-brand-900 to-brand-950 py-16 text-white sm:py-20 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="grid gap-4">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
            <Image
              src={withBasePath("/images/crew-cleanup.png")}
              alt="SureFlow Restoration crew removing water damage from a home"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
            <Image
              src={withBasePath("/images/hero-van-crew.png")}
              alt="A SureFlow Restoration branded response van on-site"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">Real People, Real Fast</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Our crew shows up and gets to work.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/75">
            Trained, background-checked, our own techs — no subcontractors, no guesswork.
          </p>
          <div className="mt-8">
            <Button href={`tel:${site.phoneE164}`} size="lg" dataCta="crew-section-call">
              <Phone aria-hidden="true" className="h-5 w-5" />
              Call {site.phone}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
