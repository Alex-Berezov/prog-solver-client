const siteUrl = process.env.PROD_HOST

module.exports = {
  siteUrl,
  exclude: ['/staffonly/*', '/server-sitemap.xml'],
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