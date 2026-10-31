import { YouTubeShort } from '@/components/projects/youtube-short'

export function PropertyWalkthrough() {
  const title = 'C&G Developments — Property Walkthrough'

  return (
    <section id="property-walkthrough" aria-labelledby="property-video-heading" className="scroll-mt-24 bg-background py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 md:items-center md:gap-16 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Property video portfolio</p>
          <h2 id="property-video-heading" className="mt-4 font-heading text-3xl font-medium tracking-tight md:text-5xl">{title}</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">A property walkthrough showcasing interior design, craftsmanship and finishing details.</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Load the player, then press play to watch.</p>
          <a
            href="https://www.youtube.com/shorts/eWbV3-Okd4M"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-11 items-center font-medium underline decoration-accent decoration-2 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Watch on YouTube
          </a>
        </div>
        <div className="mx-auto w-full max-w-[360px]">
          <YouTubeShort
            videoId="eWbV3-Okd4M"
            title={title}
            poster="/assets/project-gallery/cg-developments-property-walkthrough.webp"
          />
        </div>
      </div>
    </section>
  )
}
