import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Bear Media',
  description: 'Get in touch with Bear Media. Based in West Lothian, Scotland. Call, email, or send a message to discuss your project.',
  openGraph: {
    title: 'Contact | Bear Media',
    description: 'Get in touch with Bear Media. Based in West Lothian, Scotland. Call, email, or send a message to discuss your project.',
    url: 'https://bear-media.com/contact',
    siteName: 'Bear Media',
    images: [
      {
        url: 'https://bear-media.com/assets/brand/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bear Media - Contact',
        type: 'image/jpeg',
      },
    ],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Bear Media',
    description: 'Get in touch with Bear Media. Based in West Lothian, Scotland.',
    images: ['https://bear-media.com/assets/brand/og-image.jpg'],
    creator: '@bearmediascot',
  },
  alternates: {
    canonical: 'https://bear-media.com/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
