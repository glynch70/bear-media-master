import type { Metadata } from 'next'
import { createMetadata } from '@/lib/seo'
import RedesignPage from './redesign/page'

export const metadata: Metadata = {
  ...createMetadata({
    title: 'Bear Media | Photography, Video & Website Design in West Lothian',
    description: 'Bear Media helps businesses in West Lothian, Edinburgh and across Scotland get noticed with professional photography, video, websites and social media content that brings in enquiries.',
    path: '/',
    imageAlt: 'Bear Media creative services for businesses in Scotland',
  }),
}

export default function Home() {
  return <RedesignPage />
}
