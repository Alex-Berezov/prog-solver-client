const siteUrl = process.env.NODE_ENV === 'production' ? process.env.PROD_HOST : process.env.HOST

module.exports = {
  siteUrl,
  exclude: ['/staffonly/*'],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/staffonly', '/staffonly/*'],
      }
    ],
    additionalSitemaps: [
      `${siteUrl}/sitemap.xml`,
      `${siteUrl}/server-sitemap.xml`,
    ],
  },
}