import type { Metadata } from 'next'
import { createMetadata } from '@/lib/seo'
import { schemaIds } from '@/lib/schema'
import { WebPageSchema } from '@/components/structured-data'
import RedesignPage from './redesign/page'

export const metadata: Metadata = {
  ...createMetadata({
    title: 'Bear Media | Property Marketing, Content & Websites in Scotland',
    description: 'Property photography, video, drone, business content days, websites and practical AI training across West Lothian, Edinburgh and Central Scotland.',
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
