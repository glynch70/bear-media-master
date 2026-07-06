import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ArticleTemplate } from '@/components/insights/article-template'
import { ArticleSchema, AuthorSchema, BreadcrumbSchema } from '@/components/structured-data'
import { getAdjacentInsights, getInsight, getRelatedInsights, insights } from '@/lib/insights'
import { absoluteUrl, createMetadata, siteName, siteUrl } from '@/lib/seo'

export function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = getInsight(slug)
  if (!article) return {}

  const metadata = createMetadata({
    title: article.metaTitle,
    description: article.metaDescription,
    path: `/insights/${article.slug}`,
    image: article.featuredImage.src,
    imageAlt: article.featuredImage.alt,
  })

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: 'article',
      publishedTime: article.publishedDate,
      modifiedTime: article.modifiedDate,
      authors: [absoluteUrl(article.author.url)],
      section: article.category,
      siteName,
    },
  }
}

export default async function InsightArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getInsight(slug)
  if (!article) notFound()

  const relatedArticles = getRelatedInsights(slug, 3)
  const { previous, next } = getAdjacentInsights(slug)
  const articleUrl = `${siteUrl}/insights/${article.slug}`
  const authorUrl = absoluteUrl(article.author.url)

  return (
    <main className="w-full min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', url: siteUrl },
        { name: 'The Bear Media Journal', url: `${siteUrl}/insights` },
        { name: article.title, url: articleUrl },
      ]} />
      <ArticleSchema
        title={article.title}
        description={article.metaDescription}
        url={articleUrl}
        image={absoluteUrl(article.featuredImage.src)}
        datePublished={article.publishedDate}
        dateModified={article.modifiedDate}
        authorName={article.author.name}
        authorUrl={authorUrl}
      />
      <AuthorSchema name={article.author.name} role={article.author.role} url={authorUrl} />
      <Navigation />
      <ArticleTemplate
        article={article}
        relatedArticles={relatedArticles}
        previousArticle={previous}
        nextArticle={next}
      />
      <Footer />
    </main>
  )
}
