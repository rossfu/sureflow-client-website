import type { Metadata } from "next";
import { site } from "@/config/site";

interface BuildMetadataArgs {
  title: string;
  description: string;
  /** Path starting with "/" — used for canonical + OG url */
  path: string;
  ogType?: "website" | "article";
}

/**
 * Central metadata factory: every page gets unique title/description,
 * canonical URL, Open Graph, and Twitter card from one place.
 */
export function buildMetadata({ title, description, path, ogType = "website" }: BuildMetadataArgs): Metadata {
  const url = `${site.url}${path === "/" ? "" : path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: ogType,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
