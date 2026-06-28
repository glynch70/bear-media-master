/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Video/Production content URLs -> /projects
      {
        source: '/website-video-content-west-lothian',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/social-media-video-content-west-lothian',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/corporate-video-production-west-lothian',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/product-video-production-west-lothian',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/video-production-edinburgh',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/video-production-west-lothian',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/drone-services-edinburgh',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/drone-video-services-west-lothian',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/glasgow-videographer-small-business',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/content-creation-edinburgh',
        destination: '/projects',
        permanent: true,
      },

      // Location-based service URLs -> /contact
      {
        source: '/broxburn-video-production-services',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/linlithgow-video-production-services',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/east-calder-video-production-services',
        destination: '/contact',
        permanent: true,
      },

      // Services sub-pages -> /services (main services page)
      {
        source: '/services/life-small-business-content',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/fife-drone-video',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/seo-google-business',
        destination: '/services',
        permanent: true,
      },

      // Deleted project pages -> /projects
      {
        source: '/projects/colin-canines',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/projects/m-m-compliance',
        destination: '/projects',
        permanent: true,
      },

      // Main routes redirects
      {
        source: '/packages',
        destination: '/contact',
        permanent: true,
      },

      // Privacy and Terms -> / (pages don't exist yet)
      {
        source: '/privacy',
        destination: '/',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
