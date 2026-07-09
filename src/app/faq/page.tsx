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
        title="Questions? Answered."
        intro="Costs, insurance, timelines, safety — the short version."
      />
      <FAQSection faqs={globalFaqs} title="Quick answers" lede="" />
      <FinalCTA title="Question not answered here? Call and ask." lede="" />
    </>
  );
}
