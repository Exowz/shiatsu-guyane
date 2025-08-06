import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Optimize for stability
    webpackBuildWorker: false,
  },
  webpack: (config, { isServer, dev }) => {
    // Handle potential JSON parsing issues
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      };
    }
    return config;
  },
};

export default nextConfig;
