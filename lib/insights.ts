export const insightCategories = [
  'AI',
  'Website Design',
  'Photography',
  'Video',
  'Drone',
  'Marketing',
  'Behind the Scenes',
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
  href?: string
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

function articleBody(paragraphs: string[]): InsightBodyBlock[] {
  return paragraphs.map((text) => ({ type: 'paragraph', text }))
}

export const insights: InsightArticle[] = [
  {
    slug: 'my-process',
    href: '/journal/my-process',
    title: 'My Process: From Idea to Content',
    metaTitle: 'My Process: From Idea to Content',
    metaDescription:
      'A simple look at how Bear Media turns rough ideas into content without overthinking or waiting for perfection.',
    excerpt:
      'A simple look at how rough ideas become content through capture, review, editing and publishing without waiting for perfection.',
    category: 'Marketing',
    publishedDate: '2026-07-07',
    modifiedDate: '2026-07-07',
    readTime: '3 min read',
    author: {
      name: 'Garry Lynch',
      role: 'Founder of Bear Media',
      url: '/about',
    },
    featuredImage: {
      src: '/images/journal/workspace-setup/bear-media-content-creation-typing-keyboard-01.jpg',
      alt: 'Hands typing on a keyboard during Bear Media content planning and creation',
    },
    body: articleBody([
      'People think content creation is filming and editing.',
      'It’s not.',
      'It starts here.',
      'An idea. Usually rough. Usually not fully formed.',
      'I’ll jot it down straight away. Notes app, notebook, whatever’s closest.',
      'From there it’s simple:',
      '• Capture – quick clips, no overthinking',
      '• Review – what’s usable, what’s not',
      '• Edit – cut fast, keep it tight',
      '• Publish – don’t sit on it',
      'That’s it.',
      'No complicated workflow. No waiting for perfection.',
      'The biggest mistake I see is people getting stuck before they even start.',
      'You don’t need better ideas. You need to move faster on the ones you’ve got.',
    ]),
    source: { type: 'structured', futureFormats: ['md', 'mdx'] },
  },
  {
    slug: 'client-work',
    href: '/journal/client-work',
    title: 'Client Work: What It Actually Looks Like',
    metaTitle: 'Client Work: What It Actually Looks Like',
    metaDescription:
      'What Bear Media client work really involves: reviewing, editing, refining and keeping consistent content moving.',
    excerpt:
      'A behind-the-scenes look at the reviewing, editing, refining and consistency that sits behind regular client content.',
    category: 'Behind the Scenes',
    publishedDate: '2026-07-07',
    modifiedDate: '2026-07-07',
    readTime: '2 min read',
    author: {
      name: 'Garry Lynch',
      role: 'Founder of Bear Media',
      url: '/about',
    },
    featuredImage: {
      src: '/images/journal/workspace-setup/bear-media-workspace-desk-setup-night-02.jpg',
      alt: 'Bear Media desk setup with monitors, editing tools and content review workspace',
    },
    body: articleBody([
      'This is the part people don’t see.',
      'It’s not just filming and handing over a video.',
      'It’s reviewing footage. Cutting clips. Reworking edits. Sending versions. Making changes. Keeping things moving.',
      'Most clients don’t need more content.',
      'They need consistency.',
      'That’s where I come in.',
      'Simple systems. Regular output. Content that actually gets used.',
      'No overcomplication. No big agency process.',
      'Just getting it done properly, every week.',
    ]),
    source: { type: 'structured', futureFormats: ['md', 'mdx'] },
  },
  {
    slug: 'gear-setup',
    href: '/journal/gear-setup',
    title: 'Gear Setup: Keep It Simple',
    metaTitle: 'Gear Setup: Keep It Simple',
    metaDescription:
      'A practical guide to keeping your content creation kit simple, choosing useful gear and building a reliable setup you will use consistently.',
    excerpt:
      'Good content does not need loads of kit. It needs a simple setup that gets used properly and consistently.',
    category: 'Behind the Scenes',
    publishedDate: '2026-07-07',
    modifiedDate: '2026-07-18',
    readTime: '2 min read',
    author: {
      name: 'Garry Lynch',
      role: 'Founder of Bear Media',
      url: '/about',
    },
    featuredImage: {
      src: '/images/journal/workspace-setup/bear-media-workspace-keyboard-closeup-01.jpg',
      alt: 'Close-up of a simple keyboard and desk setup for content creation',
    },
    body: articleBody([
      'I’ve used a lot of gear over the years.',
      'Most of it unnecessary.',
      'Now it’s simple.',
      'Camera. Light. Mic. Laptop.',
      'That’s it.',
      'You don’t need loads of kit to create good content.',
      'You need to know how to use what you’ve got.',
      'I’d rather have a simple setup I use every day than expensive gear that sits in a bag.',
      'Clients don’t care what camera you used.',
      'They care if the content works.',
      'Keep it simple. Use it properly.',
    ]),
    source: { type: 'structured', futureFormats: ['md', 'mdx'] },
  },
  {
    slug: 'why-i-do-this',
    href: '/journal/why-i-do-this',
    title: 'Why I Do This',
    metaTitle: 'Why Bear Media Exists | Supporting Businesses with Content',
    metaDescription:
      'Why Bear Media exists: to take content pressure off businesses and help them keep posting without jargon.',
    excerpt:
      'Bear Media exists to take the pressure of content off busy businesses so they can keep showing up online.',
    category: 'Business',
    publishedDate: '2026-07-07',
    modifiedDate: '2026-07-18',
    readTime: '2 min read',
    author: {
      name: 'Garry Lynch',
      role: 'Founder of Bear Media',
      url: '/about',
    },
    featuredImage: {
      src: '/02-ABOUT/garry & rory.webp',
      alt: 'Garry and Rory from Bear Media together',
    },
    body: articleBody([
      'I started Bear Media to keep things simple.',
      'Most businesses struggle with content because it feels like a full-time job.',
      'They overthink it. Or they don’t have time.',
      'So nothing gets posted.',
      'That’s where I come in.',
      'I take that pressure off.',
      'Capture. Create. Post.',
      'So they can focus on running their business.',
      'No big strategy decks. No jargon.',
      'Just content that actually gets done.',
    ]),
    source: { type: 'structured', futureFormats: ['md', 'mdx'] },
  },
  {
    slug: 'how-im-building-websites-with-codex',
    title: "How I'm Building Websites with Codex",
    metaTitle: "How I'm Building Websites with Codex | The Bear Media Journal",
    metaDescription:
      "How Garry Lynch is using Codex, AI tools and 20 years of website experience to build better websites through Bear Media.",
    excerpt:
      "I've been building websites for over 20 years. Codex hasn't replaced that experience. It has made the whole process faster, sharper and more flexible.",
    category: 'AI',
    publishedDate: '2026-07-06',
    modifiedDate: '2026-07-06',
    readTime: '5 min read',
    author: {
      name: 'Garry Lynch',
      role: 'Founder of Bear Media',
      url: '/about',
    },
    featuredImage: {
      src: '/assets/bts/training.webp',
      alt: 'Bear Media AI and website workflow session',
    },
    body: articleBody([
      "I've been building websites on and off for over 20 years.",
      'I started with Dreamweaver, building fairly basic websites for bands and small businesses. From there I taught myself WordPress, then later started building sites in Wix and Squarespace because that was what clients were asking for.',
      "Over the years I've spent plenty of late nights trying to fix broken layouts, plugin issues, hosting problems and mobile responsiveness. At the time it was frustrating, but looking back, that experience was valuable. It taught me how websites work, where they break and what matters when you're building something for a real business.",
      "Now I'm using tools like Codex, Claude Code, Antigravity, Cursor, GitHub and Vercel.",
      'The workflow is completely different.',
      'What used to take days can now be wireframed in hours. Problems that used to take a whole evening to debug can often be solved much faster. But the important thing is this: AI does not replace experience. It amplifies it.',
      'You still need to understand structure, design, mobile layout, SEO, accessibility and what a business actually needs from a website. Codex is a brilliant tool, but it still needs direction.',
      'For Bear Media, this means I can move faster without cutting corners. I can test layouts, improve sections, fix issues and deploy updates much more quickly than I could using traditional methods alone.',
      'That benefits my clients because they get better websites, faster turnarounds and a more flexible build process.',
      'I do not see AI as cheating. I see it as the next stage of website design.',
      "If someone wants to build their own website using AI, I'd say go for it. I'm always here if they need help.",
      'But for businesses that want the job done properly, experience still matters.',
      "Codex is now part of my workflow, but it's not the whole story. The real value is knowing what to ask it to build, what to keep, what to change and what to remove.",
      "That's where the years of experience still count.",
    ]),
    source: { type: 'structured', futureFormats: ['md', 'mdx'] },
  },
  {
    slug: 'codex-vs-claude-code',
    title: "Codex vs Claude Code: What I'm Using Right Now",
    metaTitle: 'Codex vs Claude Code: My Current Workflow | Bear Media',
    metaDescription:
      'How Bear Media is using Codex and Claude Code in real website workflows without treating either tool as a magic button.',
    excerpt:
      "I use both Codex and Claude Code in my workflow. They're powerful tools, but they are not the same. Here's how I'm using them when building websites.",
    category: 'AI',
    publishedDate: '2026-07-06',
    modifiedDate: '2026-07-18',
    readTime: '6 min read',
    author: {
      name: 'Garry Lynch',
      role: 'Founder of Bear Media',
      url: '/about',
    },
    featuredImage: {
      src: '/02-ABOUT/Garry in restaurant.webp',
      alt: 'Garry from Bear Media in a restaurant setting',
    },
    body: articleBody([
      "I'm using Codex and Claude Code a lot just now.",
      'Both are impressive. Both can save hours. Both can also make a mess if you do not guide them properly.',
      'The biggest thing I have learned is that these tools are not magic buttons. They are assistants. Very clever assistants, but still assistants.',
      "Codex is great when I want to work directly inside a project, make structured changes and push updates through GitHub. It fits well with the way I'm now building the Bear Media website.",
      'Claude Code is also very strong, especially when I want help thinking through structure, refactoring code or solving a problem step by step.',
      'The mistake would be thinking I need to choose one forever.',
      'I do not.',
      'I use whatever tool fits the job.',
      "Sometimes that's Codex. Sometimes it's Claude Code. Sometimes it's Antigravity, Cursor or another builder. The tool matters, but the workflow matters more.",
      'For client websites, the real goal is not to say "I built this with Codex" or "I built this with Claude".',
      'The goal is to build a site that looks good, works properly, loads quickly and helps the business get enquiries.',
      "That's the bit people care about.",
      'What I like about these tools is how quickly I can test ideas. I can ask Codex to build a section, review it, reject it, improve it, then push the better version. That speed changes how I work.',
      'But it also means I need to be more selective.',
      'AI can generate a lot. That does not mean all of it should go live.',
      'A good website still needs taste, restraint and proper decision making.',
      'For me, Codex and Claude Code are now part of the Bear Media toolkit. They help me move faster, but they do not replace judgement.',
      "That's where the human bit still matters.",
    ]),
    source: { type: 'structured', futureFormats: ['md', 'mdx'] },
  },
  {
    slug: 'building-better-websites-with-ai',
    title: 'Building Better Websites with AI Without Making Them Look Generic',
    metaTitle: 'Building Better Websites with AI | Bear Media Journal',
    metaDescription:
      'How Bear Media uses AI to build websites faster while keeping them personal, polished and right for each business.',
    excerpt:
      'AI can help build websites quickly, but fast is not enough. The challenge is making the end result feel personal, polished and right for the business.',
    category: 'Website Design',
    publishedDate: '2026-07-06',
    modifiedDate: '2026-07-18',
    readTime: '5 min read',
    author: {
      name: 'Garry Lynch',
      role: 'Founder of Bear Media',
      url: '/about',
    },
    featuredImage: {
      src: '/Websites/WEBSITE DESIGN  Almond Vet Care Brand Website.webp',
      alt: 'Almond Vet Care website design by Bear Media',
    },
    body: articleBody([
      'One of the biggest risks with AI-built websites is that they can all start to feel the same.',
      'Same sections. Same words. Same generic layouts. Same polished but soulless design.',
      "That's not what I want for Bear Media, and it's definitely not what I want for clients.",
      'AI is brilliant for speeding up the process. It can help with layouts, code, SEO, structure, content planning and problem-solving. But it still needs a clear creative direction.',
      'For me, the job is not just to generate a website.',
      'The job is to build something that feels right for that business.',
      'That means using real photography where possible. Real client work. Real testimonials. Real language. No corporate nonsense.',
      'It also means removing things.',
      'AI loves to add more. More sections, more text, more buttons, more features. A lot of the time, better design comes from taking things away.',
      'The best websites are clear.',
      'A visitor should understand quickly:',
      'Who are you?',
      'What do you do?',
      'Can I trust you?',
      'How do I contact you?',
      'That does not change just because AI is involved.',
      'What has changed is the speed.',
      'I can now wireframe a website much faster. I can try different homepage structures. I can fix mobile issues quicker. I can test SEO improvements and improve page layouts without starting again.',
      'But the end result still needs taste.',
      'That is where experience matters.',
      'A good AI-assisted website should not look AI-generated. It should feel like a proper website designed for a real business.',
      "That's the standard I'm aiming for with Bear Media.",
      'Fast is good.',
      'Useful is better.',
      'Personal is what makes it work.',
    ]),
    source: { type: 'structured', futureFormats: ['md', 'mdx'] },
  },
  {
    slug: 'why-every-small-business-still-needs-a-website',
    title: 'Why Every Small Business Still Needs a Website',
    metaTitle: 'Why Small Businesses Still Need a Website | Bear Media',
    metaDescription:
      'Why social media is useful but Scottish small businesses still need a clear, trustworthy website they control.',
    excerpt:
      'Social media is useful, but it should not be the only place your business exists online. A proper website still gives you control, trust and long-term visibility.',
    category: 'Business',
    publishedDate: '2026-07-06',
    modifiedDate: '2026-07-18',
    readTime: '4 min read',
    author: {
      name: 'Garry Lynch',
      role: 'Founder of Bear Media',
      url: '/about',
    },
    featuredImage: {
      src: '/05-BTS/client reaction.webp',
      alt: 'Client reaction during a Bear Media content session',
    },
    body: articleBody([
      'I work with a lot of small businesses, and I still hear this question:',
      "Do I really need a website if I'm already on Facebook, Instagram or TikTok?",
      'My answer is yes.',
      'Social media is useful. It helps people see what you are doing. It keeps your business visible. It can bring in enquiries.',
      'But you do not own it.',
      'Algorithms change. Accounts get restricted. Posts disappear quickly. What worked last month might not work next month.',
      'Your website is different.',
      "It's your home online.",
      'It gives people somewhere to properly understand your business. It lets you show your services, your work, your reviews, your process and your contact details in one place.',
      'It also builds trust.',
      'If someone hears about your business and searches for you, what do they find?',
      'A strong website gives people confidence.',
      'It does not need to be huge. It does not need to be complicated. But it does need to be clear, fast, mobile-friendly and easy to use.',
      'For most small businesses, the website should answer simple questions:',
      'What do you do?',
      'Where do you work?',
      'Who have you helped?',
      'What does it cost or how do I enquire?',
      'Can I trust you?',
      "That's it.",
      'A good website does not replace social media. It supports it.',
      'Your social media can drive attention. Your website can turn that attention into enquiries.',
      "That's why I still believe every serious small business needs one.",
      'Not because websites are trendy.',
      'Because they still work.',
    ]),
    source: { type: 'structured', futureFormats: ['md', 'mdx'] },
  },
  {
    slug: 'photography-that-builds-trust',
    title: 'Photography That Builds Trust',
    metaTitle: 'Photography That Builds Trust | The Bear Media Journal',
    metaDescription:
      'Why honest business photography helps people understand who you are, what you do and why they should trust you.',
    excerpt:
      'Good photography is not just about nice images. It helps people understand who you are, what you do and why they should trust your business.',
    category: 'Photography',
    publishedDate: '2026-07-06',
    modifiedDate: '2026-07-06',
    readTime: '4 min read',
    author: {
      name: 'Garry Lynch',
      role: 'Founder of Bear Media',
      url: '/about',
    },
    featuredImage: {
      src: '/assets/bts/corporate.webp',
      alt: 'Bear Media business photography session',
    },
    body: articleBody([
      'Good photography makes a business feel real.',
      "That might sound obvious, but it's something a lot of small businesses overlook.",
      'You can have a decent website, a decent logo and a decent social media page, but if all your images are stock photos, blurry phone pictures or outdated headshots, it weakens the whole thing.',
      'People buy from people.',
      'They want to see who they are dealing with.',
      'That does not mean everyone needs to be in front of the camera all the time. I understand that not everyone feels comfortable being photographed or filmed. But even simple, honest images can make a huge difference.',
      'Photos of your team.',
      'Your workspace.',
      'Your products.',
      'Your process.',
      'Your tools.',
      'Your completed work.',
      'Your van.',
      'Your shop.',
      'Your location.',
      'These things help people trust you before they ever speak to you.',
      'For trades, hospitality, health, wellness, property and local services, photography is often the difference between looking professional and looking forgettable.',
      'It also makes every other part of your marketing easier.',
      'Your website looks better.',
      'Your social posts look stronger.',
      'Your Google Business Profile improves.',
      'Your adverts feel more trustworthy.',
      'Your brand becomes more consistent.',
      "That's why photography is such a big part of what I do at Bear Media.",
      "I'm not just taking nice pictures.",
      "I'm helping businesses show people what they're really about.",
      'And in a world full of generic content, real images matter more than ever.',
    ]),
    source: { type: 'structured', futureFormats: ['md', 'mdx'] },
  },
  {
    slug: 'video-content-that-generates-enquiries',
    title: 'Video Content That Generates Enquiries',
    metaTitle: 'Video Content That Generates Enquiries | The Bear Media Journal',
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
      role: 'Founder of Bear Media',
      url: '/about',
    },
    featuredImage: {
      src: '/services/social media/Quality Builds.webp',
      alt: 'Quality Builds social media content created by Bear Media',
    },
    body: articleBody([
      'This article is being prepared. The full guide will be added here soon, with practical examples and clear next steps for small businesses.',
    ]),
    source: { type: 'structured', futureFormats: ['md', 'mdx'] },
  },
]

export function getInsight(slug: string) {
  return insights.find((article) => article.slug === slug)
}

export function getJournalArticles(category?: InsightCategory) {
  const articles = category
    ? insights.filter((article) => article.category === category)
    : insights

  return [...articles].sort((a, b) => {
    const dateDifference = new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    if (dateDifference !== 0) return dateDifference

    return insights.indexOf(a) - insights.indexOf(b)
  })
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
