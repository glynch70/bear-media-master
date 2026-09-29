import desktop from '@/components/desktop-refresh.module.css'
import { DesktopServiceImage } from '@/components/desktop-service-image'
import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { FAQPageSchema, ServiceSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Business Photography West Lothian | Bear Media',
  description: 'Business photography in West Lothian for headshots, team photos, workplace photography and brand imagery.',
  openGraph: {
    title: 'Business Photography West Lothian | Bear Media',
    description: 'Corporate headshots, team photos and workplace photography for West Lothian businesses.',
    url: 'https://bear-media.com/business-photography-west-lothian',
    siteName: 'Bear Media',
    images: [{ url: 'https://bear-media.com/assets/brand/og-image.jpg', width: 1200, height: 630, alt: 'Business Photography in West Lothian', type: 'image/jpeg' }],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Photography West Lothian | Bear Media',
    description: 'Professional business photography for West Lothian companies.',
    images: ['https://bear-media.com/assets/brand/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://bear-media.com/business-photography-west-lothian',
  },
}

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
    answer: "Delivery depends on the size of the session and the agreed editing. I’ll give you a clear timescale before we start.",
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
        <ServiceSchema
          name="Business Photography West Lothian"
          description="Business photography, headshots, team portraits and workplace imagery for businesses across West Lothian."
          serviceType="Business photography"
          areaServed="West Lothian"
          provider="Bear Media"
          url="https://bear-media.com/business-photography-west-lothian"
          subjectOf={[
            { name: "M&M Compliance Case Study", url: 'https://bear-media.com/projects/mm-compliance' },
          ]}
        />
        <FAQPageSchema questions={faqs} url="https://bear-media.com/business-photography-west-lothian" />

        <section className="bg-gradient-to-b from-background to-muted py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Business Photography West Lothian</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              I create professional business photography for companies in Broxburn, Livingston, Linlithgow and across West Lothian—from headshots and team photos to workplace imagery for your website and marketing.
            </p>
            <a href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Book Your Session
            </a>
          </div>
          <DesktopServiceImage src="/assets/hero-carousel/chef-hospitality.webp" alt="Hospitality photography by Bear Media" />
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Professional Photography Builds Trust</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Good photography gives people a clearer sense of who you are and what you do. I can create the images you need for your website, profiles, marketing materials and ongoing content.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Business Photography Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Corporate Headshots</h3>
                <p className="text-muted-foreground">Professional headshots for executives, professionals, and team members. Perfect for LinkedIn, company websites, and marketing materials.</p>
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
                <p className="text-muted-foreground">Professional coverage of company events, conferences, and corporate gatherings in West Lothian.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Product & Service Photography</h3>
                <p className="text-muted-foreground">Photography of your products or services for your website, social media and marketing materials.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Before & After</h3>
                <p className="text-muted-foreground">Document your work or transformation for case studies and marketing. Perfect for contractors and service providers.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Benefits of Professional Business Photography</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">Build Credibility</h3>
                  <p className="text-muted-foreground">Professional photos make your West Lothian business look established and trustworthy.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">LinkedIn Impact</h3>
                  <p className="text-muted-foreground">Professional headshots increase engagement and trust on LinkedIn for your team members.</p>
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
                  <h3 className="font-bold mb-2">Team Morale</h3>
                  <p className="text-muted-foreground">Professional photos make employees feel valued and proud to work for your West Lothian company.</p>
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
                  <h3 className="font-bold mb-2">ROI</h3>
                  <p className="text-muted-foreground">Professional photography drives better results across sales, marketing, and recruitment efforts.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Why Choose Bear Media for Business Photography?</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Experience with Companies</h3>
                <p className="text-muted-foreground">I’ll plan the session around your business, the people involved and the places where you need to use the images.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Professional Direction</h3>
                <p className="text-muted-foreground">I’ll give clear direction during the session so the photographs feel natural and professional.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Studio & On-Location</h3>
                <p className="text-muted-foreground">I can discuss the most suitable location with you, including your workplace when that helps tell the story of your business.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Quick Turnaround</h3>
                <p className="text-muted-foreground">I’ll agree the editing and delivery timescale with you before the session.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Flexible Packages</h3>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Professional Business Photography?</h2>
            <p className="text-lg mb-8 opacity-90">Let’s create professional imagery that represents your West Lothian business well.</p>
            <a href="/contact" className="inline-block bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Schedule a Consultation
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

