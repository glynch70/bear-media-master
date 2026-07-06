import type { InsightCategory } from '@/lib/insights'

export function CategoryBadge({ category }: { category: InsightCategory }) {
  return (
    <span className="inline-flex w-fit items-center rounded-full border border-foreground/10 bg-background/80 px-3 py-1 text-xs font-medium text-foreground/70 backdrop-blur-sm">
      {category}
    </span>
  )
}
