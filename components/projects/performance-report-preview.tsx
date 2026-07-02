'use client'

import Image from 'next/image'
import { LightboxGallery } from '@/components/lightbox'
import type { PerformanceReport } from '@/lib/projects'

type PerformanceReportPreviewProps = {
  report: PerformanceReport
}

export function PerformanceReportPreview({ report }: PerformanceReportPreviewProps) {
  return (
    <LightboxGallery images={[{ src: report.src, alt: report.alt }]}>
      {(openLightbox) => (
        <div className="grid grid-cols-1 gap-8 rounded-3xl bg-secondary p-5 md:grid-cols-[0.92fr_1fr] md:gap-10 md:p-8 lg:p-10">
          <button
            type="button"
            onClick={() => openLightbox(0)}
            className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-muted text-left shadow-sm md:rounded-3xl"
            aria-label={`Open ${report.title} fullscreen`}
          >
            <Image
              src={report.src}
              alt={report.alt}
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 hidden items-center justify-center bg-black/30 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 md:flex">
              <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black shadow-sm">
                View full report
              </span>
            </div>
          </button>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">Performance Report</p>
            <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight md:text-5xl">
              {report.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {report.description}
            </p>
            <button
              type="button"
              onClick={() => openLightbox(0)}
              className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-secondary"
            >
              View Full Performance Report
            </button>
          </div>
        </div>
      )}
    </LightboxGallery>
  )
}
