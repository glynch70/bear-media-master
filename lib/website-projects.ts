export const recentWebsiteProjects = [
  {
    name: 'Linven Property Inspections',
    category: 'Website design',
    description: 'A website for Linven’s property inspection business, with services for homebuyers and housebuilders, clear pricing and a straightforward enquiry form.',
    src: '/assets/websites/recent/linven-property-inspections.webp',
    alt: 'Desktop and mobile views of the Linven Property Inspections website',
    url: 'https://linvenpropertyinspections.co.uk/',
  },
  {
    name: 'Esk Valley Talking Therapies',
    category: 'Website design + photography',
    description: 'A new online home for Jess’s CBT business, introducing her approach and services with original Bear Media photography and a clear way to enquire.',
    src: '/assets/websites/recent/esk-valley-talking-therapies.webp',
    alt: 'Desktop and mobile views of Jess’s Esk Valley Talking Therapies website, featuring Bear Media’s portrait photography',
    url: 'https://eskvalleytalkingtherapies.co.uk/',
  },
  {
    name: 'AM Medical Aesthetics',
    category: 'Website design with supplied photography',
    description: 'A website built around Alex’s own photographs, introducing her aesthetics business, answering client questions and guiding visitors towards booking a consultation.',
    src: '/assets/websites/recent/am-medical-aesthetics.webp',
    alt: 'Desktop and mobile views of the AM Medical Aesthetics website, with Alex’s introduction and consultation booking link',
    url: 'https://ammedicalaesthetics.co.uk/',
  },
] as const

export const landingPageProjects = [
  {
    name: 'Seamus Corry — Gospel',
    category: 'Book landing page',
    description: 'An author landing page introducing Gospel, sharing the story behind the book and inviting readers to join the mailing list for updates.',
    src: '/assets/websites/landing-pages/seamus-corry-gospel.webp',
    alt: 'Desktop and mobile views of Seamus Corry’s Gospel book landing page',
    url: 'https://www.seamuscorry.co.uk/gospel',
    linkLabel: 'View landing page',
  },
  {
    name: 'Bear Media — AI training',
    category: 'Service landing page',
    description: 'A focused page for my practical AI training, explaining the offer and giving business owners a clear route to enquire.',
    src: '/assets/websites/landing-pages/bear-media-training.webp',
    alt: 'Desktop and mobile views of Bear Media’s AI training landing page',
    url: '/training',
    linkLabel: 'View landing page',
  },
  {
    name: 'AM Medical Aesthetics — Consultation',
    category: 'Landing page design preview',
    description: 'A consultation landing page design introducing Alex, explaining the first appointment and linking to her existing booking system.',
    src: '/assets/websites/landing-pages/am-aesthetics-consultation.webp',
    alt: 'Desktop and mobile views of the AM Medical Aesthetics consultation landing page design',
    url: 'https://am-aesthetics-consultation.garryl70.chatgpt.site/',
    linkLabel: 'View landing page preview',
  },
  {
    name: 'Linven — Property inspections',
    category: 'Landing page design preview',
    description: 'A focused landing page design introducing Linven’s inspection services for homebuyers and housebuilders, with clear contact options.',
    src: '/assets/websites/landing-pages/linven-property-inspections.webp',
    alt: 'Desktop and mobile views of the Linven Property Inspections landing page design',
    url: 'https://linven-property-inspections.garryl70.chatgpt.site/',
    linkLabel: 'View landing page preview',
  },
] as const

export const websiteProjects = [
  ...recentWebsiteProjects,
  { name: 'Herb & Soul', caseStudy: '/projects/herb-soul', description: 'Herbalism, foraging and nature-based wellbeing.', src: '/assets/websites/herb-soul.webp', url: 'https://herbandsoul.uk/' },
  { name: 'Almond Vet Care', caseStudy: '/projects/almond-vet-care', description: 'Independent veterinary care in Perth.', src: '/assets/websites/almond-vet.webp', url: 'https://www.almondvetcare.co.uk/' },
  { name: 'Seamus Corry', caseStudy: '/projects/seamus-corry', description: 'Mental health first aid and workplace wellbeing training.', src: '/assets/websites/seamus-corry.webp', url: 'https://www.seamuscorry.co.uk/' },
  { name: 'K. Lewis Joinery', description: 'Equestrian construction and bespoke joinery.', src: '/assets/websites/k-lewis-joinery.webp', url: 'https://klewisjoineryltd.co.uk/' },
  { name: 'Robertsons Transport', description: 'UK transport, logistics, van hire and recovery.', src: '/assets/websites/robertsons-transport.webp', url: 'https://rt-ltd.uk/' },
  { name: 'Midlothian Wildflowers', caseStudy: '/projects/midlothian-wildflowers', description: 'Community conservation and greener spaces in Midlothian.', src: '/assets/websites/midlothian-wildflowers/desktop-home.webp', url: 'https://www.midlothianwildflowers-co.uk/' },
  { name: 'Managing What Matters', description: 'Practical people-management and leadership training.', src: '/assets/websites/managing-what-matters.webp', url: 'https://managingwhatmatters.co.uk/' },
] as const

export const websiteShowcaseProjects = [
  ...recentWebsiteProjects,
  ...landingPageProjects,
  ...websiteProjects.slice(recentWebsiteProjects.length),
] as const

