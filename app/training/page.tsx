import Image from 'next/image'
import { TrainingMotion, WorkingDay } from '@/components/training/training-motion'
import { RedesignFooter, RedesignHeader } from '@/app/redesign/redesign-chrome'
import { BreadcrumbSchema, ServiceSchema } from '@/components/structured-data'
import { TrainingExamples } from '@/components/training/training-examples'
import { TrainingEnquiryLink } from '@/components/training/training-enquiry-link'
import { createMetadata, siteUrl } from '@/lib/seo'
import styles from './training.module.css'

export const metadata = createMetadata({
  title: 'Practical AI Training for Small Businesses | Bear Media',
  description:
    'Tailored AI training with Garry for business owners and small teams. Online across the UK, or in person across Edinburgh and the Lothians. Enquire today.',
  path: '/training',
  imageAlt: 'Practical AI training with Garry from Bear Media',
})

const topics = [
  [
    'Customer enquiries',
    'Turn a new enquiry into a helpful reply and a clear next step.',
  ],
  [
    'Emails & follow-ups',
    'Draft, shorten and adjust the tone of everyday messages.',
  ],
  [
    'Business writing',
    'Turn rough notes into clear updates, descriptions and documents.',
  ],
  [
    'Planning & admin',
    'Organise a busy week, summarise notes and pull out actions.',
  ],
]

export default function TrainingPage() {
  return (
    <div className={styles.page}>
      <a className={styles.skip} href="#training-main">
        Skip to training
      </a>
      <RedesignHeader surface />
      <TrainingMotion>
      <main id="training-main">
        <BreadcrumbSchema
          items={[
            { name: 'Home', url: siteUrl },
            { name: 'AI training', url: `${siteUrl}/training` },
          ]}
        />
        <ServiceSchema
          name="Practical AI Training"
          description="Tailored AI training for business owners and small teams, online across the UK and in person across Edinburgh and the Lothians."
          serviceType="Practical AI training"
          areaServed={[
            'United Kingdom',
            'Edinburgh',
            'West Lothian',
            'East Lothian',
            'Midlothian',
          ]}
          provider="Bear Media"
          url={`${siteUrl}/training`}
        />
        <section className={styles.hero} aria-labelledby="training-title">
          <div>
            <p className={styles.eyebrow}>Practical AI training · With Garry</p>
            <h1 id="training-title">
              AI training for your business
            </h1>
            <p className={styles.intro}>
              Learn to use ChatGPT for the work that fills your day. I’ll help
              you tackle customer enquiries, write clearer emails and organise
              everyday admin, with hands-on practice using your own examples.
            </p>
            <p className={styles.delivery}>
              Online across the UK · In person across Edinburgh and the Lothians
            </p>
            <div className={styles.actions}>
              <TrainingEnquiryLink className={styles.primary} placement="hero">
                Discuss your AI training <span aria-hidden="true">↗</span>
              </TrainingEnquiryLink>
              <a className={styles.textLink} href="#examples">
                Try an everyday example <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className={styles.small}>
              For business owners and small teams. Beginners welcome.
            </p>
          </div>
          <figure className={styles.portrait}>
            <Image
              src="/assets/about/garry-portrait-4.webp"
              alt="Garry Lynch from Bear Media"
              width={1200}
              height={1200}
              sizes="(max-width: 760px) 90vw, 440px"
              priority
            />
            <figcaption>
              <strong>Hi, I’m Garry</strong>
              <span>Your trainer and the person behind Bear Media</span>
            </figcaption>
          </figure>
        </section>

        <WorkingDay />

        <section className={styles.topics} aria-labelledby="topics-title">
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>Start with something useful</p>
            <h2 id="topics-title">Start with the work on your desk</h2>
            <p>
              I’ll help you find where tools such as ChatGPT fit into your
              working day. We’ll use relevant examples and practise checking the
              results together.
            </p>
          </div>
          <div className={styles.topicGrid}>
            {topics.map(([title, text], i) => (
              <article key={title}>
                <span className={styles.number}>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="examples"
          className={styles.examples}
          aria-labelledby="examples-title"
        >
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>Have a go</p>
            <h2 id="examples-title">See what a useful prompt can do</h2>
            <p>
              Choose a task. See how rough notes become a useful prompt and a
              draft you can check and adapt.
            </p>
          </div>
          <TrainingExamples />
        </section>

        <section className={styles.formats} aria-labelledby="formats-title">
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>Choose how you learn</p>
            <h2 id="formats-title">Same practical approach, wherever you work</h2>
          </div>
          <div className={styles.formatGrid}>
            <article>
              <p className={styles.eyebrow}>Across the UK</p>
              <h3>Live online training</h3>
              <p>Work with me on a video call. We’ll share screens, try relevant
                tasks together and leave time for your questions.</p>
            </article>
            <article>
              <p className={styles.eyebrow}>Edinburgh and the Lothians</p>
              <h3>In person, locally</h3>
              <p>Work through the tasks together on your own laptop. I’m based
                in West Lothian; we’ll agree a suitable location and any travel
                before booking.</p>
            </article>
          </div>
        </section>

        <section className={styles.process} aria-labelledby="process-title">
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>How we’ll work together</p>
            <h2 id="process-title">Your tasks, your pace</h2>
            <p>
              New to AI, or already trying it? I’ll start with what you know and
              the tasks you want help with.
            </p>
          </div>
          <ol className={styles.steps}>
            {[
              [
                'Talk through your day',
                'Tell me what takes too long, what tools you use and whether you want to learn on your own or with your team.',
              ],
              [
                'Practise together',
                'We work through relevant examples online or in person. You try the prompts on your own device, ask questions and learn how to check the output.',
              ],
              [
                'Make it repeatable',
                'Keep the prompts and steps we work through, so you can use them again. I’ll agree the session focus, time, preparation and any follow-up with you before booking.',
              ],
            ].map(([title, text], i) => (
              <li key={title}>
                <span className={styles.number}>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.faq} aria-labelledby="questions-title">
          <div>
            <p className={styles.eyebrow}>A few useful details</p>
            <h2 id="questions-title">Before we get started</h2>
          </div>
          <div>
            {[
              [
                'Do I need to be good with technology?',
                'No. I’ll explain things in plain English and leave room for you to practise. Tell me what you already use and where you’d like help.',
              ],
              [
                'Can we do the training online?',
                'Yes. I work online with businesses across the UK, and in person across Edinburgh and the Lothians. We’ll agree the format, location and any travel before booking.',
              ],
              [
                'What should I bring?',
                'A laptop and a few non-sensitive examples of tasks you repeat are a useful starting point. I’ll agree any software or accounts you need in advance, including any separate software costs.',
              ],
              [
                'How much does it cost?',
                'I’ll quote for the agreed training focus, session time and preparation after we talk. Any follow-up, extra setup or integrations will be agreed separately.',
              ],
              [
                'Will AI do the work for me?',
                'It can help you draft and organise, but you stay in charge. We’ll cover checking facts, tone and commitments, and what information to keep out of AI tools.',
              ],
            ].map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.enquire} aria-labelledby="enquire-title">
          <p className={styles.eyebrow}>Let’s find your starting point</p>
          <h2 id="enquire-title">
            What would you like a hand with?
          </h2>
          <p>
            Tell me about your business and two or three jobs you’d like to make
            easier, plus whether you prefer online or in-person training.
            I’ll suggest a focus and confirm the scope and fee before you book.
          </p>
          <TrainingEnquiryLink className={styles.primary} placement="closing">
            Talk to Garry about training <span aria-hidden="true">↗</span>
          </TrainingEnquiryLink>
          <p className={styles.small}>
            Prefer to call? <a href="tel:+447879011860">07879 011860</a>
          </p>
        </section>
      </main>
      </TrainingMotion>
      <RedesignFooter />
    </div>
  )
}
