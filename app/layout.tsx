import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LocalBusinessSchema, OrganizationSchema, PersonSchema, ProfessionalServiceSchema, WebSiteSchema } from '@/components/structured-data'
import { createMetadata, defaultOgImageUrl, siteUrl } from '@/lib/seo'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION

export const metadata: Metadata = {
  ...createMetadata({
    title: 'Bear Media | Content Days & Website Design in the Lothians',
    description: 'Bear Media creates content and websites for businesses across Edinburgh and the Lothians, with photography, video and drone services when a project needs them.',
    path: '/',
    imageAlt: 'Bear Media creative services in Scotland',
  }),
  title: {
    default: 'Bear Media | Content Days & Website Design in the Lothians',
    template: '%s',
  },
  generator: 'v0.app',
  metadataBase: new URL(siteUrl),
  applicationName: 'Bear Media',
  category: 'Professional Services',
  manifest: '/manifest.webmanifest',
  verification: googleVerification ? { google: googleVerification } : undefined,
  icons: {
    icon: [
      { url: '/assets/brand/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/brand/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: '/assets/brand/apple-touch-icon.png',
  },
  other: {
    'og:image:secure_url': defaultOgImageUrl,
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
        <ProfessionalServiceSchema />
        <PersonSchema />
        <WebSiteSchema />
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
