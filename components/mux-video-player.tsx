'use client'

import Image from 'next/image'
import { Play } from 'lucide-react'
import { useState } from 'react'

type MuxVideoPlayerProps = {
  playbackId: string
  poster: string
  title: string
  descriptionId: string
  aspectRatio?: string
}

export function MuxVideoPlayer({
  playbackId,
  poster,
  title,
  descriptionId,
  aspectRatio = '16 / 9',
}: MuxVideoPlayerProps) {
  const [hasStarted, setHasStarted] = useState(false)
  const playerUrl = `https://player.mux.com/${playbackId}?autoplay=true&metadata-video-title=${encodeURIComponent(title)}&video-title=${encodeURIComponent(title)}`

  return (
    <div className="relative w-full bg-black" style={{ aspectRatio }}>
      {hasStarted ? (
        <iframe
          src={playerUrl}
          title={title}
          aria-describedby={descriptionId}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setHasStarted(true)}
          aria-label={`Play ${title}`}
          aria-describedby={descriptionId}
          className="group absolute inset-0 block h-full w-full cursor-pointer bg-black"
        >
          <Image
            src={poster}
            alt=""
            fill
            sizes="(max-width: 760px) 100vw, 90vw"
            className="object-contain"
          />
          <span className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20 group-focus-visible:bg-black/20" />
          <span className="absolute left-1/2 top-1/2 grid min-h-14 min-w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-black shadow-2xl transition-transform group-hover:scale-105 group-focus-visible:scale-105 sm:min-h-16 sm:min-w-16">
            <Play className="ml-1 h-6 w-6 fill-current sm:h-7 sm:w-7" aria-hidden="true" />
          </span>
        </button>
      )}
    </div>
  )
}
