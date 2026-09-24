import type { Metadata } from 'next'
import { BreadcrumbSchema } from '@/components/structured-data'
import { createMetadata, siteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  ...createMetadata({
    title: 'About Bear Media | Edinburgh & the Lothians',
    description: 'Meet Garry Lynch, founder of Bear Media. Learn how he helps businesses across Edinburgh and the Lothians with content days, photography and website builds.',
    path: '/about',
    image: '/assets/about/garry-with-camera.webp',
    imageAlt: 'Garry Lynch, founder of Bear Media',
  }),
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: siteUrl },
        { name: 'About', url: `${siteUrl}/about` },
      ]} />
      {children}
    </>
  )
}
