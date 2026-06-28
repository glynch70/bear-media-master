import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { LocalBusinessSchema, ServiceSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Social Media Management Services in West Lothian | Bear Media',
  description: 'Professional social media management for West Lothian businesses. Grow your audience, increase engagement, and build your brand with Bear Media\'s proven social media strategies.',
  openGraph: {
    title: 'Social Media Management Services in West Lothian | Bear Media',
    description: 'Professional social media management for West Lothian businesses. Grow your audience, increase engagement, and build your brand with Bear Media\'s proven social media strategies.',
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
    title: 'Social Media Management Services in West Lothian | Bear Media',
    description: 'Professional social media management for West Lothian businesses. Grow your audience and increase engagement.',
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
      <main className="flex-1">
        <ServiceSchema
          name="Social Media Management in West Lothian"
          description="Professional social media management services for West Lothian businesses"
          areaServed="West Lothian"
          provider="Bear Media"
        />

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-muted py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Social Media Management Services in West Lothian
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Transform your online presence with professional social media management tailored for West Lothian businesses. Across to Linlithgow, we help local companies engage their audience, build community, and drive real results on social platforms.
            </p>
            <a href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Get Started Today
            </a>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Social Media Matters for West Lothian Businesses</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Social media has become essential for business success. Whether you're based in Livingston, Linlithgow, or elsewhere in West Lothian, your customers are on social platforms every single day. But managing multiple social channels effectively takes time, strategy, and expertise that many business owners simply don't have.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Bear Media specializes in creating and managing social media strategies specifically designed for local West Lothian businesses. We understand the unique market dynamics of West Lothian, from the business landscape in Livingston to the community-focused approach needed in smaller towns like Linlithgow and Broxburn.
            </p>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Our Social Media Management Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Content Strategy & Planning</h3>
                <p className="text-muted-foreground">
                  We develop comprehensive social media strategies tailored to your West Lothian business, identifying your target audience and creating content calendars that align with your goals.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Content Creation & Design</h3>
                <p className="text-muted-foreground">
                  Professional photography, videography, and graphic design specifically created for your social platforms. Local imagery and authentic storytelling that resonates with West Lothian audiences.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Community Management</h3>
                <p className="text-muted-foreground">
                  We actively manage your social channels, responding to comments, engaging with followers, and building a loyal community around your brand in West Lothian and beyond.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Performance Analytics</h3>
                <p className="text-muted-foreground">
                  Monthly reports tracking key metrics like engagement, reach, follower growth, and conversions. Data-driven insights to continuously improve your social media performance.
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
                  We leverage local events, community initiatives, and regional trends to keep your content relevant and engaging for your West Lothian customer base.
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
                    Let us handle your social media so you can focus on running your West Lothian business.
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
                  Based in West Lothian, we understand the local market. We know your community, from Livingston's thriving business hub to the close-knit communities of Linlithgow and beyond. This local knowledge translates into better strategy and more authentic engagement.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Proven Track Record</h3>
                <p className="text-muted-foreground">
                  We've successfully managed social media for dozens of West Lothian businesses, delivering measurable results in follower growth, engagement, and conversions. View our <a href="/projects" className="text-primary hover:underline">portfolio of successful projects</a>.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Creative Excellence</h3>
                <p className="text-muted-foreground">
                  Our in-house team produces professional photography, videography, and graphic design. Every piece of content is tailored to your brand and optimized for social media performance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Results-Focused Approach</h3>
                <p className="text-muted-foreground">
                  We don't just create content—we drive business results. Every campaign is designed with measurable goals in mind, and we provide transparent monthly reporting to show your ROI.
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
                  Pricing varies depending on your specific needs, the number of platforms, and the level of content creation required. We offer flexible packages starting at various price points to suit small businesses through to larger West Lothian companies. Contact us for a personalized quote based on your goals and budget.
                </p>
              </details>

              <details className="border-b pb-6 cursor-pointer group">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">
                  How long does it take to see results from social media management?
                </summary>
                <p className="text-muted-foreground">
                  Some metrics improve quickly—engagement and reach can show improvement within weeks. However, building a loyal following and achieving significant business impact typically takes 3-6 months. We'll provide regular reporting so you can see progress every step of the way.
                </p>
              </details>

              <details className="border-b pb-6 cursor-pointer group">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">
                  Which social media platforms should my West Lothian business be on?
                </summary>
                <p className="text-muted-foreground">
                  This depends on your target audience and business type. Most businesses benefit from Facebook and Instagram. LinkedIn is valuable for B2B companies, while TikTok may work for younger-focused businesses. We'll audit your situation and recommend the best platforms for your West Lothian business.
                </p>
              </details>

              <details className="border-b pb-6 cursor-pointer group">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">
                  Can you help with paid social media advertising for West Lothian?
                </summary>
                <p className="text-muted-foreground">
                  Absolutely. We manage paid campaigns on Facebook, Instagram, and LinkedIn with strategic targeting to reach West Lothian residents and surrounding areas. We optimize ad spend for maximum ROI and provide detailed performance reporting.
                </p>
              </details>

              <details className="border-b pb-6 cursor-pointer group">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">
                  How do you measure social media success?
                </summary>
                <p className="text-muted-foreground">
                  We track metrics including follower growth, engagement rate, reach, impressions, click-through rates, and conversions. More importantly, we tie these metrics to your actual business goals—whether that's lead generation, website traffic, or sales. Monthly reports show exactly how social media is contributing to your bottom line.
                </p>
              </details>

              <details className="border-b pb-6 cursor-pointer group">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">
                  Do you create original content or reuse existing content?
                </summary>
                <p className="text-muted-foreground">
                  We create original, professional content specifically for your social channels. This includes custom photography, videography, graphic design, and copywriting. Authentic content performs better and helps your West Lothian business stand out from competitors.
                </p>
              </details>

              <details className="border-b pb-6 cursor-pointer group">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">
                  Can you manage social media if we already have existing accounts?
                </summary>
                <p className="text-muted-foreground">
                  Yes! We can take over management of your existing social accounts and improve them. We'll audit your current performance, implement a new strategy, and build on what's already working.
                </p>
              </details>

              <details className="border-b pb-6 cursor-pointer group">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">
                  How often should we post on social media?
                </summary>
                <p className="text-muted-foreground">
                  The ideal posting frequency depends on your platform and audience. Generally, we recommend 3-5 times per week on Instagram and 1-2 times daily on Facebook. Quality always trumps quantity—we focus on posting content that resonates with your West Lothian audience rather than just keeping a high posting volume.
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
              Let's discuss how professional social media management can help your business reach more customers in West Lothian, Edinburgh, Fife, and across central Scotland.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Schedule Consultation
              </a>
              <a href="/projects" className="border-2 border-current px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                View Our Work
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
