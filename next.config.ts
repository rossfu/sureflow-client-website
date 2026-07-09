import type { NextConfig } from "next";

/**
 * basePath — this deployment lives at sureflowleads.com/clientwebsite
 * (proxied via that site's vercel.json rewrites), so it defaults to
 * "/clientwebsite". Redeploying at a plain root domain for a future
 * client: set NEXT_PUBLIC_BASE_PATH="" explicitly to clear it.
 * Components read the same value via lib/utils#withBasePath — keep both
 * in sync since next/image doesn't auto-prefix unoptimized local sources.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/clientwebsite";

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
