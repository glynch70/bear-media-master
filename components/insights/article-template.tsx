import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Mail } from 'lucide-react'
import { BlogCard } from '@/components/insights/blog-card'
import { CategoryBadge } from '@/components/insights/category-badge'
import type { InsightArticle } from '@/lib/insights'
import { absoluteUrl } from '@/lib/seo'

export function ArticleTemplate({
  article,
  relatedArticles,
  previousArticle,
  nextArticle,
}: {
  article: InsightArticle
  relatedArticles: InsightArticle[]
  previousArticle?: InsightArticle
  nextArticle?: InsightArticle
}) {
  const published = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(article.publishedDate))
  const articleUrl = absoluteUrl(`/insights/${article.slug}`)
  const shareText = encodeURIComponent(article.title)
  const shareUrl = encodeURIComponent(articleUrl)

  return (
    <>
      <section className="pt-32 md:pt-44 pb-10 md:pb-16 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/insights"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-foreground/60 transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Insights
          </Link>
          <CategoryBadge category={article.category} />
          <h1 className="mt-6 font-heading text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.03] tracking-tight text-balance">
            {article.title}
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium uppercase tracking-[0.12em] text-foreground/45">
            <time dateTime={article.publishedDate}>{published}</time>
            <span aria-hidden="true">/</span>
            <span>{article.readTime}</span>
            <span aria-hidden="true">/</span>
            <Link href={article.author.url} className="transition hover:text-foreground">
              {article.author.name}
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-8">
        <div className="relative mx-auto aspect-[16/9] max-w-6xl overflow-hidden rounded-3xl bg-muted">
          <Image
            src={article.featuredImage.src}
            alt={article.featuredImage.alt}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1152px"
            className="object-cover"
          />
        </div>
      </section>

      <section className="px-6 py-14 md:py-20 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-[minmax(0,760px)_190px]">
          <article className="max-w-[760px]">
            <div className="space-y-8 text-xl leading-[1.75] text-foreground/78 md:text-[1.55rem] md:leading-[1.7]">
              {article.body.map((block, index) => {
                if (block.type === 'heading') {
                  return (
                    <h2 key={`${block.text}-${index}`} className="pt-8 font-heading text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl">
                      {block.text}
                    </h2>
                  )
                }

                return <p key={`${block.text}-${index}`}>{block.text}</p>
              })}
            </div>
          </article>

          <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-border/70 bg-secondary p-6">
              <p className="font-heading text-xl font-medium tracking-tight">{article.author.name}</p>
              <p className="mt-1 text-sm font-medium text-accent">{article.author.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Content creator, photographer and website designer based in West Lothian.
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-foreground">Share</p>
              <div className="mt-4 flex gap-3 lg:flex-col">
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share this article on LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground/65 transition hover:border-foreground/20 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share this article on Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground/65 transition hover:border-foreground/20 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:?subject=${shareText}&body=${shareUrl}`}
                aria-label="Share this article by email"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground/65 transition hover:border-foreground/20 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-border/70 bg-secondary px-6 py-12 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
          <AdjacentArticleLink label="Previous" article={previousArticle} direction="previous" />
          <AdjacentArticleLink label="Next" article={nextArticle} direction="next" />
        </div>
      </section>

      {relatedArticles.length > 0 && (
        <section className="bg-background px-6 py-16 md:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">Related Articles</p>
              <h2 className="mt-3 font-heading text-4xl font-medium tracking-tight md:text-5xl">
                Continue reading
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((relatedArticle) => (
                <BlogCard key={relatedArticle.slug} article={relatedArticle} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 2h-3a6 6 0 0 0-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 0 1 2-2h1z" />
    </svg>
  )
}

function AdjacentArticleLink({
  label,
  article,
  direction,
}: {
  label: string
  article?: InsightArticle
  direction: 'previous' | 'next'
}) {
  if (!article) {
    return <div className="hidden md:block" />
  }

  const isNext = direction === 'next'

  return (
    <Link
      href={`/insights/${article.slug}`}
      className={`group flex min-h-44 flex-col justify-between rounded-3xl border border-border/70 bg-background p-6 transition hover:-translate-y-1 hover:border-foreground/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 md:p-8 ${
        isNext ? 'md:text-right' : ''
      }`}
    >
      <span className={`flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-foreground/45 ${isNext ? 'md:justify-end' : ''}`}>
        {!isNext && <ArrowLeft className="h-4 w-4" aria-hidden="true" />}
        {label}
        {isNext && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
      </span>
      <span className="mt-7 font-heading text-2xl font-medium leading-tight tracking-tight transition group-hover:text-accent">
        {article.title}
      </span>
    </Link>
  )
}
