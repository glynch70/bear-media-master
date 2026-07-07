'use client'

import Image from 'next/image'
import { Carousel, CarouselItem } from '@/components/carousel'
import { getTrustedClientAriaLabel, trustedClientLinks } from '@/lib/trusted-client-links'

// Portfolio data structure - fully data-driven
type SocialMediaPortfolioItem = {
  id: number
  title: string
  image: string
  projectUrl?: string
  instagramUrl?: string
  websiteUrl?: string
  featured?: boolean
}

const socialMediaPortfolio: SocialMediaPortfolioItem[] = [
  {
    id: 1,
    title: 'House Transformation',
    image: '/services/social media/House transformation.webp',
  },
  {
    id: 2,
    title: 'Quality Builds',
    image: '/services/social media/Quality Builds.webp',
  },
  {
    id: 3,
    title: 'Built the Right Way',
    image: '/services/social media/Built the Right Way.webp',
    instagramUrl: 'https://www.instagram.com/reel/DZ4r8jxjVJ0/',
    featured: true,
  },
  {
    id: 4,
    title: 'From This → To This',
    image: '/services/social media/From This → To This.webp',
    projectUrl: trustedClientLinks.cgDevelopments,
    instagramUrl: 'https://www.instagram.com/reel/DYReaNnjSy_/',
    websiteUrl: trustedClientLinks.cgDevelopments,
    featured: true,
  },
  {
    id: 5,
    title: 'Before & After Roof',
    image: '/services/social media/Before & After Roof.webp',
    projectUrl: trustedClientLinks.cgDevelopments,
    instagramUrl: 'https://www.instagram.com/reel/DP1LDahASxS/',
    websiteUrl: trustedClientLinks.cgDevelopments,
    featured: true,
  },
  {
    id: 6,
    title: 'Chef',
    image: '/services/social media/Chef.webp',
    instagramUrl: 'https://www.instagram.com/p/DP32qu2jogh/',
  },
  {
    id: 7,
    title: 'Meet Callum',
    image: '/services/social media/Meet Callum.webp',
  },
  {
    id: 8,
    title: 'Bass Rock',
    image: '/services/social media/Bass Rock.webp',
  },
]

export function SocialMediaCarousel() {
  return (
    <Carousel
      title="Social Media Management"
      subtitle="Content strategy, creation, and ongoing management to keep your audience engaged."
    >
      {socialMediaPortfolio.map((item) => (
        <CarouselItem key={item.id}>
          <div className="flex flex-col gap-4">
            {/* Image card with optional Instagram badge */}
            <div className="relative w-full aspect-[9/16] rounded-3xl overflow-hidden bg-muted shadow-lg hover:shadow-xl transition-shadow group">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 22rem, 24rem"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              
              {/* Instagram badge in top-right */}
              {item.instagramUrl && (
                <a
                  href={item.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors shadow-lg z-10"
                  aria-label={`View ${item.title} on Instagram`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-foreground"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              )}
            </div>

            {/* Action buttons */}
            {(item.projectUrl || item.instagramUrl || item.websiteUrl) && (
              <div className="flex flex-wrap gap-2 px-2">
                {item.projectUrl && (
                  <a
                    href={item.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={getTrustedClientAriaLabel('C&G Developments')}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-secondary hover:bg-secondary/80 rounded-full text-sm font-medium text-foreground transition-colors"
                  >
                    <span aria-hidden="true">📄</span>
                    View Project
                  </a>
                )}
                
                {item.instagramUrl && (
                  <a
                    href={item.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-secondary hover:bg-secondary/80 rounded-full text-sm font-medium text-foreground transition-colors"
                  >
                    <span aria-hidden="true">🎬</span>
                    Watch Reel
                  </a>
                )}
                
                {item.websiteUrl && (
                  <a
                    href={item.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-secondary hover:bg-secondary/80 rounded-full text-sm font-medium text-foreground transition-colors"
                  >
                    <span aria-hidden="true">🌐</span>
                    Visit Website
                  </a>
                )}
              </div>
            )}
          </div>
        </CarouselItem>
      ))}
    </Carousel>
  )
}
