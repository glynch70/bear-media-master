export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://bear-media.com',
    name: 'Bear Media',
    image: 'https://bear-media.com/assets/brand/og-image.jpg',
    description: 'Professional photography, video, drone content, social media management and web design for businesses across Scotland.',
    url: 'https://bear-media.com',
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
    sameAs: [
      'https://www.facebook.com/profile.php?id=61553562716650',
      'https://www.instagram.com/bearmedia70/',
      'https://www.youtube.com/@bearmedia70',
      'https://www.linkedin.com/in/garrylynch70',
    ],
    areaServed: {
      '@type': 'GeoShape',
      addressCountry: 'GB',
      description: 'Scotland',
    },
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
    name: 'Bear Media',
    url: 'https://bear-media.com',
    logo: 'https://bear-media.com/assets/brand/logo.png',
    description: 'Photography, video, drone content, social media management and web design for Scottish businesses.',
    foundingDate: '2020',
    founder: {
      '@type': 'Person',
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
    },
    sameAs: [
      'https://www.facebook.com/profile.php?id=61553562716650',
      'https://www.instagram.com/bearmedia70/',
      'https://www.youtube.com/@bearmedia70',
      'https://www.linkedin.com/in/garrylynch70',
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

export function ServiceSchema({
  name,
  description,
  areaServed,
  provider,
}: {
  name: string
  description: string
  areaServed: string
  provider: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: provider,
      url: 'https://bear-media.com',
    },
    areaServed,
    url: 'https://bear-media.com',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  )
}
