import { JournalPostPage } from '@/components/JournalPostPage'
import { journalPages } from '@/lib/journal-pages'
import { createMetadata } from '@/lib/seo'

const page = journalPages.whyIDoThis

export const metadata = {
  ...createMetadata({
    title: 'Why Bear Media Exists | Supporting Businesses with Content',
    description: page.description,
    path: page.path,
    image: page.heroImage.src,
    imageAlt: page.heroImage.alt,
  }),
}

export default function WhyIDoThisJournalPage() {
  return <JournalPostPage {...page} />
}
