import type { Metadata } from 'next'
import { createMetadata } from '@/lib/seo'
import { schemaIds } from '@/lib/schema'
import { WebPageSchema } from '@/components/structured-data'
import PortfolioHome from '@/components/home/portfolio-home'

export const metadata: Metadata = {
  ...createMetadata({
    title: 'Bear Media | Content Days & Website Design in Scotland',
    description: 'Content days and mobile-first websites for Scottish businesses, with photography, video and drone support shaped around real projects.',
    path: '/',
    imageAlt: 'Bear Media creative services for businesses in Scotland',
  }),
}

export default function Home() {
  return (
    <>
      <WebPageSchema
        name="Bear Media"
        url="/"
        mainEntityId={schemaIds.business}
      />
      <PortfolioHome />
    </>
  )
}
