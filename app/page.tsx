import type { Metadata } from 'next'
import { createMetadata } from '@/lib/seo'
import { schemaIds } from '@/lib/schema'
import { WebPageSchema } from '@/components/structured-data'
import RedesignPage from './redesign/page'

export const metadata: Metadata = {
  ...createMetadata({
    title: 'Bear Media | Content Days & Website Design in Scotland',
    description: 'Photography, video, drone, social media and websites for Scottish businesses.',
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
      <RedesignPage />
    </>
  )
}
