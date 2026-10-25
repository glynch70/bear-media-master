import desktop from '@/components/desktop-refresh.module.css'
import { DesktopServiceImage } from '@/components/desktop-service-image'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { BreadcrumbSchema, FAQPageSchema, ServiceSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Business Photography & Headshots West Lothian | Bear Media',
  description: 'I photograph business owners, teams and workplaces in West Lothian and Edinburgh, with corporate headshots and commercial imagery for websites and marketing.',
  openGraph: {
    title: 'Business Photography & Headshots West Lothian | Bear Media',
    description: 'Business photography, corporate headshots and workplace imagery across West Lothian and Edinburgh.',
    url: 'https://bear-media.com/business-photography-west-lothian',
    siteName: 'Bear Media',
    images: [{ url: 'https://bear-media.com/brand/bear-media-social-share.jpg', width: 1200, height: 630, alt: 'Business Photography in West Lothian', type: 'image/jpeg' }],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Photography & Headshots West Lothian | Bear Media',
    description: 'Business photography, corporate headshots and workplace imagery across West Lothian and Edinburgh.',
    images: ['https://bear-media.com/brand/bear-media-social-share.jpg'],
  },
  alternates: {
    canonical: 'https://bear-media.com/business-photography-west-lothian',
  },
}

const photographyWork = [
  { name: 'Seamus Corry', src: '/assets/project-gallery/seamus-corry-seamus-portrait.webp', alt: 'Seamus Corry seated outdoors in a natural business portrait', description: 'A natural business portrait from my photography and website project.', href: '/projects/seamus-corry', label: 'View the portrait and branding project' },
  { name: 'Esk Valley Talking Therapies', src: '/assets/websites/recent/esk-valley-talking-therapies.webp', alt: 'Published Esk Valley Talking Therapies website preview featuring Jess’s portrait', description: 'My portrait photography for Jess, shown in the completed Esk Valley Talking Therapies website.', href: 'https://eskvalleytalkingtherapies.co.uk/', label: 'See the photography on the live website' },
  { name: 'C&G Developments', src: '/assets/client-work/cg-developments/extension-installation-team.jpg', alt: 'C&G Developments team installing glazed doors on an extension', description: 'Behind-the-scenes photography showing the team and its work on a real construction project.', href: '/projects/cg-developments', label: 'Explore the construction project' },
  { name: 'M&M Compliance', src: '/assets/project-gallery/m-and-mcompliance-classroom.webp', alt: 'M&M Compliance classroom and training environment', description: 'My photographs of the working environment for this specialist training business.', href: '/projects/mm-compliance', label: 'View the workplace photography project' },
] as const

const faqs = [
  {
    question: "How much do professional headshots cost?",
    answer: "The quote depends on how many people need photographs, the location and the edited images required. Tell me whether you need individual headshots, team photos or a wider set of workplace images so I can scope the session.",
  },
  {
    question: "How long does a headshot session take?",
    answer: "The time depends on the number of people, the photographs needed and the space available. I’ll plan the session with you beforehand, including setup and any group photographs, so staff can work around it.",
  },
  {
    question: "Can we do group photos?",
    answer: "Yes. I can discuss the group size and the most suitable location for your team photographs.",
  },
  {
    question: "Do you provide retouching?",
    answer: "The agreed editing and retouching will be set out in your proposal so you know what is included.",
  },
  {
    question: "How quickly will I get my photos?",
    answer: "Delivery depends on the size of the session and the agreed editing. I’ll give you a clear timescale before the session.",
  },
  {
    question: "What should we wear for business photos?",
    answer: "Wear something that feels appropriate for your work and the impression you want to create. I’ll talk through any practical preparation beforehand.",
  },
  {
    question: "Can we do photos at our workplace?",
    answer: "Yes. Your workplace can be a useful setting when you want the photographs to show the real environment behind your business.",
  },
] as const

export default function BusinessPhotographyWestLothian() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className={`flex-1 ${desktop.standardPage} ${desktop.simpleService} ${desktop.servicePage}`}>
        <BreadcrumbSchema items={[
          { name: 'Home', url: 'https://bear-media.com' },
          { name: 'Services', url: 'https://bear-media.com/services' },
          { name: 'Business Photography West Lothian', url: 'https://bear-media.com/business-photography-west-lothian' },
        ]} />
        <ServiceSchema
          name="Business Photography West Lothian"
          description="Business photography, corporate headshots, team portraits and commercial workplace imagery across West Lothian and Edinburgh."
          serviceType="Business photography"
          areaServed={['West Lothian', 'Livingston', 'Broxburn', 'Edinburgh']}
          provider="Bear Media"
          url="https://bear-media.com/business-photography-west-lothian"
          subjectOf={[
            { name: "M&M Compliance Case Study", url: 'https://bear-media.com/projects/mm-compliance' },
          ]}
        />
        <FAQPageSchema questions={faqs} url="https://bear-media.com/business-photography-west-lothian" />

        <section className="bg-gradient-to-b from-background to-muted pb-16 pt-28 md:pb-24 md:pt-36">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Business Photography West Lothian</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              I photograph business owners, teams and workplaces in Broxburn, Livingston, Linlithgow and across West Lothian and Edinburgh. From corporate headshots to behind-the-scenes business content, I plan the images around your website, social channels and marketing.
            </p>
            <a href="/contact#enquiry" className="inline-flex min-h-12 items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Request a photography quote
            </a>
            <a href="#photography-work" className="mt-3 inline-flex min-h-12 items-center justify-center px-6 py-3 font-semibold underline underline-offset-4 sm:ml-3">See real photography work</a>
          </div>
          <DesktopServiceImage src="/assets/hero-carousel/chef-hospitality.webp" alt="Hospitality photography by Bear Media" />
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Photography for your business, wherever people find it</h2>
            <p className="text-lg text-muted-foreground mb-6">
              I create images for business websites, team profiles, social media and marketing campaigns. A session can cover people, premises, products and the everyday work behind your services.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">If you need more than still images, I can scope photography alongside <Link href="/video-production-west-lothian" className="underline underline-offset-4">business video</Link>, <Link href="/drone-photography-west-lothian" className="underline underline-offset-4">drone photography and video</Link> or <Link href="/website-design-west-lothian" className="underline underline-offset-4">website design</Link>. For homes and property listings, explore <Link href="/property-photography-west-lothian" className="underline underline-offset-4">property photography</Link>.
            </p>
          </div>
        </section>

        <section id="photography-work" className="scroll-mt-24 py-16 md:py-24 px-4 md:px-6" aria-labelledby="photography-work-title">
          <div className="max-w-4xl mx-auto">
            <h2 id="photography-work-title" className="text-3xl font-bold mb-6">Real people and businesses</h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">Explore existing portraits, working environments and business content. Each example links to the published project or website where the work is used.</p>
            <div className="grid gap-8 sm:grid-cols-2">
              {photographyWork.map((work) => (
                <article key={work.name}>
                  <Link href={work.href} className="group block focus-visible:outline-2 focus-visible:outline-offset-4">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                      <Image src={work.src} alt={work.alt} fill sizes="(max-width: 639px) calc(100vw - 2rem), 432px" className="object-contain" quality={85} />
                    </div>
                    <h3 className="text-xl font-bold mt-5">{work.name}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{work.description}</p>
                    <span className="mt-4 inline-flex min-h-11 items-center font-semibold underline underline-offset-4">{work.label}</span>
                  </Link>
                </article>
              ))}
            </div>
            <p className="mt-8 leading-relaxed text-muted-foreground">For another example of how team imagery is used on a business website, explore the existing <Link href="/projects/almond-vet-care" className="underline underline-offset-4">Almond Vet Care website project</Link>.</p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Business Photography Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Corporate Headshots</h3>
                <p className="text-muted-foreground">I plan individual business headshots around where they will appear, from LinkedIn profiles to company websites and marketing materials. Tell me how many people need photographs and the setting you have in mind.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Team Photography</h3>
                <p className="text-muted-foreground">Group photos that show the people behind your business, for your website and marketing materials.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Workplace Photography</h3>
                <p className="text-muted-foreground">Natural photographs of your workplace and the way you work, helping potential customers see the real business behind the service.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Corporate Events</h3>
                <p className="text-muted-foreground">I can discuss photography for business events, conferences and gatherings across West Lothian and Edinburgh.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Product & Service Photography</h3>
                <p className="text-muted-foreground">Photography of your products or services for your website, social media and marketing materials.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Before & After</h3>
                <p className="text-muted-foreground">I can document stages of a project and its finished details for case studies and marketing, with the photographs agreed around the work you want to show.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Useful images for websites, profiles and campaigns</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">Build Credibility</h3>
                  <p className="text-muted-foreground">Show your actual people, premises and work so visitors can understand the business behind the service.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">LinkedIn Impact</h3>
                  <p className="text-muted-foreground">Use a consistent, recognisable portrait on professional profiles and your team page.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">Marketing Assets</h3>
                  <p className="text-muted-foreground">Professional photos work across your website, brochures, advertisements, and marketing materials.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">A Consistent Set</h3>
                  <p className="text-muted-foreground">Plan individual and group photographs together so the images work as a coherent set.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">Customer Connection</h3>
                  <p className="text-muted-foreground">Authentic workplace photos help customers feel connected to real people behind your business.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">Planned Around Use</h3>
                  <p className="text-muted-foreground">Agree the photographs and formats around the website pages, campaigns or recruitment materials you need.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">How I plan your photography session</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Start with your brief</h3>
                <p className="text-muted-foreground">I’ll plan the session around your business, the people involved and the places where you need to use the images.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Professional Direction</h3>
                <p className="text-muted-foreground">I’ll give clear direction during the session so the photographs feel natural and professional.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Agree a suitable location</h3>
                <p className="text-muted-foreground">I can discuss the most suitable location with you, including your workplace when that helps tell the story of your business.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Editing and delivery</h3>
                <p className="text-muted-foreground">I’ll agree the editing and delivery timescale with you before the session.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Scope the work before booking</h3>
                <p className="text-muted-foreground">Whether you need headshots, team photography or a broader set of workplace images, I’ll scope the session around your needs.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Business Photography FAQs</h2>
            <div className="space-y-8">
              <details className="border-b pb-6 cursor-pointer">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">{faqs[0].question}</summary>
                <p className="text-muted-foreground">{faqs[0].answer}</p>
              </details>
              <details className="border-b pb-6 cursor-pointer">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">{faqs[1].question}</summary>
                <p className="text-muted-foreground">{faqs[1].answer}</p>
              </details>
              <details className="border-b pb-6 cursor-pointer">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">{faqs[2].question}</summary>
                <p className="text-muted-foreground">{faqs[2].answer}</p>
              </details>
              <details className="border-b pb-6 cursor-pointer">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">{faqs[3].question}</summary>
                <p className="text-muted-foreground">{faqs[3].answer}</p>
              </details>
              <details className="border-b pb-6 cursor-pointer">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">{faqs[4].question}</summary>
                <p className="text-muted-foreground">{faqs[4].answer}</p>
              </details>
              <details className="border-b pb-6 cursor-pointer">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">{faqs[5].question}</summary>
                <p className="text-muted-foreground">{faqs[5].answer}</p>
              </details>
              <details className="border-b pb-6 cursor-pointer">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">{faqs[6].question}</summary>
                <p className="text-muted-foreground">{faqs[6].answer} <a href="/projects/mm-compliance" className="text-primary underline underline-offset-4">See photography for M&amp;M Compliance.</a></p>
              </details>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Tell me about the photographs you need</h2>
            <p className="text-lg mb-8 opacity-90">Send me your location, the number of people involved, the images you need and any deadline. I’ll discuss the brief and provide a quote for the agreed work.</p>
            <a href="/contact#enquiry" className="inline-block bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Request a photography quote
            </a>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Related Services in West Lothian</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/content-creation-west-lothian" className="p-6 border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-bold mb-2">Content Creation</h3>
                <p className="text-sm text-muted-foreground">Professional photography and videography services</p>
              </a>
              <a href="/website-design-west-lothian" className="p-6 border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-bold mb-2">Website Design</h3>
                <p className="text-sm text-muted-foreground">Showcase your professional photos on a beautiful website</p>
              </a>
              <a href="/property-photography-west-lothian" className="p-6 border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-bold mb-2">Property Photography</h3>
                <p className="text-sm text-muted-foreground">Clear images for properties, websites and listings</p>
              </a>
              <a href="/services" className="p-6 border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-bold mb-2">All Services</h3>
                <p className="text-sm text-muted-foreground">View complete service menu</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

