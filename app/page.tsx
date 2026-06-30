import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Hero from '@/components/home/hero'

const WhatIDo = dynamic(() => import('@/components/home/what-i-do'))
const FeaturedProjects = dynamic(() => import('@/components/home/featured-projects'))
const Clients = dynamic(() => import('@/components/home/clients'))
const Testimonials = dynamic(() => import('@/components/home/testimonials'))
const CTA = dynamic(() => import('@/components/home/cta'))
const WhyBearMedia = dynamic(() => import('@/components/home/why-bear-media'))

export const metadata: Metadata = {
  title: 'Bear Media | Helping Scottish Businesses Stand Out Online',
  description: 'Photography, video, drone content, social media management, and websites for businesses across Scotland. Founded by Garry Lynch in West Lothian.',
  openGraph: {
    title: 'Bear Media | Helping Scottish Businesses Stand Out Online',
    description: 'Photography, video, drone content, social media management, and websites for businesses across Scotland.',
    url: 'https://bear-media.com',
    siteName: 'Bear Media',
    images: [
      {
        url: 'https://bear-media.com/assets/brand/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bear Media - Scottish Media Agency',
        type: 'image/jpeg',
      },
    ],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bear Media | Helping Scottish Businesses Stand Out Online',
    description: 'Photography, video, drone content, social media management, and websites for businesses across Scotland.',
    images: ['https://bear-media.com/assets/brand/og-image.jpg'],
    creator: '@bearmediascot',
  },
  alternates: {
    canonical: 'https://bear-media.com',
  },
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
