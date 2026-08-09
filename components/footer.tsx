import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, AtSign } from 'lucide-react'
import { getTrustedClientAriaLabel, trustedClientLinks } from '@/lib/trusted-client-links'

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 2h-3a6 6 0 0 0-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 0 1 2-2h1z" />
    </svg>
  )
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socials = [
    { icon: FacebookIcon, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61553562716650' },
    { icon: AtSign, label: 'Instagram', href: 'https://www.instagram.com/bearmedia70/' },
    { icon: TikTokIcon, label: 'TikTok', href: 'https://www.tiktok.com/@bearmediascotland' },
    { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/garrylynch70' },
    { icon: YouTubeIcon, label: 'YouTube', href: 'https://www.youtube.com/@bearmedia70' },
  ]

  const trustedClients = [
    { name: 'C&G Developments', logo: '/07-%20CLIENT%20LOGOS/c%26g.webp', href: trustedClientLinks.cgDevelopments },
    { name: 'Simply Sheds Scotland', logo: '/07- CLIENT LOGOS/simply sheds.webp', href: trustedClientLinks.simplySheds },
    { name: 'Master Chefs', logo: '/07- CLIENT LOGOS/master chefs.webp', href: trustedClientLinks.masterChefs },
    { name: 'Seamus Corry', logo: '/07- CLIENT LOGOS/seamus.webp', href: trustedClientLinks.seamusCorry },
  ]

  return (
    <footer className="bg-secondary">
      {/* Services Line */}
      <div className="border-b border-border bg-background/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <p className="text-center text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Photography • Video • Drone • Websites • Social Media • AI
          </p>
        </div>
      </div>

      {/* Trusted Partners Strip */}
      <div className="border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 md:py-12">
          <p className="text-center text-xs font-medium text-muted-foreground uppercase tracking-wider mb-6">
            Trusted by Businesses Across Scotland
          </p>
          <div className="grid grid-cols-2 items-center gap-3 rounded-3xl bg-white p-3 ring-1 ring-border/70 sm:grid-cols-4 sm:gap-4 sm:p-4">
            {trustedClients.map((client) => (
              <a
                key={client.name}
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={getTrustedClientAriaLabel(client.name)}
                className="group relative flex h-24 items-center justify-center rounded-2xl px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:h-28 md:h-32"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  height={88}
                  width={180}
                  sizes="(max-width: 640px) 45vw, 180px"
                  className="max-h-16 w-auto object-contain opacity-75 transition-all duration-300 group-hover:scale-[1.03] group-hover:opacity-100 sm:max-h-20 md:max-h-24"
                  loading="lazy"
                  unoptimized
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 mb-12">
          {/* Column 1: Bear Media */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Bear Media</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Premium creative services for businesses across Scotland. Photography, video, websites, and social media management.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2.5 bg-accent text-foreground text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
            <div className="flex items-center gap-2 mt-6">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider text-foreground mb-5">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services#photography-service" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Photography</Link></li>
              <li><Link href="/video-production-west-lothian" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Video Production</Link></li>
              <li><Link href="/services#website-service" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Websites</Link></li>
              <li><Link href="/services#social-service" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Social Media</Link></li>
              <li><Link href="/content-creation-west-lothian" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Content Creation</Link></li>
              <li><Link href="/services#drone-service" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Drone Services</Link></li>
              <li><Link href="/training" className="text-sm text-muted-foreground hover:text-foreground transition-colors">AI &amp; Canva Training</Link></li>
            </ul>
          </div>

          {/* Column 3: Explore */}
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider text-foreground mb-5">Explore</h3>
            <ul className="space-y-3">
              <li><Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</Link></li>
              <li><Link href="/insights" className="text-sm text-muted-foreground hover:text-foreground transition-colors">The Bear Media Journal</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider text-foreground mb-5">Get In Touch</h3>
            <div className="space-y-4">
              <a href="tel:+447879011860" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <span>07879 011860</span>
              </a>
              <a href="mailto:info@bear-media.com" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <span>info@bear-media.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <span>West Lothian, Scotland</span>
              </div>
            </div>
          </div>

          {/* Column 5: Policies */}
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider text-foreground mb-5">Policies</h3>
            <ul className="space-y-3">
              <li><Link href="/terms-and-conditions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex items-center justify-center">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {currentYear} Bear Media • Founded by Garry Lynch • Built in Scotland
          </p>
        </div>
      </div>
    </footer>
  )
}
