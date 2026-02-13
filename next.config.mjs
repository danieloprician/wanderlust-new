import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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

  // Suppress next-intl webpack warning
  webpack: (config, { isServer }) => {
    config.ignoreWarnings = [
      ...(config.ignoreWarnings || []),
      {
        module: /node_modules\/next-intl/,
        message: /Parsing of .*next-intl.*for build dependencies failed/,
      },
    ];
    return config;
  },
};

export default withNextIntl(nextConfig);
