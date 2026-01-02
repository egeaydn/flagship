import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['animejs'],
  experimental: {
    optimizePackageImports: ['animejs'],
  },
};

export default nextConfig;
