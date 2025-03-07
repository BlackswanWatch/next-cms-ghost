const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  ...(process.env.NETLIFY === 'true' && { target: 'serverless' }),
  images: {
    deviceSizes: [320, 500, 680, 1040, 2080, 2048, 3120],
    domains: [
      'localhost',
      '18.132.171.3:80',
      'images.unsplash.com',
      'admin.blackswan.watch',
      'blackswan.watch',
      'static.gotsby.org',
      'static.ghost.org',
      'hooshmand.net',
      'cms.jamify.org',
      'demo.jamify.org',
      'www.gatsbyjs.org',
      'res.cloudinary.com',
      'cloudinary.com',
      'www.jamify.org',
      'cdn.commento.io',
      'gatsby.ghost.io',
      'ghost.org',
      'www.adminreports.blackswan.watch',
      'covid.amcharts.com',
      'repository-images.githubusercontent.com',
      'www.gravatar.com',
      'github.githubassets.com',
    ],
  },
  reactStrictMode: true,
})
