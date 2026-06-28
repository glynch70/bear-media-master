'use client'

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We listen, understand your goals, and assess your current setup.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'Create a tailored strategy and timeline that fits your business needs.',
  },
  {
    number: '03',
    title: 'Deliver',
    description: 'Execute with precision. Professional content, websites, and training.',
  },
  {
    number: '04',
    title: 'Optimize',
    description: 'Analyze results, gather feedback, and continuously improve performance.',
  },
]

export function ProcessFlow() {
  return (
    <section className="w-full bg-background pt-8 md:pt-10 pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-3">
            Our Process
          </h2>
          <p className="text-lg text-muted-foreground">
            A straightforward approach from discovery to optimization.
          </p>
        </div>

        {/* Mobile: Vertical stack */}
        <div className="space-y-6 md:hidden">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-full border border-accent/30 bg-accent/5">
                  <span className="font-heading text-2xl font-medium text-accent">
                    {step.number}
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xl font-medium text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Horizontal flow */}
        <div className="hidden md:flex gap-6 justify-between items-start">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex items-center justify-center w-20 h-20 rounded-full border border-accent/30 bg-accent/5">
                  <span className="font-heading text-3xl font-medium text-accent">
                    {step.number}
                  </span>
                </div>
              </div>
              <h3 className="font-heading text-xl font-medium text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
