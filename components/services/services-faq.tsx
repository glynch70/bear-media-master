'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'Which areas do you cover?',
    answer:
      'I am based in Broxburn and regularly work across Edinburgh, West Lothian, Fife and surrounding areas. For larger projects I can travel further across Scotland.',
  },
  {
    question: 'Do I need to appear on camera?',
    answer:
      'No. Many clients prefer to stay behind the scenes. However, businesses that show the people behind the brand often build trust faster. I can tailor content to suit your comfort level.',
  },
  {
    question: 'What do you need from me before we start?',
    answer:
      'Usually just a quick conversation about your goals, target audience and services. From there I can recommend the best content and marketing approach.',
  },
  {
    question: 'Do you provide photography and video?',
    answer:
      'Yes. Bear Media provides photography, videography, drone content and social media content creation depending on your needs.',
  },
  {
    question: 'How much content can you create in a single visit?',
    answer:
      'This depends on the project, but many clients leave with weeks or even months of content from a single shoot day.',
  },
  {
    question: 'Do you offer website design?',
    answer:
      'Yes. I build fast, modern websites designed to help businesses generate enquiries and showcase their work professionally.',
  },
  {
    question: 'Can you manage my social media as well?',
    answer:
      'Yes. I can create content, schedule posts, manage accounts and help develop a long-term content strategy.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Simply get in touch through the contact page and we\u2019ll arrange a quick chat to discuss your business and goals.',
  },
]

function FaqSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  )
}

export default function ServicesFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full bg-background py-16 md:py-20">
      <FaqSchema />
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-4 text-pretty">
          Frequently asked questions.
        </h2>
        <p className="text-lg text-muted-foreground mb-12 text-pretty">
          Common questions about working with Bear Media.
        </p>

        <dl className="divide-y divide-foreground/10 border-t border-foreground/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.question}>
                <dt>
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-4 py-6 text-left"
                  >
                    <span className="font-heading text-lg font-medium text-foreground">
                      {faq.question}
                    </span>
                    <span className="mt-0.5 flex-shrink-0 text-muted-foreground" aria-hidden="true">
                      {isOpen ? (
                        <Minus className="w-5 h-5" strokeWidth={1.5} />
                      ) : (
                        <Plus className="w-5 h-5" strokeWidth={1.5} />
                      )}
                    </span>
                  </button>
                </dt>
                <dd
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-base text-muted-foreground leading-relaxed">{faq.answer}</p>
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
