import type { InsightCategory } from '@/lib/insights'

export function CategoryBadge({ category }: { category: InsightCategory }) {
  return (
    <span className="inline-flex w-fit items-center rounded-full border border-foreground/10 bg-background/75 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-foreground/60 backdrop-blur-sm">
      {category}
    </span>
  )
}
