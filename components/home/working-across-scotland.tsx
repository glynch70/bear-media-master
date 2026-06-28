'use client'

import { useState } from 'react'
import { SCOTLAND_REGIONS, HOME_POINT, MAP_WIDTH, MAP_HEIGHT } from '@/lib/scotland-map'

const SERVED_AREAS = [
  { label: 'West Lothian', region: 'West Lothian' },
  { label: 'Edinburgh', region: 'City of Edinburgh' },
  { label: 'Fife', region: 'Fife' },
  { label: 'Falkirk', region: 'Falkirk' },
  { label: 'Stirling', region: 'Stirling' },
  { label: 'Glasgow', region: 'Glasgow City' },
] as const

export default function WorkingAcrossScotland() {
  const [active, setActive] = useState<string | null>(null)
  const servedCentroids = SCOTLAND_REGIONS.filter((r) => r.served)

  return (
    <section className="w-full bg-secondary py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy + served areas */}
          <div className="order-2 lg:order-1">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent mb-5">
              Coverage
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-medium leading-[1.1] tracking-tight mb-6 text-balance">
              Working Across Scotland
            </h2>
            <p className="text-lg md:text-xl text-foreground/60 font-light leading-relaxed text-pretty mb-10 max-w-md">
              Based in Broxburn and working with businesses across Scotland.
            </p>

            <ul className="grid grid-cols-2 gap-x-6 gap-y-1 max-w-md">
              {SERVED_AREAS.map((area) => (
                <li key={area.region}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(area.region)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(area.region)}
                    onBlur={() => setActive(null)}
                    className="group flex items-center gap-3 w-full py-3 text-left transition-opacity"
                  >
                    <span
                      className={`flex-shrink-0 w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        active === area.region
                          ? 'bg-accent scale-150'
                          : 'bg-accent/70 group-hover:bg-accent'
                      }`}
                      aria-hidden="true"
                    />
                    <span className="text-lg font-medium text-foreground">{area.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: map */}
          <div className="order-1 lg:order-2 flex justify-center">
            <svg
              viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
              className="w-full max-w-sm h-auto"
              role="img"
              aria-label="Map of Scotland highlighting the areas Bear Media regularly serves: West Lothian, Edinburgh, Fife, Falkirk, Stirling and Glasgow."
            >
              {/* Regions */}
              <g>
                {SCOTLAND_REGIONS.map((r) => {
                  const isActive = active === r.name
                  return (
                    <path
                      key={r.name}
                      d={r.d}
                      className={
                        r.served
                          ? 'fill-accent transition-all duration-300'
                          : 'fill-foreground/[0.07] transition-all duration-300'
                      }
                      style={{
                        opacity: r.served ? (isActive ? 1 : 0.92) : 1,
                      }}
                      stroke="var(--background)"
                      strokeWidth={1.5}
                      strokeLinejoin="round"
                    />
                  )
                })}
              </g>

              {/* Served centroid dots */}
              <g>
                {servedCentroids.map((r) =>
                  r.cx != null && r.cy != null ? (
                    <circle
                      key={`dot-${r.name}`}
                      cx={r.cx}
                      cy={r.cy}
                      r={active === r.name ? 7 : 4.5}
                      className="fill-background transition-all duration-300"
                    />
                  ) : null,
                )}
              </g>

              {/* Home marker: Broxburn */}
              <g>
                <circle
                  cx={HOME_POINT.cx}
                  cy={HOME_POINT.cy}
                  r={18}
                  className="fill-accent/20"
                >
                  <animate
                    attributeName="r"
                    values="14;22;14"
                    dur="2.8s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.5;0.1;0.5"
                    dur="2.8s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx={HOME_POINT.cx}
                  cy={HOME_POINT.cy}
                  r={7}
                  className="fill-accent"
                  stroke="var(--background)"
                  strokeWidth={2.5}
                />
                <text
                  x={HOME_POINT.cx + 16}
                  y={HOME_POINT.cy + 5}
                  className="fill-foreground font-sans"
                  style={{ fontSize: '22px', fontWeight: 600 }}
                >
                  Broxburn
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
