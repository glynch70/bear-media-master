import type { Metadata } from 'next'
import { BreadcrumbSchema } from '@/components/structured-data'
import { createMetadata, siteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  ...createMetadata({
    title: 'Contact Bear Media | Edinburgh & the Lothians',
    description: 'Contact Bear Media to discuss content days, website builds, photography or video for your business in Edinburgh or the Lothians.',
    path: '/contact',
    imageAlt: 'Contact Bear Media in Edinburgh and the Lothians',
  }),
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: siteUrl },
        { name: 'Contact', url: `${siteUrl}/contact` },
      ]} />
      {children}
    </>
  )
}
