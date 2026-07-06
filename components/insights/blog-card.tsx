import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { CategoryBadge } from '@/components/insights/category-badge'
import type { InsightArticle } from '@/lib/insights'

export function BlogCard({ article, priority = false }: { article: InsightArticle; priority?: boolean }) {
  const published = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(article.publishedDate))

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-background transition duration-300 hover:-translate-y-1 hover:border-foreground/15">
      <Link
        href={`/insights/${article.slug}`}
        className="relative block aspect-[4/3] overflow-hidden bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
        aria-label={`Read ${article.title}`}
      >
        <Image
          src={article.featuredImage.src}
          alt={article.featuredImage.alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <CategoryBadge category={article.category} />
        <h2 className="mt-5 font-heading text-2xl font-medium leading-tight tracking-tight text-balance">
          <Link
            href={`/insights/${article.slug}`}
            className="transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
          >
            {article.title}
          </Link>
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{article.excerpt}</p>

        <div className="mt-auto pt-8">
          <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-foreground/50">
            <time dateTime={article.publishedDate}>{published}</time>
            <span aria-hidden="true">/</span>
            <span>{article.readTime}</span>
          </div>
          <Link
            href={`/insights/${article.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
            aria-label={`Read article: ${article.title}`}
          >
            Read Article
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}
