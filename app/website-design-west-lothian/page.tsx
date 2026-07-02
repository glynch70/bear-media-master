import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ServiceSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Professional Website Design in West Lothian | Bear Media',
  description: 'Custom website design for West Lothian businesses. Mobile-responsive, SEO-optimized websites that convert visitors into customers. Serving Livingston, Linlithgow and beyond.',
  openGraph: {
    title: 'Professional Website Design in West Lothian | Bear Media',
    description: 'Custom website design for West Lothian businesses. Mobile-responsive, SEO-optimized websites that convert visitors into customers.',
    url: 'https://bear-media.com/website-design-west-lothian',
    siteName: 'Bear Media',
    images: [
      {
        url: 'https://bear-media.com/assets/brand/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Website Design Services in West Lothian',
        type: 'image/jpeg',
      },
    ],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Website Design in West Lothian | Bear Media',
    description: 'Custom website design for West Lothian businesses. Mobile-responsive, SEO-optimized websites that convert.',
    images: ['https://bear-media.com/assets/brand/og-image.jpg'],
    creator: '@bearmediascot',
  },
  alternates: {
    canonical: 'https://bear-media.com/website-design-west-lothian',
  },
}

export default function WebsiteDesignWestLothian() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <ServiceSchema
          name="Website Design in West Lothian"
          description="Professional website design services for West Lothian businesses"
          areaServed="West Lothian"
          provider="Bear Media"
        />

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-muted py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Professional Website Design for West Lothian Businesses
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Your website is often the first impression potential customers get of your business. We create stunning, functional websites for West Lothian companies that not only look professional but drive real business results.
            </p>
            <a href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Start Your Project
            </a>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Your Website is Your Best Salesperson</h2>
            <p className="text-lg text-muted-foreground mb-6">
              In today's digital-first world, your website is often the first touchpoint between your business and potential customers. Whether someone is searching for your services in Livingston, Linlithgow, or exploring options across West Lothian, your website needs to make an outstanding impression.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Many West Lothian businesses still rely on outdated websites that don't reflect their professionalism or convert visitors into customers. At Bear Media, we design modern, responsive websites that showcase your business and drive results.
            </p>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Our Website Design Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Responsive Design</h3>
                <p className="text-muted-foreground">
                  Websites that look perfect on all devices—from smartphones to desktop computers. More West Lothian residents are browsing on mobile, so your site must be mobile-first.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">SEO-Optimized</h3>
                <p className="text-muted-foreground">
                  Built for search engines from the ground up. We ensure your West Lothian business ranks for local keywords like "website design near Broxburn" or "affordable websites in Livingston."
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Fast Performance</h3>
                <p className="text-muted-foreground">
                  Speed matters. Our websites load quickly, keeping visitors engaged and improving your search engine rankings for the West Lothian market.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Custom Design</h3>
                <p className="text-muted-foreground">
                  No templates or one-size-fits-all solutions. Every website is custom designed to reflect your unique brand and business goals.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Content Management</h3>
                <p className="text-muted-foreground">
                  Easy-to-update CMS so you can manage your content without technical knowledge. Keep your West Lothian business website current and relevant.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Lead Generation</h3>
                <p className="text-muted-foreground">
                  Strategic calls-to-action, contact forms, and conversion optimization designed to turn website visitors into customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Why a Professional Website Matters for West Lothian Businesses</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">Build Credibility</h3>
                  <p className="text-muted-foreground">
                    A professional website instantly builds trust with West Lothian customers and differentiates you from competitors.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">24/7 Marketing</h3>
                  <p className="text-muted-foreground">
                    Your website works around the clock, showcasing your business and generating leads even while you sleep.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">Reach More Customers</h3>
                  <p className="text-muted-foreground">
                    An SEO-optimized website makes it easier for West Lothian residents to find you when searching for your services online.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">Control Your Message</h3>
                  <p className="text-muted-foreground">
                    Your website is your platform to tell your story and highlight what makes your West Lothian business unique.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">Lower Overhead</h3>
                  <p className="text-muted-foreground">
                    Efficiently handle inquiries, reduce manual work, and provide information to customers without additional staff.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">Mobile Ready</h3>
                  <p className="text-muted-foreground">
                    With most West Lothian residents using smartphones, a mobile-responsive website is no longer optional—it's essential.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Why Choose Bear Media */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Why Choose Bear Media for Your West Lothian Website?</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Local Understanding</h3>
                <p className="text-muted-foreground">
                  Based in we understand the West Lothian market. We know what works for local businesses and can apply that knowledge to your project.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Modern Technology Stack</h3>
                <p className="text-muted-foreground">
                  We build websites using the latest technologies and best practices, ensuring your site is fast, secure, and future-proof.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">SEO Expertise</h3>
                <p className="text-muted-foreground">
                  Every website we create is built with search engine optimization in mind. We want your West Lothian business to rank higher for relevant keywords.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Conversion Focused</h3>
                <p className="text-muted-foreground">
                  We don't just build pretty websites—we build websites that convert. Every design decision is made with your business goals in mind.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Ongoing Support</h3>
                <p className="text-muted-foreground">
                  Your website is an investment that requires care. We provide ongoing maintenance, updates, and support to keep your West Lothian business website secure and performing optimally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Website Design FAQs</h2>
            <div className="space-y-8">
              <details className="border-b pb-6 cursor-pointer group">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">
                  How much does a website cost for a West Lothian business?
                </summary>
                <p className="text-muted-foreground">
                  Website costs vary based on complexity and features. A basic business website might start around one price point, while more complex e-commerce or custom solutions would be higher. We offer flexible options to fit different budgets and can discuss your specific needs.
                </p>
              </details>

              <details className="border-b pb-6 cursor-pointer group">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">
                  How long does it take to build a website?
                </summary>
                <p className="text-muted-foreground">
                  A typical website project takes 4-8 weeks from initial consultation to launch. This allows time for design, development, content creation, testing, and revisions. Simpler sites may be faster, while more complex projects may take longer.
                </p>
              </details>

              <details className="border-b pb-6 cursor-pointer group">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">
                  Can you redesign my existing West Lothian business website?
                </summary>
                <p className="text-muted-foreground">
                  Absolutely. We can audit your current website and recommend improvements, then redesign it with modern technology and better user experience. We'll maintain any important SEO equity while improving performance.
                </p>
              </details>

              <details className="border-b pb-6 cursor-pointer group">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">
                  Is your website design mobile-friendly?
                </summary>
                <p className="text-muted-foreground">
                  Yes, 100%. Every website we build is fully responsive and optimized for mobile devices. This is essential for West Lothian businesses since most local searches now happen on smartphones.
                </p>
              </details>

              <details className="border-b pb-6 cursor-pointer group">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">
                  Do you handle SEO for the website?
                </summary>
                <p className="text-muted-foreground">
                  Our websites are built with SEO best practices from the ground up. Technical SEO is included. For ongoing keyword optimization and content strategy, we offer additional SEO services.
                </p>
              </details>

              <details className="border-b pb-6 cursor-pointer group">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">
                  What if I need to update content on my website?
                </summary>
                <p className="text-muted-foreground">
                  We build websites on content management systems (CMS) that make updates easy, even if you don't have technical skills. We can also provide training or handle updates for you.
                </p>
              </details>

              <details className="border-b pb-6 cursor-pointer group">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">
                  Do you offer hosting and domain services?
                </summary>
                <p className="text-muted-foreground">
                  We can help you get set up with hosting and ensure everything runs smoothly. We work with reliable hosting providers to keep your West Lothian business website online and performing well.
                </p>
              </details>

              <details className="border-b pb-6 cursor-pointer group">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">
                  Can you integrate e-commerce functionality?
                </summary>
                <p className="text-muted-foreground">
                  Yes. If your West Lothian business sells products online, we can build a full e-commerce solution with payment processing, inventory management, and customer features.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a Professional Website?</h2>
            <p className="text-lg mb-8 opacity-90">
              Let's create a website that represents your West Lothian business professionally and drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Get a Free Quote
              </a>
              <a href="/projects" className="border-2 border-current px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                See Our Websites
              </a>
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Related Services in West Lothian</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/social-media-west-lothian" className="p-6 border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-bold mb-2">Social Media Management</h3>
                <p className="text-sm text-muted-foreground">Grow your audience on Facebook, Instagram, and more</p>
              </a>
              <a href="/content-creation-west-lothian" className="p-6 border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-bold mb-2">Content Creation</h3>
                <p className="text-sm text-muted-foreground">Professional photography and videography</p>
              </a>
              <a href="/services" className="p-6 border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-bold mb-2">All Services</h3>
                <p className="text-sm text-muted-foreground">View complete service list</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
