import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ServiceSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Business Photography in West Lothian | Bear Media',
  description: 'Business photography in West Lothian for companies that need professional headshots, team photos, workplace photography and brand imagery.',
  openGraph: {
    title: 'Business Photography in West Lothian | Bear Media',
    description: 'Corporate headshots, team photos and workplace photography for West Lothian businesses.',
    url: 'https://bear-media.com/business-photography-west-lothian',
    siteName: 'Bear Media',
    images: [{ url: 'https://bear-media.com/assets/brand/og-image.jpg', width: 1200, height: 630, alt: 'Business Photography in West Lothian', type: 'image/jpeg' }],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Photography in West Lothian | Bear Media',
    description: 'Professional business photography for West Lothian companies.',
    images: ['https://bear-media.com/assets/brand/og-image.jpg'],
    creator: '@bearmediascot',
  },
  alternates: {
    canonical: 'https://bear-media.com/business-photography-west-lothian',
  },
}

export default function BusinessPhotographyWestLothian() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <ServiceSchema name="Business Photography in West Lothian" description="Professional business photography, corporate headshots, and team photography" areaServed="West Lothian" provider="Bear Media" />

        <section className="bg-gradient-to-b from-background to-muted py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Professional Business Photography in West Lothian</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Strengthen your professional image with high-quality business photography. From corporate headshots to team photos and workplace imagery, we help West Lothian businesses present themselves professionally.
            </p>
            <a href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Book Your Session
            </a>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Professional Photography Builds Trust</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Across West Lothian, professional photography matters. Whether you're building your company website, creating LinkedIn profiles, or updating marketing materials, quality business photography communicates professionalism and builds credibility with potential clients and customers.
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
                <p className="text-muted-foreground">Group photos that showcase your West Lothian team's professionalism and culture. Great for websites and annual reports.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Workplace Photography</h3>
                <p className="text-muted-foreground">Authentic photographs of your workplace, staff at work, and company culture. Show clients what your business is really about.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Corporate Events</h3>
                <p className="text-muted-foreground">Professional coverage of company events, conferences, and corporate gatherings in West Lothian.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Product & Service Photography</h3>
                <p className="text-muted-foreground">Professional photography of your products or services to use across marketing channels and your website.</p>
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
                <p className="text-muted-foreground">We've photographed dozens of West Lothian businesses and understand what works for professional imagery.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Professional Direction</h3>
                <p className="text-muted-foreground">We guide subjects to look their best, creating flattering, professional images that boost confidence.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Studio & On-Location</h3>
                <p className="text-muted-foreground">We can work in our studio or at your West Lothian workplace, whichever works best for your needs.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Quick Turnaround</h3>
                <p className="text-muted-foreground">Fast editing and delivery so you can use your photos quickly across your marketing channels.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Flexible Packages</h3>
                <p className="text-muted-foreground">Whether you need one headshot or a full day of workplace photography, we have flexible options.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Business Photography FAQs</h2>
            <div className="space-y-8">
              <details className="border-b pb-6 cursor-pointer">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">How much do professional headshots cost?</summary>
                <p className="text-muted-foreground">Headshot pricing varies based on how many people you need photographed. We offer packages starting at various price points and can give you a quote based on your needs.</p>
              </details>
              <details className="border-b pb-6 cursor-pointer">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">How long does a headshot session take?</summary>
                <p className="text-muted-foreground">A typical headshot session takes 30-60 minutes per person, depending on how many outfit changes and variations you want.</p>
              </details>
              <details className="border-b pb-6 cursor-pointer">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">Can we do group photos?</summary>
                <p className="text-muted-foreground">Absolutely. We specialize in team photos and can work with groups of any size at your West Lothian location or our studio.</p>
              </details>
              <details className="border-b pb-6 cursor-pointer">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">Do you provide retouching?</summary>
                <p className="text-muted-foreground">Yes, professional retouching is included. We enhance images tastefully to look professional without being overdone.</p>
              </details>
              <details className="border-b pb-6 cursor-pointer">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">How quickly will I get my photos?</summary>
                <p className="text-muted-foreground">Typically within 1-2 weeks of your session. Rush delivery available for additional cost if needed.</p>
              </details>
              <details className="border-b pb-6 cursor-pointer">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">What should we wear for business photos?</summary>
                <p className="text-muted-foreground">We recommend business or business-casual attire in solid colors. We'll give you detailed guidance before your session.</p>
              </details>
              <details className="border-b pb-6 cursor-pointer">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">Can we do photos at our workplace?</summary>
                <p className="text-muted-foreground">Yes! On-location photography at your West Lothian office or workplace is part of what we offer. This shows your actual work environment.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Professional Business Photography?</h2>
            <p className="text-lg mb-8 opacity-90">Let's create professional imagery that represents your West Lothian business well.</p>
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
