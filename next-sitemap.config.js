module.exports = {
  siteUrl: process.env.NODE_ENV === 'production' ? process.env.PROD_HOST : process.env.HOST,
  exclude: ['/staffonly/*'],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/staffonly', '/staffonly/*'],
      }
    ]
  },
}