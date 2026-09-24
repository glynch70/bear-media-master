import type { Metadata } from 'next'
import { createMetadata } from '@/lib/seo'
import RedesignPage from './redesign/page'

export const metadata: Metadata = {
  ...createMetadata({
    title: 'Content Days & Website Design | Edinburgh & the Lothians | Bear Media',
    description: 'Bear Media plans content days and builds mobile-first websites for businesses across Edinburgh and the Lothians. Based in Broxburn, West Lothian.',
    path: '/',
    imageAlt: 'Bear Media creative services for businesses in Scotland',
  }),
}

export default function Home() {
  return <RedesignPage />
}
