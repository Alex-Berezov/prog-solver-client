module.exports = {
  compress: true,
  images: {
    domains: ['localhost', 'prog-solver.online'],
  },
  optimizeFonts: true,
  async redirects() {
    return [
      {
        source: 'http://progsolver.com',
        destination: 'https://progsolver.com',
        permanent: true,
      },
      {
        source: 'https://wwww.progsolver.com',
        destination: 'https://progsolver.com',
        permanent: true,
      },
    ]
  },
}