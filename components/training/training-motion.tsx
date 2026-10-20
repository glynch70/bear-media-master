'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Mail, MessageSquare, CalendarDays, ArrowDown } from 'lucide-react'
import styles from './training-motion.module.css'

export function TrainingMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        entry.target.animate(
          [{ opacity: 0, transform: 'translateY(24px)' }, { opacity: 1, transform: 'translateY(0)' }],
          { duration: 650, easing: 'cubic-bezier(.22,1,.36,1)' },
        )
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.12 })
    root.current?.querySelectorAll('section > div, section > figure, [data-reveal]').forEach(el => observer.observe(el))
    const stop = () => {
      if (media.matches) {
        observer.disconnect()
        root.current?.getAnimations({ subtree: true }).forEach(animation => animation.finish())
      }
    }
    media.addEventListener('change', stop)
    return () => { observer.disconnect(); media.removeEventListener('change', stop) }
  }, [])
  return <div ref={root} className={styles.motion}>{children}</div>
}

const messages = [
  { Icon: MessageSquare, label: 'Customer enquiry', text: 'Can you help? What do you need from me?' },
  { Icon: Mail, label: 'Supplier email', text: 'Could you confirm the delivery date?' },
  { Icon: CalendarDays, label: 'Your to-do list', text: 'Follow up. Plan the week. Send that update.' },
]

export function WorkingDay() {
  const [organised, setOrganised] = useState(false)
  return <section className={styles.day} aria-labelledby="working-day-title">
    <div className={styles.dayIntro}>
      <p className={styles.eyebrow}>Sound familiar?</p>
      <h2 id="working-day-title">It all ends up<br />with you</h2>
      <p>The messages. The follow-ups. The admin you meant to do yesterday.</p>
      <a href="#examples">Start with one useful task <ArrowDown size={17} aria-hidden="true" /></a>
    </div>
    <div className={styles.messages}>
      <p className={styles.caption}>An illustrative working day</p>
      <div className={styles.messageStage} id="organised-day" aria-live="polite">
      {!organised ? <div key="messages" className={styles.panelEnter}>
      {messages.map(({ Icon, label, text }, i) => <div key={label} className={styles.message} style={{ animationDelay: `${i * 140}ms` }} data-reveal>
        <span className={styles.icon}><Icon size={20} aria-hidden="true" /></span>
        <div><span className={styles.messageLabel}>{label}</span><p>{text}</p></div>
      </div>)}
      </div> : <div key="actions" className={`${styles.actionCard} ${styles.panelEnter}`}>
        <span className={styles.messageLabel}>A starting point for your review</span>
        <h3>Your next steps</h3>
        <ul><li><span>01</span> Ask the customer for a description and photos</li><li><span>02</span> Request a confirmed delivery date</li><li><span>03</span> List the follow-ups and updates still to send</li></ul>
        <p>You decide the priorities. Nothing is sent or scheduled.</p>
      </div>}
      </div>
      <button className={styles.organise} type="button" aria-controls="organised-day" aria-expanded={organised} onClick={() => setOrganised(value => !value)}>{organised ? '↻ Replay the working day' : 'Organise this day →'}</button>
      <div className={styles.resolution}><span aria-hidden="true">↳</span> A clearer starting point, one task at a time</div>
    </div>
  </section>
}
