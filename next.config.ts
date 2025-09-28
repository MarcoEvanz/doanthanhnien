import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Force App Router only mode
  experimental: {
    // Disable any Pages Router compatibility
    esmExternals: true,
  },
  // Ensure clean build
  output: undefined,
  trailingSlash: false,
  distDir: '.next',
  // Explicitly disable document generation
  generateBuildId: () => 'build-' + Date.now(),
  // Strict TypeScript and ESLint
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Disable any legacy features
  swcMinify: true,
};

export default nextConfig;
