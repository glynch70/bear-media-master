import desktop from '@/components/desktop-refresh.module.css'
import { DesktopServiceImage } from '@/components/desktop-service-image'
import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ServiceSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Content Creation West Lothian | Bear Media',
  description: 'Content creation in West Lothian covering photography, video and visual content for local businesses.',
  openGraph: {
    title: 'Content Creation West Lothian | Bear Media',
    description: 'Photography, videography and content creation for West Lothian businesses.',
    url: 'https://bear-media.com/content-creation-west-lothian',
    siteName: 'Bear Media',
    images: [{ url: 'https://bear-media.com/assets/brand/og-image.jpg', width: 1200, height: 630, alt: 'Content Creation Services in West Lothian', type: 'image/jpeg' }],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content Creation West Lothian | Bear Media',
    description: 'Professional content creation for West Lothian businesses.',
    images: ['https://bear-media.com/assets/brand/og-image.jpg'],
    creator: '@bearmediascot',
  },
  alternates: {
    canonical: 'https://bear-media.com/content-creation-west-lothian',
  },
}

export default function ContentCreationWestLothian() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className={`flex-1 ${desktop.standardPage} ${desktop.simpleService} ${desktop.servicePage}`}>
        <ServiceSchema name="Content Creation West Lothian" description="Photography, video and visual content creation for businesses across West Lothian" areaServed="West Lothian" provider="Bear Media" />

        <section className="bg-gradient-to-b from-background to-muted py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Content Creation West Lothian</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              I create useful visual content for West Lothian businesses, including photography, video and drone content where it fits the brief.
            </p>
            <a href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Start Creating Content
            </a>
          </div>
          <DesktopServiceImage src="/assets/services/photography-garry-setup.webp" alt="Garry setting up a Bear Media photography session" />
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Professional Content Matters</h2>
            <p className="text-lg text-muted-foreground mb-6">
              I create photography, video and visual content for businesses in Broxburn, Livingston, Linlithgow and across West Lothian. The work is planned around your audience, your message and where you need to use the finished content.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">My Content Creation Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Product Photography</h3>
                <p className="text-muted-foreground">Professional photography that showcases your products in the best light. Perfect for e-commerce, catalogues, and social media.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Business Photography</h3>
                <p className="text-muted-foreground">Corporate headshots, team photos, and workplace imagery that builds your professional brand.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Videography</h3>
                <p className="text-muted-foreground">Professional video content from concept to final edit. Website videos, testimonials, social media content, and promotional videos.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Drone Photography & Video</h3>
                <p className="text-muted-foreground">Aerial perspectives for properties, events, and landscapes. Unique visual content that captures attention.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Graphic Design</h3>
                <p className="text-muted-foreground">Custom graphics, social media designs, infographics, and visual assets for all your marketing needs.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Social Media Content</h3>
                <p className="text-muted-foreground">Professionally created content optimized for Instagram, Facebook, TikTok, and LinkedIn to keep your West Lothian audience engaged.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Benefits of Professional Content</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">Higher Engagement</h3>
                  <p className="text-muted-foreground">Visual content gets more likes, shares, and comments than text alone.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">Better Conversions</h3>
                  <p className="text-muted-foreground">Quality images and videos help turn interested viewers into paying customers.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">Brand Building</h3>
                  <p className="text-muted-foreground">Consistent, professional imagery strengthens your brand identity in West Lothian.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">SEO Benefits</h3>
                  <p className="text-muted-foreground">Optimized images and videos improve your search engine rankings.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-bold mb-2">Time Savings</h3>
                  <p className="text-muted-foreground">Let me handle the creative work while you focus on running your business.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Why Choose Bear Media for Content Creation?</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Professional Equipment</h3>
                <p className="text-muted-foreground">State-of-the-art cameras, drones, lighting, and editing equipment ensure professional-quality results.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Creative Expertise</h3>
                <p className="text-muted-foreground">I create photography and video around your goals, audience and the places where you need to use the finished content.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Local Knowledge</h3>
                <p className="text-muted-foreground">I’m based in West Lothian and can capture your business in a way that feels specific to you and your customers.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Fast Turnaround</h3>
                <p className="text-muted-foreground">I’ll agree a practical schedule with you before the shoot and keep the delivery plan clear.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Content Creation FAQs</h2>
            <div className="space-y-8">
              <details className="border-b pb-6 cursor-pointer">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">What types of content do you create?</summary>
                <p className="text-muted-foreground">I provide photography, video and drone content, with the scope agreed around what your business actually needs.</p>
              </details>
              <details className="border-b pb-6 cursor-pointer">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">How much does professional photography cost?</summary>
                <p className="text-muted-foreground">Pricing depends on the scope of work. I’ll provide a clear proposal based on the photography, video or other agreed content you need.</p>
              </details>
              <details className="border-b pb-6 cursor-pointer">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">Can you do drone photography in West Lothian?</summary>
                <p className="text-muted-foreground">Drone content can be discussed as part of a wider project where the location and intended use make it a good fit.</p>
              </details>
              <details className="border-b pb-6 cursor-pointer">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">Do you include editing and retouching?</summary>
                <p className="text-muted-foreground">I edit the agreed photography and video so the finished content is ready for your website, social media or marketing materials.</p>
              </details>
              <details className="border-b pb-6 cursor-pointer">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">How quickly can you turn around content?</summary>
                <p className="text-muted-foreground">The timeline depends on the scope. I’ll discuss delivery expectations with you before the work begins.</p>
              </details>
              <details className="border-b pb-6 cursor-pointer">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">Can I use the content on all platforms?</summary>
                <p className="text-muted-foreground">I’ll confirm the agreed deliverables and usage as part of the project proposal.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Professional Content?</h2>
            <p className="text-lg mb-8 opacity-90">Let's create compelling visual content that showcases your West Lothian business.</p>
            <a href="/contact" className="inline-block bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Schedule a Shoot
            </a>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Related Services in West Lothian</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/social-media-west-lothian" className="p-6 border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-bold mb-2">Social Media Management</h3>
                <p className="text-sm text-muted-foreground">I create content for the platforms and channels you use</p>
              </a>
              <a href="/website-design-west-lothian" className="p-6 border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-bold mb-2">Website Design</h3>
                <p className="text-sm text-muted-foreground">Professional websites to showcase your content</p>
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
