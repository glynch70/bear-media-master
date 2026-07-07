import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Footer from '@/components/footer'
import { JournalImage, JournalImageGrid } from '@/components/JournalImage'
import Navigation from '@/components/navigation'
import { BreadcrumbSchema } from '@/components/structured-data'
import { siteUrl } from '@/lib/seo'

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
  heroImage,
  content,
  inlineImage,
  inlineImageAfter,
  gridImages = [],
}: JournalPostPageProps) {
  const splitIndex = inlineImage ? inlineImageAfter ?? Math.ceil(content.length / 2) : content.length
  const firstContent = content.slice(0, splitIndex)
  const secondContent = content.slice(splitIndex)

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', url: siteUrl },
        { name: 'The Bear Media Journal', url: `${siteUrl}/insights` },
        { name: title, url: `${siteUrl}${path}` },
      ]} />
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
          <h1 className="mt-5 font-heading text-5xl font-medium leading-[1.02] tracking-tight text-balance md:text-7xl">
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
          {firstContent.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
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
            {secondContent.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
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
