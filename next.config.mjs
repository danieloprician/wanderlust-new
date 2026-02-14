import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },

  // ISR configuration
  experimental: {
    ppr: false,
  },

  // Compression
  compress: true,

  // Note: Security headers not supported with static export
  // Configure in staticwebapp.config.json instead

  // PWA manifest
  async rewrites() {
    return [];
  },

  // Suppress next-intl webpack warnings
  webpack: (config, { isServer }) => {
    config.ignoreWarnings = [
      ...(config.ignoreWarnings || []),
      {
        file: /next-intl/,
        message: /Parsing of|Build dependencies behind/,
      },
    ];
    
    // Suppress webpack cache logging for next-intl
    if (config.infrastructureLogging) {
      config.infrastructureLogging.debug = /^(?!.*webpack\.cache\.PackFileCacheStrategy)/;
    }
    
    return config;
  },
};

export default withNextIntl(nextConfig);
