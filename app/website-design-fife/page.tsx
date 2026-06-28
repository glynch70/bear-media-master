import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ServiceSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Professional Website Design in Fife | Bear Media',
  description: 'Custom website design for Fife businesses. Mobile-responsive, SEO-optimized websites that drive results. Serving Dunfermline, Kirkcaldy, St Andrews, and across Fife.',
  openGraph: {
    title: 'Professional Website Design in Fife | Bear Media',
    description: 'Custom website design for Fife businesses. Mobile-responsive, SEO-optimized websites.',
    url: 'https://bear-media.com/website-design-fife',
    siteName: 'Bear Media',
    images: [
      {
        url: 'https://bear-media.com/assets/brand/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Website Design Services in Fife',
        type: 'image/jpeg',
      },
    ],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Website Design in Fife | Bear Media',
    description: 'Custom website design for Fife businesses',
    images: ['https://bear-media.com/assets/brand/og-image.jpg'],
    creator: '@bearmediascot',
  },
  alternates: {
    canonical: 'https://bear-media.com/website-design-fife',
  },
}

export default function WebsiteDesignFife() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <ServiceSchema name="Website Design in Fife" description="Professional website design services for Fife businesses" areaServed="Fife" provider="Bear Media" />
        <section className="bg-gradient-to-b from-background to-muted py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Professional Website Design for Fife Businesses</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">Your website is your digital storefront. We create stunning, SEO-optimized websites for Fife companies that represent your business professionally and drive real results.</p>
            <a href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Start Your Project</a>
          </div>
        </section>
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Your Website is Your Best Salesperson</h2>
            <p className="text-lg text-muted-foreground mb-6">Fife businesses compete across diverse markets—from tourism to manufacturing, professional services to retail. Your website needs to stand out and convert visitors. Many Fife businesses rely on outdated websites that don't reflect their professionalism.</p>
            <p className="text-lg text-muted-foreground mb-6">At Bear Media, we design modern websites that showcase your Fife business professionally and drive results.</p>
          </div>
        </section>
        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Our Website Design Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div><h3 className="text-xl font-bold mb-3">Responsive Design</h3><p className="text-muted-foreground">Websites that look perfect on all devices. Mobile optimization essential for Fife customers.</p></div>
              <div><h3 className="text-xl font-bold mb-3">SEO-Optimized</h3><p className="text-muted-foreground">Built for search engines from the ground up. Rank higher for Fife-specific keywords.</p></div>
              <div><h3 className="text-xl font-bold mb-3">Fast Performance</h3><p className="text-muted-foreground">Speed matters for conversion and SEO. Our websites load quickly and perform optimally.</p></div>
              <div><h3 className="text-xl font-bold mb-3">Custom Design</h3><p className="text-muted-foreground">No templates. Every website custom designed to reflect your unique Fife brand.</p></div>
              <div><h3 className="text-xl font-bold mb-3">Content Management</h3><p className="text-muted-foreground">Easy-to-update CMS so you manage your website without technical skills.</p></div>
              <div><h3 className="text-xl font-bold mb-3">Lead Generation</h3><p className="text-muted-foreground">Strategic design to convert website visitors into customers and leads.</p></div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Benefits of Professional Website Design</h2>
            <ul className="space-y-6">
              <li className="flex gap-4"><span className="text-primary font-bold text-xl">✓</span><div><h3 className="font-bold mb-2">Build Credibility</h3><p className="text-muted-foreground">Professional design builds trust with Fife customers and stakeholders.</p></div></li>
              <li className="flex gap-4"><span className="text-primary font-bold text-xl">✓</span><div><h3 className="font-bold mb-2">24/7 Marketing</h3><p className="text-muted-foreground">Your website works around the clock, showcasing your business and generating leads.</p></div></li>
              <li className="flex gap-4"><span className="text-primary font-bold text-xl">✓</span><div><h3 className="font-bold mb-2">Reach More Customers</h3><p className="text-muted-foreground">SEO-optimized websites make it easier for Fife residents to find you online.</p></div></li>
              <li className="flex gap-4"><span className="text-primary font-bold text-xl">✓</span><div><h3 className="font-bold mb-2">Control Your Message</h3><p className="text-muted-foreground">Tell your story and highlight what makes your Fife business unique.</p></div></li>
              <li className="flex gap-4"><span className="text-primary font-bold text-xl">✓</span><div><h3 className="font-bold mb-2">Lower Overhead</h3><p className="text-muted-foreground">Efficiently handle inquiries and provide information without additional staff.</p></div></li>
              <li className="flex gap-4"><span className="text-primary font-bold text-xl">✓</span><div><h3 className="font-bold mb-2">Mobile Ready</h3><p className="text-muted-foreground">Mobile-responsive design ensures your site works for Fife mobile users.</p></div></li>
            </ul>
          </div>
        </section>
        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Why Choose Bear Media for Your Fife Website?</h2>
            <div className="space-y-8">
              <div><h3 className="text-xl font-bold mb-3">Central Scotland Expertise</h3><p className="text-muted-foreground">We understand the Fife market and competitive landscape.</p></div>
              <div><h3 className="text-xl font-bold mb-3">Modern Technology Stack</h3><p className="text-muted-foreground">We build with latest technologies, ensuring your site is fast, secure, and future-proof.</p></div>
              <div><h3 className="text-xl font-bold mb-3">SEO Expertise</h3><p className="text-muted-foreground">Every website optimized for search engines so your Fife business ranks higher.</p></div>
              <div><h3 className="text-xl font-bold mb-3">Conversion Focused</h3><p className="text-muted-foreground">We build websites that convert visitors into customers, not just portfolios.</p></div>
              <div><h3 className="text-xl font-bold mb-3">Ongoing Support</h3><p className="text-muted-foreground">We provide maintenance, updates, and support to keep your Fife website secure and performing.</p></div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Website Design FAQs</h2>
            <div className="space-y-6">
              <details className="border-b pb-6"><summary className="font-bold text-lg mb-3 hover:text-primary">How much does a website cost?</summary><p className="text-muted-foreground">Website costs vary based on complexity. We offer flexible options for different budgets and needs.</p></details>
              <details className="border-b pb-6"><summary className="font-bold text-lg mb-3 hover:text-primary">How long does it take to build?</summary><p className="text-muted-foreground">Typically 4-8 weeks for a complete website project. Simpler sites may be faster.</p></details>
              <details className="border-b pb-6"><summary className="font-bold text-lg mb-3 hover:text-primary">Can you redesign my existing website?</summary><p className="text-muted-foreground">Yes, we can audit and redesign your current site with modern technology and better UX.</p></details>
              <details className="border-b pb-6"><summary className="font-bold text-lg mb-3 hover:text-primary">Is your design mobile-friendly?</summary><p className="text-muted-foreground">Yes, 100%. Every website is fully responsive and optimized for mobile devices.</p></details>
              <details className="border-b pb-6"><summary className="font-bold text-lg mb-3 hover:text-primary">Do you handle SEO?</summary><p className="text-muted-foreground">Our websites are built with SEO best practices. We offer ongoing SEO services too.</p></details>
              <details className="border-b pb-6"><summary className="font-bold text-lg mb-3 hover:text-primary">Can I update content myself?</summary><p className="text-muted-foreground">Yes, we use easy-to-use CMS platforms so you can update content without technical skills.</p></details>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 px-4 md:px-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a Professional Website?</h2>
            <p className="text-lg mb-8 opacity-90">Let's create a website that represents your Fife business professionally and drives results.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Get a Free Quote</a>
              <a href="/projects" className="border-2 border-current px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">See Our Websites</a>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Related Services for Fife</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/social-media-fife" className="p-6 border rounded-lg hover:border-primary transition-colors"><h3 className="font-bold mb-2">Social Media Management</h3><p className="text-sm text-muted-foreground">Grow your audience on social platforms</p></a>
              <a href="/content-creation-fife" className="p-6 border rounded-lg hover:border-primary transition-colors"><h3 className="font-bold mb-2">Content Creation</h3><p className="text-sm text-muted-foreground">Professional photography and videography</p></a>
              <a href="/services" className="p-6 border rounded-lg hover:border-primary transition-colors"><h3 className="font-bold mb-2">All Services</h3><p className="text-sm text-muted-foreground">View complete service list</p></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
