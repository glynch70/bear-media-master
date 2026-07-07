import Image from 'next/image'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

const journalImageSizes = '(max-width: 768px) 100vw, 800px'

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
  return (
    <figure className={cn('mx-auto mt-6 mb-6 w-full max-w-[800px]', className)}>
      <div
        className={cn(
          'relative w-full overflow-hidden rounded-lg bg-muted',
          variant === 'hero' ? 'aspect-[4/3]' : 'aspect-[16/10]',
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          sizes={journalImageSizes}
          className={cn('object-cover', imageClassName)}
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
    <div className={cn('mx-auto mt-6 mb-6 grid w-full max-w-[800px] grid-cols-1 gap-4 md:grid-cols-2', className)}>
      {children}
    </div>
  )
}
