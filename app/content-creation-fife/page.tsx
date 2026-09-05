import desktop from '@/components/desktop-refresh.module.css'
import { DesktopServiceImage } from '@/components/desktop-service-image'
import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ServiceSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Content Creation Fife | Photography & Video | Bear Media',
  description: 'Professional photography, video and content creation for Fife businesses, producing high-quality visuals that engage audiences and support growth.',
  openGraph: {
    title: 'Professional Content Creation in Fife | Bear Media',
    description: 'Professional photography, videography, and content creation services for Fife businesses.',
    url: 'https://bear-media.com/content-creation-fife',
    siteName: 'Bear Media',
    images: [
      {
        url: 'https://bear-media.com/assets/brand/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Content Creation Services in Fife',
        type: 'image/jpeg',
      },
    ],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Content Creation in Fife | Bear Media',
    description: 'Professional photography, videography, and content creation services',
    images: ['https://bear-media.com/assets/brand/og-image.jpg'],
    creator: '@bearmediascot',
  },
  alternates: {
    canonical: 'https://bear-media.com/content-creation-fife',
  },
}

export default function ContentCreationFife() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className={`flex-1 ${desktop.standardPage} ${desktop.simpleService} ${desktop.servicePage}`}>
        <ServiceSchema name="Content Creation in Fife" description="Professional photography, videography, and content creation services" areaServed="Fife" provider="Bear Media" />
        <section className="bg-gradient-to-b from-background to-muted py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Professional Content Creation in Fife</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">High-quality visual content is essential for engaging Fife audiences. Professional photography, videography, and graphic design that tells your story and drives engagement.</p>
            <a href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Start Creating Content</a>
          </div>
          <DesktopServiceImage src="/assets/services/photography-garry-setup.webp" alt="Garry setting up a Bear Media photography session" />
        </section>
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Professional Content Matters for Fife Businesses</h2>
            <p className="text-lg text-muted-foreground mb-6">Fife's business community is diverse and dynamic. Professional content sets you apart. Whether you need product photography, engaging videos, or corporate imagery, quality content drives engagement and builds trust with your Fife audience.</p>
          </div>
        </section>
        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Our Content Creation Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div><h3 className="text-xl font-bold mb-3">Product Photography</h3><p className="text-muted-foreground">Professional photography showcasing your products beautifully for e-commerce and marketing.</p></div>
              <div><h3 className="text-xl font-bold mb-3">Business Photography</h3><p className="text-muted-foreground">Corporate headshots, team photos, and workplace imagery building your professional brand.</p></div>
              <div><h3 className="text-xl font-bold mb-3">Videography</h3><p className="text-muted-foreground">Professional video from concept to edit. Website videos, testimonials, social content, promotional videos.</p></div>
              <div><h3 className="text-xl font-bold mb-3">Drone Photography</h3><p className="text-muted-foreground">Licensed aerial perspectives for Fife properties, events, and landscapes.</p></div>
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
              <li className="flex gap-4"><span className="text-primary font-bold text-xl">✓</span><div><h3 className="font-bold mb-2">Brand Building</h3><p className="text-muted-foreground">Consistent, professional imagery strengthens your Fife brand identity.</p></div></li>
              <li className="flex gap-4"><span className="text-primary font-bold text-xl">✓</span><div><h3 className="font-bold mb-2">SEO Benefits</h3><p className="text-muted-foreground">Optimized images and videos improve your search rankings.</p></div></li>
              <li className="flex gap-4"><span className="text-primary font-bold text-xl">✓</span><div><h3 className="font-bold mb-2">Time Savings</h3><p className="text-muted-foreground">Let us handle the creative work while you focus on your business.</p></div></li>
            </ul>
          </div>
        </section>
        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Why Choose Bear Media for Fife Content?</h2>
            <div className="space-y-8">
              <div><h3 className="text-xl font-bold mb-3">Professional Equipment</h3><p className="text-muted-foreground">State-of-the-art cameras, drones, lighting, and editing equipment ensure professional results.</p></div>
              <div><h3 className="text-xl font-bold mb-3">Creative Expertise</h3><p className="text-muted-foreground">Years of experience creating content that works for Fife audiences.</p></div>
              <div><h3 className="text-xl font-bold mb-3">Local Knowledge</h3><p className="text-muted-foreground">We understand Fife and what resonates with local audiences.</p></div>
              <div><h3 className="text-xl font-bold mb-3">Fast Turnaround</h3><p className="text-muted-foreground">Quick delivery without sacrificing quality.</p></div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Content Creation FAQs</h2>
            <div className="space-y-6">
              <details className="border-b pb-6"><summary className="font-bold text-lg mb-3 hover:text-primary">What types of content do you create?</summary><p className="text-muted-foreground">Photography, videography, drone content, graphic design, social media content, and more.</p></details>
              <details className="border-b pb-6"><summary className="font-bold text-lg mb-3 hover:text-primary">How much does professional photography cost?</summary><p className="text-muted-foreground">Pricing depends on scope. We offer flexible packages to fit various budgets.</p></details>
              <details className="border-b pb-6"><summary className="font-bold text-lg mb-3 hover:text-primary">Can you do drone photography in Fife?</summary><p className="text-muted-foreground">Yes, we're fully licensed and insured for drone operations across Fife.</p></details>
              <details className="border-b pb-6"><summary className="font-bold text-lg mb-3 hover:text-primary">Do you include editing and retouching?</summary><p className="text-muted-foreground">Yes, professional editing is included with all photography and video services.</p></details>
              <details className="border-b pb-6"><summary className="font-bold text-lg mb-3 hover:text-primary">How quickly can you turn around content?</summary><p className="text-muted-foreground">Simple photography in days, more complex video projects take longer. We'll discuss timeline upfront.</p></details>
              <details className="border-b pb-6"><summary className="font-bold text-lg mb-3 hover:text-primary">Can I use the content on all platforms?</summary><p className="text-muted-foreground">Yes, all content you commission is yours to use across all your marketing channels.</p></details>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 px-4 md:px-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Professional Content?</h2>
            <p className="text-lg mb-8 opacity-90">Let's create compelling visual content that showcases your Fife business.</p>
            <a href="/contact" className="inline-block bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Schedule a Shoot</a>
          </div>
        </section>
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Related Services for Fife</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/social-media-fife" className="p-6 border rounded-lg hover:border-primary transition-colors"><h3 className="font-bold mb-2">Social Media Management</h3><p className="text-sm text-muted-foreground">We create and share your content across platforms</p></a>
              <a href="/website-design-fife" className="p-6 border rounded-lg hover:border-primary transition-colors"><h3 className="font-bold mb-2">Website Design</h3><p className="text-sm text-muted-foreground">Professional websites to showcase your content</p></a>
              <a href="/services" className="p-6 border rounded-lg hover:border-primary transition-colors"><h3 className="font-bold mb-2">All Services</h3><p className="text-sm text-muted-foreground">View complete service menu</p></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
