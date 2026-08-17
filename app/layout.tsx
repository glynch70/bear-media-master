import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
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
const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || 'wt02mqo6ya'

export const metadata: Metadata = {
  ...createMetadata({
    title: 'Bear Media | Creative Media Studio in Scotland',
    description: 'Bear Media is a creative media studio in West Lothian helping Scottish businesses with website design, photography, video, drone content, social media and AI training.',
    path: '/',
    imageAlt: 'Bear Media creative services in Scotland',
  }),
  title: {
    default: 'Bear Media | Creative Media Studio in Scotland',
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
        {process.env.NODE_ENV === 'production' && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${clarityProjectId}");`}
          </Script>
        )}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
