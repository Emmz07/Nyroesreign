import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    appDocumentPreloading: true,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;
