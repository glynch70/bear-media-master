'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Carousel, CarouselItem } from '@/components/carousel'
import { trustedClientLinks } from '@/lib/trusted-client-links'

const testimonials = [
  {
    quote: 'Website wizard delivering at lightning speed. Outstanding work, strong communication, and creates content that drives results.',
    author: 'Steven Summone',
    title: 'AI Consultant',
    image: '/TRUSTED PARTNERS SECTION/stevensummone.1.webp',
    initials: 'SS',
    projectUrl: 'https://summone.co.uk/',
  },
  {
    quote: 'Drone footage and photography completely changed how we show our developments. Made the process easy throughout.',
    author: 'Kris Lewis',
    title: 'K Lewis Joinery',
    image: '/assets/testimonials/kris.webp',
    initials: 'KL',
    projectUrl: '/projects/cg-developments',
  },
  {
    quote: 'Gave my personal brand real consistency. Genuine, professional and a pleasure to work with.',
    author: 'Seamus Corry',
    title: 'Training Consultant',
    image: '/assets/testimonials/seamus.webp',
    initials: 'SC',
    projectUrl: trustedClientLinks.seamusCorry,
  },
  {
    quote: 'Professional, efficient and genuinely invested in getting the right results. Exactly what our business needed.',
    author: 'Stephen Johnstone',
    title: 'Business Owner',
    image: '/assets/testimonials/stephen-johnstone.webp',
    initials: 'SJ',
  },
  {
    quote: 'Great experience working with Garry and Bear Media. A slick process, reliable service, good communication and excellent results.',
    author: 'Gary Young',
    title: 'Client',
    image: '/assets/testimonials/gary-young.webp',
    initials: 'GY',
  },
  {
    quote: 'Bear Media created an amazing social media campaign for my coaching and healing business. Garry took time to understand the business and promoted the programme brilliantly.',
    author: 'Leanne Murphy',
    title: 'Business Owner',
    image: '/assets/testimonials/leanne-murphy.webp',
    initials: 'LM',
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
    <div className={`${colors[colorIndex]} w-28 h-28 md:w-32 md:h-32 rounded-[22px] flex items-center justify-center flex-shrink-0`}>
      <span className="text-white font-semibold text-base md:text-lg">{initials}</span>
    </div>
  )
}

function TestimonialPortrait({ image, author, initials }: { image: string; author: string; initials: string }) {
  const [imageError, setImageError] = useState(false)

  if (imageError) {
    return <AvatarFallback initials={initials} name={author} />
  }

  return (
    <div className="relative w-28 h-28 md:w-32 md:h-32 overflow-hidden rounded-[22px] bg-background shrink-0 ring-1 ring-border/20 shadow-sm">
      <Image
        src={image}
        alt={author}
        fill
        sizes="(max-width: 768px) 112px, 128px"
        className="object-cover"
        onError={() => setImageError(true)}
      />
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="w-full bg-secondary py-16 md:py-24 lg:py-28">
      <Carousel
        title="What clients say."
        subtitle="Real feedback from businesses who've worked with Bear Media."
        showControls
      >
        {testimonials.map((t) => (
          <CarouselItem key={t.author} widthClassName="w-[84vw] sm:w-80 md:w-[24rem] lg:w-[26rem] flex-shrink-0 pt-2 pb-8">
            <figure className="flex h-full min-h-[28rem] flex-col rounded-2xl bg-background p-7 shadow-sm ring-1 ring-border/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:min-h-[30rem] md:rounded-3xl md:p-9">
              <div className="flex mb-7 md:mb-8">
                <TestimonialPortrait image={t.image} author={t.author} initials={t.initials} />
              </div>

              <blockquote className="font-heading text-lg md:text-xl font-medium leading-[1.45] text-foreground flex-1 mb-7 md:mb-8 text-pretty">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="border-t border-border/50 pt-5">
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
