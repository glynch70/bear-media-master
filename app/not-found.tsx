import Link from 'next/link'
import { RedesignFooter, RedesignHeader } from './redesign/redesign-chrome'

export default function NotFound() {
  return (
    <>
      <RedesignHeader surface />
      <main className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="text-4xl font-medium tracking-tight">Page not found</h1>
        <p className="my-5">You can browse my recent projects or get in touch about your own.</p>
        <div className="flex flex-wrap gap-6">
          <Link className="inline-flex min-h-11 items-center underline" href="/projects">View recent work</Link>
          <Link className="inline-flex min-h-11 items-center underline" href="/contact">Talk to Garry</Link>
        </div>
      </main>
      <RedesignFooter />
    </>
  )
}
