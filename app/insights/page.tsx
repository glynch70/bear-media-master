import { RedesignFooter, RedesignHeader } from '@/app/redesign/redesign-chrome'
import { JournalIndex } from '@/components/insights/journal-index'
import { BreadcrumbSchema } from '@/components/structured-data'
import { getJournalArticles } from '@/lib/insights'
import { createMetadata, siteUrl } from '@/lib/seo'

export const metadata = {
  ...createMetadata({
    title: 'The Bear Media Journal | Bear Media',
    description:
      'Real projects, AI experiments, website builds, photography, video production and honest lessons from building Bear Media.',
    path: '/insights',
    imageAlt: 'The Bear Media Journal on websites, AI, photography and digital marketing',
  }),
}

export default function InsightsPage() {
  const articles = getJournalArticles()

  return (
    <main className="w-full min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', url: siteUrl },
        { name: 'The Bear Media Journal', url: `${siteUrl}/insights` },
      ]} />
      <RedesignHeader surface />

      <section className="pt-32 md:pt-44 pb-12 md:pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">Bear Media Journal</p>
            <h1 className="mt-5 font-heading text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.98] tracking-tight text-balance">
              The Bear Media Journal
            </h1>
            <p className="mt-8 max-w-2xl text-xl md:text-2xl text-foreground/70 font-light leading-relaxed">
              Real projects, AI experiments, website builds, photography, video production and honest lessons from building Bear Media.
            </p>
          </div>
        </div>
      </section>

      <JournalIndex articles={articles} />

      <RedesignFooter />
    </main>
  )
}
