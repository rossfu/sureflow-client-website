import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { posts, getPost } from "@/config/posts";
import { getService } from "@/config/services";
import { buildMetadata } from "@/lib/seo";
import { blogPostingSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FinalCTA } from "@/components/sections/FinalCTA";

interface Params {
  slug: string;
}

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    ogType: "article",
  });
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const service = getService(post.serviceSlug);
  const date = new Date(`${post.date}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <JsonLd data={blogPostingSchema(post)} />
      <section className="bg-brand-950 text-white">
        <Container className="py-12 sm:py-16">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Guides", path: "/blog" },
              { name: post.title, path: `/blog/${post.slug}` },
            ]}
          />
          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-accent-400">
            {service?.shortName} · {post.readMinutes} min read · {date}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{post.description}</p>
        </Container>
      </section>

      <article className="bg-white py-16 sm:py-20">
        <Container className="mx-auto max-w-3xl">
          {post.sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="font-display text-2xl font-bold tracking-tight text-brand-900">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="mt-4 text-lg leading-relaxed text-slate-600">
                  {p}
                </p>
              ))}
            </section>
          ))}

          {service && (
            <aside className="mt-12 rounded-2xl bg-brand-50 p-8">
              <h2 className="font-display text-xl font-bold text-brand-900">
                Dealing with this right now?
              </h2>
              <p className="mt-2 leading-relaxed text-slate-600">
                We respond 24/7. Free checklist on the service page.
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-4 inline-flex items-center gap-1.5 font-semibold text-accent-600 transition-colors duration-200 hover:text-accent-700"
              >
                {service.name}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </aside>
          )}
        </Container>
      </article>

      <FinalCTA />
    </>
  );
}
