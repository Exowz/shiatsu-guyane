import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
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
