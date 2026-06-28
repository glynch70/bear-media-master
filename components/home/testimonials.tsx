'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Carousel, CarouselItem } from '@/components/carousel'

const testimonials = [
  {
    quote: 'Website wizard delivering at lightning speed. Outstanding work, strong communication, and creates content that drives results.',
    author: 'Steven Summone',
    title: 'AI Consultant',
    image: '/TRUSTED PARTNERS SECTION/stevensummone.1.png',
    initials: 'SS',
    projectUrl: 'https://summone.co.uk/',
  },
  {
    quote: 'Drone footage and photography completely changed how we show our developments. Made the process easy throughout.',
    author: 'Kris Lewis',
    title: 'K Lewis Joinery',
    image: '/assets/testimonials/kris.png',
    initials: 'KL',
    projectUrl: '/projects/cg-developments',
  },
  {
    quote: 'Gave my personal brand real consistency. Genuine, professional and a pleasure to work with.',
    author: 'Seamus Corry',
    title: 'Training Consultant',
    image: '/assets/testimonials/seamus.png',
    initials: 'SC',
    projectUrl: '/projects/seamus-corry',
  },
  {
    quote: 'Professional, efficient and genuinely invested in getting the right results. Exactly what our business needed.',
    author: 'Stephen Johnstone',
    title: 'Business Owner',
    image: '/assets/testimonials/stephen-johnstone.png',
    initials: 'SJ',
  },
]

function AvatarFallback({ initials, name }: { initials: string; name: string }) {
  const colors = [
    'bg-blue-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-green-500',
    'bg-orange-500',
  ]
  const colorIndex = name.charCodeAt(0) % colors.length
  return (
    <div className={`${colors[colorIndex]} w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center flex-shrink-0`}>
      <span className="text-white font-semibold text-sm md:text-base">{initials}</span>
    </div>
  )
}

function TestimonialPortrait({ image, author, initials }: { image: string; author: string; initials: string }) {
  const [imageError, setImageError] = useState(false)

  if (imageError) {
    return <AvatarFallback initials={initials} name={author} />
  }

  return (
    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-background shrink-0 ring-1 ring-border/20 shadow-sm">
      <Image
        src={image}
        alt={author}
        fill
        sizes="(max-width: 768px) 80px, 96px"
        className="object-cover"
        onError={() => setImageError(true)}
      />
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="w-full bg-secondary py-20 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 md:mb-16">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground text-balance mb-3">
          What clients say.
        </h2>
        <p className="text-lg text-muted-foreground text-pretty max-w-2xl">
          Real feedback from businesses who've worked with Bear Media.
        </p>
      </div>
      <Carousel>
        {testimonials.map((t) => (
          <CarouselItem key={t.author} widthClassName="w-[85vw] sm:w-80 md:w-[24rem] lg:w-[26rem] flex-shrink-0 pt-2 pb-6">
            <figure className="flex flex-col h-full rounded-2xl md:rounded-3xl bg-background p-8 md:p-10 shadow-sm ring-1 ring-border/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              
              {/* Portrait image */}
              <div className="flex mb-6 md:mb-8">
                <TestimonialPortrait image={t.image} author={t.author} initials={t.initials} />
              </div>

              {/* Quote */}
              <blockquote className="font-heading text-lg md:text-xl font-medium leading-relaxed text-foreground flex-1 mb-6 md:mb-8 text-pretty">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author details */}
              <figcaption className="border-t border-border/40 pt-5">
                <p className="font-semibold text-base text-foreground">{t.author}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {t.title}
                </p>
                
                {t.projectUrl && (
                  t.projectUrl.startsWith('http') ? (
                    <a href={t.projectUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-accent hover:text-accent/80 transition-colors inline-block mt-4" aria-label={`Read full review from ${t.author}`}>
                      Read full review →
                    </a>
                  ) : (
                    <Link href={t.projectUrl} className="text-sm font-medium text-accent hover:text-accent/80 transition-colors inline-block mt-4" aria-label={`Read full review from ${t.author}`}>
                      Read full review →
                    </Link>
                  )
                )}
              </figcaption>
            </figure>
          </CarouselItem>
        ))}
      </Carousel>
    </section>
  )
}
