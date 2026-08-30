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

export type ProjectVideo = {
  src: string
  playbackId?: string
  poster: string
  title: string
  description: string
  duration: string
  uploadDate: string
  aspectRatio?: string
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
  featuredVideo?: ProjectVideo
  additionalVideos?: ProjectVideo[]
  relatedService?: {
    href: string
    label: string
  }
  seoTitle?: string
  seoDescription?: string
  testimonial?: {
    quote: string
    author: string
    role: string
    image?: string
  }
}

export const projects: Project[] = [
  {
    id: 9,
    slug: 'midlothian-wildflowers',
    title: 'Midlothian Wildflowers Website Launch',
    clientName: 'Midlothian Wildflowers',
    category: 'Website Design · Community · Conservation',
    description: 'Launching a warm, accessible website for a grassroots conservation project.',
    intro:
      'Midlothian Wildflowers needed a clear online home for its community planting, outdoor learning and conservation work across Midlothian.',
    challenge:
      'The website had to bring together a lot of grassroots activity without feeling busy. It needed to explain the project, celebrate the BBC Make a Difference Awards recognition, and make it easy for local people to get involved.',
    heroImage: '/assets/websites/midlothian-wildflowers/desktop-home.webp',
    images: [
      {
        src: '/assets/websites/midlothian-wildflowers/desktop-home.webp',
        alt: 'Midlothian Wildflowers website homepage desktop design',
      },
      {
        src: '/assets/websites/midlothian-wildflowers/mobile-home.webp',
        alt: 'Midlothian Wildflowers website homepage mobile design',
      },
      {
        src: '/assets/websites/midlothian-wildflowers/desktop-gallery.webp',
        alt: 'Midlothian Wildflowers gallery page desktop design',
      },
      {
        src: '/assets/websites/midlothian-wildflowers/mobile-gallery.webp',
        alt: 'Midlothian Wildflowers gallery page compact design',
      },
      {
        src: '/assets/websites/midlothian-wildflowers/desktop-about.webp',
        alt: 'Midlothian Wildflowers about page desktop design',
      },
      {
        src: '/assets/websites/midlothian-wildflowers/mobile-about.webp',
        alt: 'Midlothian Wildflowers about page compact design',
      },
    ],
    services: ['Website Design', 'Responsive Design', 'Content Structure', 'Community Storytelling'],
    deliverables: [
      {
        title: 'Website Design',
        description: 'A soft, nature-led website design gave the project a more polished and welcoming online home.',
      },
      {
        title: 'Mobile Experience',
        description: 'The site was shaped for mobile visitors, with clear navigation and simple routes into volunteering and local action.',
      },
      {
        title: 'Content Structure',
        description: 'Project, gallery, partner and get-involved content was organised so visitors can understand the work quickly.',
      },
    ],
    stats: [
      { label: 'Launch', value: '2026', context: 'New website' },
      { label: 'Pages', value: '6+', context: 'Community site structure' },
      { label: 'Recognition', value: 'BBC', context: 'Make a Difference finalist' },
    ],
    results: [
      'A clearer public home for local conservation and wildflower activity.',
      'A mobile-friendly route for volunteers, supporters and community partners.',
      'A warmer, more credible first impression for a newly launched grassroots project.',
    ],
    relatedService: {
      href: '/website-design-west-lothian',
      label: 'Explore mobile-first website design in West Lothian',
    },
    websiteUrl: 'https://www.midlothianwildflowers-co.uk/',
  },
  {
    id: 1,
    slug: 'cg-developments',
    title: 'C&G Developments Video Case Study',
    clientName: 'C&G Developments',
    category: 'Photography · Video · Drone · Social · YouTube',
    description: 'Turning a six-month new-build story into a high-performing organic content engine.',
    intro:
      'From February to August, Bear Media followed a C&G new build from active construction to finished family home—combining site footage, drone progress and completed interiors in one concise project film.',
    challenge:
      'The work was impressive in person, but their digital channels needed a stronger rhythm of professional content that could build trust, show progress and turn real projects into visibility.',
    heroImage: '/assets/client-work/cg-developments/new-build-exterior-progress.webp',
    featuredVideo: {
      src: 'https://stream.mux.com/mi7qP7CO6azUI9CnHbyVi7yXq01X01JvaiTeakoYt01uMU.m3u8',
      playbackId: 'mi7qP7CO6azUI9CnHbyVi7yXq01X01JvaiTeakoYt01uMU',
      poster: '/assets/project-gallery/cg-developments-new-build-timeline-poster.jpg',
      title: 'New Build Captured: February to August',
      description:
        'A 104-second construction timeline showing monthly progress, on-site work, aerial context and the finished home.',
      duration: 'PT1M44S',
      uploadDate: '2026-08-20',
      aspectRatio: '1638 / 1080',
    },
    additionalVideos: [
      {
        src: 'https://stream.mux.com/7KAxI4mSNGuIuM8II94aWp6f32SHTvKcxJguISJhwug.m3u8',
        playbackId: '7KAxI4mSNGuIuM8II94aWp6f32SHTvKcxJguISJhwug',
        poster:
          'https://image.mux.com/7KAxI4mSNGuIuM8II94aWp6f32SHTvKcxJguISJhwug/thumbnail.webp?time=0',
        title: 'From Build to Home',
        description:
          'A vertical project film following a new build through construction and into a finished family home.',
        duration: 'PT1M19S',
        uploadDate: '2026-08-30',
        aspectRatio: '9 / 16',
      },
      {
        src: 'https://stream.mux.com/v2pjivrhjwdO3yccqdMaSwzDhWx4H5002SfVHrM3xlzk.m3u8',
        playbackId: 'v2pjivrhjwdO3yccqdMaSwzDhWx4H5002SfVHrM3xlzk',
        poster:
          'https://image.mux.com/v2pjivrhjwdO3yccqdMaSwzDhWx4H5002SfVHrM3xlzk/thumbnail.webp?time=0',
        title: 'Kitchen Extension Progress Update',
        description:
          'A concise site update showing the stages, detail and workmanship behind a family kitchen extension.',
        duration: 'PT51S',
        uploadDate: '2026-08-30',
        aspectRatio: '9 / 16',
      },
      {
        src: 'https://stream.mux.com/e00eLg008bPFCwp7TdomlRgM4yEjtcYCvLWaQpII00P02Rk.m3u8',
        playbackId: 'e00eLg008bPFCwp7TdomlRgM4yEjtcYCvLWaQpII00P02Rk',
        poster:
          'https://image.mux.com/e00eLg008bPFCwp7TdomlRgM4yEjtcYCvLWaQpII00P02Rk/thumbnail.webp?time=0',
        title: 'Creating More Space for Family Life',
        description:
          'A short before-and-progress story showing how an extension creates more practical space for family life.',
        duration: 'PT39S',
        uploadDate: '2026-08-30',
        aspectRatio: '9 / 16',
      },
    ],
    relatedService: {
      href: '/video-production-west-lothian',
      label: 'Explore video production in West Lothian',
    },
    seoTitle: 'C&G Construction Video Case Study | Bear Media',
    seoDescription:
      'See how Bear Media turned six months of C&G construction progress into organic video content generating 143,595 views without paid advertising.',
    images: [
      { src: '/assets/client-work/cg-developments/reviewing-project-plans.webp', alt: 'C&G Developments reviewing plans for a client project' },
      { src: '/assets/client-work/cg-developments/client-project-review.webp', alt: 'C&G Developments reviewing completed work with a client' },
      { src: '/assets/client-work/cg-developments/fitted-kitchen.webp', alt: 'Fitted kitchen photographed for C&G Developments' },
      { src: '/assets/client-work/cg-developments/st-andrews-seafood-restaurant-interior.webp', alt: 'Seafood restaurant interior project in St Andrews' },
      { src: '/assets/client-work/cg-developments/st-andrews-aerial.webp', alt: 'Aerial view across the St Andrews waterfront' },
      { src: '/assets/client-work/cg-developments/east-lothian-new-build-social-graphic.webp', alt: 'C&G Developments East Lothian new build social media graphic' },
      { src: '/assets/project-gallery/cg-developments-drone-roof.webp', alt: 'Drone roof footage for C&G Developments' },
      { src: '/assets/project-gallery/cg-developments-timber-kit.webp', alt: 'Timber kit construction content for C&G Developments' },
      { src: '/assets/project-gallery/cg-developments-callum-and-graeme.webp', alt: 'C&G Developments team brand content' },
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
      src: '/assets/project-gallery/cg-developments-cg-developments-performance-report.webp',
      alt: 'C&G Developments social media performance report by Bear Media',
      title: '3 month social media performance report',
      description: 'The campaign generated strong organic growth across Facebook and YouTube, with no paid advertising.',
    },
    testimonial: {
      quote:
        'Garry made the whole process easy. The drone footage and photography completely changed how we show our developments.',
      author: 'Rachel',
      role: 'C&G Developments',
      image: '/assets/project-gallery/cg-developments-callum-and-graeme.webp',
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
    heroImage: '/assets/project-gallery/simply-sheds-feature.webp',
    featuredVideo: {
      src: 'https://stream.mux.com/KaiydYBFRGcQgE2GUnXMnLiJIFNFRIm9LcZoGNlNyMk.m3u8',
      playbackId: 'KaiydYBFRGcQgE2GUnXMnLiJIFNFRIm9LcZoGNlNyMk',
      poster:
        'https://image.mux.com/KaiydYBFRGcQgE2GUnXMnLiJIFNFRIm9LcZoGNlNyMk/thumbnail.webp?time=3',
      title: 'Find Your Perfect Shed',
      description:
        'A concise vertical showcase that helps customers compare garden-building styles and see the finished quality clearly.',
      duration: 'PT31S',
      uploadDate: '2026-08-30',
      aspectRatio: '9 / 16',
    },
    additionalVideos: [
      {
        src: 'https://stream.mux.com/x7OWXJce4JRbkGU8hE6sXIMgvaQg6X6oXv1toWY3sHE.m3u8',
        playbackId: 'x7OWXJce4JRbkGU8hE6sXIMgvaQg6X6oXv1toWY3sHE',
        poster:
          'https://image.mux.com/x7OWXJce4JRbkGU8hE6sXIMgvaQg6X6oXv1toWY3sHE/thumbnail.webp?time=3',
        title: 'Fully Custom Garden Buildings',
        description:
          'A short product-led film showing the variety of custom sizes, roof styles and practical options available.',
        duration: 'PT36S',
        uploadDate: '2026-08-30',
        aspectRatio: '9 / 16',
      },
      {
        src: 'https://stream.mux.com/g9bAM9sKiPSydltfBXJ6fwbZvtsruLs4FQno4cOMbYI.m3u8',
        playbackId: 'g9bAM9sKiPSydltfBXJ6fwbZvtsruLs4FQno4cOMbYI',
        poster:
          'https://image.mux.com/g9bAM9sKiPSydltfBXJ6fwbZvtsruLs4FQno4cOMbYI/thumbnail.webp?time=3',
        title: 'Rain or Shine',
        description:
          'A behind-the-scenes installation film that shows the team delivering and building through real Scottish conditions.',
        duration: 'PT41S',
        uploadDate: '2026-08-30',
        aspectRatio: '9 / 16',
      },
    ],
    images: [
      { src: '/assets/project-gallery/simply-sheds-feature.webp', alt: 'Featured Simply Sheds Scotland garden building' },
      { src: '/assets/project-gallery/simply-sheds-at-work-2.webp', alt: 'Simply Sheds Scotland team at work' },
      { src: '/assets/project-gallery/simply-sheds-overhead.webp', alt: 'Overhead view of a Simply Sheds Scotland installation' },
      { src: '/assets/project-gallery/simply-sheds-shed-built.webp', alt: 'Completed shed build by Simply Sheds Scotland' },
      { src: '/assets/project-gallery/simply-sheds-happy-customer.webp', alt: 'Happy Simply Sheds Scotland customer' },
      { src: '/assets/project-gallery/simply-sheds-happy-customers-2.webp', alt: 'Simply Sheds Scotland customer handover content' },
      { src: '/assets/project-gallery/simply-sheds-potting-shed.webp', alt: 'Potting shed product content for Simply Sheds Scotland' },
      { src: '/assets/project-gallery/simply-sheds-shed-6x4.webp', alt: '6x4 shed installation by Simply Sheds Scotland' },
      { src: '/assets/project-gallery/simply-sheds-at-work.webp', alt: 'Simply Sheds Scotland installation process content' },
      { src: '/assets/project-gallery/simply-sheds-at-work-3.webp', alt: 'Simply Sheds Scotland behind-the-scenes installation content' },
      { src: '/assets/project-gallery/simply-sheds-simply-sheds.webp', alt: 'Simply Sheds Scotland branded project content' },
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
    relatedService: {
      href: '/video-production-west-lothian',
      label: 'Explore video production in West Lothian',
    },
    performanceReport: {
      src: '/assets/project-gallery/simply-sheds-simply-sheds-performance-report.webp',
      alt: 'Simply Sheds Scotland performance report by Bear Media',
      title: '6 week performance brief',
      description: 'A concise proof piece showing how dormant and new channels generated more than 12K views.',
    },
    testimonial: {
      quote:
        'Our social media and YouTube have come alive. Garry just gets what small businesses need and delivers it.',
      author: 'Steven',
      role: 'Simply Sheds Scotland',
      image: '/assets/project-gallery/simply-sheds-happy-customer.webp',
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
    heroImage: '/assets/project-gallery/seamus-corry-seamus-portrait.webp',
    images: [
      { src: '/assets/project-gallery/seamus-corry-seamus-portrait.webp', alt: 'Seamus Corry personal brand portrait' },
      { src: '/assets/project-gallery/seamus-corry-seamus-at-work.webp', alt: 'Seamus Corry at work' },
      { src: '/assets/project-gallery/seamus-corry-seamus-on-stage.webp', alt: 'Seamus Corry speaking on stage' },
      { src: '/assets/project-gallery/seamus-corry-seamus-on-stage-talking.webp', alt: 'Seamus Corry presenting to an audience' },
      { src: '/assets/project-gallery/seamus-corry-seamus-delivering-training.webp', alt: 'Seamus Corry delivering training' },
      { src: '/assets/project-gallery/seamus-corry-seamus-delivering-training-2.webp', alt: 'Seamus Corry training content' },
      { src: '/assets/project-gallery/seamus-corry-seamus-delivering-training-3.webp', alt: 'Seamus Corry workshop content' },
      { src: '/assets/project-gallery/seamus-corry-seamus-podcasts.webp', alt: 'Seamus Corry podcast content' },
      { src: '/assets/project-gallery/seamus-corry-seamus-rebrand.webp', alt: 'Seamus Corry rebrand creative' },
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
      image: '/assets/project-gallery/seamus-corry-seamus-portrait.webp',
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
    heroImage: '/assets/project-gallery/m-and-mcompliance-classroom.webp',
    images: [
      { src: '/assets/project-gallery/m-and-mcompliance-classroom.webp', alt: 'M&M Compliance classroom training environment' },
      { src: '/assets/project-gallery/m-and-mcompliance-f-gas-training.webp', alt: 'F-gas training content for M&M Compliance' },
      { src: '/assets/project-gallery/m-and-mcompliance-training-equipment.webp', alt: 'M&M Compliance training equipment' },
      { src: '/assets/project-gallery/m-and-mcompliance-training-room.webp', alt: 'M&M Compliance training room' },
      { src: '/assets/project-gallery/m-and-mcompliance-exterior.webp', alt: 'M&M Compliance business exterior' },
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
    heroImage: '/assets/project-gallery/colin-canines-colin-and-dog.webp',
    images: [
      { src: '/assets/project-gallery/colin-canines-colin-and-dog.webp', alt: 'Colin’s Canines brand photography with a client dog' },
      { src: '/assets/project-gallery/colin-canines-colin-walking.webp', alt: 'Colin’s Canines dog walking content' },
      { src: '/assets/project-gallery/colin-canines-colin-and-dogs.webp', alt: 'Colin’s Canines dog training group content' },
      { src: '/assets/project-gallery/colin-canines-colin-van.webp', alt: 'Colin’s Canines branded van photography' },
      { src: '/assets/project-gallery/colin-canines-colin-advert.webp', alt: 'Colin’s Canines advert creative' },
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
    category: 'Photography · Video · Social · Design',
    description: 'Turning exterior coating work into clean, confidence-building visual content.',
    intro:
      'Procoat needed simple, polished content that made their exterior coating service feel credible and easy to trust.',
    challenge:
      'Home improvement customers want proof before they enquire. The creative needed to show the service clearly and support a more professional first impression.',
    heroImage: '/assets/project-gallery/procoat-procoat.webp',
    featuredVideo: {
      src: 'https://stream.mux.com/UzGH6W002u01m7twCjKAsmZ01YOE4UPfsQlVFasYcpDx0200.m3u8',
      playbackId: 'UzGH6W002u01m7twCjKAsmZ01YOE4UPfsQlVFasYcpDx0200',
      poster:
        'https://image.mux.com/UzGH6W002u01m7twCjKAsmZ01YOE4UPfsQlVFasYcpDx0200/thumbnail.webp?time=3',
      title: 'Another Home Transformed',
      description:
        'A mobile-first transformation film showing how a fresh exterior coating changes the look and feel of a home.',
      duration: 'PT27S',
      uploadDate: '2026-08-30',
      aspectRatio: '9 / 16',
    },
    images: [
      { src: '/assets/project-gallery/procoat-procoat.webp', alt: 'Procoat Exterior Coatings project content' },
    ],
    services: ['Photography', 'Video Production', 'Social Media', 'Design'],
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
        title: 'Video Production',
        description: 'A concise transformation film turned a completed job into clear visual proof for mobile audiences.',
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
    relatedService: {
      href: '/video-production-west-lothian',
      label: 'Explore video production in West Lothian',
    },
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
    heroImage: '/assets/websites/herb-soul.webp',
    images: [
      { src: '/assets/websites/herb-soul.webp', alt: 'Herb & Soul website design by Bear Media' },
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
    heroImage: '/assets/websites/almond-vet.webp',
    images: [
      { src: '/assets/client-work/almond-vet-care/clinic-entrance-golden-retriever.webp', alt: 'Golden retriever outside the Almond Vet Care clinic' },
      { src: '/assets/client-work/almond-vet-care/vet-caring-for-bulldog.webp', alt: 'Almond Vet Care vet caring for a bulldog patient' },
      { src: '/assets/client-work/almond-vet-care/vet-team-with-puppy.webp', alt: 'Almond Vet Care team with a puppy at the practice' },
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
