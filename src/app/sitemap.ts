import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { services } from "@/config/services";
import { cities } from "@/config/cities";
import { posts } from "@/config/posts";

/** Every URL on the site, generated from config — nothing hand-maintained. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths: Array<{ path: string; priority: number }> = [
    { path: "", priority: 1.0 },
    { path: "/emergency", priority: 0.9 },
    { path: "/services", priority: 0.9 },
    { path: "/service-areas", priority: 0.8 },
    { path: "/insurance", priority: 0.8 },
    { path: "/about", priority: 0.6 },
    { path: "/reviews", priority: 0.7 },
    { path: "/gallery", priority: 0.6 },
    { path: "/faq", priority: 0.6 },
    { path: "/contact", priority: 0.8 },
    { path: "/blog", priority: 0.5 },
    { path: "/privacy-policy", priority: 0.2 },
    { path: "/terms", priority: 0.2 },
  ];

  return [
    ...staticPaths.map(({ path, priority }) => ({
      url: `${site.url}${path}`,
      lastModified: now,
      priority,
    })),
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      lastModified: now,
      priority: 0.9,
    })),
    ...services.flatMap((s) =>
      cities.map((c) => ({
        url: `${site.url}/services/${s.slug}/${c.slug}`,
        lastModified: now,
        priority: 0.8,
      })),
    ),
    ...cities.map((c) => ({
      url: `${site.url}/service-areas/${c.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
    ...posts.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      priority: 0.5,
    })),
  ];
}
