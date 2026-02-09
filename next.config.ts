import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  serverExternalPackages: ['@react-email/components', '@react-email/render'],
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
