import type { NextConfig } from "next";

/**
 * basePath — set only when this template is deployed under a URL subpath
 * (e.g. proxied at yoursite.com/clientwebsite instead of its own domain).
 * Leave NEXT_PUBLIC_BASE_PATH unset for a normal root-domain deployment.
 * Components read the same value via lib/utils#withBasePath — keep both
 * in sync since next/image doesn't auto-prefix unoptimized local sources.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  basePath,
  images: {
    formats: ["image/avif", "image/webp"],
    /**
     * Disabled: Next's image optimizer self-fetches local assets without
     * the basePath prefix, which 404s whenever basePath is set. Site is
     * fully static anyway, so optimization buys little.
     */
    unoptimized: true,
  },
};

export default nextConfig;
