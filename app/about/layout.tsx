import type { Metadata } from 'next'
import { BreadcrumbSchema, WebPageSchema } from '@/components/structured-data'
import { createMetadata, siteUrl } from '@/lib/seo'
import { schemaIds } from '@/lib/schema'

export const metadata: Metadata = {
  ...createMetadata({
    title: 'About Bear Media | Garry Lynch, West Lothian',
    description: 'Meet Garry Lynch, founder of Bear Media. Learn how Bear Media helps businesses in West Lothian, Edinburgh and Scotland look professional online.',
    path: '/about',
    image: '/assets/about/garry-with-camera.webp',
    imageAlt: 'Garry Lynch, founder of Bear Media',
  }),
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WebPageSchema
        type="ProfilePage"
        name="About Bear Media | Garry Lynch"
        description="Meet Garry Lynch, founder of Bear Media in Broxburn, West Lothian."
        url={`${siteUrl}/about`}
        mainEntityId={schemaIds.person}
        aboutIds={[schemaIds.business]}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: siteUrl },
        { name: 'About', url: `${siteUrl}/about` },
      ]} />
      {children}
    </>
  )
}
