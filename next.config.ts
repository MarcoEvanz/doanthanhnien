import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure we're using App Router only (default in Next.js 15)
  output: undefined,
  trailingSlash: false,
  // Remove any static export configuration
  distDir: '.next',
  // Explicitly set for Render deployment
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
