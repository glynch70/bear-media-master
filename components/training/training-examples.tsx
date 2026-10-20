'use client'

import { useState } from 'react'
import styles from '@/app/training/training.module.css'

const examples = [
  {
    name: 'Enquiry reply',
    notes:
      'New customer wants to know if we can help with a small job. Need more details before quoting. Keep it friendly.',
    prompt:
      'Draft a friendly reply to a new customer asking about a small job. Thank them, ask for a short description and a couple of photos, and explain that I’ll review the details before discussing a quote. Keep it under 90 words. Don’t promise a price, a start date or availability.',
    draft:
      'Thanks for getting in touch. Could you send me a short description of the job and a couple of photos? That will help me understand what you need. Once I’ve had a look, we can discuss the next step and what I need to put a quote together.',
    check:
      'Does this ask for the right details for your business? Check the next step before sending.',
  },
  {
    name: 'Supplier email',
    notes:
      'Delivery date not confirmed. Need an update so we can plan. Be polite but clear.',
    prompt:
      'Write a concise email to a supplier asking for an update on an unconfirmed delivery date. Explain that we need the date to plan the work. Ask them to flag any items that may arrive separately. Don’t invent order numbers, agreed dates or a previous conversation.',
    draft:
      'Hello,\n\nCould you confirm the expected delivery date for our order? We need this to plan the work, so an update would be helpful. Please also let me know if any items are likely to arrive separately.\n\nThanks for your help.',
    check:
      'Add the correct order reference yourself and check the recipient. No delivery date has been assumed.',
  },
  {
    name: 'Business update',
    notes:
      'Work is progressing. Team finishing current stage. Need to confirm next stage before giving dates.',
    prompt:
      'Turn these notes into a short customer update: work is progressing; the team is finishing the current stage; the next stage still needs confirming. Use plain English and a calm, professional tone. Don’t add completion percentages, dates or promises.',
    draft:
      'A quick update on the work: the team is finishing the current stage. The next stage still needs to be confirmed, so I’m not able to give you a date for it yet.',
    check:
      'Confirm the work status is accurate. Only include dates or commitments you can stand behind.',
  },
  {
    name: 'Weekly planning',
    notes:
      'Send three follow-ups. Review a draft quote. Supplier date still missing. Organise project photos.',
    prompt:
      'Organise these tasks into a short checklist: send three follow-ups, review a draft quote, confirm a missing supplier delivery date, organise project photos. Separate tasks I can do now from tasks waiting on someone else. Don’t invent deadlines or priorities.',
    draft:
      'Ready to do\n□ Send three follow-ups\n□ Review the draft quote\n□ Organise project photos\n□ Ask the supplier to confirm the delivery date\n\nWaiting on someone else\n□ Delivery date confirmation from the supplier',
    check:
      'Add your real deadlines and decide the order. AI doesn’t know which task matters most to your business.',
  },
]

export function TrainingExamples() {
  const [selected, setSelected] = useState(0)
  const [status, setStatus] = useState('')
  const [replay, setReplay] = useState(0)
  const example = examples[selected]
  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(example.prompt)
      setStatus('Prompt copied.')
    } catch {
      setStatus('Select the prompt text to copy it manually.')
    }
  }
  return (
    <div>
      <div
        className={styles.demoControls}
        role="group"
        aria-label="Choose an example task"
      >
        {examples.map((item, i) => (
          <button
            type="button"
            key={item.name}
            aria-pressed={selected === i}
            aria-controls="example-content"
            onClick={() => {
              setSelected(i)
              setReplay(r => r + 1)
              setStatus('')
            }}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className={styles.demoToolbar}>
        <p>Rough notes <span aria-hidden="true">→</span> Useful prompt <span aria-hidden="true">→</span> Draft to review</p>
        <button type="button" className={styles.replay} onClick={() => setReplay(r => r + 1)} aria-controls="example-content">↻ Replay example</button>
      </div>
      <div id="example-content" key={`${selected}-${replay}`} className={styles.demoSequence} aria-live="polite" aria-atomic="true">
        <div className={styles.demoPanels}>
          <article>
            <p className={styles.demoLabel}>01 · Your starting point</p>
            <h3>Rough notes</h3>
            <p>{example.notes}</p>
          </article>
          <article>
            <p className={styles.demoLabel}>02 · Give it context</p>
            <h3>A more useful prompt</h3>
            <p className={styles.promptText}>{example.prompt}</p>
            <button type="button" className={styles.copy} onClick={copyPrompt}>
              Copy this prompt
            </button>
          </article>
        </div>
        <article className={styles.draft}>
          <p className={styles.demoLabel}>03 · Review and adapt</p>
          <h3>An example draft</h3>
          <p>{example.draft}</p>
          <p className={styles.check}>
            <strong>Your check:</strong> {example.check}
          </p>
        </article>
      </div>
      <p className={styles.status} role="status">
        {status}
      </p>
      <p className={styles.note}>
        Illustrative examples with prewritten drafts, not live AI generation. No
        client information is used. Try the prompts in your own AI tool using
        non-sensitive details.
      </p>
    </div>
  )
}
