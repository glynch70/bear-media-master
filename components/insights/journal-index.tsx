'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { BlogCard } from '@/components/insights/blog-card'
import { CategoryBadge } from '@/components/insights/category-badge'
import { insightCategories, type InsightArticle, type InsightCategory } from '@/lib/insights'

export function JournalIndex({ articles }: { articles: InsightArticle[] }) {
  const [activeCategory, setActiveCategory] = useState<InsightCategory | 'All'>('All')
  const filteredArticles = useMemo(() => {
    if (activeCategory === 'All') return articles

    return articles.filter((article) => article.category === activeCategory)
  }, [activeCategory, articles])
  const [featuredArticle, ...remainingArticles] = filteredArticles

  return (
    <>
      <CategoryFilters activeCategory={activeCategory} onChange={setActiveCategory} />

      {featuredArticle && <FeaturedArticle article={featuredArticle} />}

      <section className="px-6 py-16 md:py-24 lg:px-8">
        <div className="mx-auto mb-10 flex max-w-7xl items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">Latest Articles</p>
            <h2 className="mt-3 font-heading text-4xl font-medium tracking-tight md:text-5xl">
              Latest Articles
            </h2>
          </div>
        </div>
        {remainingArticles.length > 0 ? (
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {remainingArticles.map((article) => (
              <BlogCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-7xl rounded-3xl border border-border/70 bg-secondary p-8 text-muted-foreground">
            More articles in this category are coming soon.
          </div>
        )}
      </section>
    </>
  )
}

function CategoryFilters({
  activeCategory,
  onChange,
}: {
  activeCategory: InsightCategory | 'All'
  onChange: (category: InsightCategory | 'All') => void
}) {
  return (
    <section className="px-6 pb-8 lg:px-8" aria-label="Journal categories">
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto pb-2">
        {(['All', ...insightCategories] as Array<InsightCategory | 'All'>).map((category) => {
          const active = activeCategory === category
          return (
            <button
              key={category}
              type="button"
              onClick={() => onChange(category)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 ${
                active
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-foreground/10 bg-background text-foreground/60 hover:border-foreground/20 hover:text-foreground'
              }`}
              aria-pressed={active}
            >
              {category}
            </button>
          )
        })}
      </div>
    </section>
  )
}

function FeaturedArticle({ article }: { article: InsightArticle }) {
  const articleHref = article.href ?? `/insights/${article.slug}`
  const published = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(article.publishedDate))

  return (
    <section className="px-6 pb-8 lg:px-8">
      <Link
        href={articleHref}
        className="group mx-auto grid max-w-7xl grid-cols-1 overflow-hidden rounded-3xl border border-border/70 bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 lg:grid-cols-[1.12fr_0.88fr]"
        aria-label={`Read featured article: ${article.title}`}
      >
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
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
          <p className="mt-5 text-xs font-medium uppercase tracking-[0.16em] text-accent">Featured</p>
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
            Read Article →
          </span>
        </div>
      </Link>
    </section>
  )
}
