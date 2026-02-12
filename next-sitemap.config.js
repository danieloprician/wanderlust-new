/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [],
  },
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    // Custom priority based on page importance
    const priorities = {
      '/': 1.0,
      '/cabana': 0.9,
      '/rezervari': 0.9,
      '/galerie': 0.8,
      '/tarife': 0.8,
      '/contact': 0.7,
      '/faq': 0.6,
    };

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
