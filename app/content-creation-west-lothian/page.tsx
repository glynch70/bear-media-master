import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ServiceSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Content Creation in West Lothian | Bear Media',
  description: 'Professional content creation in West Lothian: photography, video and visual content that helps local businesses tell their story and engage customers.',
  openGraph: {
    title: 'Content Creation in West Lothian | Bear Media',
    description: 'Photography, videography and content creation for West Lothian businesses.',
    url: 'https://bear-media.com/content-creation-west-lothian',
    siteName: 'Bear Media',
    images: [{ url: 'https://bear-media.com/assets/brand/og-image.jpg', width: 1200, height: 630, alt: 'Content Creation Services in West Lothian', type: 'image/jpeg' }],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content Creation in West Lothian | Bear Media',
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
      <main className="flex-1">
        <ServiceSchema name="Content Creation in West Lothian" description="Professional photography, videography, and content creation services" areaServed="West Lothian" provider="Bear Media" />

        <section className="bg-gradient-to-b from-background to-muted py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Professional Content Creation in West Lothian</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              High-quality visual content is essential for engaging your West Lothian audience. From professional photography and videography to drone services and graphic design, we create compelling content that tells your story.
            </p>
            <a href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Start Creating Content
            </a>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Professional Content Matters</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Across West Lothian, businesses compete for attention. Professional content sets you apart. Whether you need stunning product photography, engaging videos for social media, or drone footage to showcase your property, quality content drives engagement and builds trust with your audience.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Our Content Creation Services</h2>
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
                  <p className="text-muted-foreground">Let us handle the creative work while you focus on running your business.</p>
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
                <p className="text-muted-foreground">Our creative team brings years of experience creating content that works. Every photo and video is crafted with your goals in mind.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Local Knowledge</h3>
                <p className="text-muted-foreground">We know West Lothian and what resonates with local audiences. We'll capture your business in the best possible light.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Fast Turnaround</h3>
                <p className="text-muted-foreground">We understand you need content quickly. Quick turnarounds without sacrificing quality.</p>
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
                <p className="text-muted-foreground">We create photography, videography, drone content, graphic design, social media content, and more. We're a full-service creative agency.</p>
              </details>
              <details className="border-b pb-6 cursor-pointer">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">How much does professional photography cost?</summary>
                <p className="text-muted-foreground">Pricing depends on the scope of work. A few hours of photography might be one price, while a full day or video production would be different. We offer flexible packages to fit various budgets.</p>
              </details>
              <details className="border-b pb-6 cursor-pointer">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">Can you do drone photography in West Lothian?</summary>
                <p className="text-muted-foreground">Yes! We're fully licensed and insured for drone operations. We can capture aerial footage for properties, events, landscapes, and more.</p>
              </details>
              <details className="border-b pb-6 cursor-pointer">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">Do you include editing and retouching?</summary>
                <p className="text-muted-foreground">Absolutely. Professional editing is included with all our photography and video services. We ensure every image and video looks its absolute best.</p>
              </details>
              <details className="border-b pb-6 cursor-pointer">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">How quickly can you turn around content?</summary>
                <p className="text-muted-foreground">Depends on the project scope. Simple photography might be ready in a few days, while more complex video projects take longer. We'll discuss timeline expectations upfront.</p>
              </details>
              <details className="border-b pb-6 cursor-pointer">
                <summary className="font-bold text-lg mb-3 hover:text-primary transition-colors">Can I use the content on all platforms?</summary>
                <p className="text-muted-foreground">Yes! All content we create is yours to use across your website, social media, marketing materials, and beyond.</p>
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
                <p className="text-sm text-muted-foreground">We create and share your content across all platforms</p>
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
