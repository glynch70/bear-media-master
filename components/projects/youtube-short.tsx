'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Play } from 'lucide-react'

export function YouTubeShort({ videoId, title, poster }: {
  videoId: string
  title: string
  poster: string
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative aspect-[9/16] w-full overflow-hidden rounded-3xl border border-border/60 bg-black shadow-2xl shadow-black/10">
      {loaded ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=0&playsinline=1&rel=0`}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="encrypted-media; picture-in-picture; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          aria-label={`Load video: ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-accent"
        >
          <Image
            src={poster}
            alt="Bright kitchen extension with a skylight by C&G Developments"
            fill
            sizes="(max-width: 640px) calc(100vw - 48px), 360px"
            className="object-contain"
          />
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/10">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform group-hover:scale-105 motion-reduce:transition-none">
              <Play className="ml-1 h-6 w-6" fill="currentColor" aria-hidden="true" />
            </span>
            <span className="rounded-full bg-black/75 px-4 py-2 text-sm font-medium text-white">Load video</span>
          </span>
        </button>
      )}
    </div>
  )
}
