import desktop from '@/components/desktop-refresh.module.css'
import { DesktopServiceImage } from '@/components/desktop-service-image'
import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ServiceSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Social Media West Lothian | Bear Media',
  description: 'Social media management in West Lothian covering planning, content creation and ongoing support for local businesses.',
  openGraph: {
    title: 'Social Media West Lothian | Bear Media',
    description: 'Professional social media management and content creation for West Lothian businesses.',
    url: 'https://bear-media.com/social-media-west-lothian',
    siteName: 'Bear Media',
    images: [
      {
        url: 'https://bear-media.com/assets/brand/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Social Media Management in West Lothian',
        type: 'image/jpeg',
      },
    ],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media West Lothian | Bear Media',
    description: 'Social media management for West Lothian businesses.',
    images: ['https://bear-media.com/assets/brand/og-image.jpg'],
    creator: '@bearmediascot',
  },
  alternates: {
    canonical: 'https://bear-media.com/social-media-west-lothian',
  },
}

export default function SocialMediaWestLothian() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className={`flex-1 ${desktop.standardPage} ${desktop.simpleService} ${desktop.servicePage}`}>
        <ServiceSchema
          name="Social Media West Lothian"
          description="Social media planning, content creation and ongoing support for businesses across West Lothian"
          areaServed="West Lothian"
          provider="Bear Media"
        />

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-muted py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Social Media West Lothian
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Practical social media management for West Lothian businesses, from Livingston and Broxburn to Linlithgow. I can help you plan, create and manage content that gives your audience a reason to pay attention.
            </p>
            <a href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Get Started Today
            </a>
          </div>
          <DesktopServiceImage src="/services/social media/Built the Right Way.webp" alt="Built the Right Way social content created by Bear Media" />
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Social Media Matters for West Lothian Businesses</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Social media has become essential for business success. Whether you're based in Livingston, Linlithgow, or elsewhere in West Lothian, your customers are on social platforms every single day. But managing multiple social channels effectively takes time, strategy, and expertise that many business owners simply don't have.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Bear Media is an independent service led by me. I understand the difference between posting for the sake of it and creating useful content for a local business, from Livingston’s business community to the more local audiences around Linlithgow and Broxburn.
            </p>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">My Social Media Management Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Content Strategy & Planning</h3>
                <p className="text-muted-foreground">
                  I develop a practical social media plan around your West Lothian business, audience and goals.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Content Creation & Design</h3>
                <p className="text-muted-foreground">
                  Photography, video and visual content shaped for the social platforms you use, with local context and a clear purpose.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Community Management</h3>
                <p className="text-muted-foreground">
                  I can manage the agreed social channels, including planned publishing and engagement where that is part of the scope.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Performance Analytics</h3>
                <p className="text-muted-foreground">
                  Clear reporting on the agreed measures, so you can see what is being created, published and learned over time.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Paid Social Advertising</h3>
                <p className="text-muted-foreground">
                  Strategic paid campaigns on Facebook, Instagram, and LinkedIn targeting West Lothian residents. Maximize ROI with professionally managed ad spend.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Local Engagement</h3>
                <p className="text-muted-foreground">
                  I can use relevant local events, community activity and regional context when they make sense for your audience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Benefits of Professional Social Media Management</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">Increased Brand Awareness</h3>
                  <p className="text-muted-foreground">
                    Build recognition across West Lothian with consistent, professional presence on all major social platforms.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">Higher Engagement Rates</h3>
                  <p className="text-muted-foreground">
                    Professionally crafted content and active community management lead to meaningful interactions with your audience.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">More Qualified Leads</h3>
                  <p className="text-muted-foreground">
                    Targeted social media strategies drive the right people to your business—locals in West Lothian who are genuinely interested in your services.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">Improved Customer Loyalty</h3>
                  <p className="text-muted-foreground">
                    Active engagement and valuable content help build lasting relationships with your West Lothian customers.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">Better Local Search Performance</h3>
                  <p className="text-muted-foreground">
                    Social signals boost your local SEO, helping West Lothian residents find your business when searching for services.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">Time and Resource Savings</h3>
                  <p className="text-muted-foreground">
                  Let me handle the agreed social media work so you can focus on running your West Lothian business.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Why Choose Bear Media */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Why Choose Bear Media for West Lothian Social Media?</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Local Expertise</h3>
                <p className="text-muted-foreground">
                  I’m based in West Lothian and understand the difference between reaching people locally and simply posting more often. I can shape the work around your community, from Livingston and Broxburn to Linlithgow and beyond.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Proven Track Record</h3>
                <p className="text-muted-foreground">
                  I’ll agree the aims and measures with you before the work begins. You can also view <a href="/projects" className="text-primary hover:underline">selected Bear Media projects</a>.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Creative Excellence</h3>
                <p className="text-muted-foreground">
                  I can create photography and video for your social channels, with the format and content tailored to your brand and the platforms you use.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Results-Focused Approach</h3>
                <p className="text-muted-foreground">
                  I’ll connect the content to practical goals and report on the agreed measures, without promising results that cannot be guaranteed in advance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Personalized Service</h3>
                <p className="text-muted-foreground">
                  You'll work directly with Garry Lynch, founder of Bear Media, ensuring your West Lothian business gets personalized attention and expert guidance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <details className="border-b pb-6 cursor-pointer group">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">
                  How much does social media management cost for a West Lothian business?
                </summary>
                <p className="text-muted-foreground">
                  Pricing depends on the platforms, content and level of support involved. Contact me with your goals and I’ll scope the right level of work.
                </p>
              </details>

              <details className="border-b pb-6 cursor-pointer group">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">
                  How long does it take to see results from social media management?
                </summary>
                <p className="text-muted-foreground">
                  Some measures can move quickly, while a useful audience takes time to build. I’ll agree realistic measures and reporting with you rather than promise a fixed result.
                </p>
              </details>

              <details className="border-b pb-6 cursor-pointer group">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">
                  Which social media platforms should my West Lothian business be on?
                </summary>
                <p className="text-muted-foreground">
                  This depends on your audience and business type. I’ll review what you are trying to achieve and recommend the platforms that fit, rather than spreading the work everywhere.
                </p>
              </details>

              <details className="border-b pb-6 cursor-pointer group">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">
                  Can you help with paid social media advertising for West Lothian?
                </summary>
                <p className="text-muted-foreground">
                  Paid social can be discussed separately when it is a suitable part of the plan. Any campaign scope, budget and reporting would be agreed before launch.
                </p>
              </details>

              <details className="border-b pb-6 cursor-pointer group">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">
                  How do you measure social media success?
                </summary>
                <p className="text-muted-foreground">
                  I can track agreed measures such as reach, engagement, clicks and enquiries, then connect them to the goals that matter to your business.
                </p>
              </details>

              <details className="border-b pb-6 cursor-pointer group">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">
                  Do you create original content or reuse existing content?
                </summary>
                <p className="text-muted-foreground">
                  I can create original photography, video and copy for your social channels, with the deliverables agreed around your needs.
                </p>
              </details>

              <details className="border-b pb-6 cursor-pointer group">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">
                  Can you manage social media if we already have existing accounts?
                </summary>
                <p className="text-muted-foreground">
                  Yes. I can review your existing accounts and work with what is already useful, then agree the next practical steps with you.
                </p>
              </details>

              <details className="border-b pb-6 cursor-pointer group">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">
                  How often should we post on social media?
                </summary>
                <p className="text-muted-foreground">
                  The right frequency depends on your platform, audience and available content. I’d rather set a sustainable rhythm than promise a volume that does not suit your business.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your West Lothian Business on Social Media?</h2>
            <p className="text-lg mb-8 opacity-90">
              Let’s discuss how a practical social media plan could support your business in West Lothian and the surrounding area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Schedule Consultation
              </a>
              <a href="/projects" className="border-2 border-current px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                View My Work
              </a>
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Related Services in West Lothian</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/website-design-west-lothian" className="p-6 border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-bold mb-2">Website Design</h3>
                <p className="text-sm text-muted-foreground">Professional web design services for West Lothian businesses</p>
              </a>
              <a href="/content-creation-west-lothian" className="p-6 border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-bold mb-2">Content Creation</h3>
                <p className="text-sm text-muted-foreground">Professional photography and videography services</p>
              </a>
              <a href="/services" className="p-6 border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-bold mb-2">All Services</h3>
                <p className="text-sm text-muted-foreground">View all Bear Media services across Scotland</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
