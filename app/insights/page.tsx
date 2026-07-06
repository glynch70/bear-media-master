import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { BlogCard } from '@/components/insights/blog-card'
import { CategoryBadge } from '@/components/insights/category-badge'
import { BreadcrumbSchema } from '@/components/structured-data'
import { insights, type InsightArticle } from '@/lib/insights'
import { createMetadata, siteUrl } from '@/lib/seo'

export const metadata = {
  ...createMetadata({
    title: 'The Bear Media Journal | Bear Media',
    description:
      "Thoughts on websites, AI, photography, content and the tools I'm using to build better digital experiences.",
    path: '/insights',
    imageAlt: 'The Bear Media Journal on websites, AI, content and digital marketing',
  }),
}

export default function InsightsPage() {
  const [featuredArticle, ...remainingArticles] = insights

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
            <h1 className="mt-5 font-heading text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.98] tracking-tight text-balance">
              The Bear Media Journal
            </h1>
            <p className="mt-8 max-w-2xl text-xl md:text-2xl text-foreground/70 font-light leading-relaxed">
              Thoughts on websites, AI, photography, content and the tools I&apos;m using to build better digital experiences.
            </p>
          </div>
        </div>
      </section>

      {featuredArticle && <FeaturedArticle article={featuredArticle} />}

      <section className="px-6 py-16 md:py-24 lg:px-8">
        <div className="mx-auto mb-10 flex max-w-7xl items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">Latest Notes</p>
            <h2 className="mt-3 font-heading text-4xl font-medium tracking-tight md:text-5xl">
              From the journal
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {remainingArticles.map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}

function FeaturedArticle({ article }: { article: InsightArticle }) {
  const published = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(article.publishedDate))

  return (
    <section className="px-6 pb-8 lg:px-8">
      <Link
        href={`/insights/${article.slug}`}
        className="group mx-auto grid max-w-7xl grid-cols-1 overflow-hidden rounded-3xl border border-border/70 bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 lg:grid-cols-[1.12fr_0.88fr]"
        aria-label={`Read featured article: ${article.title}`}
      >
        <div className="relative min-h-[320px] overflow-hidden bg-muted md:min-h-[520px]">
          <Image
            src={article.featuredImage.src}
            alt={article.featuredImage.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
          />
        </div>
        <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
          <CategoryBadge category={article.category} />
          <h2 className="mt-6 font-heading text-4xl font-medium leading-[1.04] tracking-tight text-balance md:text-5xl lg:text-6xl">
            {article.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/70 md:text-xl">
            {article.excerpt}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-[0.12em] text-foreground/45">
            <time dateTime={article.publishedDate}>{published}</time>
            <span aria-hidden="true">/</span>
            <span>{article.readTime}</span>
          </div>
          <span className="mt-8 inline-flex text-sm font-medium text-foreground transition group-hover:text-accent">
            Read Article
          </span>
        </div>
      </Link>
    </section>
  )
}
