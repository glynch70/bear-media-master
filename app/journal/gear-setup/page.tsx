import { JournalPostPage } from '@/components/JournalPostPage'
import { journalPages } from '@/lib/journal-pages'
import { createMetadata } from '@/lib/seo'

const page = journalPages.gearSetup

export const metadata = {
  ...createMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    image: page.heroImage.src,
    imageAlt: page.heroImage.alt,
  }),
}

export default function GearSetupJournalPage() {
  return <JournalPostPage {...page} />
}
