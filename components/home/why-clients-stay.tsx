import {
  MessageSquare,
  Sparkles,
  Zap,
  SlidersHorizontal,
  Lightbulb,
  HeartHandshake,
  type LucideIcon,
} from 'lucide-react'

const reasons: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: MessageSquare,
    title: 'Direct Communication',
    description: 'You deal with me directly — no account managers, no being passed around a team.',
  },
  {
    icon: Sparkles,
    title: 'No Agency Jargon',
    description: 'Plain, honest conversations about what your business actually needs to grow.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'Content and websites delivered quickly, without compromising on quality.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Flexible Support',
    description: 'Help that adapts to your goals, your budget and the way you like to work.',
  },
  {
    icon: Lightbulb,
    title: 'Practical Advice',
    description: 'Straightforward guidance grounded in 20+ years of real-world experience.',
  },
  {
    icon: HeartHandshake,
    title: 'Long-Term Relationships',
    description: 'Most clients stay for the long haul — because the results keep coming.',
  },
]

export default function WhyClientsStay() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Intro */}
        <div className="max-w-2xl mb-14 md:mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-medium leading-[1.1] tracking-tight mb-6 text-balance">
            Why Clients Stay
          </h2>
          <p className="text-lg md:text-xl text-foreground/60 font-light leading-relaxed text-pretty">
            A simpler, more personal way of working that keeps businesses coming back.
          </p>
        </div>

        {/* Card grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-3xl overflow-hidden bg-border ring-1 ring-border">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <li
                key={reason.title}
                className="group flex flex-col bg-background px-7 py-9 md:px-9 md:py-12 transition-colors duration-300 hover:bg-secondary"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-accent mb-6 transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="font-heading text-xl md:text-2xl font-medium tracking-tight text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-base text-foreground/60 font-light leading-relaxed text-pretty">
                  {reason.description}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
