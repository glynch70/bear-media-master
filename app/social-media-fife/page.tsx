import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ServiceSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Social Media Management Services in Fife | Bear Media',
  description: 'Professional social media management for Fife businesses. Grow your audience and engage your Fife customers with proven social media strategies tailored for the region.',
  openGraph: {
    title: 'Social Media Management Services in Fife | Bear Media',
    description: 'Professional social media management for Fife businesses. Grow your audience and increase engagement.',
    url: 'https://bear-media.com/social-media-fife',
    siteName: 'Bear Media',
    images: [
      {
        url: 'https://bear-media.com/assets/brand/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Social Media Management in Fife',
        type: 'image/jpeg',
      },
    ],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Management Services in Fife | Bear Media',
    description: 'Professional social media management for Fife businesses',
    images: ['https://bear-media.com/assets/brand/og-image.jpg'],
    creator: '@bearmediascot',
  },
  alternates: {
    canonical: 'https://bear-media.com/social-media-fife',
  },
}

export default function SocialMediaFife() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <ServiceSchema name="Social Media Management in Fife" description="Professional social media management services for Fife businesses" areaServed="Fife" provider="Bear Media" />
        <section className="bg-gradient-to-b from-background to-muted py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Social Media Management Services in Fife</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">Grow your Fife business's online presence with professional social media management. We help businesses across Fife engage their audience, build community, and drive results on social platforms.</p>
            <a href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Get Started Today</a>
          </div>
        </section>
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Social Media for Fife Businesses</h2>
            <p className="text-lg text-muted-foreground mb-6">Fife's diverse business landscape—from coastal tourism to manufacturing and professional services—makes social media essential for reaching your customers. Whether you're in Dunfermline, Kirkcaldy, St Andrews, or elsewhere in Fife, your audience is on social media every day.</p>
            <p className="text-lg text-muted-foreground mb-6">Bear Media specializes in social media strategies designed for Fife businesses. We understand the local market and create content that resonates with Fife audiences.</p>
          </div>
        </section>
        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Our Social Media Management Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div><h3 className="text-xl font-bold mb-3">Content Strategy & Planning</h3><p className="text-muted-foreground">Strategies tailored to your Fife business, identifying your target audience and creating content calendars that align with goals.</p></div>
              <div><h3 className="text-xl font-bold mb-3">Content Creation & Design</h3><p className="text-muted-foreground">Professional photography, videography, and graphic design created for your social platforms. Local imagery for Fife audiences.</p></div>
              <div><h3 className="text-xl font-bold mb-3">Community Management</h3><p className="text-muted-foreground">Active management, responding to comments, and building a loyal community around your Fife brand.</p></div>
              <div><h3 className="text-xl font-bold mb-3">Performance Analytics</h3><p className="text-muted-foreground">Monthly reports tracking engagement, reach, and conversions with data-driven insights.</p></div>
              <div><h3 className="text-xl font-bold mb-3">Paid Social Advertising</h3><p className="text-muted-foreground">Strategic campaigns targeting Fife residents on Facebook, Instagram, and LinkedIn.</p></div>
              <div><h3 className="text-xl font-bold mb-3">Local Engagement</h3><p className="text-muted-foreground">Leverage Fife events, community initiatives, and regional trends for relevant, engaging content.</p></div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Benefits of Professional Social Media Management</h2>
            <ul className="space-y-6">
              <li className="flex gap-4"><span className="text-primary font-bold text-xl">✓</span><div><h3 className="font-bold mb-2">Increased Brand Awareness</h3><p className="text-muted-foreground">Build recognition across Fife with consistent, professional social presence.</p></div></li>
              <li className="flex gap-4"><span className="text-primary font-bold text-xl">✓</span><div><h3 className="font-bold mb-2">Higher Engagement Rates</h3><p className="text-muted-foreground">Professional content leads to meaningful interactions with your Fife audience.</p></div></li>
              <li className="flex gap-4"><span className="text-primary font-bold text-xl">✓</span><div><h3 className="font-bold mb-2">More Qualified Leads</h3><p className="text-muted-foreground">Targeted strategies drive interested Fife residents to your business.</p></div></li>
              <li className="flex gap-4"><span className="text-primary font-bold text-xl">✓</span><div><h3 className="font-bold mb-2">Improved Customer Loyalty</h3><p className="text-muted-foreground">Active engagement builds lasting relationships with your Fife customers.</p></div></li>
              <li className="flex gap-4"><span className="text-primary font-bold text-xl">✓</span><div><h3 className="font-bold mb-2">Better Local Search Performance</h3><p className="text-muted-foreground">Social signals boost your local SEO for Fife searches.</p></div></li>
              <li className="flex gap-4"><span className="text-primary font-bold text-xl">✓</span><div><h3 className="font-bold mb-2">Time Savings</h3><p className="text-muted-foreground">Let us handle social media while you focus on your Fife business.</p></div></li>
            </ul>
          </div>
        </section>
        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Why Choose Bear Media for Fife Social Media?</h2>
            <div className="space-y-8">
              <div><h3 className="text-xl font-bold mb-3">Central Scotland Expertise</h3><p className="text-muted-foreground">Based in West Lothian, we understand the Fife market and Central Scotland landscape.</p></div>
              <div><h3 className="text-xl font-bold mb-3">Proven Track Record</h3><p className="text-muted-foreground">Successfully managed social media for Fife businesses with measurable results.</p></div>
              <div><h3 className="text-xl font-bold mb-3">Creative Excellence</h3><p className="text-muted-foreground">Professional content created specifically for your Fife brand and audience.</p></div>
              <div><h3 className="text-xl font-bold mb-3">Results-Focused Approach</h3><p className="text-muted-foreground">Every campaign designed with measurable goals and transparent monthly reporting.</p></div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">FAQs About Fife Social Media</h2>
            <div className="space-y-6">
              <details className="border-b pb-6"><summary className="font-bold text-lg mb-3 hover:text-primary">How long does it take to see results?</summary><p className="text-muted-foreground">Engagement improves within weeks. Significant business impact typically takes 3-6 months.</p></details>
              <details className="border-b pb-6"><summary className="font-bold text-lg mb-3 hover:text-primary">Which platforms should my Fife business use?</summary><p className="text-muted-foreground">Most benefit from Facebook and Instagram. LinkedIn for B2B, TikTok for younger audiences. We'll recommend for your business.</p></details>
              <details className="border-b pb-6"><summary className="font-bold text-lg mb-3 hover:text-primary">Can you manage multiple accounts?</summary><p className="text-muted-foreground">Yes, all accounts managed from one strategy with consistent messaging optimized per platform.</p></details>
              <details className="border-b pb-6"><summary className="font-bold text-lg mb-3 hover:text-primary">Do you handle paid advertising?</summary><p className="text-muted-foreground">Absolutely. Strategic paid campaigns targeting Fife residents with optimized ROI.</p></details>
              <details className="border-b pb-6"><summary className="font-bold text-lg mb-3 hover:text-primary">How do you measure success?</summary><p className="text-muted-foreground">We track followers, engagement, reach, conversions, and tie to your business goals with monthly reports.</p></details>
              <details className="border-b pb-6"><summary className="font-bold text-lg mb-3 hover:text-primary">Do you create original content?</summary><p className="text-muted-foreground">Yes, original professional content including photography, videography, and copywriting.</p></details>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 px-4 md:px-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Fife Business on Social Media?</h2>
            <p className="text-lg mb-8 opacity-90">Let's discuss how professional social media management can help your Fife business reach more customers.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Schedule Consultation</a>
              <a href="/projects" className="border-2 border-current px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">View Our Work</a>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Related Services for Fife Businesses</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/website-design-fife" className="p-6 border rounded-lg hover:border-primary transition-colors"><h3 className="font-bold mb-2">Website Design</h3><p className="text-sm text-muted-foreground">Professional web design for Fife businesses</p></a>
              <a href="/content-creation-fife" className="p-6 border rounded-lg hover:border-primary transition-colors"><h3 className="font-bold mb-2">Content Creation</h3><p className="text-sm text-muted-foreground">Professional photography and videography</p></a>
              <a href="/services" className="p-6 border rounded-lg hover:border-primary transition-colors"><h3 className="font-bold mb-2">All Services</h3><p className="text-sm text-muted-foreground">View all services across Scotland</p></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
