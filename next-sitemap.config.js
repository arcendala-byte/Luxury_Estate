/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://luxury-estate.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/admin/', '/dashboard/', '/api/'] },
    ],
  },
  exclude: ['/admin/*', '/dashboard/*', '/api/*'],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
}
