import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative w-full h-[100svh] min-h-[600px] flex items-center md:items-end overflow-hidden">

      {/* ── Desktop/large tablet video (≥1024px, 16:9) ────────────────────── */}
      <video
        className="hidden lg:block absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/assets/hero/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/01-HERO/169 NEW BM DRONE HERO-copy.mp4" type="video/mp4" />
      </video>

      {/* ── Tablet/mobile video (<1024px, portrait) ──────────────────────── */}
      {/*
        Uses responsive video breakpoint:
        - Tablets (768px-1023px): hero-desktop.mp4
        - Mobile (<768px): hero-mobile-new.mp4 with fallback
      */}
      <video
        className="lg:hidden absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/assets/hero/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/assets/hero/hero-desktop.mp4" type="video/mp4" />
      </video>

      {/* ── Mobile-only video (<768px) ────────────────────────────────────── */}
      <video
        className="md:hidden absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/assets/hero/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/assets/hero/hero-mobile-new.mp4" type="video/mp4" />
        {/* Fallback to existing compressed mobile cut if new file unavailable */}
        <source src="/assets/hero/hero-mobile.mp4" type="video/mp4" />
      </video>

      {/* ── Overlays ──────────────────────────────────────────────────── */}
      {/* Mobile: solid 65% dark overlay for strong text readability */}
      <div className="md:hidden absolute inset-0 bg-black/65" />
      {/* Desktop: strong gradient for premium feel */}
      <div className="hidden md:block absolute inset-0 bg-black/35" />
      <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />

      {/* ── Content ───────────────────────────────────────────────────── */}
      {/* Mobile: centred vertically + horizontally | Desktop: bottom-left */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-16 md:pb-24 lg:pb-28 md:py-0">
        <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left space-y-6">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight text-white leading-[1.2] text-balance">
            Helping Scottish<br className="hidden sm:inline" /> businesses<br className="hidden sm:inline" /> stand out online.
          </h1>
          <p className="text-sm sm:text-base md:text-base text-white/85 font-light leading-relaxed max-w-xl">
            Content, social media and websites that help businesses look better and generate enquiries.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-foreground px-8 py-3.5 rounded-full font-medium hover:bg-white/90 transition-colors text-base"
            >
              Start A Project
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center border border-white/70 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-colors text-base"
            >
              View Recent Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
