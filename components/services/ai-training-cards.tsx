'use client'

import { Zap, Users, Cpu, Award } from 'lucide-react'

const aiServices = [
  {
    icon: Cpu,
    title: 'AI Strategy & Planning',
    description: 'We assess your current needs and design a tailored AI integration strategy that aligns with your business goals.',
  },
  {
    icon: Users,
    title: 'Team Training',
    description: 'Upskill your team with practical AI tools and workflows. We provide hands-on training tailored to your industry.',
  },
  {
    icon: Zap,
    title: 'Workflow Optimization',
    description: 'Find ways to use AI to handle repetitive tasks, save your team time and reduce manual work.',
  },
  {
    icon: Award,
    title: 'Ongoing Support',
    description: 'Continuous guidance and updates as AI evolves. Stay competitive and get the most from your AI investments.',
  },
]

export function AITrainingCards() {
  return (
    <section className="w-full bg-background pt-8 md:pt-10 pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-3">
            AI Training & Support
          </h2>
          <p className="text-lg text-muted-foreground">
            Bring your team up to speed with AI tools and workflows designed for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiServices.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group flex flex-col p-6 rounded-2xl border border-foreground/10 bg-background hover:border-foreground/20 transition-all duration-300"
              >
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-medium text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
