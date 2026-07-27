import type { Metadata } from 'next'
import { createMetadata } from '@/lib/seo'
import RedesignPage from './redesign/page'

export const metadata: Metadata = {
  ...createMetadata({
    title: 'Bear Media | Website Design, Photography & Social Media in Scotland',
    description: 'Creative media studio in West Lothian helping businesses across Scotland with websites, photography, video, drone content, social media and AI training.',
    path: '/',
    imageAlt: 'Bear Media creative services for businesses in Scotland',
  }),
}

export default function Home() {
  return <RedesignPage />
}
