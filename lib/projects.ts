import { trustedClientLinks } from './trusted-client-links'

export type Project = {
  id: number
  slug: string
  title: string
  category: string
  description: string
  intro: string
  heroImage: string
  images: string[]
  services: string[]
  approach: string[]
  results?: string[]
  websiteUrl?: string
  testimonial?: {
    quote: string
    author: string
    role: string
  }
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'cg-developments',
    title: 'C&G Developments',
    category: 'Photography · Video · Drone · Social · YouTube',
    description: 'Showing new build developments at their best, from the ground and the air.',
    intro:
      'C&G Developments build quality homes across central Scotland. They needed content that did justice to the scale and craft of their work, both on the ground and from above.',
    heroImage: '/assets/projects/cg-newbuild.png',
    images: [
      '/assets/projects/cg.png',
      '/assets/projects/cg-kitchen.png',
      '/assets/projects/cg-drone-newbuild.png',
      '/assets/projects/cg-drone-roof.png',
      '/assets/projects/cg-timber-kit.png',
      '/assets/projects/cg-callum-graeme.png',
    ],
    services: ['Photography', 'Video Production', 'Drone Content', 'Social Media Management', 'YouTube Management'],
    approach: [
      'Regular site visits to capture progress photography as developments took shape.',
      'Drone footage to show scale, layout and the surrounding setting of each site.',
      'A steady stream of social content and YouTube updates to keep their audience engaged.',
    ],
    results: [
      'Professional drone footage showcasing new developments',
      'High-quality site photography capturing detail and craftsmanship',
      'Consistent social media presence with 50+ posts per year',
      'YouTube channel with regular property showcase videos',
      'Increased online visibility and customer inquiries',
    ],
    websiteUrl: trustedClientLinks.cgDevelopments,
    testimonial: {
      quote:
        'Garry made the whole process easy. The drone footage and photography completely changed how we show our developments.',
      author: 'Rachel',
      role: 'C&G Developments',
    },
  },
  {
    id: 2,
    slug: 'seamus-corry',
    title: 'Seamus Corry',
    category: 'Website · Personal Branding · LinkedIn · Photography',
    description: 'Building a personal brand that feels genuine, professional and consistent.',
    intro:
      'Seamus wanted to grow his professional presence and build trust with his audience. The focus was a personal brand that felt authentic to him, not corporate or staged.',
    heroImage: '/assets/projects/seamus-portrait.png',
    images: [
      '/assets/projects/seamus-at-work.png',
      '/assets/projects/seamus-stage.png',
      '/assets/projects/seamus-stage-talking.png',
      '/assets/projects/seamus-training.png',
      '/assets/projects/seamus-training-2.png',
      '/assets/projects/seamus-training-3.png',
    ],
    services: ['Website Management', 'Personal Branding', 'LinkedIn Content', 'Photography'],
    approach: [
      'A relaxed photography session to capture natural, professional portraits.',
      'A consistent visual style carried across his website and LinkedIn.',
      'Ongoing content to keep his personal brand active and visible.',
    ],
    results: [
      'Professional personal brand photography',
      'Updated website with consistent visual identity',
      'Active LinkedIn presence with regular content',
      'Increased professional inquiries and opportunities',
      'Authentic personal brand that builds trust',
    ],
    websiteUrl: trustedClientLinks.seamusCorry,
    testimonial: {
      quote:
        'Working with Bear Media gave my personal brand real consistency. Genuine, professional and a pleasure to work with.',
      author: 'Seamus Corry',
      role: 'Business Professional',
    },
  },
  {
    id: 3,
    slug: 'simply-sheds',
    title: 'Simply Sheds Scotland',
    category: 'Photography · Video · Drone · Social · YouTube · TikTok',
    description: 'Capturing quality installations across Scotland for social and YouTube.',
    intro:
      'Simply Sheds Scotland install premium garden buildings across the country. They needed content that showed the quality of each installation and brought their work to life on social media.',
    heroImage: '/assets/projects/sheds-feature.png',
    images: [
      '/assets/projects/sheds-overhead.png',
      '/assets/projects/sheds-built.png',
      '/assets/projects/sheds-happy-customer.png',
      '/assets/projects/sheds-happy-customer-2.png',
      '/assets/projects/sheds-potting.png',
      '/assets/projects/sheds-6x4.png',
      '/assets/projects/sheds-at-work.png',
      '/assets/projects/sheds-at-work-2.png',
      '/assets/projects/sheds-at-work-3.png',
    ],
    services: ['Photography', 'Video Production', 'Drone Content', 'Social Media Management', 'YouTube Management', 'TikTok Management'],
    approach: [
      'On-site installation photography showing finish and detail.',
      'Short-form video for TikTok and reels, plus longer YouTube features.',
      'Drone footage to set each build within its garden and surroundings.',
    ],
    results: [
      'Professional photography for every installation',
      'YouTube channel growing 20% month-on-month',
      'TikTok presence reaching 50,000+ viewers',
      'Increased customer inquiries from social content',
      'Consistent brand presence across all platforms',
    ],
    websiteUrl: trustedClientLinks.simplySheds,
    testimonial: {
      quote:
        'Our social media and YouTube have come alive. Garry just gets what small businesses need and delivers it.',
      author: 'Steven',
      role: 'Simply Sheds Scotland',
    },
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}

export function getRelatedProjects(slug: string, limit = 2) {
  return projects.filter((p) => p.slug !== slug).slice(0, limit)
}
