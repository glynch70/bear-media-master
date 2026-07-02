import type { Metadata } from 'next'
import { BreadcrumbSchema } from '@/components/structured-data'
import { createMetadata, siteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  ...createMetadata({
    title: 'About Bear Media | Garry Lynch, Creative Media in West Lothian',
    description: 'Meet Garry Lynch, founder of Bear Media. Learn how Bear Media helps businesses in West Lothian, Edinburgh and Scotland look professional online.',
    path: '/about',
    image: '/assets/about/garry-with-camera.png',
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
