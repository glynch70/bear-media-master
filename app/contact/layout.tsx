import type { Metadata } from 'next'
import { BreadcrumbSchema } from '@/components/structured-data'
import { createMetadata, siteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  ...createMetadata({
    title: 'Contact Bear Media | Website & Content Support in Scotland',
    description: 'Contact Bear Media in West Lothian to discuss website design, photography, video, drone content, social media or AI training for your Scottish business.',
    path: '/contact',
    imageAlt: 'Contact Bear Media in West Lothian, Scotland',
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
