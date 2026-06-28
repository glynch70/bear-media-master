import Image from 'next/image'

export default function Process() {
  const steps = [
    {
      title: "Let's Have A Chat",
      description: "Every project starts with a conversation.\n\nI want to understand your business, your goals and where you need support.\n\nNo pressure.\n\nNo sales pitch.\n\nJust a straightforward discussion.",
      image: '/assets/bts/corporate.jpg',
    },
    {
      title: 'Visit Your Business',
      description: "If needed, I'll come to your business.\n\nThis helps me understand how you work, meet your team and identify opportunities to create useful content.",
      image: '/assets/bts/event.jpg',
    },
    {
      title: 'Create The Content',
      description: 'Using professional photography, video and drone equipment, I create content that shows your business at its best.\n\nReal people.\n\nReal work.\n\nReal stories.',
      image: '/assets/bts/harley-drone.jpg',
    },
    {
      title: 'Put It To Work',
      description: 'The content can then be used across your social media channels, website, YouTube channel and Google Business Profile.\n\nMaking sure everything feels consistent and professional.',
      image: '/assets/projects/sheds-overhead.png',
    },
    {
      title: 'Ongoing Support',
      description: 'Many clients continue working with me month after month.\n\nThat means regular content creation, social media support and helping their online presence grow over time.',
      image: '/assets/bts/setup.png',
    },
  ]

  return (
    <section className="w-full bg-background">
      {/* Intro Section */}
      <div className="w-full py-16 md:py-24 lg:py-32 px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-medium text-accent uppercase tracking-[0.2em] mb-6">How We Work Together</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.2] tracking-tight text-balance mb-8">
            Every business is different.
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>Some need content creation.</p>
            <p>Some need help with social media.</p>
            <p>Some need a website refresh.</p>
            <p className="pt-2">The first step is understanding what will make the biggest difference for your business.</p>
          </div>
        </div>
      </div>

      {/* Steps */}
      {steps.map((step, index) => (
        <div key={index} className="w-full border-t border-border">
          <div className="flex flex-col lg:flex-row">
            {/* Image */}
            <div className="w-full lg:w-1/2 h-64 md:h-80 lg:h-96 relative overflow-hidden bg-muted">
              <Image
                src={step.image}
                alt={step.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 flex items-center p-8 md:p-12 lg:p-16">
              <div className="w-full">
                <h3 className="font-heading text-3xl md:text-4xl font-medium mb-8 text-foreground">
                  {step.title}
                </h3>
                <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                  {step.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Final Statement */}
      <div className="w-full border-t border-border py-16 md:py-24 lg:py-32 px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-4 text-lg md:text-2xl text-muted-foreground leading-relaxed">
            <p>Simple.</p>
            <p>Practical.</p>
            <p className="font-medium text-foreground pt-4">Focused on helping your business stand out online.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
