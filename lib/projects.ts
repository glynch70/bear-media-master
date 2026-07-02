import { trustedClientLinks } from './trusted-client-links'

export type ProjectStat = {
  label: string
  value: string
  context?: string
}

export type ProjectDeliverable = {
  title: string
  description: string
}

export type ProjectImage = {
  src: string
  alt: string
}

export type PerformanceReport = {
  src: string
  alt: string
  title: string
  description: string
}

export type Project = {
  id: number
  slug: string
  title: string
  clientName: string
  category: string
  description: string
  intro: string
  challenge: string
  heroImage: string
  images: ProjectImage[]
  services: string[]
  deliverables: ProjectDeliverable[]
  stats: ProjectStat[]
  results?: string[]
  websiteUrl?: string
  performanceReport?: PerformanceReport
  testimonial?: {
    quote: string
    author: string
    role: string
    image?: string
  }
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'cg-developments',
    title: 'C&G Developments Case Study',
    clientName: 'C&G Developments',
    category: 'Photography · Video · Drone · Social · YouTube',
    description: 'Turning construction progress into a high-performing organic content engine.',
    intro:
      'C&G Developments needed their online presence to match the quality, scale and craft of their property work across Scotland.',
    challenge:
      'The work was impressive in person, but their digital channels needed a stronger rhythm of professional content that could build trust, show progress and turn real projects into visibility.',
    heroImage: '/03-PROJECTS/:cg-developments/drone roof.png',
    images: [
      { src: '/03-PROJECTS/:cg-developments/drone roof.png', alt: 'Drone roof footage for C&G Developments' },
      { src: '/03-PROJECTS/:cg-developments/drone new build.png', alt: 'Aerial view of a C&G Developments new build project' },
      { src: '/03-PROJECTS/:cg-developments/new build.png', alt: 'C&G Developments new build exterior' },
      { src: '/03-PROJECTS/:cg-developments/kitchen.png', alt: 'Finished kitchen interior by C&G Developments' },
      { src: '/03-PROJECTS/:cg-developments/timber kit.png', alt: 'Timber kit construction content for C&G Developments' },
      { src: '/03-PROJECTS/:cg-developments/callum & graeme.png', alt: 'C&G Developments team brand content' },
    ],
    services: ['Photography', 'Drone', 'Video Production', 'Social Media', 'YouTube'],
    deliverables: [
      {
        title: 'Photography',
        description: 'Site photography captured detail, progress and finished spaces with a consistent editorial look.',
      },
      {
        title: 'Drone',
        description: 'Aerial content showed scale, setting and build progress in a way ground-level images could not.',
      },
      {
        title: 'Video Production',
        description: 'Short-form walkthroughs and project updates turned active sites into useful, trust-building content.',
      },
      {
        title: 'Social Media',
        description: 'A regular publishing rhythm helped Facebook become a stronger visibility and enquiry channel.',
      },
      {
        title: 'YouTube',
        description: 'Project videos and Shorts created a longer-term content library around real developments.',
      },
    ],
    stats: [
      { label: 'Content Views', value: '143,595', context: '+736%' },
      { label: 'People Reached', value: '34,117', context: '+949%' },
      { label: 'Reel Views', value: '96,500', context: 'Facebook' },
      { label: 'Content Interactions', value: '2,100', context: '+568%' },
      { label: 'Page Visits', value: '3,900', context: '+191%' },
      { label: 'YouTube Views', value: '2,499' },
    ],
    results: [
      'Organic reach and video performance increased without paid advertising.',
      'Project walkthroughs and behind-the-scenes content became the strongest performers.',
      'A growing content library now supports future enquiries and brand trust.',
    ],
    websiteUrl: trustedClientLinks.cgDevelopments,
    performanceReport: {
      src: '/03-PROJECTS/:cg-developments/cg-developments-performance-report.jpeg',
      alt: 'C&G Developments social media performance report by Bear Media',
      title: '3 month social media performance report',
      description: 'The campaign generated strong organic growth across Facebook and YouTube, with no paid advertising.',
    },
    testimonial: {
      quote:
        'Garry made the whole process easy. The drone footage and photography completely changed how we show our developments.',
      author: 'Rachel',
      role: 'C&G Developments',
      image: '/03-PROJECTS/:cg-developments/callum & graeme.png',
    },
  },
  {
    id: 2,
    slug: 'simply-sheds',
    title: 'Simply Sheds Scotland Case Study',
    clientName: 'Simply Sheds Scotland',
    category: 'Photography · Video · Drone · Social · YouTube · TikTok',
    description: 'Reviving dormant channels and building visibility across four platforms.',
    intro:
      'Simply Sheds Scotland needed consistent content that showed the quality of their installations and made their social channels feel alive again.',
    challenge:
      'Two channels had gone quiet, while YouTube and TikTok had to be launched from scratch. The goal was simple: make high-quality shed installations visible, useful and easy to trust.',
    heroImage: '/03-PROJECTS/:simply-sheds/feature.png',
    images: [
      { src: '/03-PROJECTS/:simply-sheds/feature.png', alt: 'Featured Simply Sheds Scotland garden building' },
      { src: '/03-PROJECTS/:simply-sheds/at work.2.png', alt: 'Simply Sheds Scotland team at work' },
      { src: '/03-PROJECTS/:simply-sheds/overhead.png', alt: 'Overhead view of a Simply Sheds Scotland installation' },
      { src: '/03-PROJECTS/:simply-sheds/shed built.png', alt: 'Completed shed build by Simply Sheds Scotland' },
      { src: '/03-PROJECTS/:simply-sheds/happy customer.png', alt: 'Happy Simply Sheds Scotland customer' },
      { src: '/03-PROJECTS/:simply-sheds/happy customers.2.png', alt: 'Simply Sheds Scotland customer handover content' },
      { src: '/03-PROJECTS/:simply-sheds/potting shed.png', alt: 'Potting shed product content for Simply Sheds Scotland' },
      { src: '/03-PROJECTS/:simply-sheds/shed 6x4.png', alt: '6x4 shed installation by Simply Sheds Scotland' },
      { src: '/03-PROJECTS/:simply-sheds/at work.png', alt: 'Simply Sheds Scotland installation process content' },
      { src: '/03-PROJECTS/:simply-sheds/at work.3.png', alt: 'Simply Sheds Scotland behind-the-scenes installation content' },
      { src: '/03-PROJECTS/:simply-sheds/simply sheds.png', alt: 'Simply Sheds Scotland branded project content' },
    ],
    services: ['Photography', 'Video Production', 'Drone', 'Social Media', 'YouTube', 'TikTok'],
    deliverables: [
      {
        title: 'Photography',
        description: 'Product and installation images created a stronger visual library for social and web use.',
      },
      {
        title: 'Video Production',
        description: 'Before-and-after clips, customer reactions and short-form edits created repeatable content formats.',
      },
      {
        title: 'Drone',
        description: 'Aerial views helped customers understand size, setting and finish from a more premium perspective.',
      },
      {
        title: 'Social Media',
        description: 'Dormant Facebook and Instagram channels were revived with regular, useful project-led posts.',
      },
      {
        title: 'YouTube / TikTok',
        description: 'New channels were launched from zero and given a practical content direction.',
      },
    ],
    stats: [
      { label: 'Total Views', value: '12K+', context: 'Six weeks' },
      { label: 'Facebook Views', value: '9.1K', context: '+152%' },
      { label: 'Instagram Views', value: '1,371', context: '+657% viewers' },
      { label: 'YouTube Views', value: '542', context: 'From zero' },
      { label: 'TikTok Views', value: '631', context: 'First 7 days' },
    ],
    results: [
      'Four platforms began showing consistent signs of visibility and discovery.',
      'Before-and-after content proved to be the strongest repeatable format.',
      'Organic reach came from platform discovery rather than paid ads.',
    ],
    websiteUrl: trustedClientLinks.simplySheds,
    performanceReport: {
      src: '/03-PROJECTS/:simply-sheds/simply-sheds-performance-report.jpeg',
      alt: 'Simply Sheds Scotland performance report by Bear Media',
      title: '6 week performance brief',
      description: 'A concise proof piece showing how dormant and new channels generated more than 12K views.',
    },
    testimonial: {
      quote:
        'Our social media and YouTube have come alive. Garry just gets what small businesses need and delivers it.',
      author: 'Steven',
      role: 'Simply Sheds Scotland',
      image: '/03-PROJECTS/:simply-sheds/happy customer.png',
    },
  },
  {
    id: 3,
    slug: 'seamus-corry',
    title: 'Seamus Corry Case Study',
    clientName: 'Seamus Corry',
    category: 'Website · Personal Branding · LinkedIn · Photography',
    description: 'Building a professional personal brand that feels genuine and consistent.',
    intro:
      'Seamus wanted a sharper personal brand across web, photography and LinkedIn without losing the approachable quality people already knew him for.',
    challenge:
      'The challenge was to create a professional presence that felt credible but still human, avoiding overly staged content while making every touchpoint feel consistent.',
    heroImage: '/03-PROJECTS/:seamus-corry/seamus portrait.png',
    images: [
      { src: '/03-PROJECTS/:seamus-corry/seamus portrait.png', alt: 'Seamus Corry personal brand portrait' },
      { src: '/03-PROJECTS/:seamus-corry/seamus at work.png', alt: 'Seamus Corry at work' },
      { src: '/03-PROJECTS/:seamus-corry/seamus on stage.png', alt: 'Seamus Corry speaking on stage' },
      { src: '/03-PROJECTS/:seamus-corry/seamus on stage talking.png', alt: 'Seamus Corry presenting to an audience' },
      { src: '/03-PROJECTS/:seamus-corry/seamus delivering training.png', alt: 'Seamus Corry delivering training' },
      { src: '/03-PROJECTS/:seamus-corry/seamus delivering training.2.png', alt: 'Seamus Corry training content' },
      { src: '/03-PROJECTS/:seamus-corry/seamus delivering training.3.png', alt: 'Seamus Corry workshop content' },
      { src: '/03-PROJECTS/:seamus-corry/seamus podcasts.png', alt: 'Seamus Corry podcast content' },
      { src: '/03-PROJECTS/:seamus-corry/seamus rebrand.jpg', alt: 'Seamus Corry rebrand creative' },
    ],
    services: ['Website Design', 'Personal Branding', 'Photography', 'LinkedIn Content'],
    deliverables: [
      {
        title: 'Photography',
        description: 'Natural portraits and working shots gave the brand a more personal and credible visual language.',
      },
      {
        title: 'Website Design',
        description: 'The website presence was aligned with his expertise, tone and professional positioning.',
      },
      {
        title: 'Social Media',
        description: 'LinkedIn content became more consistent, recognisable and easier to connect back to the brand.',
      },
    ],
    stats: [
      { label: 'Brand Assets', value: '30+', context: 'Photography set' },
      { label: 'Core Channels', value: '3', context: 'Web, LinkedIn, imagery' },
      { label: 'Content Direction', value: 'Clear', context: 'Personal brand system' },
    ],
    results: [
      'A more consistent personal brand across web and social.',
      'A practical library of professional images for ongoing use.',
      'A more credible digital presence for enquiries and opportunities.',
    ],
    websiteUrl: trustedClientLinks.seamusCorry,
    testimonial: {
      quote:
        'Working with Bear Media gave my personal brand real consistency. Genuine, professional and a pleasure to work with.',
      author: 'Seamus Corry',
      role: 'Business Professional',
      image: '/03-PROJECTS/:seamus-corry/seamus portrait.png',
    },
  },
  {
    id: 4,
    slug: 'mm-compliance',
    title: 'M&M Compliance Case Study',
    clientName: 'M&M Compliance',
    category: 'Training · Photography · Brand Content',
    description: 'Making a specialist training business feel clear, credible and easy to understand.',
    intro:
      'M&M Compliance needed practical visual content that explained their training environment, equipment and expertise at a glance.',
    challenge:
      'Technical services can be hard to communicate online. The content had to make the training offer feel professional, tangible and trustworthy without overcomplicating the message.',
    heroImage: '/03-PROJECTS/:m&mcompliance/classroom.png',
    images: [
      { src: '/03-PROJECTS/:m&mcompliance/classroom.png', alt: 'M&M Compliance classroom training environment' },
      { src: '/03-PROJECTS/:m&mcompliance/f-gas training.png', alt: 'F-gas training content for M&M Compliance' },
      { src: '/03-PROJECTS/:m&mcompliance/training equipment.png', alt: 'M&M Compliance training equipment' },
      { src: '/03-PROJECTS/:m&mcompliance/training room.png', alt: 'M&M Compliance training room' },
      { src: '/03-PROJECTS/:m&mcompliance/exterior.png', alt: 'M&M Compliance business exterior' },
    ],
    services: ['Photography', 'Brand Content', 'Website Support'],
    deliverables: [
      {
        title: 'Photography',
        description: 'Clear images of the training spaces, equipment and classroom experience helped explain the offer.',
      },
      {
        title: 'Website Design',
        description: 'The image library supports a more polished online presence and clearer customer journey.',
      },
      {
        title: 'Social Media',
        description: 'Content was shaped for practical posts that build trust around training quality and facilities.',
      },
    ],
    stats: [
      { label: 'Training Spaces', value: '3', context: 'Captured clearly' },
      { label: 'Content Library', value: 'Fresh', context: 'Web and social ready' },
      { label: 'Customer Clarity', value: 'Improved', context: 'Visual proof' },
    ],
    results: [
      'A clearer visual explanation of the training experience.',
      'Professional images ready for website and social media use.',
      'Stronger trust signals around facilities and expertise.',
    ],
    websiteUrl: 'https://mmcts.co.uk/',
  },
  {
    id: 5,
    slug: 'colins-canines',
    title: 'Colin’s Canines Case Study',
    clientName: 'Colin’s Canines',
    category: 'Brand Content · Photography · Social',
    description: 'Creating friendly, trust-building content for a local dog training brand.',
    intro:
      'Colin’s Canines needed content that felt approachable, local and professional while showing the personality behind the service.',
    challenge:
      'For a service built on trust, the visuals needed to feel warm and real. The goal was to show Colin, the dogs and the brand in a way that felt natural rather than overly posed.',
    heroImage: '/03-PROJECTS/:colin-canines/colin and dog.png',
    images: [
      { src: '/03-PROJECTS/:colin-canines/colin and dog.png', alt: 'Colin’s Canines brand photography with a client dog' },
      { src: '/03-PROJECTS/:colin-canines/colin walking.png', alt: 'Colin’s Canines dog walking content' },
      { src: '/03-PROJECTS/:colin-canines/colin and dogs.png', alt: 'Colin’s Canines dog training group content' },
      { src: '/03-PROJECTS/:colin-canines/colin van.png', alt: 'Colin’s Canines branded van photography' },
      { src: '/03-PROJECTS/:colin-canines/colin advert.png', alt: 'Colin’s Canines advert creative' },
    ],
    services: ['Photography', 'Social Media', 'Brand Content'],
    deliverables: [
      {
        title: 'Photography',
        description: 'Natural images showed Colin at work and gave potential customers a warmer first impression.',
      },
      {
        title: 'Social Media',
        description: 'The content was prepared for simple, regular posts that support local visibility.',
      },
      {
        title: 'Brand Content',
        description: 'Vehicle, service and personality-led images created a more complete visual story.',
      },
    ],
    stats: [
      { label: 'Content Formats', value: '5', context: 'Portrait, action, vehicle, advert' },
      { label: 'Brand Feel', value: 'Warmer', context: 'Trust-led imagery' },
      { label: 'Local Visibility', value: 'Stronger', context: 'Social-ready content' },
    ],
    results: [
      'A friendlier and more professional visual presence.',
      'A practical content set for local social media posts.',
      'Clearer trust signals for dog owners considering the service.',
    ],
    websiteUrl: 'https://www.facebook.com/colinscanines/',
  },
  {
    id: 6,
    slug: 'procoat-exterior-coatings',
    title: 'Procoat Exterior Coatings Case Study',
    clientName: 'Procoat Exterior Coatings',
    category: 'Photography · Social · Design',
    description: 'Turning exterior coating work into clean, confidence-building visual content.',
    intro:
      'Procoat needed simple, polished content that made their exterior coating service feel credible and easy to trust.',
    challenge:
      'Home improvement customers want proof before they enquire. The creative needed to show the service clearly and support a more professional first impression.',
    heroImage: '/03-PROJECTS/:procoat/procoat.png',
    images: [
      { src: '/03-PROJECTS/:procoat/procoat.png', alt: 'Procoat Exterior Coatings project content' },
    ],
    services: ['Photography', 'Social Media', 'Design'],
    deliverables: [
      {
        title: 'Photography',
        description: 'Project imagery created a cleaner visual base for customer-facing content.',
      },
      {
        title: 'Social Media',
        description: 'Content was shaped for simple, proof-led posts that communicate the service quickly.',
      },
      {
        title: 'Design',
        description: 'Branded creative helped package the offer in a more polished way.',
      },
    ],
    stats: [
      { label: 'Creative Direction', value: 'Clear', context: 'Proof-led content' },
      { label: 'Visual Trust', value: 'Improved', context: 'Cleaner presentation' },
      { label: 'Content Use', value: 'Multi', context: 'Web and social' },
    ],
    results: [
      'A more polished presentation of exterior coating work.',
      'Visuals that support social media and customer enquiries.',
      'Simple content that quickly explains the value of the service.',
    ],
    websiteUrl: 'https://procoatexteriorcoatings.com/',
  },
  {
    id: 7,
    slug: 'herb-soul',
    title: 'Herb & Soul Case Study',
    clientName: 'Herb & Soul',
    category: 'Website Design · Brand Presence',
    description: 'Creating a calm website presence for a wellness-led brand.',
    intro:
      'Herb & Soul needed a website presence that felt warm, clear and easy to trust, with a visual tone suited to wellness and personal connection.',
    challenge:
      'The site needed to feel professional without becoming cold or overdesigned. The priority was clarity, calm pacing and a first impression that matched the nature of the work.',
    heroImage: '/assets/websites/herb-soul.png',
    images: [
      { src: '/assets/websites/herb-soul.png', alt: 'Herb & Soul website design by Bear Media' },
    ],
    services: ['Website Design', 'Brand Presence', 'Content Direction'],
    deliverables: [
      {
        title: 'Website Design',
        description: 'A clean, calm website layout gave the brand a more credible home online.',
      },
      {
        title: 'Brand Presence',
        description: 'The visual direction supported a softer, more personal first impression.',
      },
      {
        title: 'Content Direction',
        description: 'Simple page structure helped visitors understand the offer quickly.',
      },
    ],
    stats: [
      { label: 'Primary Channel', value: 'Web', context: 'Clear online home' },
      { label: 'Visual Direction', value: 'Calm', context: 'Wellness-led' },
      { label: 'User Journey', value: 'Simple', context: 'Mobile-first' },
    ],
    results: [
      'A clearer online presence for a wellness-focused business.',
      'A calm design system that supports trust and enquiry.',
      'A mobile-first site experience that keeps the message direct.',
    ],
    websiteUrl: 'https://herbandsoul.uk/',
  },
  {
    id: 8,
    slug: 'almond-vet-care',
    title: 'Almond Vet Care Case Study',
    clientName: 'Almond Vet Care',
    category: 'Website Design · Healthcare',
    description: 'Designing a clear, reassuring website presence for veterinary care.',
    intro:
      'Almond Vet Care needed a website that felt professional, accessible and reassuring for pet owners looking for local veterinary support.',
    challenge:
      'Healthcare websites need to balance trust, clarity and warmth. The experience had to feel easy to use on mobile while giving visitors confidence quickly.',
    heroImage: '/assets/websites/almond-vet.png',
    images: [
      { src: '/assets/websites/almond-vet.png', alt: 'Almond Vet Care website design by Bear Media' },
    ],
    services: ['Website Design', 'Healthcare Content', 'Local SEO Direction'],
    deliverables: [
      {
        title: 'Website Design',
        description: 'A polished website presentation helped make the service feel clear and dependable.',
      },
      {
        title: 'Healthcare Content',
        description: 'The content structure focused on reassurance, clarity and simple next steps.',
      },
      {
        title: 'Local SEO',
        description: 'The page direction supported local discovery and relevant service intent.',
      },
    ],
    stats: [
      { label: 'Sector', value: 'Vet Care', context: 'Healthcare' },
      { label: 'Priority', value: 'Trust', context: 'Reassuring design' },
      { label: 'Experience', value: 'Mobile', context: 'Easy browsing' },
    ],
    results: [
      'A clearer and more reassuring digital presence.',
      'A mobile-friendly website experience for local visitors.',
      'A polished first impression for a healthcare-led service.',
    ],
    websiteUrl: 'https://www.almondvetcare.co.uk/',
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}

export function getRelatedProjects(slug: string, limit = 4) {
  return projects.filter((p) => p.slug !== slug).slice(0, limit)
}
