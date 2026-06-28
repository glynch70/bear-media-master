import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Bear Media',
  description: 'Meet Garry Lynch. Why I started Bear Media and how I help businesses look as good online as they do in real life.',
  openGraph: {
    title: 'About | Bear Media',
    description: 'Meet Garry Lynch. Why I started Bear Media and how I help businesses look as good online as they do in real life.',
    url: 'https://bear-media.com/about',
    siteName: 'Bear Media',
    images: [
      {
        url: 'https://bear-media.com/assets/brand/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Garry Lynch - Bear Media Founder',
        type: 'image/jpeg',
      },
    ],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Bear Media',
    description: 'Meet Garry Lynch. Why I started Bear Media and how I help businesses look as good online as they do in real life.',
    images: ['https://bear-media.com/assets/brand/og-image.jpg'],
    creator: '@bearmediascot',
  },
  alternates: {
    canonical: 'https://bear-media.com/about',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
