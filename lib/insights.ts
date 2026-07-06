export const insightCategories = [
  'Website Design',
  'AI',
  'Content Creation',
  'Photography',
  'Video',
  'Drone',
  'Social Media',
  'Business',
] as const

export type InsightCategory = (typeof insightCategories)[number]

export type InsightBodyBlock =
  | {
      type: 'paragraph'
      text: string
    }
  | {
      type: 'heading'
      text: string
    }

export type InsightArticle = {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  excerpt: string
  category: InsightCategory
  publishedDate: string
  modifiedDate: string
  readTime: string
  author: {
    name: string
    role: string
    url: string
  }
  featuredImage: {
    src: string
    alt: string
  }
  body: InsightBodyBlock[]
  source: {
    type: 'structured'
    futureFormats: Array<'md' | 'mdx'>
  }
}

const placeholderBody: InsightBodyBlock[] = [
  {
    type: 'paragraph',
    text: 'This article is being prepared. The full guide will be added here soon, with practical examples and clear next steps for small businesses.',
  },
]

export const insights: InsightArticle[] = [
  {
    slug: 'building-websites-with-codex',
    title: "How I'm Building Websites with Codex",
    metaTitle: "How I'm Building Websites with Codex | Bear Media Insights",
    metaDescription:
      'A practical Bear Media article placeholder for building websites with Codex, AI workflows and modern web production.',
    excerpt:
      'A behind-the-scenes look at how AI-assisted development can speed up planning, design iteration and production without losing craft.',
    category: 'AI',
    publishedDate: '2026-07-06',
    modifiedDate: '2026-07-06',
    readTime: '5 min read',
    author: {
      name: 'Garry Lynch',
      role: 'Founder, Bear Media',
      url: '/about',
    },
    featuredImage: {
      src: '/assets/bts/training.png',
      alt: 'Bear Media AI and website workflow session',
    },
    body: placeholderBody,
    source: { type: 'structured', futureFormats: ['md', 'mdx'] },
  },
  {
    slug: 'claude-code-vs-codex',
    title: 'Claude Code vs Codex',
    metaTitle: 'Claude Code vs Codex | Bear Media Insights',
    metaDescription:
      'A Bear Media comparison placeholder for Claude Code, Codex and practical AI coding workflows.',
    excerpt:
      'A practical comparison of two AI coding assistants through the lens of real client website work and day-to-day production.',
    category: 'AI',
    publishedDate: '2026-07-06',
    modifiedDate: '2026-07-06',
    readTime: '6 min read',
    author: {
      name: 'Garry Lynch',
      role: 'Founder, Bear Media',
      url: '/about',
    },
    featuredImage: {
      src: '/assets/bts/office-client-shoot.jpg',
      alt: 'Bear Media desk setup for AI-assisted website work',
    },
    body: placeholderBody,
    source: { type: 'structured', futureFormats: ['md', 'mdx'] },
  },
  {
    slug: 'building-better-websites-with-ai',
    title: 'Building Better Websites with AI',
    metaTitle: 'Building Better Websites with AI | Bear Media Insights',
    metaDescription:
      'A Bear Media article placeholder about using AI to improve website planning, content and performance.',
    excerpt:
      'How AI can support clearer structure, sharper copy and faster delivery while the strategy stays human.',
    category: 'Website Design',
    publishedDate: '2026-07-06',
    modifiedDate: '2026-07-06',
    readTime: '5 min read',
    author: {
      name: 'Garry Lynch',
      role: 'Founder, Bear Media',
      url: '/about',
    },
    featuredImage: {
      src: '/assets/projects/seamus-new.jpg',
      alt: 'Website and brand content created by Bear Media',
    },
    body: placeholderBody,
    source: { type: 'structured', futureFormats: ['md', 'mdx'] },
  },
  {
    slug: 'why-every-small-business-still-needs-a-website',
    title: 'Why Every Small Business Still Needs a Website',
    metaTitle: 'Why Every Small Business Still Needs a Website | Bear Media Insights',
    metaDescription:
      'A Bear Media article placeholder on why small businesses still need a clear, trustworthy website.',
    excerpt:
      'Social media matters, but a strong website remains the place where trust, search visibility and enquiries come together.',
    category: 'Business',
    publishedDate: '2026-07-06',
    modifiedDate: '2026-07-06',
    readTime: '4 min read',
    author: {
      name: 'Garry Lynch',
      role: 'Founder, Bear Media',
      url: '/about',
    },
    featuredImage: {
      src: '/assets/projects/procoat-before-after.png',
      alt: 'Small business website transformation by Bear Media',
    },
    body: placeholderBody,
    source: { type: 'structured', futureFormats: ['md', 'mdx'] },
  },
  {
    slug: 'photography-that-builds-trust',
    title: 'Photography That Builds Trust',
    metaTitle: 'Photography That Builds Trust | Bear Media Insights',
    metaDescription:
      'A Bear Media article placeholder about business photography that helps customers trust a company faster.',
    excerpt:
      'The right photography helps customers understand who you are, what you do and why your work is worth trusting.',
    category: 'Photography',
    publishedDate: '2026-07-06',
    modifiedDate: '2026-07-06',
    readTime: '4 min read',
    author: {
      name: 'Garry Lynch',
      role: 'Founder, Bear Media',
      url: '/about',
    },
    featuredImage: {
      src: '/assets/bts/corporate.jpg',
      alt: 'Bear Media business photography session',
    },
    body: placeholderBody,
    source: { type: 'structured', futureFormats: ['md', 'mdx'] },
  },
  {
    slug: 'video-content-that-generates-enquiries',
    title: 'Video Content That Generates Enquiries',
    metaTitle: 'Video Content That Generates Enquiries | Bear Media Insights',
    metaDescription:
      'A Bear Media article placeholder about using video content to build trust and generate business enquiries.',
    excerpt:
      'Video works best when it answers real customer questions, shows proof and makes it easier to take the next step.',
    category: 'Video',
    publishedDate: '2026-07-06',
    modifiedDate: '2026-07-06',
    readTime: '5 min read',
    author: {
      name: 'Garry Lynch',
      role: 'Founder, Bear Media',
      url: '/about',
    },
    featuredImage: {
      src: '/assets/bts/event.jpg',
      alt: 'Bear Media video production behind the scenes',
    },
    body: placeholderBody,
    source: { type: 'structured', futureFormats: ['md', 'mdx'] },
  },
]

export function getInsight(slug: string) {
  return insights.find((article) => article.slug === slug)
}

export function getRelatedInsights(slug: string, limit = 3) {
  const current = getInsight(slug)
  if (!current) return []

  const sameCategory = insights.filter(
    (article) => article.slug !== slug && article.category === current.category
  )
  const otherArticles = insights.filter(
    (article) => article.slug !== slug && article.category !== current.category
  )

  return [...sameCategory, ...otherArticles].slice(0, limit)
}

export function getAdjacentInsights(slug: string) {
  const index = insights.findIndex((article) => article.slug === slug)

  return {
    previous: index > 0 ? insights[index - 1] : undefined,
    next: index >= 0 && index < insights.length - 1 ? insights[index + 1] : undefined,
  }
}
