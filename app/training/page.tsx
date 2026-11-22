import Image from 'next/image'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { BreadcrumbSchema, ServiceSchema } from '@/components/structured-data'
import { TrainingEnquiryLink } from '@/components/training/training-enquiry-link'
import { createMetadata, siteUrl } from '@/lib/seo'
import { DemoLab, ProductPicker, SectorPicker, StoryMotion, VoiceDemo, WorkingDay } from './interactions'
import { Enquiry } from './enquiry'
import { PortraitCard } from './portrait-card'
import { TimeValue } from './time-value'
import s from './training.module.css'

const url = `${siteUrl}/training`
const description = 'Practical AI training with Garry Lynch for business professionals. Realistic ChatGPT and Microsoft Copilot examples, in person or online across the UK.'

export const metadata = createMetadata({
  title: 'Practical AI Training for Business Professionals | Bear Media',
  description,
  path: '/training',
  image: '/assets/brand/training-share.jpg',
  imageAlt: 'Practical AI training with Garry Lynch from Bear Media',
})

function StoryStep({ href, children }: { href: string, children: React.ReactNode }) {
  return <a className={s.storyStep} href={href}>
    <span>{children}</span><span className={s.storyArrow}><ArrowDown size={17} aria-hidden="true" /></span>
  </a>
}

export default function TrainingPage() {
  const deliveryConfigured = !!process.env.RESEND_API_KEY
  return <div className={s.page}>
    <a className={s.skip} href="#training-main">Skip to training</a>
    <header className={s.header}>
      <div className={s.headerInner}>
        <a className={s.brand} href={siteUrl}>
          <Image src="/assets/brand/training-wordmark-light.webp" alt="Bear Media" width={480} height={301} sizes="76px" />
          <small>Practical AI training</small>
        </a>
        <nav aria-label="Training navigation">
          <a href="#working-day">The working day</a><a href="#examples">The possibilities</a><a href="#training">The training</a>
        </nav>
        <TrainingEnquiryLink className={s.headerCTA} href="#enquire" placement="header">Enquire <ArrowUpRight size={16} /></TrainingEnquiryLink>
      </div>
      <div className={s.scrollTrack} aria-hidden="true"><span /></div>
    </header>
    <main id="training-main" tabIndex={-1}>
      <StoryMotion />
      <BreadcrumbSchema items={[{ name: 'Home', url: siteUrl }, { name: 'AI training', url }]} />
      <ServiceSchema name="Practical AI Training" description={description} serviceType="Practical AI training" areaServed={['United Kingdom', 'Edinburgh', 'West Lothian', 'East Lothian', 'Midlothian']} provider="Bear Media" url={url} />
      <section className={s.hero} aria-labelledby="hero-title">
        <div className={`${s.shell} ${s.heroGrid}`}>
          <div className={s.heroCopy}>
            <p className={s.kicker}>Bear Media · Practical AI training</p>
            <h1 id="hero-title"><span>Less admin.</span><span>More time for <em>your work.</em></span></h1>

            <p className={s.lede}>Discover how AI can help with emails, meetings, documents, planning and everyday tasks. Practical, hands-on training built around the way you already work.</p>
            <div className={s.actions}><a className={s.darkButton} href="#working-day">See AI in Action <ArrowDown size={17} /></a><TrainingEnquiryLink className={s.outline} href="#enquire" placement="hero">Enquire About Training <ArrowUpRight size={17} /></TrainingEnquiryLink></div>
            <a className={s.priceLink} href="#packages">Three-hour sessions from £750 · No VAT charged <ArrowDown size={14} aria-hidden="true" /></a>
          </div>
          <PortraitCard />
        </div>
        <div className={`${s.shell} ${s.delivery}`}>
          <span>In person across Edinburgh and the Lothians</span><span>Online across the UK</span>
          <a href="#voice">Go straight to the voice demo <ArrowDown size={15} /></a>
        </div>
      </section>

      <section id="working-day" className={`${s.shell} ${s.section} ${s.split} ${s.dayScene}`} aria-labelledby="day-title">
        <span id="everyday" className={s.legacyAnchor} aria-hidden="true" />
        <div className={s.chapterIntro} data-story-beat>
          <p className={s.kicker}>A familiar working day</p>
          <h2 id="day-title">It all lands <em>at once.</em></h2>
          <p>A client changes a meeting. A supplier moves a delivery. The weekly update still needs written.</p>
        </div>
        <div className={s.workingVisual} data-story-beat><WorkingDay /></div>
        <div className={s.dayOutro} data-story-beat>
          <h3>What if some of that became easier?</h3>
          <StoryStep href="#voice">Start with a voice note</StoryStep>
        </div>
      </section>

      <section id="voice" className={`${s.darkSection} ${s.section} ${s.voiceScene}`} aria-labelledby="voice-title">
        <div className={s.shell}>
          <div className={s.sceneIntro} data-story-beat>
            <p className={s.kicker}>Your office on the move</p>
            <h2 id="voice-title">Say it while it’s <em>fresh.</em></h2>
            <p className={s.lede}>Discover how voice conversations can help you capture ideas, organise notes and prepare your next actions while you’re away from your desk.</p>
          </div>
          <div data-story-beat><VoiceDemo /></div>
          <p className={s.note}>This illustrative example uses a synthetic voice, a prepared transcript and drafts. Use voice hands-free only when it is safe and legal, keep your attention on driving, and park safely before reviewing the screen, sending anything or giving approval.</p>
          <StoryStep href="#examples">Back at your desk, try another task</StoryStep>
        </div>
      </section>

      <section id="examples" className={`${s.shell} ${s.section}`} aria-labelledby="demos-title">
        <span id="try" className={s.legacyAnchor} aria-hidden="true" />
        <div className={s.chapterIntro} data-story-beat>
          <p className={s.kicker}>Try AI for yourself</p><h2 id="demos-title">Turn loose ends <em>into next steps.</em></h2>
          <p className={s.lede}>Choose a task and see what a useful first draft could look like.</p>
        </div>
        <div data-story-beat><DemoLab /></div>
        <p className={s.note}>Prepared examples use fictional information. Check facts, figures, tone and commitments before using an AI draft.</p>
        <StoryStep href="#professions">See how it fits your business</StoryStep>
      </section>

      <section className={`${s.tinted} ${s.section}`} id="professions" aria-labelledby="sector-title">
        <div className={s.shell}><div className={s.chapterIntro} data-story-beat><p className={s.kicker}>Choose your profession</p><h2 id="sector-title">Different businesses. <em>Familiar challenges.</em></h2></div>
          <div data-story-beat><SectorPicker /></div><p className={s.note}>Use these examples to prepare work for review. Qualified professionals remain responsible for advice and decisions.</p></div>
      </section>

      <section className={`${s.shell} ${s.section}`} aria-labelledby="products-title">
        <div className={s.chapterIntro} data-story-beat><p className={s.kicker}>ChatGPT, Work &amp; Copilot</p><h2 id="products-title">Pick the tool <em>for the task.</em></h2></div>
        <div data-story-beat><ProductPicker /></div><p className={s.note}>Features depend on your plan, connected services, permissions and organisational settings. Review drafts and give approval where required before third-party actions can proceed.</p>
      </section>

      <section id="your-time" className={`${s.shell} ${s.section}`} aria-labelledby="time-value-title">
        <div className={s.chapterIntro} data-story-beat><p className={s.kicker}>A little time back</p><h2 id="time-value-title">Less admin.<br /><em>More time for you.</em></h2><p className={s.lede}>Another client appointment. An earlier finish. A few holes before dinner. Explore what freeing up some time could mean to you.</p></div>
        <div data-story-beat><TimeValue /></div>
      </section>

      <section id="training" className={`${s.shell} ${s.section}`} aria-labelledby="training-title">
        <span id="how" className={s.legacyAnchor} aria-hidden="true" />
        <div className={s.chapterIntro} data-story-beat>
          <p className={s.kicker}>How the training works</p><h2 id="training-title">Bring real work. <em>Practise together.</em></h2>
          <p className={s.lede}>Hands-on AI training for individuals and small business teams. We start with your everyday tasks, practise useful prompts together and learn how to check the results.</p>
        </div>
        <ol className={s.steps} data-story-beat>
          {[
            ['Find', 'We look for repetitive tasks that take up time and pick a few worth improving.'],
            ['Set up', 'We explore suitable AI tools, settings and workflows for the way you work.'],
            ['Use', 'You practise with relevant examples and learn how to check and refine the results.'],
          ].map(([title, text], index) => <li key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}
        </ol>
        <div id="packages" className={s.pricing} aria-labelledby="packages-title" data-story-beat>
          <h3 id="packages-title">Choose your training session.</h3>
          <p className={s.lede}>Every package is a three-hour session. Group prices cover the whole group, not each person.</p>
          <div className={s.packageGrid}>
            {[
              { title: 'One-to-one', people: '1 person', price: '£750', text: 'Focused on your own tasks, questions and pace.', placement: 'one-to-one' },
              { title: 'Small team', people: '2–3 people', price: '£950', text: 'Work through useful examples with a few colleagues.', placement: 'small-team' },
              { title: 'Team workshop', people: '4–5 people', price: '£1,250', text: 'Practise together around an agreed shared workflow.', placement: 'team-workshop' },
            ].map(item => <article className={s.packageCard} key={item.title}>
              <span className={s.packagePeople}>{item.people} · 3 hours</span><h4>{item.title}</h4>
              <p className={s.packagePrice}>{item.price}<span>per session · no VAT charged</span></p>
              <p>{item.text}</p>
              <TrainingEnquiryLink className={s.outline} href="#enquire" placement={`package-${item.placement}`}>Ask about {item.title.toLowerCase()} training <ArrowUpRight size={16} aria-hidden="true" /></TrainingEnquiryLink>
            </article>)}
          </div>
          <div className={s.packageDetails}>
            <p><strong>Where:</strong> In-person training in Edinburgh and the surrounding area, or online. Travel costs, if applicable, are agreed before booking.</p>
            <p><strong>Extra time:</strong> Additional training is £250/hour, agreed beforehand.</p>
            <p><strong>For teams:</strong> We agree a shared workflow and session scope before booking, so everyone gets useful practice.</p>
          </div>
        </div>
      </section>

      <section id="garry" className={`${s.tinted} ${s.section}`} aria-labelledby="trainer-title">
        <div className={`${s.shell} ${s.trainer}`}>
          <div data-story-beat><p className={s.kicker}>Meet your trainer · West Lothian, Scotland</p><h2 id="trainer-title">Hi, I’m Garry Lynch.</h2></div>
          <div className={s.trainerCopy} data-story-beat>
            <p>I founded Bear Media to help businesses make practical use of digital tools. I’ve worked hands-on with business clients, helping them get comfortable with the tools they use day to day.</p>
            <p>In an AI training session, we’ll start with a task you actually do, work through it together and leave time for questions and practice.</p></div>
        </div>
      </section>

      <section id="enquire" className={`${s.darkSection} ${s.section}`} aria-labelledby="enquire-title">
        <span id="contact" className={s.legacyAnchor} aria-hidden="true" />
        <div className={`${s.shell} ${s.split}`}>
          <div data-story-beat><p className={s.kicker}>Get started</p><h2 id="enquire-title">Let’s make your working day easier.</h2><p className={s.lede}>Tell me a little about your business and what you’d like help with. I’ll recommend a practical starting point.</p></div>
          <Enquiry deliveryConfigured={deliveryConfigured} />
        </div>
      </section>
    </main>
    <footer className={s.footer}>
      <div className={s.shell}>
        <a href={siteUrl}><Image src="/assets/brand/training-wordmark-light.webp" alt="Bear Media" width={480} height={301} sizes="88px" /></a>
        <span>West Lothian, Scotland</span>
        <a href="/privacy">Privacy</a>
        <a href="#training-main">Back to top ↑</a>
      </div>
    </footer>
  </div>
}
