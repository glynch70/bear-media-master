import desktop from '@/components/desktop-refresh.module.css'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Footer from '@/components/footer'
import { JournalImage, JournalImageGrid } from '@/components/JournalImage'
import Navigation from '@/components/navigation'
import { ArticleSchema, BreadcrumbSchema } from '@/components/structured-data'
import { insights } from '@/lib/insights'
import { absoluteUrl, siteUrl } from '@/lib/seo'
import { linkedTextParts } from '@/lib/service-links'

type JournalPostImage = {
  src: string
  alt: string
  caption?: string
  objectPosition?: string
}

type JournalPostPageProps = {
  title: string
  category: string
  path: string
  description: string
  heroImage: JournalPostImage
  content: string[]
  inlineImage?: JournalPostImage
  inlineImageAfter?: number
  gridImages?: JournalPostImage[]
}

const proseClassName = 'mx-auto w-full max-w-[800px] space-y-7 text-lg leading-[1.8] text-foreground/76 md:text-xl md:leading-[1.8]'

export function JournalPostPage({
  title,
  category,
  path,
  description,
  heroImage,
  content,
  inlineImage,
  inlineImageAfter,
  gridImages = [],
}: JournalPostPageProps) {
  const splitIndex = inlineImage ? inlineImageAfter ?? Math.ceil(content.length / 2) : content.length
  const firstContent = content.slice(0, splitIndex)
  const secondContent = content.slice(splitIndex)
  const article = insights.find((insight) => insight.href === path)
  const renderParagraph = (paragraph: string) => (
    <p key={paragraph}>
      {linkedTextParts(paragraph, article?.contentLinks).map((part, index) => part.href ? (
        <Link key={index} href={part.href} className="underline decoration-current/40 underline-offset-4 hover:decoration-current">
          {part.text}
        </Link>
      ) : part.text)}
    </p>
  )

  return (
    <main className={`min-h-screen w-full overflow-x-hidden bg-background ${desktop.standardPage} ${desktop.legacyArticle}`}>
      <BreadcrumbSchema items={[
        { name: 'Home', url: siteUrl },
        { name: 'The Bear Media Journal', url: `${siteUrl}/insights` },
        { name: title, url: `${siteUrl}${path}` },
      ]} />
      <ArticleSchema
        title={title}
        description={description}
        url={absoluteUrl(path)}
        image={absoluteUrl(heroImage.src)}
        datePublished={article?.publishedDate}
        dateModified={article?.modifiedDate}
        authorName={article?.author.name ?? 'Garry Lynch'}
        authorUrl={absoluteUrl(article?.author.url ?? '/about')}
        serviceUrls={article?.servicePaths?.map(absoluteUrl)}
      />
      <Navigation />

      <article className="px-6 pt-32 pb-16 md:pt-44 md:pb-24 lg:px-8">
        <div className="mx-auto w-full max-w-[800px]">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to The Bear Media Journal
          </Link>

          <p className="mt-10 text-sm font-medium uppercase tracking-[0.16em] text-accent">
            {category}
          </p>
          <h1 data-motion-title className="mt-5 font-heading text-5xl font-medium leading-[1.02] tracking-tight text-balance md:text-7xl">
            {title}
          </h1>
        </div>

        <JournalImage
          src={heroImage.src}
          alt={heroImage.alt}
          variant="hero"
          priority
          caption={heroImage.caption}
          objectPosition={heroImage.objectPosition}
        />

        <div className={proseClassName}>
          {firstContent.map(renderParagraph)}
        </div>

        {inlineImage && (
          <JournalImage
            src={inlineImage.src}
            alt={inlineImage.alt}
            caption={inlineImage.caption}
            objectPosition={inlineImage.objectPosition}
          />
        )}

        {secondContent.length > 0 && (
          <div className={proseClassName}>
            {secondContent.map(renderParagraph)}
          </div>
        )}

        {gridImages.length > 0 && (
          <JournalImageGrid>
            {gridImages.map((image) => (
              <JournalImage
                key={image.src}
                src={image.src}
                alt={image.alt}
                className="m-0 h-full max-w-none"
                caption={image.caption}
                objectPosition={image.objectPosition}
              />
            ))}
          </JournalImageGrid>
        )}
      </article>

      <Footer />
    </main>
  )
}
