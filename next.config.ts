import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  basePath: "/clientwebsite",
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
