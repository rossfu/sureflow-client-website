import type { Metadata } from "next";
import { globalFaqs } from "@/config/faqs";
import { buildMetadata } from "@/lib/seo";
import { MiniHero } from "@/components/sections/MiniHero";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = buildMetadata({
  title: "FAQ — Restoration Costs, Insurance, Timelines & Safety",
  description:
    "Straight answers about emergency restoration: response times, what it costs, how insurance billing works, whether you need to move out, and how long it takes.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <MiniHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]}
        title="Fair questions, straight answers"
        intro="Everything people ask before they call — costs, insurance, timelines, safety — answered the way we'd answer on the phone. Service-specific questions live on each service page."
      />
      <FAQSection faqs={globalFaqs} title="The questions we hear on every call" lede="" />
      <FinalCTA
        title="Question not answered here?"
        lede="Call and ask it. No script, no pressure — a certified tech will give you a real answer, even if the answer is 'you don't need us.'"
      />
    </>
  );
}
