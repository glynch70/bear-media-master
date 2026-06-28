'use client'

export default function MeetGarry() {
  return (
    <section className="w-full bg-background px-6 lg:px-8 py-16 md:py-24 lg:py-32">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="space-y-6">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.1]">
            Why I Started Bear Media.
          </h2>
          
          <div className="space-y-6 text-lg md:text-lg text-foreground/75 font-light leading-relaxed">
            <p>
              I started Bear Media because I saw a gap. Most Scottish businesses do brilliant work, but they struggle to show it online.
            </p>
            <p>
              They get lost in the noise. Their websites don&apos;t reflect the quality of what they do. Their social media sits empty for months.
            </p>
            <p>
              Then they hire someone who doesn&apos;t understand their business, creates generic content, and disappears.
            </p>
            <p>
              I wanted to do it differently. I wanted to build real relationships with businesses I believe in. To spend time understanding what makes them different. To create content that actually represents them.
            </p>
            <p>
              Most importantly, I wanted to be there after the photos are taken. To help them use the content. To be a real partner, not just a vendor.
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-12 space-y-4">
          <h3 className="font-heading text-xl md:text-2xl font-medium text-foreground">
            What I believe in:
          </h3>
          <ul className="space-y-3 text-lg text-foreground/70 font-light">
            <li className="flex gap-3">
              <span className="text-accent font-medium">—</span>
              <span>Helping businesses look professional online</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-medium">—</span>
              <span>Building trust through real relationships</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-medium">—</span>
              <span>Creating content that has a real purpose</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-medium">—</span>
              <span>Long-term partnerships, not one-off projects</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-medium">—</span>
              <span>Supporting Scottish businesses to compete online</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
