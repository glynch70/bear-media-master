import type { Metadata } from 'next'
import { createMetadata } from '@/lib/seo'
import RedesignPage from './redesign/page'

export const metadata: Metadata = {
  ...createMetadata({
    title: 'Website Design West Lothian & Edinburgh | Bear Media',
    description: 'Mobile-first websites for businesses in West Lothian and Edinburgh, built by Bear Media to improve credibility, visibility and enquiries.',
    path: '/',
    imageAlt: 'Bear Media creative services for businesses in Scotland',
  }),
}

export default function Home() {
  return <RedesignPage />
}
