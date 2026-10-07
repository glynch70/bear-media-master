import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import '@/components/motion/motion.css'
import { MotionSystem } from '@/components/motion/motion-system'
import { ConversionTracker } from '@/components/analytics/conversion-tracker'
import { BusinessSchema, PersonSchema, WebSiteSchema } from '@/components/structured-data'
import { createMetadata, defaultOgImageUrl, siteUrl } from '@/lib/seo'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION

export const metadata: Metadata = {
  ...createMetadata({
    title: 'Bear Media | Content Days & Website Design in Scotland',
    description: 'Photography, video, drone, social media and websites for Scottish businesses.',
    path: '/',
    imageAlt: 'Bear Media creative services in Scotland',
  }),
  title: {
    default: 'Bear Media | Content Days & Website Design in Scotland',
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
      { url: `${siteUrl}/favicon.ico`, sizes: '16x16 32x32 48x48', type: 'image/x-icon' },
      { url: `${siteUrl}/brand/bear-media-icon.png`, sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: `${siteUrl}/brand/bear-media-apple-icon.png`, sizes: '180x180', type: 'image/png' }],
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
  const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID ?? 'wt02mqo6ya'

  return (
    <html lang="en" className={`bg-background ${inter.variable}`}>
      <head>
        <BusinessSchema />
        <PersonSchema />
        <WebSiteSchema />
      </head>
      <body className="font-sans antialiased text-foreground">
        {children}
        <MotionSystem />
        <ConversionTracker />
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                if (['bear-media.com', 'www.bear-media.com'].includes(window.location.hostname)) {
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  window.gtag = gtag;
                  gtag('js', new Date());
                  gtag('config', '${gaId}', {
                    page_path: window.location.pathname,
                  });
                }
              `}
            </Script>
          </>
        )}
        {process.env.NODE_ENV === 'production' && clarityProjectId && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              if (['bear-media.com', 'www.bear-media.com'].includes(window.location.hostname)) {
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${clarityProjectId}");
              }
            `}
          </Script>
        )}
        {process.env.NODE_ENV === 'production' && process.env.VERCEL === '1' && <Analytics />}
      </body>
    </html>
  )
}
