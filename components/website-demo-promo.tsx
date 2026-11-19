import Image from 'next/image'
import Link from 'next/link'

export default function WebsiteDemoPromo() {
  return <section className="bg-white px-6 py-14 text-neutral-900 md:py-20" aria-labelledby="demo-promo-title">
    <div className="mx-auto max-w-6xl">
      <p className="text-sm font-medium uppercase tracking-wider">Website design by Bear Media</p>
      <h2 id="demo-promo-title" className="mt-4 text-3xl font-medium tracking-tight md:text-5xl">See what your website could look like</h2>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600">Explore North, Still and Form. Three demo websites to help you picture what I could build for your business.</p>
      <div className="mt-7 grid grid-cols-3 gap-3">
        {['north', 'still', 'form'].map(name => <Link key={name} className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-4" href={'/website-design-west-lothian?demo=' + name + '#website-design-studio'} aria-label={'Explore the ' + name + ' demo in the website showcase'}>
          <Image src={'/assets/website-studio/' + name + '.webp'} alt={name.toUpperCase() + ' demo website preview'} width={1440} height={1000} sizes="(max-width: 768px) 30vw, 360px" />
          <span className="flex min-h-11 items-center justify-center px-2 text-sm font-medium">{name.toUpperCase()}</span>
        </Link>)}
      </div>
      <Link href="/website-design-west-lothian#website-design-studio" className="mt-6 inline-flex min-h-12 items-center rounded-full bg-neutral-900 px-6 py-3 text-base font-medium text-white">Explore the demo websites</Link>
      <p className="mt-3 text-sm text-neutral-600">Fictional businesses, created to demonstrate my website work.</p>
    </div>
  </section>
}
