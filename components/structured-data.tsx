import {
  absoluteUrl,
  businessSocialProfiles,
  defaultOgImageUrl,
  personSocialProfiles,
  siteUrl,
} from '@/lib/seo'
import {
  creativeWorkSchemaId,
  pageSchemaId,
  schemaIds,
  schemaPageUrl,
  serializeJsonLd,
  serviceSchemaId,
} from '@/lib/schema'

const businessAreas = ['West Lothian', 'Edinburgh', 'Midlothian', 'East Lothian', 'Fife']
const businessAddress = {
  '@type': 'PostalAddress',
  addressRegion: 'West Lothian',
  addressCountry: 'GB',
}

const garryLynch = {
  '@type': 'Person',
  '@id': schemaIds.person,
  name: 'Garry Lynch',
  jobTitle: 'Founder of Bear Media',
  worksFor: { '@id': schemaIds.business },
  url: `${siteUrl}/about`,
  image: `${siteUrl}/assets/about/garry-with-camera.webp`,
  mainEntityOfPage: { '@id': pageSchemaId('/about') },
  sameAs: personSocialProfiles,
}

function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
      suppressHydrationWarning
    />
  )
}

function serviceAreas(areaServed: string | readonly string[]) {
  return typeof areaServed === 'string'
    ? areaServed
    : areaServed.map((name) => ({ '@type': 'Place', name }))
}

export function BusinessSchema() {
  return (
    <JsonLd data={{
      '@context': 'https://schema.org',
      // LocalBusiness is already a subtype of Organization. A single identity
      // connects the business, service provider, publisher and Garry's employer.
      '@type': 'LocalBusiness',
      '@id': schemaIds.business,
      name: 'Bear Media',
      url: siteUrl,
      logo: `${siteUrl}/assets/brand/logo.png`,
      image: defaultOgImageUrl,
      description: 'Content days, mobile-first websites, photography and video for businesses across Edinburgh and the Lothians. Based in West Lothian.',
      telephone: '+447879011860',
      email: 'info@bear-media.com',
      foundingDate: '2024',
      founder: { '@id': schemaIds.person },
      address: businessAddress,
      areaServed: serviceAreas(businessAreas),
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer enquiries',
        telephone: '+447879011860',
        email: 'info@bear-media.com',
        url: `${siteUrl}/contact`,
        availableLanguage: 'English',
      },
      sameAs: businessSocialProfiles,
    }} />
  )
}

export function PersonSchema() {
  return <JsonLd data={{ '@context': 'https://schema.org', ...garryLynch }} />
}

export function WebSiteSchema() {
  return (
    <JsonLd data={{
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': schemaIds.website,
      name: 'Bear Media',
      url: siteUrl,
      publisher: { '@id': schemaIds.business },
      about: { '@id': schemaIds.business },
      inLanguage: 'en-GB',
    }} />
  )
}

type WebPageDetails = {
  name: string
  description?: string
  url: string
  type?: 'WebPage' | 'ProfilePage' | 'ContactPage' | 'CollectionPage'
  mainEntityId?: string
  mainEntityType?: 'Person' | 'Organization'
  aboutIds?: readonly string[]
}

function webPageData({
  name,
  description,
  url,
  type = 'WebPage',
  mainEntityId,
  mainEntityType,
  aboutIds,
}: WebPageDetails) {
  return {
    '@type': type,
    '@id': pageSchemaId(url),
    url: schemaPageUrl(url),
    name,
    description,
    isPartOf: { '@id': schemaIds.website },
    publisher: { '@id': schemaIds.business },
    inLanguage: 'en-GB',
    ...(mainEntityId ? {
      mainEntity: {
        ...(mainEntityType ? { '@type': mainEntityType } : {}),
        '@id': mainEntityId,
      },
    } : {}),
    ...(aboutIds?.length ? { about: aboutIds.map((id) => ({ '@id': id })) } : {}),
  }
}

export function WebPageSchema(props: WebPageDetails) {
  return <JsonLd data={{ '@context': 'https://schema.org', ...webPageData(props) }} />
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const pageUrl = items.at(-1)?.url
  return (
    <JsonLd data={{
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      ...(pageUrl ? { '@id': `${schemaPageUrl(pageUrl)}#breadcrumb` } : {}),
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: absoluteUrl(item.url),
      })),
    }} />
  )
}

export function ServiceSchema({
  name,
  description,
  areaServed,
  provider,
  url,
  serviceType,
  catalogue,
  subjectOf,
}: {
  name: string
  description: string
  areaServed: string | readonly string[]
  provider: string
  url: string
  serviceType?: string
  catalogue?: readonly { name: string; description?: string; url?: string }[]
  subjectOf?: readonly { name: string; url: string }[]
}) {
  const id = serviceSchemaId(url)
  const providerRef = { '@id': schemaIds.business, name: provider }
  const areas = serviceAreas(areaServed)
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      webPageData({ name, description, url, mainEntityId: id }),
      {
        '@type': 'Service',
        '@id': id,
        name,
        description,
        serviceType: serviceType ?? name,
        url: absoluteUrl(url),
        mainEntityOfPage: { '@id': pageSchemaId(url) },
        provider: providerRef,
        areaServed: areas,
        ...(catalogue?.length ? {
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            '@id': `${id}-catalogue`,
            name: `${name} services`,
            itemListElement: catalogue.map((item) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                '@id': item.url
                  ? serviceSchemaId(item.url)
                  : `${id}-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`,
                name: item.name,
                description: item.description,
                url: absoluteUrl(item.url ?? url),
                provider: providerRef,
                areaServed: areas,
              },
            })),
          },
        } : {}),
        ...(subjectOf?.length ? {
          subjectOf: subjectOf.map((project) => ({
            '@type': 'CreativeWork',
            '@id': creativeWorkSchemaId(project.url),
            name: project.name,
            url: absoluteUrl(project.url),
          })),
        } : {}),
      },
    ],
  }

  return <JsonLd data={schema} />
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
  serviceUrls,
}: {
  title: string
  description: string
  url: string
  image: string
  datePublished?: string
  dateModified?: string
  authorName: string
  authorUrl: string
  serviceUrls?: readonly string[]
}) {
  const id = creativeWorkSchemaId(url)
  const aboutIds = serviceUrls?.map(serviceSchemaId)

  return (
    <JsonLd data={{
      '@context': 'https://schema.org',
      '@graph': [
        webPageData({ name: title, description, url, mainEntityId: id, aboutIds }),
        {
          '@type': 'Article',
          '@id': id,
          headline: title,
          description,
          url: absoluteUrl(url),
          image: absoluteUrl(image),
          datePublished,
          dateModified,
          mainEntityOfPage: { '@id': pageSchemaId(url) },
          author: {
            '@type': 'Person',
            '@id': authorName === 'Garry Lynch' ? schemaIds.person : `${schemaPageUrl(authorUrl)}#person`,
            name: authorName,
            url: absoluteUrl(authorUrl),
          },
          publisher: { '@id': schemaIds.business },
          inLanguage: 'en-GB',
          ...(aboutIds?.length ? { about: aboutIds.map((serviceId) => ({ '@id': serviceId })) } : {}),
        },
      ],
    }} />
  )
}

export function AuthorSchema({ name, url, role }: { name: string; url: string; role: string }) {
  if (name === 'Garry Lynch') return <PersonSchema />

  return (
    <JsonLd data={{
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': `${schemaPageUrl(url)}#person`,
      name,
      jobTitle: role,
      url: absoluteUrl(url),
    }} />
  )
}

export function ProjectSchema({
  name,
  description,
  url,
  image,
  serviceUrls,
}: {
  name: string
  description: string
  url: string
  image: string
  serviceUrls: readonly string[]
}) {
  const id = creativeWorkSchemaId(url)
  const aboutIds = serviceUrls.map(serviceSchemaId)

  return (
    <JsonLd data={{
      '@context': 'https://schema.org',
      '@graph': [
        webPageData({ name, description, url, mainEntityId: id, aboutIds }),
        {
          '@type': 'CreativeWork',
          '@id': id,
          name,
          description,
          url: absoluteUrl(url),
          image: absoluteUrl(image),
          creator: { '@id': schemaIds.person },
          publisher: { '@id': schemaIds.business },
          mainEntityOfPage: { '@id': pageSchemaId(url) },
          about: aboutIds.map((serviceId) => ({ '@id': serviceId })),
          inLanguage: 'en-GB',
        },
      ],
    }} />
  )
}

export function FAQPageSchema({
  questions,
  url,
}: {
  questions: ReadonlyArray<{ question: string; answer: string }>
  url?: string
}) {
  return (
    <JsonLd data={{
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      ...(url ? {
        '@id': pageSchemaId(url),
        url: schemaPageUrl(url),
        isPartOf: { '@id': schemaIds.website },
        publisher: { '@id': schemaIds.business },
      } : {}),
      inLanguage: 'en-GB',
      mainEntity: questions.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    }} />
  )
}
