import Link from 'next/link'
import { DesktopVideo, MobileImage } from '@/components/responsive-media'

export default function CTA() {
  return (
    <section className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden">
      <MobileImage
        src="/01-HERO/hero-mobile-2.webp"
        alt="Bear Media client project"
        className="absolute inset-0 object-cover"
      />

      {/* Full-bleed cinematic drone background from real client work */}
      <DesktopVideo
        src="/assets/hero/hero.mp4"
        poster="/assets/projects/sheds-feature.webp"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* Layered overlays for depth + legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/32 via-black/22 to-black/42" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,rgba(0,0,0,0.34)_100%)] opacity-15" />
      {/* Subtle Bear Media gold accent glow */}
      <div
        className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-[120%] h-[80%] opacity-30 blur-3xl pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, var(--color-accent) 0%, transparent 60%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center py-20 md:py-24 lg:py-32">
        <span className="inline-block text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-accent mb-7">
          Bear Media · Scotland
        </span>
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.04] tracking-tight text-white text-balance">
          Let&apos;s Talk.
        </h2>
        <p className="text-lg md:text-xl text-white/85 font-light leading-relaxed mt-7 max-w-2xl mx-auto text-pretty">
          If you&apos;re looking for help with content, social media or your website, let&apos;s have a chat.
        </p>
        <div className="mt-11 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
          className="inline-flex items-center justify-center bg-accent text-accent-foreground px-10 py-4 rounded-full font-medium hover:opacity-90 transition-all hover:scale-[1.03] text-lg shadow-lg shadow-black/20"
          >
            Start A Project
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center border border-white/50 text-white px-10 py-4 rounded-full font-medium hover:bg-white/10 transition-colors text-lg backdrop-blur-sm"
          >
            View Recent Work
          </Link>
        </div>
      </div>
    </section>
  )
}
