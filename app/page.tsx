import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Hero from '@/components/home/hero'
import WhatIDo from '@/components/home/what-i-do'
import FeaturedProjects from '@/components/home/featured-projects'
import Clients from '@/components/home/clients'
import Testimonials from '@/components/home/testimonials'
import CTA from '@/components/home/cta'
import WhyBearMedia from '@/components/home/why-bear-media'

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
      <Clients />
      <FeaturedProjects />
      <Testimonials />
      <WhyBearMedia />
      <CTA />
      <Footer />
    </main>
  )
}
