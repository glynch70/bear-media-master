'use client'

import Image from 'next/image'
import { useId, useState } from 'react'
import { ArrowUpRight, BriefcaseBusiness, Clock3, Flag, Sunset } from 'lucide-react'
import { TrainingEnquiryLink } from '@/components/training/training-enquiry-link'
import s from './time-value.module.css'

const currency = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', minimumFractionDigits: 0, maximumFractionDigits: 2 })
const number = new Intl.NumberFormat('en-GB', { maximumFractionDigits: 2 })
const priorities = [
  { label: 'A few holes', icon: Flag, title: 'A few holes before dinner.', text: 'A little more room for the things you enjoy.' },
  { label: 'Another client', icon: BriefcaseBusiness, title: 'More room for your clients.', text: 'Time to prepare, follow up or have a useful conversation.' },
  { label: 'An early finish', icon: Sunset, title: 'Close the laptop a little earlier.', text: 'Less catching up after everyone else has finished.' },
]

function bounded(value: string, max: number) {
  const parsed = Number(value)
  return Number.isFinite(parsed) ? Math.max(0, Math.min(max, parsed)) : 0
}

export function TimeValue() {
  const id = useId()
  const [hoursInput, setHoursInput] = useState('3')
  const [rateInput, setRateInput] = useState('45')
  const [priority, setPriority] = useState(0)
  const hours = bounded(hoursInput, 20)
  const rate = bounded(rateInput, 1000)
  const weeklyValue = hours * rate
  const goal = priorities[priority]

  return <div className={s.layout}>
    <div className={s.scene}>
      <Image src="/training-images/scottish-links.webp" alt="AI-generated illustration of a Scottish-style coastal links course, with dunes, a putting green and a flag overlooking the sea." fill sizes="(min-width: 780px) 55vw, 100vw" quality={85} />
      <span className={s.sceneLabel}><Flag size={15} aria-hidden="true" />A little time away from the desk</span>
      <div className={s.sceneCaption}><span>Your time. Your choice.</span><h3>{hours > 0 ? goal.title : 'Start with one small task.'}</h3><p>{hours > 0 ? goal.text : 'Choose a realistic estimate and see what it could mean.'}</p><small>AI-generated Scottish links illustration</small></div>
    </div>
    <div className={s.calculator}>
      <span className={s.kicker}>Make it personal</span>
      <h3>What could your time be worth?</h3>
      <p className={s.intro}>Try your own figures. Start with time spent on repetitive work—not your whole week.</p>
      <div className={s.field}>
        <label htmlFor={`${id}-hours`}>Hours you could save each week</label>
        <div className={s.inputRow}><Clock3 size={18} aria-hidden="true" /><input id={`${id}-hours`} type="number" inputMode="decimal" min="0" max="20" step="0.5" value={hoursInput} onChange={event => setHoursInput(event.target.value === '' ? '' : String(bounded(event.target.value, 20)))} onBlur={() => setHoursInput(String(hours))} /><span>hours</span></div>
        <input className={s.range} type="range" min="0" max="20" step="0.5" value={hours} aria-label="Adjust hours saved per week" onChange={event => setHoursInput(event.target.value)} />
        <div className={s.scale} aria-hidden="true"><span>0 hours</span><span>20 hours</span></div>
      </div>
      <div className={s.field}>
        <label htmlFor={`${id}-rate`}>Your hourly rate</label>
        <div className={s.inputRow}><span aria-hidden="true">£</span><input id={`${id}-rate`} type="number" inputMode="decimal" min="0" max="1000" step="1" value={rateInput} onChange={event => setRateInput(event.target.value === '' ? '' : String(bounded(event.target.value, 1000)))} onBlur={() => setRateInput(String(rate))} /><span>per hour</span></div>
      </div>
      <div className={s.results} aria-live="polite" aria-atomic="true">
        <div><strong>{number.format(hours)}<small> {hours === 1 ? 'hour' : 'hours'}</small></strong><span>back in your week</span></div>
        <div><strong>{currency.format(weeklyValue)}</strong><span>value of that time / week</span></div>
      </div>
      <p className={s.equation}>{number.format(hours)} hours × {currency.format(rate)} per hour = {currency.format(weeklyValue)} per week.</p>
      <div className={s.priority}><p>What would you do with it?</p><div role="group" aria-label="Choose what to do with your time">{priorities.map((item, index) => {
        const Icon = item.icon
        return <button key={item.label} type="button" aria-pressed={priority === index} onClick={() => setPriority(index)}><Icon size={16} aria-hidden="true" />{item.label}</button>
      })}</div></div>
      <TrainingEnquiryLink className={s.cta} href="#enquire" placement="time-calculator">Find where AI could save you time <ArrowUpRight size={17} aria-hidden="true" /></TrainingEnquiryLink>
      <p className={s.note}>Your estimate, not a promise. This values freed time at the rate you enter; it isn’t guaranteed savings or extra income.</p>
    </div>
  </div>
}
