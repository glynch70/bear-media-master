import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { BlogCard } from '@/components/insights/blog-card'
import { BreadcrumbSchema } from '@/components/structured-data'
import { insightCategories, insights } from '@/lib/insights'
import { createMetadata, siteUrl } from '@/lib/seo'

export const metadata = {
  ...createMetadata({
    title: 'Insights | Bear Media',
    description:
      'Practical advice, behind-the-scenes builds, AI workflows and digital marketing tips from Bear Media.',
    path: '/insights',
    imageAlt: 'Bear Media insights on websites, AI, content and digital marketing',
  }),
}

export default function InsightsPage() {
  return (
    <main className="w-full min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', url: siteUrl },
        { name: 'Insights', url: `${siteUrl}/insights` },
      ]} />
      <Navigation />

      <section className="pt-32 md:pt-44 pb-12 md:pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">Bear Media Journal</p>
            <h1 className="mt-5 font-heading text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.98] tracking-tight text-balance">
              Insights
            </h1>
            <p className="mt-8 max-w-2xl text-xl md:text-2xl text-foreground/70 font-light leading-relaxed">
              Practical advice, behind-the-scenes builds, AI workflows and digital marketing tips from Bear Media.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2.5">
          {insightCategories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-foreground/10 bg-secondary px-4 py-2 text-sm font-medium text-foreground/65"
            >
              {category}
            </span>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20 md:pb-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((article, index) => (
            <BlogCard key={article.slug} article={article} priority={index < 3} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
