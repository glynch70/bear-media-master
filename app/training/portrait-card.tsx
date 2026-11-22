'use client'

import Image from 'next/image'
import { Check, RotateCcw, RotateCw } from 'lucide-react'
import { useId, useState } from 'react'
import s from './portrait-card.module.css'

const benefits = [
  'Save time on everyday admin',
  'Write better prompts and replies',
  'Turn notes into clear actions',
  'Use AI with more confidence',
]

export function PortraitCard() {
  const [flipped, setFlipped] = useState(false)
  const benefitsId = useId()
  return <div className={s.wrapper}>
    <button type="button" className={s.card} aria-pressed={flipped}
      aria-label={flipped ? 'Back to Garry’s portrait' : 'Show training benefits'}
      aria-describedby={flipped ? benefitsId : undefined} onClick={() => setFlipped(!flipped)}>
      <span className={s.inner}>
        <span className={`${s.face} ${s.front}`} aria-hidden={flipped}>
          <Image src="/assets/about/garry-training.webp" alt="Garry Lynch" fill sizes="(max-width: 780px) 90vw, 530px" loading="eager" />
          <span className={s.caption}><strong>Garry Lynch</strong><small>Practical AI training · West Lothian</small></span>
          <span className={s.prompt}>Flip for training benefits <RotateCw size={21} aria-hidden="true" /></span>
        </span>
        <span className={`${s.face} ${s.back}`} aria-hidden={!flipped}>
          <span className={s.kicker}>What you’ll take away</span>
          <span className={s.title}>Make AI useful.<br /><em>Every day.</em></span>
          <span id={benefitsId} className={s.benefits}>{benefits.map(title =>
            <span className={s.benefit} key={title}><Check size={20} aria-hidden="true" /><strong>{title}</strong></span>
          )}</span>
          <span className={s.prompt}>Back to Garry <RotateCcw size={21} aria-hidden="true" /></span>
        </span>
      </span>
    </button>
    <p className={s.hint}>Tap or click to flip · Keyboard: Enter or Space</p>
  </div>
}
