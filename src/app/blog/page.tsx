import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { posts } from "@/config/posts";
import { getService } from "@/config/services";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { MiniHero } from "@/components/sections/MiniHero";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = buildMetadata({
  title: "Guides — What to Do When Property Damage Happens",
  description:
    "Practical emergency guides from certified restoration technicians: burst pipes, hidden mold, fire insurance claims, and what to do in the first critical hours.",
  path: "/blog",
});

export default function BlogIndexPage() {
  return (
    <>
      <MiniHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Guides", path: "/blog" },
        ]}
        title="Guides for a bad day"
        intro="What to do first, written by our own technicians."
        cta={false}
      />
      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <Container className="mx-auto max-w-4xl space-y-6">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-[box-shadow,border-color] duration-200 hover:border-slate-300 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
                  {getService(post.serviceSlug)?.shortName} · {post.readMinutes} min read
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold text-brand-900">{post.title}</h2>
                <p className="mt-3 leading-relaxed text-slate-600">{post.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 transition-colors duration-200 group-hover:text-accent-700">
                  Read the guide
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </span>
              </Link>
            </article>
          ))}
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
