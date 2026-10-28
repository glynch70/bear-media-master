import desktop from '@/components/desktop-refresh.module.css'
import { DesktopServiceImage } from '@/components/desktop-service-image'
import type { Metadata } from 'next'
import { RedesignHeader as Navigation, RedesignFooter as Footer } from '@/app/redesign/redesign-chrome'
import Link from '@/components/site-link'
import { SocialSupportOffer } from '@/components/services/social-support-offer'
import { FAQPageSchema, ServiceSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Social Media Management Services in Edinburgh | Bear Media',
  description: 'Social media management for Edinburgh businesses, with strategy, content creation and engagement to grow your audience and strengthen your brand.',
  openGraph: {
    title: 'Social Media Management Services in Edinburgh | Bear Media',
    description: 'Professional social media management for Edinburgh businesses. Grow your audience and increase engagement with proven strategies.',
    url: 'https://bear-media.com/social-media-edinburgh',
    siteName: 'Bear Media',
    images: [{ url: 'https://bear-media.com/brand/bear-media-social-share.jpg', width: 1200, height: 630, alt: 'Social Media Management in Edinburgh', type: 'image/jpeg' }],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Management Services in Edinburgh | Bear Media',
    description: 'Professional social media management for Edinburgh businesses',
    images: ['https://bear-media.com/brand/bear-media-social-share.jpg'],
  },
  alternates: {
    canonical: 'https://bear-media.com/social-media-edinburgh',
  },
}

const faqs = [
  {
    question: "How long does it take to see results from social media management?",
    answer: "There is no fixed timetable for enquiries or sales. I agree useful measures with you at the start, then review the content, audience response, website clicks and enquiries over time.",
  },
  {
    question: "Which platforms should my Edinburgh business be on?",
    answer: "That depends on your customers, the content you can produce and what you want to achieve. I’ll review your existing accounts and recommend the channels worth maintaining before agreeing a posting plan.",
  },
  {
    question: "Can you manage multiple social media accounts?",
    answer: "Yes. I can manage an agreed set of accounts using one content plan. The channels, posting frequency, approvals and level of account support are set out before work starts.",
  },
  {
    question: "Do you handle paid social advertising?",
    answer: "Paid campaigns can be discussed separately if they fit the plan. Campaign work and advertising spend are scoped separately from regular content and account management.",
  },
  {
    question: "How do you measure social media success?",
    answer: "I agree measures such as reach, engagement, website clicks and enquiries with you. Reporting focuses on those goals and what to adjust, with results interpreted alongside the wider activity in your business.",
  },
  {
    question: "Can you create original content for my Edinburgh business?",
    answer: "Yes. I create original photography, video and captions, and can also work with useful content you already have. Shoot visits, editing and the number of posts are agreed as part of the scope.",
  },
] as const

export default function SocialMediaEdinburgh() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation surface />
      <main className={`flex-1 ${desktop.standardPage} ${desktop.simpleService} ${desktop.servicePage}`}>
        <ServiceSchema
          name="Social Media Management in Edinburgh"
          description="Social media planning, original content creation, scheduling and ongoing account support for Edinburgh businesses."
          serviceType="Social media management"
          areaServed="Edinburgh"
          provider="Bear Media"
          url="https://bear-media.com/social-media-edinburgh"
          subjectOf={[
            { name: "C&G Developments Video Case Study", url: 'https://bear-media.com/projects/cg-developments' },
          ]}
        />
        <FAQPageSchema questions={faqs} url="https://bear-media.com/social-media-edinburgh" />

        <section className="bg-gradient-to-b from-background to-muted py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Social Media Management Services in Edinburgh</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Transform your Edinburgh business's online presence with professional social media management. We help businesses across the Scottish capital engage their audience, build community, and drive real results on social platforms.
            </p>
            <Link href="/contact?service=social#enquiry" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Get Started Today
            </Link>
          </div>
          <DesktopServiceImage src="/services/social media/Built the Right Way.webp" alt="Built the Right Way social content created by Bear Media" />
        </section>

        <SocialSupportOffer />

        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Social Media for Edinburgh Businesses</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Edinburgh's business landscape is vibrant and competitive. With a thriving tourism industry, creative sector, and diverse local businesses, social media has become essential for standing out. Whether you're in the city centre, Leith, or the outskirts of Edinburgh, your customers are on social media every day.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Bear Media specializes in creating and managing social media strategies specifically designed for Edinburgh businesses. We understand the local market, the competitive landscape, and what resonates with Edinburgh audiences.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Our Social Media Management Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Content Strategy & Planning</h3>
                <p className="text-muted-foreground">Comprehensive strategies tailored to your Edinburgh business, identifying your target audience and creating content calendars that align with your goals.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Content Creation & Design</h3>
                <p className="text-muted-foreground">Professional photography, videography, and graphic design created specifically for your social platforms. Local imagery that resonates with Edinburgh audiences.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Community Management</h3>
                <p className="text-muted-foreground">Active management of your social channels, responding to comments and building a loyal community around your Edinburgh brand.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Performance Analytics</h3>
                <p className="text-muted-foreground">Monthly reports tracking engagement, reach, follower growth, and conversions with data-driven insights for improvement.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Paid Social Advertising</h3>
                <p className="text-muted-foreground">Strategic campaigns targeting Edinburgh residents on Facebook, Instagram, and LinkedIn to maximize ROI.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Local Engagement</h3>
                <p className="text-muted-foreground">Leverage Edinburgh events, community initiatives, and regional trends to keep your content relevant and engaging.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Benefits of Social Media Management</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">Increased Brand Awareness</h3>
                  <p className="text-muted-foreground">Build recognition across Edinburgh with consistent, professional presence on all major social platforms.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">Useful Project Stories</h3>
                  <p className="text-muted-foreground">Show real projects and answer useful customer questions through agreed photography and content.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">A Clear Enquiry Route</h3>
                  <p className="text-muted-foreground">Give interested people a clear way to enquire, and record those enquiries separately from views and clicks.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">Updates for Existing Customers</h3>
                  <p className="text-muted-foreground">Keep existing customers informed through relevant posts about your work and services.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">More Ways to Discover Your Work</h3>
                  <p className="text-muted-foreground">Useful content gives people more ways to discover your work and visit your website. We will track agreed actions and enquiries.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">Time and Resource Savings</h3>
                  <p className="text-muted-foreground">Let me handle your social media so you can focus on your Edinburgh business.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Why Choose Bear Media for Edinburgh Social Media?</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Central Scotland Expertise</h3>
                <p className="text-muted-foreground">Based in West Lothian, we understand the Edinburgh market and Central Scotland landscape. We know your competition and what works for Edinburgh businesses.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Proven Track Record</h3>
                <p className="text-muted-foreground">We've successfully managed social media for Edinburgh businesses, delivering measurable results in follower growth, engagement, and conversions.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Creative Excellence</h3>
                <p className="text-muted-foreground">Professional photography, videography, and graphic design specifically created for your Edinburgh brand.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Results-Focused Approach</h3>
                <p className="text-muted-foreground">Every campaign is designed with measurable goals, and we provide transparent monthly reporting showing your ROI.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">FAQs About Edinburgh Social Media</h2>
            <div className="space-y-6">
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
                <p className="text-muted-foreground">{faqs[5].answer} <a href="/projects/cg-developments" className="text-primary underline underline-offset-4">See the C&amp;G Developments project.</a></p>
              </details>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Edinburgh Business on Social Media?</h2>
            <p className="text-lg mb-8 opacity-90">Let's discuss how professional social media management can help your Edinburgh business reach more customers.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?service=social#enquiry" className="bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Schedule Consultation
              </Link>
              <a href="/projects" className="border-2 border-current px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                View Our Work
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Related Services for Edinburgh Businesses</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/website-design-edinburgh" className="p-6 border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-bold mb-2">Website Design</h3>
                <p className="text-sm text-muted-foreground">Professional web design for Edinburgh businesses</p>
              </a>
              <a href="/content-creation-edinburgh" className="p-6 border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-bold mb-2">Content Creation</h3>
                <p className="text-sm text-muted-foreground">Professional photography and videography</p>
              </a>
              <a href="/services" className="p-6 border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-bold mb-2">All Services</h3>
                <p className="text-sm text-muted-foreground">View all services across Scotland</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

