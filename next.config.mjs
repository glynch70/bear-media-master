/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      // Keep one canonical hostname for search engines and visitors.
      // The old portfolio subdomain is no longer a separate site. Send its
      // known legal URLs to the live canonical pages, and preserve the path
      // for any other legacy links.
      {
        source: '/terms',
        has: [
          {
            type: 'host',
            value: 'portfolio.bear-media.com',
          },
        ],
        destination: 'https://bear-media.com/terms-and-conditions',
        permanent: true,
      },
      {
        source: '/privacy',
        has: [
          {
            type: 'host',
            value: 'portfolio.bear-media.com',
          },
        ],
        destination: 'https://bear-media.com/terms-and-conditions',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'portfolio.bear-media.com',
          },
        ],
        destination: 'https://bear-media.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.bear-media.com',
          },
        ],
        destination: 'https://bear-media.com/:path*',
        permanent: true,
      },
      // Preserve search equity for the former generic website design URL.
      {
        source: '/web-design',
        destination: '/website-design-west-lothian',
        permanent: true,
      },
      {
        source: '/services/videography',
        destination: '/video-production-west-lothian',
        permanent: true,
      },
      {
        source: '/services/social-media-content',
        destination: '/social-media-west-lothian',
        permanent: true,
      },
      {
        source: '/west-lothian-content-creation',
        destination: '/content-creation-west-lothian',
        permanent: true,
      },
      {
        source: '/portfolio/almond-vet-care',
        destination: '/projects/almond-vet-care',
        permanent: true,
      },
      {
        source: '/social-media',
        destination: '/social-media-west-lothian',
        permanent: true,
      },
      {
        source: '/services/content-planning',
        destination: '/social-media-west-lothian',
        permanent: true,
      },
      {
        source: '/services/fife-small-business-content',
        destination: '/content-creation-fife',
        permanent: true,
      },

      // Legacy video/content URLs -> closest current service or portfolio page
      {
        source: '/website-video-content-west-lothian',
        destination: '/video-production-west-lothian',
        permanent: true,
      },
      {
        source: '/social-media-video-content-west-lothian',
        destination: '/social-media-west-lothian',
        permanent: true,
      },
      {
        source: '/corporate-video-production-west-lothian',
        destination: '/video-production-west-lothian',
        permanent: true,
      },
      {
        source: '/product-video-production-west-lothian',
        destination: '/video-production-west-lothian',
        permanent: true,
      },
      {
        source: '/video-production-edinburgh',
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
        destination: '/drone-photography-west-lothian',
        permanent: true,
      },
      {
        source: '/glasgow-videographer-small-business',
        destination: '/projects',
        permanent: true,
      },
      // Local video service URLs -> current West Lothian video page
      {
        source: '/broxburn-video-production-services',
        destination: '/video-production-west-lothian',
        permanent: true,
      },
      {
        source: '/linlithgow-video-production-services',
        destination: '/video-production-west-lothian',
        permanent: true,
      },
      {
        source: '/east-calder-video-production-services',
        destination: '/video-production-west-lothian',
        permanent: true,
      },

      // Legacy service sub-pages -> closest current service page
      {
        source: '/services/life-small-business-content',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/fife-drone-video',
        destination: '/content-creation-fife',
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
      {
        source: '/terms',
        destination: '/terms-and-conditions',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/terms-and-conditions',
        permanent: true,
      },
      {
        source: '/industries/trades',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/portfolio/seamus-corry',
        destination: '/projects/seamus-corry',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
