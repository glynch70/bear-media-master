import Link from 'next/link'
import MobileHeroCarousel from '@/components/home/mobile-hero-carousel'
import { DesktopVideo } from '@/components/responsive-media'

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden">
      <MobileHeroCarousel />

      <DesktopVideo
        src="/assets/hero/hero-desktop.mp4"
        poster="/assets/hero/hero-poster.webp"
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/25" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl justify-center px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-5 text-center sm:space-y-6">
          <h1 className="font-heading text-4xl font-medium leading-[1.08] tracking-tight text-white text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            Content & Social Media for Local Businesses
          </h1>
          <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-white/90 text-balance sm:text-lg md:text-xl">
            Professional photography, video, drone content and social media that helps businesses stand out online.
          </p>
          <div className="flex flex-col justify-center gap-3 pt-4 sm:flex-row sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-medium text-foreground shadow-[0_18px_45px_rgba(0,0,0,0.2)] transition duration-300 ease-out hover:scale-[1.03] hover:bg-white/90 active:scale-[0.98]"
            >
              Start a Project
            </Link>
            <Link
              href="/projects"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/70 bg-white/10 px-8 py-3.5 text-base font-medium text-white backdrop-blur-md transition duration-300 ease-out hover:scale-[1.03] hover:bg-white/20 hover:border-white/90 active:scale-[0.98]"
            >
              View Recent Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
