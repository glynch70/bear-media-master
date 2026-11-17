import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { concepts } from '@/components/website-design-studio'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Try the websites | Bear Media',
  description: 'Explore three working website concepts by Garry at Bear Media, then get in touch about a website for your business.',
  path: '/try-the-websites',
})

const enquiry = '/contact?service=websites#enquiry'

export default function TryTheWebsites() {
  return (
    <main className="min-h-screen bg-[#101110] text-white">
      <div className="mx-auto max-w-6xl px-5 pb-16 sm:px-9">
        <header className="flex items-center justify-between border-b border-white/20 py-5">
          <Link href="/" aria-label="Bear Media home" className="text-lg font-black tracking-tight">BEAR MEDIA</Link>
          <Link href={enquiry} className="rounded-sm bg-[#ffdc16] px-4 py-3 text-sm font-bold text-black">Contact Bear Media</Link>
        </header>
        <h1 className="mt-10 text-5xl font-black uppercase leading-none tracking-tighter sm:mt-16 sm:text-8xl">Try the websites</h1>
        <p className="mt-4 max-w-xl text-lg text-stone-200">I built three working demos. Pick one and try it on your phone.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {concepts.map(({ name, industry, tagline, url, image, alt }) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer"
              className="group overflow-hidden rounded-lg border border-white/20 bg-[#191b19] hover:border-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-300">
              <Image src={image} alt={alt} width={1440} height={1000} sizes="(min-width: 768px) 33vw, 100vw" className="block h-auto w-full" />
              <div className="p-5">
                <p className="text-sm text-stone-300">{industry}</p>
                <h2 className="my-1 text-4xl font-black tracking-tight">{name}</h2>
                <p className="text-stone-200">{tagline}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-bold text-[#ffdc16]">Try {name} <ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></span>
              </div>
            </a>
          ))}
        </div>
        <section className="mt-12 border-t border-white/20 pt-8">
          <h2 className="text-3xl font-bold tracking-tight">What would work for your business?</h2>
          <p className="my-4 max-w-xl text-stone-200">Tell me what you do and what you’d like visitors to do on your website. I’ll get back to you with ideas.</p>
          <Link href={enquiry} className="inline-flex items-center gap-2 rounded-sm bg-[#ffdc16] px-5 py-3 font-bold text-black">Enquire about a website <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </section>
      </div>
    </main>
  )
}
