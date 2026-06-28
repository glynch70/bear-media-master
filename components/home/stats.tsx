'use client'

import { useEffect, useRef, useState } from 'react'

type Stat = {
  value: number
  suffix?: string
  label: string
}

const stats: Stat[] = [
  { value: 20, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 120, suffix: '+', label: 'Social Posts Created' },
  { value: 5, suffix: '', label: '★ Star Reviews' },
]

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let frame = 0
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setCount(Math.round(eased * target))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, active, duration])

  return count
}

function StatItem({ stat, active, index }: { stat: Stat; active: boolean; index: number }) {
  const count = useCountUp(stat.value, active)

  return (
    <div
      className="text-center transition-all duration-700 ease-out"
      style={{
        opacity: active ? 1 : 0,
        transform: active ? 'translateY(0)' : 'translateY(12px)',
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="font-heading font-semibold text-foreground mb-2">
        <span className="text-5xl md:text-6xl lg:text-7xl tabular-nums">
          {count}
          {stat.suffix}
        </span>
      </div>
      <p className="text-sm md:text-base text-muted-foreground font-light">
        {stat.label}
      </p>
    </div>
  )
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="w-full bg-background py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Grid: 2x2 on mobile, 4x1 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} active={active} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
