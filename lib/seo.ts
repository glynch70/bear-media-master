import type { Metadata } from 'next'

export const siteUrl = 'https://bear-media.com'
export const siteName = 'Bear Media'
export const defaultOgImage = '/assets/brand/og-image.jpg'
export const defaultOgImageUrl = `${siteUrl}${defaultOgImage}`

export const socialProfiles = [
  'https://www.facebook.com/profile.php?id=61553562716650',
  'https://www.instagram.com/bearmedia70/',
  'https://www.tiktok.com/@bearmediascotland',
  'https://www.youtube.com/@bearmedia70',
  'https://www.linkedin.com/in/garrylynch70',
]

export function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path
  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`
}

function getImageMimeType(imageUrl: string) {
  if (imageUrl.endsWith('.png')) return 'image/png'
  if (imageUrl.endsWith('.webp')) return 'image/webp'
  return 'image/jpeg'
}

export function createMetadata({
  title,
  description,
  path = '/',
  image = defaultOgImage,
  imageAlt = 'Bear Media - creative services for Scottish businesses',
}: {
  title: string
  description: string
  path?: string
  image?: string
  imageAlt?: string
}): Metadata {
  const url = absoluteUrl(path)
  const imageUrl = absoluteUrl(image)

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
          type: getImageMimeType(imageUrl),
        },
      ],
      type: 'website',
      locale: 'en_GB',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
      creator: '@bearmediascot',
    },
  }
}
