import Image from 'next/image'
import Link from 'next/link'
import { CategoryBadge } from '@/components/insights/category-badge'
import type { InsightArticle } from '@/lib/insights'

export function BlogCard({ article, priority = false }: { article: InsightArticle; priority?: boolean }) {
  const published = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(article.publishedDate))

  return (
    <article className="group flex h-full min-h-[520px] flex-col overflow-hidden rounded-3xl border border-border/70 bg-background transition duration-300 hover:-translate-y-1 hover:border-foreground/15">
      <Link
        href={`/insights/${article.slug}`}
        className="relative block aspect-[1.18] overflow-hidden bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
        aria-label={`Read ${article.title}`}
      >
        <Image
          src={article.featuredImage.src}
          alt={article.featuredImage.alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <CategoryBadge category={article.category} />
        <h2 className="mt-5 font-heading text-[1.65rem] font-medium leading-tight tracking-tight text-balance">
          <Link
            href={`/insights/${article.slug}`}
            className="transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
          >
            {article.title}
          </Link>
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{article.excerpt}</p>

        <div className="mt-auto pt-7">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium uppercase tracking-[0.1em] text-foreground/40">
            <time dateTime={article.publishedDate}>{published}</time>
            <span aria-hidden="true">/</span>
            <span>{article.readTime}</span>
          </div>
          <Link
            href={`/insights/${article.slug}`}
            className="mt-5 inline-flex text-sm font-medium text-foreground transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
            aria-label={`Read article: ${article.title}`}
          >
            Read Article →
          </Link>
        </div>
      </div>
    </article>
  )
}
