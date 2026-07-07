import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Footer from '@/components/footer'
import { JournalImage, JournalImageGrid } from '@/components/JournalImage'
import Navigation from '@/components/navigation'
import { BreadcrumbSchema } from '@/components/structured-data'
import { createMetadata, siteUrl } from '@/lib/seo'

const imageBase = '/images/journal/workspace-setup'

export const metadata = {
  ...createMetadata({
    title: 'Workspace Setup for Content Creation | Bear Media Journal',
    description:
      'A look inside the Bear Media workspace setup for content creation, editing, planning and practical AI-assisted production.',
    path: '/journal/workspace-setup',
    image: `${imageBase}/bear-media-workspace-desk-setup-night-01.jpg`,
    imageAlt: 'Bear Media workspace desk setup at night with editing monitors and content creation tools',
  }),
}

export default function WorkspaceSetupJournalPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', url: siteUrl },
        { name: 'The Bear Media Journal', url: `${siteUrl}/insights` },
        { name: 'Workspace Setup', url: `${siteUrl}/journal/workspace-setup` },
      ]} />
      <Navigation />

      <article className="px-6 pt-32 pb-16 md:pt-44 md:pb-24 lg:px-8">
        <div className="mx-auto w-full max-w-[800px]">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to The Bear Media Journal
          </Link>

          <p className="mt-10 text-sm font-medium uppercase tracking-[0.16em] text-accent">
            Workspace Setup
          </p>
          <h1 className="mt-5 font-heading text-5xl font-medium leading-[1.02] tracking-tight text-balance md:text-7xl">
            The desk where Bear Media content gets made
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-foreground/68 md:text-2xl">
            A practical look at the workspace behind the planning, editing, writing and AI-assisted production that keeps client content moving.
          </p>
        </div>

        <JournalImage
          src={`${imageBase}/bear-media-workspace-desk-setup-night-01.jpg`}
          alt="Bear Media desk setup at night with dual monitors, keyboard, mouse and editing tools"
          variant="hero"
          priority
          caption="The main Bear Media workspace: built around fast switching between writing, editing, reviewing and publishing."
          objectPosition="center"
        />

        <div className="mx-auto w-full max-w-[800px] space-y-7 text-lg leading-[1.8] text-foreground/76 md:text-xl md:leading-[1.8]">
          <p>
            Good content rarely comes from one tool. It comes from a setup that makes it easy to move between ideas, footage, notes, client messages and final edits without breaking focus.
          </p>
          <p>
            This workspace is deliberately simple. The monitors keep live projects visible, the notebook catches quick decisions, and the keyboard is close enough that writing can happen the moment an idea is clear.
          </p>
        </div>

        <JournalImage
          src={`${imageBase}/bear-media-content-creation-typing-keyboard-01.jpg`}
          alt="Hands typing on a compact keyboard beside a monitor, microphone, notebook and content planning tools"
          caption="Writing and editing happen side by side, so production notes can become publishable content quickly."
          objectPosition="center"
        />

        <div className="mx-auto w-full max-w-[800px] space-y-7 text-lg leading-[1.8] text-foreground/76 md:text-xl md:leading-[1.8]">
          <p>
            Most Bear Media projects involve a mix of practical production and careful judgement: what to say, what to leave out, what visual actually supports the message, and where the story should slow down.
          </p>
          <p>
            The best workspace is the one that removes friction. When the camera files, AI tools, project notes and website preview are all within reach, the work becomes calmer and more deliberate.
          </p>
        </div>

        <JournalImage
          src={`${imageBase}/bear-media-content-creation-typing-keyboard-02.jpg`}
          alt="Close desk view of content creation in progress with keyboard, monitor, notebook and studio microphone"
          caption="A close working view for drafting, reviewing and refining content before it goes live."
          objectPosition="center"
        />

        <div className="mx-auto w-full max-w-[800px] space-y-7 text-lg leading-[1.8] text-foreground/76 md:text-xl md:leading-[1.8]">
          <p>
            Small details matter: a reliable keyboard, good audio input, visible notes and enough screen space to compare the draft with the final page. It is not about having the most complicated setup. It is about having a setup that supports repeatable creative work.
          </p>
        </div>

        <JournalImageGrid>
          <JournalImage
            src={`${imageBase}/bear-media-workspace-keyboard-closeup-01.jpg`}
            alt="Close-up of the Bear Media keyboard used for writing, editing and content planning"
            className="m-0 h-full max-w-none"
            caption="The keyboard close-up."
            objectPosition="center"
          />
          <JournalImage
            src={`${imageBase}/bear-media-workspace-desk-setup-night-02.jpg`}
            alt="Alternative night view of the Bear Media workspace with monitors, microphone and desk tools"
            className="m-0 h-full max-w-none"
            caption="A second view of the desk setup."
            objectPosition="center"
          />
        </JournalImageGrid>

        <div className="mx-auto w-full max-w-[800px] space-y-7 text-lg leading-[1.8] text-foreground/76 md:text-xl md:leading-[1.8]">
          <p>
            For content creators and business owners, the real lesson is straightforward: make the tools easy to reach, keep the process visible, and design the space around the work you actually do every week.
          </p>
        </div>
      </article>

      <Footer />
    </main>
  )
}
