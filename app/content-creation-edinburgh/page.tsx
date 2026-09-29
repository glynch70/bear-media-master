import desktop from '@/components/desktop-refresh.module.css'
import { DesktopServiceImage } from '@/components/desktop-service-image'
import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { FAQPageSchema, ServiceSchema } from '@/components/structured-data'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Content Days in Edinburgh | Photography & Video | Bear Media',
  description: 'Planned content days for Edinburgh businesses: photography, short video and social assets from your real work, captured by Bear Media.',
  openGraph: {
    title: 'Professional Content Creation in Edinburgh | Bear Media',
    description: 'Professional photography, videography, and content creation services for Edinburgh businesses.',
    url: 'https://bear-media.com/content-creation-edinburgh',
    siteName: 'Bear Media',
    images: [
      {
        url: 'https://bear-media.com/assets/brand/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Content Creation Services in Edinburgh',
        type: 'image/jpeg',
      },
    ],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Content Creation in Edinburgh | Bear Media',
    description: 'Professional photography, videography, and content creation services',
    images: ['https://bear-media.com/assets/brand/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://bear-media.com/content-creation-edinburgh',
  },
}

const faqs = [
  {
    question: "What types of content do you create?",
    answer: "I create photography, video, drone content, graphics and social media assets. A content session is planned around the people, places and work you need to show, with the final deliverables agreed before booking.",
  },
  {
    question: "How much does professional photography cost?",
    answer: "The quote reflects the shoot, travel, editing and final photographs or videos required. Tell me what you want to show, where the content will be used and any deadline so I can set out the scope clearly.",
  },
  {
    question: "Can you do drone photography in Edinburgh?",
    answer: "Yes, where the location is suitable. I check the site, access, weather and permission requirements before confirming drone content as part of an Edinburgh shoot.",
  },
  {
    question: "Do you include editing and retouching?",
    answer: "I edit the agreed photography and video for its intended use. The proposal sets out the final deliverables, editing and revisions so additional versions or retouching can be discussed in advance.",
  },
  {
    question: "How quickly can you turn around content?",
    answer: "Delivery depends on the amount of content and the editing required. Tell me about a launch, listing or campaign deadline when you enquire, and I’ll confirm a practical schedule before booking.",
  },
  {
    question: "Can I use the content on all platforms?",
    answer: "Tell me which channels you need, such as your website, property listings or social media. I’ll confirm the agreed usage and formats, including any portrait and landscape versions, in the proposal.",
  },
] as const

export default function ContentCreationEdinburgh() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className={`flex-1 ${desktop.standardPage} ${desktop.simpleService} ${desktop.servicePage}`}>
        <ServiceSchema
          name="Content Creation in Edinburgh"
          description="Planned photography, video and social content sessions for businesses in Edinburgh and the Lothians."
          serviceType="Content days and content creation"
          areaServed="Edinburgh"
          provider="Bear Media"
          url="https://bear-media.com/content-creation-edinburgh"
          subjectOf={[
            { name: "Property marketing for David Todd Sales & Lettings", url: 'https://bear-media.com/projects/david-todd' },
            { name: "C&G Developments Video Case Study", url: 'https://bear-media.com/projects/cg-developments' },
          ]}
        />
        <FAQPageSchema questions={faqs} url="https://bear-media.com/content-creation-edinburgh" />
        <section className="bg-gradient-to-b from-background to-muted py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Content days for Edinburgh businesses</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">Plan a shoot around the people, places and projects you want customers to see. I capture useful photography, short video and social assets on location in Edinburgh and the Lothians.</p>
            <a href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Plan a content day</a>
          </div>
          <DesktopServiceImage src="/assets/services/photography-garry-setup.webp" alt="Garry setting up a Bear Media photography session" />
        </section>
        <section className="px-4 py-16 md:px-6 md:py-20" aria-labelledby="edinburgh-content-work-title">
          <div className="mx-auto max-w-4xl">
            <h2 id="edinburgh-content-work-title" className="mb-4 text-3xl font-bold">Recent content work</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link href="/projects/david-todd" className="rounded-xl border p-6 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><h3 className="mb-2 text-xl font-bold">David Todd Sales &amp; Lettings</h3><p className="text-muted-foreground">Property photography, drone imagery and short-form content around Edinburgh-area listings.</p></Link>
              <Link href="/projects/cg-developments" className="rounded-xl border p-6 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><h3 className="mb-2 text-xl font-bold">C&amp;G Developments</h3><p className="text-muted-foreground">Construction progress and finished-project content captured over multiple visits.</p></Link>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Professional Content Matters for Edinburgh Businesses</h2>
            <p className="text-lg text-muted-foreground mb-6">Edinburgh's business landscape is vibrant and competitive. Professional content sets you apart. Whether you need product photography, engaging videos for social media, or corporate imagery, quality content drives engagement and builds trust with your Edinburgh audience.</p>
          </div>
        </section>
        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Our Content Creation Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div><h3 className="text-xl font-bold mb-3">Product Photography</h3><p className="text-muted-foreground">Professional photography that showcases your products beautifully for e-commerce and marketing.</p></div>
              <div><h3 className="text-xl font-bold mb-3">Business Photography</h3><p className="text-muted-foreground">Corporate headshots, team photos, and workplace imagery that builds your professional brand.</p></div>
              <div><h3 className="text-xl font-bold mb-3">Videography</h3><p className="text-muted-foreground">Professional video from concept to final edit. Website videos, testimonials, social content, and promotional videos.</p></div>
              <div><h3 className="text-xl font-bold mb-3">Drone Photography</h3><p className="text-muted-foreground">Licensed aerial perspectives for properties, events, and Edinburgh landmarks.</p></div>
              <div><h3 className="text-xl font-bold mb-3">Graphic Design</h3><p className="text-muted-foreground">Custom graphics, social media designs, infographics, and visual assets for all your marketing.</p></div>
              <div><h3 className="text-xl font-bold mb-3">Social Media Content</h3><p className="text-muted-foreground">Professionally created content optimized for Instagram, Facebook, TikTok, and LinkedIn.</p></div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Benefits of Professional Content</h2>
            <ul className="space-y-6">
              <li className="flex gap-4"><span className="text-primary font-bold text-xl">✓</span><div><h3 className="font-bold mb-2">Higher Engagement</h3><p className="text-muted-foreground">Visual content gets more interaction than text alone.</p></div></li>
              <li className="flex gap-4"><span className="text-primary font-bold text-xl">✓</span><div><h3 className="font-bold mb-2">Better Conversions</h3><p className="text-muted-foreground">Quality imagery and videos help turn viewers into customers.</p></div></li>
              <li className="flex gap-4"><span className="text-primary font-bold text-xl">✓</span><div><h3 className="font-bold mb-2">Brand Building</h3><p className="text-muted-foreground">Consistent, professional imagery strengthens your Edinburgh brand identity.</p></div></li>
              <li className="flex gap-4"><span className="text-primary font-bold text-xl">✓</span><div><h3 className="font-bold mb-2">Clearer service pages</h3><p className="text-muted-foreground">Relevant imagery and video help visitors understand your work and add useful context to your website.</p></div></li>
              <li className="flex gap-4"><span className="text-primary font-bold text-xl">✓</span><div><h3 className="font-bold mb-2">Time Savings</h3><p className="text-muted-foreground">Let us handle the creative work while you focus on your business.</p></div></li>
            </ul>
          </div>
        </section>
        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Why Choose Bear Media for Edinburgh Content?</h2>
            <div className="space-y-8">
              <div><h3 className="text-xl font-bold mb-3">Professional Equipment</h3><p className="text-muted-foreground">State-of-the-art cameras, drones, lighting, and editing equipment ensure professional results.</p></div>
              <div><h3 className="text-xl font-bold mb-3">Creative Expertise</h3><p className="text-muted-foreground">Years of experience creating content that works for Edinburgh audiences.</p></div>
              <div><h3 className="text-xl font-bold mb-3">Local Knowledge</h3><p className="text-muted-foreground">We understand Edinburgh and what resonates with local audiences.</p></div>
              <div><h3 className="text-xl font-bold mb-3">Fast Turnaround</h3><p className="text-muted-foreground">Quick delivery without sacrificing quality.</p></div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Content Creation FAQs</h2>
            <div className="space-y-6">
              <details className="border-b pb-6"><summary className="font-bold text-lg mb-3 hover:text-primary">{faqs[0].question}</summary><p className="text-muted-foreground">{faqs[0].answer}</p></details>
              <details className="border-b pb-6"><summary className="font-bold text-lg mb-3 hover:text-primary">{faqs[1].question}</summary><p className="text-muted-foreground">{faqs[1].answer}</p></details>
              <details className="border-b pb-6"><summary className="font-bold text-lg mb-3 hover:text-primary">{faqs[2].question}</summary><p className="text-muted-foreground">{faqs[2].answer}</p></details>
              <details className="border-b pb-6"><summary className="font-bold text-lg mb-3 hover:text-primary">{faqs[3].question}</summary><p className="text-muted-foreground">{faqs[3].answer}</p></details>
              <details className="border-b pb-6"><summary className="font-bold text-lg mb-3 hover:text-primary">{faqs[4].question}</summary><p className="text-muted-foreground">{faqs[4].answer} <a href="/journal/my-process" className="text-primary underline underline-offset-4">See how I plan, shoot and edit a project.</a></p></details>
              <details className="border-b pb-6"><summary className="font-bold text-lg mb-3 hover:text-primary">{faqs[5].question}</summary><p className="text-muted-foreground">{faqs[5].answer}</p></details>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 px-4 md:px-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Professional Content?</h2>
            <p className="text-lg mb-8 opacity-90">Let's create compelling visual content that showcases your Edinburgh business.</p>
            <a href="/contact" className="inline-block bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Schedule a Shoot</a>
          </div>
        </section>
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Related Services for Edinburgh</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/social-media-edinburgh" className="p-6 border rounded-lg hover:border-primary transition-colors"><h3 className="font-bold mb-2">Social Media Management</h3><p className="text-sm text-muted-foreground">We create and share your content across platforms</p></a>
              <a href="/website-design-edinburgh" className="p-6 border rounded-lg hover:border-primary transition-colors"><h3 className="font-bold mb-2">Website Design</h3><p className="text-sm text-muted-foreground">Professional websites to showcase your content</p></a>
              <a href="/services" className="p-6 border rounded-lg hover:border-primary transition-colors"><h3 className="font-bold mb-2">All Services</h3><p className="text-sm text-muted-foreground">View complete service menu</p></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

