import { defaultOgImageUrl, siteUrl, socialProfiles } from '@/lib/seo'

const businessId = `${siteUrl}/#localbusiness`
const organizationId = `${siteUrl}/#organization`
const personId = `${siteUrl}/#garry-lynch`
const websiteId = `${siteUrl}/#website`

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': businessId,
    name: 'Bear Media',
    image: defaultOgImageUrl,
    description: 'Professional photography, video, drone content, social media management and website design for businesses across West Lothian, Edinburgh and Scotland.',
    url: siteUrl,
    telephone: '+447879011860',
    email: 'info@bear-media.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Broxburn',
      addressRegion: 'West Lothian',
      postalCode: 'EH52',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 55.9464,
      longitude: -3.5909,
    },
    priceRange: '£££',
    sameAs: socialProfiles,
    areaServed: [
      { '@type': 'Place', name: 'West Lothian' },
      { '@type': 'Place', name: 'Livingston' },
      { '@type': 'Place', name: 'Edinburgh' },
      { '@type': 'Place', name: 'Scotland' },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  )
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  )
}

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': organizationId,
    name: 'Bear Media',
    url: siteUrl,
    logo: `${siteUrl}/assets/brand/logo.png`,
    description: 'Photography, video, drone content, social media management and web design for Scottish businesses.',
    foundingDate: '2020',
    founder: {
      '@type': 'Person',
      '@id': personId,
      name: 'Garry Lynch',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Broxburn',
      addressRegion: 'West Lothian',
      postalCode: 'EH52',
      addressCountry: 'GB',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+447879011860',
      email: 'info@bear-media.com',
      areaServed: 'GB',
      availableLanguage: 'English',
    },
    sameAs: socialProfiles,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  )
}

export function ProfessionalServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteUrl}/#professionalservice`,
    name: 'Bear Media',
    url: siteUrl,
    image: defaultOgImageUrl,
    telephone: '+447879011860',
    email: 'info@bear-media.com',
    description: 'Creative media, website design, photography, video, drone content, social media management and AI training for businesses in West Lothian, Edinburgh and Scotland.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Broxburn',
      addressRegion: 'West Lothian',
      addressCountry: 'GB',
    },
    areaServed: ['West Lothian', 'Livingston', 'Edinburgh', 'Fife', 'Scotland'],
    founder: {
      '@type': 'Person',
      '@id': personId,
      name: 'Garry Lynch',
    },
    sameAs: socialProfiles,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  )
}

export function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': personId,
    name: 'Garry Lynch',
    jobTitle: 'Founder of Bear Media',
    worksFor: {
      '@type': 'Organization',
      '@id': organizationId,
      name: 'Bear Media',
    },
    url: `${siteUrl}/about`,
    image: `${siteUrl}/assets/about/garry-with-camera.png`,
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'West Lothian',
      addressCountry: 'GB',
    },
    sameAs: socialProfiles,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  )
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId,
    name: 'Bear Media',
    url: siteUrl,
    publisher: {
      '@type': 'Organization',
      '@id': organizationId,
      name: 'Bear Media',
    },
    inLanguage: 'en-GB',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  )
}

export function ServiceSchema({
  name,
  description,
  areaServed,
  provider,
  url = siteUrl,
}: {
  name: string
  description: string
  areaServed: string
  provider: string
  url?: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'LocalBusiness',
      '@id': businessId,
      name: provider,
      url: siteUrl,
    },
    areaServed,
    url,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  )
}

export function ArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName,
  authorUrl,
}: {
  title: string
  description: string
  url: string
  image: string
  datePublished: string
  dateModified: string
  authorName: string
  authorUrl: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image,
    datePublished,
    dateModified,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    author: {
      '@type': 'Person',
      '@id': authorUrl,
      name: authorName,
      url: authorUrl,
    },
    publisher: {
      '@type': 'Organization',
      '@id': organizationId,
      name: 'Bear Media',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/assets/brand/logo.png`,
      },
    },
    inLanguage: 'en-GB',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  )
}

export function AuthorSchema({
  name,
  url,
  role,
}: {
  name: string
  url: string
  role: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': url,
    name,
    jobTitle: role,
    url,
    worksFor: {
      '@type': 'Organization',
      '@id': organizationId,
      name: 'Bear Media',
    },
    sameAs: socialProfiles,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  )
}
