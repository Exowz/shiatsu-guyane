import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: false,
  },
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
  // Webpack configuration to handle production build issues
  webpack: (config: any, { dev, isServer }: { dev: boolean, isServer: boolean }) => {
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
    
    // Exclude email components from client-side bundling
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@/components/emails/ClientConfirmationEmail': false,
        '@/components/emails/PractitionerNotificationEmail': false,
      };
    }
    
    return config;
  },
};

export default nextConfig;
