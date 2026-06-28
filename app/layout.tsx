import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LocalBusinessSchema, OrganizationSchema } from '@/components/structured-data'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bear Media | Helping Scottish Businesses Stand Out Online',
  description: 'Photography, video, drone content, websites and social media for businesses across Scotland. Founded by Garry Lynch.',
  generator: 'v0.app',
  metadataBase: new URL('https://bear-media.com'),
  icons: {
    icon: [
      { url: '/assets/brand/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/brand/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: '/assets/brand/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Bear Media | Helping Scottish Businesses Stand Out Online',
    description: 'Photography, video, drone content, websites and social media for businesses across Scotland.',
    url: 'https://bear-media.com',
    siteName: 'Bear Media',
    images: [
      {
        url: 'https://bear-media.com/assets/brand/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bear Media - Scottish Media Agency',
        type: 'image/jpeg',
      },
    ],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bear Media | Helping Scottish Businesses Stand Out Online',
    description: 'Photography, video, drone content, websites and social media for businesses across Scotland.',
    images: ['https://bear-media.com/assets/brand/og-image.jpg'],
    creator: '@bearmediascot',
    siteId: 'bearmediascot',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
  ],
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang="en" className={`bg-background ${inter.variable}`}>
      <head>
        <LocalBusinessSchema />
        <OrganizationSchema />
        {gaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="font-sans antialiased text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
