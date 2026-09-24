import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Hero from '@/components/home/hero'
import { createMetadata } from '@/lib/seo'

const WhatIDo = dynamic(() => import('@/components/home/what-i-do'))
const FeaturedProjects = dynamic(() => import('@/components/home/featured-projects'))
const Clients = dynamic(() => import('@/components/home/clients'))
const Testimonials = dynamic(() => import('@/components/home/testimonials'))
const CTA = dynamic(() => import('@/components/home/cta'))
const WhyBearMedia = dynamic(() => import('@/components/home/why-bear-media'))

export const metadata: Metadata = {
  ...createMetadata({
    title: 'Content Days & Website Design | Edinburgh & the Lothians | Bear Media',
    description: 'Content days and mobile-first website builds for businesses across Edinburgh and the Lothians. Explore real work for David Todd and C&G Developments.',
    path: '/',
    imageAlt: 'Bear Media creative services for businesses in Scotland',
  }),
}

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background">
      <Navigation />
      <Hero />
      <WhatIDo />
      <FeaturedProjects />
      <Testimonials />
      <WhyBearMedia />
      <Clients />
      <CTA />
      <Footer />
    </main>
  )
}
