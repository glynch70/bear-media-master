import Image from 'next/image'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

const journalImageSizes = {
  hero: '(max-width: 768px) 100vw, 1200px',
  inline: '(max-width: 768px) 100vw, 800px',
} as const

type JournalImageVariant = 'hero' | 'inline'

type JournalImageProps = {
  src: string
  alt: string
  variant?: JournalImageVariant
  priority?: boolean
  caption?: string
  className?: string
  imageClassName?: string
  objectPosition?: string
}

export function JournalImage({
  src,
  alt,
  variant = 'inline',
  priority = false,
  caption,
  className,
  imageClassName,
  objectPosition = 'center',
}: JournalImageProps) {
  const isHero = variant === 'hero'
  const shouldPrioritize = priority || isHero

  return (
    <figure
      className={cn(
        'mx-auto my-8 flex w-full flex-col',
        isHero ? 'max-w-[1200px]' : 'max-w-[800px]',
        className,
      )}
    >
      <div
        className="group relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-muted"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={shouldPrioritize}
          loading={shouldPrioritize ? undefined : 'lazy'}
          sizes={isHero ? journalImageSizes.hero : journalImageSizes.inline}
          className={cn('object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.015]', imageClassName)}
          style={{ objectPosition }}
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export function JournalImageGrid({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('mx-auto my-8 grid w-full max-w-[800px] grid-cols-1 items-stretch gap-4 md:grid-cols-2', className)}>
      {children}
    </div>
  )
}
