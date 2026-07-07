const imageBase = '/images/journal/workspace-setup'

export type JournalPageData = {
  title: string
  category: string
  path: string
  description: string
  heroImage: {
    src: string
    alt: string
    caption?: string
    objectPosition?: string
  }
  content: string[]
  inlineImageAfter?: number
  inlineImage?: {
    src: string
    alt: string
    caption?: string
    objectPosition?: string
  }
  gridImages?: {
    src: string
    alt: string
    caption?: string
    objectPosition?: string
  }[]
}

export const journalPages = {
  myProcess: {
    title: 'My Process: From Idea to Content',
    category: 'Process',
    path: '/journal/my-process',
    description:
      'A simple look at how Bear Media turns rough ideas into content without overthinking or waiting for perfection.',
    heroImage: {
      src: `${imageBase}/bear-media-content-creation-typing-keyboard-01.jpg`,
      alt: 'Hands typing on a keyboard during Bear Media content planning and creation',
      caption: 'Ideas move quickly when the workspace is set up for capture, review, edit and publish.',
    },
    content: [
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
    ],
    inlineImage: {
      src: `${imageBase}/bear-media-workspace-keyboard-closeup-01.jpg`,
      alt: 'Close-up of a keyboard used for content writing and editing',
      caption: 'The simple part of the process: write it down, shape it, then move.',
    },
    inlineImageAfter: 11,
  },
  clientWork: {
    title: 'Client Work: What It Actually Looks Like',
    category: 'Client Work',
    path: '/journal/client-work',
    description:
      'What Bear Media client work really involves: reviewing, editing, refining and keeping consistent content moving.',
    heroImage: {
      src: `${imageBase}/bear-media-workspace-desk-setup-night-02.jpg`,
      alt: 'Bear Media desk setup with monitors, editing tools and content review workspace',
      caption: 'Client work is often the quiet middle: reviewing, refining and keeping output consistent.',
    },
    content: [
      'This is the part people don’t see.',
      'It’s not just filming and handing over a video.',
      'It’s reviewing footage. Cutting clips. Reworking edits. Sending versions. Making changes. Keeping things moving.',
      'Most clients don’t need more content.',
      'They need consistency.',
      'That’s where I come in.',
      'Simple systems. Regular output. Content that actually gets used.',
      'No overcomplication. No big agency process.',
      'Just getting it done properly, every week.',
    ],
    inlineImage: {
      src: `${imageBase}/bear-media-content-creation-typing-keyboard-02.jpg`,
      alt: 'Desk view of editing, writing and content review in progress',
      caption: 'The practical work is in the review, edit and delivery rhythm.',
    },
    inlineImageAfter: 3,
  },
  gearSetup: {
    title: 'Gear Setup: Keep It Simple',
    category: 'Gear Setup',
    path: '/journal/gear-setup',
    description:
      'A practical Bear Media note on keeping content gear simple and using the setup consistently.',
    heroImage: {
      src: `${imageBase}/bear-media-workspace-keyboard-closeup-01.jpg`,
      alt: 'Close-up of a simple keyboard and desk setup for content creation',
      caption: 'The best setup is the one you actually use every day.',
    },
    content: [
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
    ],
    inlineImage: {
      src: `${imageBase}/bear-media-workspace-desk-setup-night-01.jpg`,
      alt: 'Bear Media workspace with monitors, microphone, keyboard and desk tools',
      caption: 'Simple gear, close to hand, ready to work.',
    },
    inlineImageAfter: 5,
  },
  whyIDoThis: {
    title: 'Why I Do This',
    category: 'Bear Media',
    path: '/journal/why-i-do-this',
    description:
      'Why Bear Media exists: to take content pressure off businesses and help them keep posting without jargon.',
    heroImage: {
      src: `${imageBase}/bear-media-workspace-desk-setup-night-01.jpg`,
      alt: 'Bear Media workspace where client content is planned, created and posted',
      caption: 'Bear Media exists to make content simpler for busy businesses.',
    },
    content: [
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
    ],
    inlineImage: {
      src: `${imageBase}/bear-media-content-creation-typing-keyboard-01.jpg`,
      alt: 'Bear Media content creation workspace with keyboard, notebook, microphone and monitor',
      caption: 'The work is simple: capture, create and post.',
    },
    inlineImageAfter: 7,
    gridImages: [
      {
        src: `${imageBase}/bear-media-content-creation-typing-keyboard-02.jpg`,
        alt: 'Content creation desk view with editing tools and notes',
        caption: 'Create.',
      },
      {
        src: `${imageBase}/bear-media-workspace-desk-setup-night-02.jpg`,
        alt: 'Bear Media workspace at night with editing monitors',
        caption: 'Post.',
      },
    ],
  },
} satisfies Record<string, JournalPageData>
