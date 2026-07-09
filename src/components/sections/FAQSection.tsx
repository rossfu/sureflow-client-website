import type { Faq } from "@/config/faqs";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqSchema } from "@/lib/schema";

interface FAQSectionProps {
  faqs: Faq[];
  title?: string;
  lede?: string;
  /** Emit FAQPage schema (one block per page max) */
  withSchema?: boolean;
}

/** Objection sweep + FAQPage schema from the same data. */
export function FAQSection({
  faqs,
  title = "Questions? Here you go.",
  lede = "The stuff people ask before they call.",
  withSchema = true,
}: FAQSectionProps) {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      {withSchema && <JsonLd data={faqSchema(faqs)} />}
      <Container className="max-w-4xl">
        <SectionHeader eyebrow="Questions" title={title} lede={lede} />
        <div className="mt-12">
          <Accordion items={faqs} />
        </div>
      </Container>
    </section>
  );
}
