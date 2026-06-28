import { Clock, User, MapPin } from 'lucide-react'
import { memo } from 'react'

const features = [
  {
    icon: Clock,
    title: '20+ Years Experience',
  },
  {
    icon: User,
    title: 'One Point of Contact',
  },
  {
    icon: MapPin,
    title: 'Built in Scotland',
  },
]

function WhyBearMedia() {
  return (
    <section className="w-full bg-background py-20 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Subtle Label */}
          <span className="inline-block text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4 md:mb-6">
            Why Bear Media
          </span>

          {/* Clean, high-contrast headings */}
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground tracking-tight text-balance mb-6 md:mb-8">
            Everything is created in-house.
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty mb-12 md:mb-16">
            Photography, video, websites and social media designed to help Scottish businesses stand out online.
          </p>

          {/* Minimalist Feature List */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16 w-full">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center gap-3 opacity-0 translate-y-4 data-[state=visible]:opacity-100 data-[state=visible]:translate-y-0 transition-all duration-700 delay-200" data-state="visible">
                <feature.icon className="w-5 h-5 text-foreground/80 stroke-[1.5]" />
                <span className="text-sm font-medium text-foreground/90">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(WhyBearMedia)
