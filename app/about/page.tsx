import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="w-full min-h-screen">

        {/* ─── Hero ─────────────────────────────────────────────────────── */}
        <section className="w-full bg-background py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                  Bear Media — Founded 2024
                </p>
                <h1 className="font-heading text-5xl md:text-6xl font-medium text-foreground mb-6 text-pretty leading-tight">
                  Helping businesses stand out online without the agency nonsense.
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
                  I&apos;m Garry Lynch. I&apos;ve spent 20+ years working with people and in 2024 I
                  started Bear Media to help businesses across Edinburgh, Fife and West Lothian
                  look as good online as they do in real life.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-foreground font-medium rounded-full hover:opacity-90 transition-opacity text-lg"
                  >
                    Book a call
                    <span aria-hidden="true">→</span>
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-foreground/15 text-foreground font-medium rounded-full hover:bg-secondary transition-colors text-lg"
                  >
                    See services
                  </Link>
                </div>
              </div>
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-muted">
                <Image
                  src="/assets/about/garry-with-camera.png"
                  alt="Garry Lynch with camera, founder of Bear Media"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── My Story ─────────────────────────────────────────────────── */}
        <section className="w-full bg-secondary pt-12 md:pt-16 pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-8">
                  My story
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I started Bear Media because I kept seeing the same problem. Good businesses
                  across Scotland were invisible online. Poor photography, outdated websites,
                  inconsistent social media none of it reflected the quality of their work.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I&apos;d spent over 20 years working with people in various industries and knew I
                  could fix that. Bear Media exists to help good businesses become more visible,
                  build trust with potential customers, and look as good online as they do in
                  real life.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'Experience', value: '20+ years working with people' },
                  { label: 'Founded', value: 'Bear Media, 2024' },
                  { label: 'Based', value: 'West Lothian' },
                  { label: 'Working across', value: 'Edinburgh, Fife and West Lothian' },
                  { label: 'Services', value: 'Content, websites, photography, video and AI tools' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-baseline gap-4 py-4 border-b border-foreground/10 last:border-0"
                  >
                    <span className="text-sm font-medium text-accent w-32 flex-shrink-0">
                      {item.label}
                    </span>
                    <span className="text-base text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Team Bear Media ──────────────────────────────────────────── */}
        <section className="w-full bg-background pt-12 md:pt-16 pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-12">
              Team Bear Media
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Garry */}
              <div className="group flex flex-col rounded-3xl overflow-hidden bg-secondary transition-shadow hover:shadow-lg">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/TeamBearMedia/teambm.png"
                    alt="Garry Lynch, Founder of Bear Media"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="font-heading text-2xl font-medium text-foreground mb-1">
                    Garry Lynch
                  </h3>
                  <p className="text-sm text-accent font-medium mb-4">
                    Founder &amp; Chief Problem Solver
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Photography, video production, website design, content creation, social media
                    and client relationships.
                  </p>
                </div>
              </div>

              {/* Rory */}
              <div className="group flex flex-col rounded-3xl overflow-hidden bg-secondary transition-shadow hover:shadow-lg">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/TeamBearMedia/rory.png"
                    alt="Rory, Head of Security at Bear Media"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="font-heading text-2xl font-medium text-foreground mb-1">
                    Rory
                  </h3>
                  <p className="text-sm text-accent font-medium mb-4">Head of Security</p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Responsible for site security, perimeter checks, visitor monitoring and
                    barking at suspicious activity.
                  </p>
                </div>
              </div>

              {/* Lola */}
              <div className="group flex flex-col rounded-3xl overflow-hidden bg-secondary transition-shadow hover:shadow-lg">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/TeamBearMedia/lola.png"
                    alt="Lola, Head of Snacks and Treat Procurement at Bear Media"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="font-heading text-2xl font-medium text-foreground mb-1">
                    Lola
                  </h3>
                  <p className="text-sm text-accent font-medium mb-4">
                    Head of Snacks &amp; Treat Procurement
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Specialises in snack acquisition, treat quality control and ensuring regular
                    team breaks.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── How I Work ───────────────────────────────────────────────── */}
        <section className="w-full bg-background pt-12 md:pt-16 pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-12">
              How I work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {(
                [
                  {
                    title: 'Keep it simple',
                    body: "No jargon. No overcomplicated marketing plans. You get plain language, honest advice and work that makes sense for your business.",
                  },
                  {
                    title: 'Focus on results',
                    body: "Everything should generate enquiries, sales or awareness. If it doesn't move the needle, we don't do it.",
                  },
                  {
                    title: 'Build long-term relationships',
                    body: "Many clients stay for months and years because they know I'm genuinely invested in their success — not just the next invoice.",
                  },
                ] as const
              ).map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col p-8 rounded-3xl bg-secondary"
                >
                  <div className="w-8 h-1 bg-accent rounded-full mb-6" />
                  <h3 className="font-heading text-2xl font-medium text-foreground mb-4">
                    {card.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Trusted Partners ─────────────────────────────────────────── */}
        <section className="w-full bg-background pt-4 pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-12">
              Trusted partners
            </h2>
            <div className="rounded-3xl bg-secondary overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Photo */}
                <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[520px]">
                  <Image
                    src="/TRUSTED PARTNERS SECTION/stevensummone.1.png"
                    alt="Steven Summone, Founder of Summone Labs"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                {/* Content */}
                <div className="flex flex-col justify-center p-10 lg:p-14">
                  <p className="text-sm font-medium tracking-widest uppercase text-accent mb-6">
                    Specialist partner
                  </p>
                  <h3 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-2">
                    Steven Summone
                  </h3>
                  <p className="text-base text-accent font-medium mb-6">Founder, Summone Labs</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {[
                      'AI automation',
                      'Lead generation systems',
                      'Voice technology',
                      'Software development',
                      'Emerging business tools',
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full bg-background text-foreground text-sm font-medium border border-foreground/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    When projects require specialist AI, automation or software expertise, I work
                    closely with trusted collaborators to deliver the best possible outcome for
                    clients.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    Steven and I regularly collaborate on projects involving AI automation, lead
                    generation systems, voice technology, software development and emerging
                    business tools.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Together we combine content, marketing and technology to help businesses work
                    smarter and grow faster.
                  </p>
                  <a
                    href="https://summonelabs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-foreground/70 hover:text-accent transition-colors group"
                  >
                    Summone Labs
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Tools I Use ──────────────────────────────────────────────── */}
        <section className="w-full bg-background pt-12 md:pt-16 pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-3">
              Tools I use
            </h2>
            <p className="text-base text-muted-foreground mb-14 max-w-xl">
              The kit and software behind every project.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              {(
                [
                  {
                    category: 'Content Creation',
                    tools: [
                      { name: 'Canon',  logo: '/toolsiuse/canon.png' },
                      { name: 'DJI',    logo: '/toolsiuse/dji.png' },
                      { name: 'CapCut', logo: '/toolsiuse/capcut.png' },
                      { name: 'Canva',  logo: '/toolsiuse/canva.png' },
                    ],
                  },
                  {
                    category: 'Websites & AI',
                    tools: [
                      { name: 'Antigravity', logo: '/toolsiuse/google antigravity.png' },
                      { name: 'ChatGPT',     logo: null },
                      { name: 'Claude',      logo: '/toolsiuse/claude.png' },
                      { name: 'Vercel',      logo: '/toolsiuse/vercel.png' },
                      { name: 'GitHub',      logo: '/toolsiuse/github.png' },
                    ],
                  },
                  {
                    category: 'Automation',
                    tools: [
                      { name: 'n8n',  logo: '/toolsiuse/n8n.png' },
                      { name: 'Make', logo: null },
                    ],
                  },
                ] as const
              ).map((group) => (
                <div key={group.category}>
                  <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
                    {group.category}
                  </p>
                  <ul className="flex flex-wrap gap-5">
                    {group.tools.map((tool) => (
                      <li key={tool.name} title={tool.name}>
                        {tool.logo ? (
                          /* Logo tile */
                          <div className="group flex flex-col items-center gap-2.5">
                            <div className="w-14 h-14 rounded-2xl overflow-hidden bg-secondary ring-1 ring-foreground/8 transition-all duration-200 ease-out group-hover:ring-foreground/20 group-hover:shadow-md group-hover:-translate-y-px">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={tool.logo}
                                alt={tool.name}
                                width={56}
                                height={56}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <span className="text-[11px] text-muted-foreground leading-none font-medium">
                              {tool.name}
                            </span>
                          </div>
                        ) : (
                          /* Text fallback tile for tools without a logo */
                          <div className="group flex flex-col items-center gap-2.5">
                            <div className="w-14 h-14 rounded-2xl bg-secondary ring-1 ring-foreground/8 flex items-center justify-center transition-all duration-200 ease-out group-hover:ring-foreground/20 group-hover:shadow-md group-hover:-translate-y-px">
                              <span className="text-[11px] font-semibold text-foreground/60 text-center leading-tight px-1">
                                {tool.name}
                              </span>
                            </div>
                            <span className="text-[11px] text-muted-foreground leading-none font-medium">
                              {tool.name}
                            </span>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Final CTA ────────────────────────────────────────────────── */}
        <section className="w-full bg-background py-20 md:py-28 px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 text-pretty">
              Ready to improve your online presence?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10 text-pretty">
              Whether you need content, photography, video, a website or help using AI in your
              business, let&apos;s have a chat.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-foreground font-medium rounded-full hover:opacity-90 transition-opacity text-lg"
              >
                Book a call
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-foreground/15 text-foreground font-medium rounded-full hover:bg-secondary transition-colors text-lg"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
