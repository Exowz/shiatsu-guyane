import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
  },
  // Webpack configuration to handle production build issues
  webpack: (config, { dev }) => {
    if (!dev) {
      // Prevent webpack module resolution issues
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
      };
      
      // Handle JSON parsing issues
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    return config;
  },
};

export default nextConfig;
