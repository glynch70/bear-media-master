'use client'

import Link from 'next/link'
import { Camera, Smartphone, Globe, Film } from 'lucide-react'
import { Carousel, CarouselItem } from '@/components/carousel'

interface Service {
  title: string
  description: string
  href: string
  icon: React.ReactNode
}

export default function WhatIDo() {
  const services: Service[] = [
    {
      title: 'Social Media Management',
      description: 'Content planning, posting, strategy and ongoing management for growth.',
      href: '/services#social-media',
      icon: <Smartphone className="w-5 h-5" />,
    },
    {
      title: 'Content Creation',
      description: 'Photography, video and drone content that helps businesses stand out online.',
      href: '/services#content-creation',
      icon: <Camera className="w-5 h-5" />,
    },
    {
      title: 'Photography',
      description: 'Professional photography for businesses, brands and teams.',
      href: '/services#photography',
      icon: <Camera className="w-5 h-5" />,
    },
    {
      title: 'Drone Photography',
      description: 'Aerial photography and video to showcase your property, site or event.',
      href: '/services#drone',
      icon: <Film className="w-5 h-5" />,
    },
    {
      title: 'Website Design',
      description: 'Modern websites that showcase your business and generate enquiries.',
      href: '/services#website-design',
      icon: <Globe className="w-5 h-5" />,
    },
  ]

  return (
    <section className="w-full bg-background py-20 md:py-24 lg:py-32">
      <Carousel title="What I do." subtitle="Helping businesses improve their online presence and grow.">
        {services.map((service) => (
          <CarouselItem key={service.title}>
            <Link
              href={service.href}
              className="group h-full flex flex-col p-6 md:p-7 rounded-2xl border border-foreground/10 bg-background transition-all duration-300 relative overflow-hidden md:hover:-translate-y-1 md:hover:border-foreground/30 md:hover:shadow-lg md:hover:shadow-black/5"
            >
              {/* Subtle accent line top-left */}
              <div className="absolute top-0 left-0 h-1 w-8 bg-accent/60 md:group-hover:w-12 transition-all duration-300" />

              <div className="flex items-start justify-between mb-2.5">
                <h3 className="font-heading text-xl md:text-2xl font-medium text-foreground">
                  {service.title}
                </h3>
                <span className="text-foreground/40 md:group-hover:text-accent transition-colors flex-shrink-0 ml-2">
                  {service.icon}
                </span>
              </div>
              <p className="text-sm md:text-base text-foreground/70 leading-relaxed flex-1 mb-4">
                {service.description}
              </p>
              <p className="inline-flex items-center gap-1.5 text-foreground font-medium md:group-hover:gap-2.5 transition-all">
                Learn more
                <span aria-hidden="true" className="text-accent transition-transform duration-300 md:group-hover:translate-x-1">
                  →
                </span>
              </p>
            </Link>
          </CarouselItem>
        ))}
      </Carousel>
    </section>
  )
}
