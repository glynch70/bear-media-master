export default function CredibilityStrip() {
  const credibilityPoints = [
    { label: '5 Star Reviews', icon: '⭐' },
    { label: 'Scotland Wide', icon: '📍' },
    { label: 'Social Media Management', icon: '📱' },
    { label: 'Websites • Photography • Video', icon: '🌐' },
  ]

  return (
    <section className="w-full bg-background py-16 md:py-20 border-t border-b border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {credibilityPoints.map((point) => (
            <div key={point.label} className="flex items-start gap-3">
              <span className="text-2xl md:text-3xl flex-shrink-0">{point.icon}</span>
              <p className="text-base md:text-lg font-medium text-foreground leading-snug">
                {point.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
