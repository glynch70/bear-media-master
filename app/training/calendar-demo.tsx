'use client'

import { Fragment, useRef, useState } from 'react'
import { ArrowDown, ArrowRight, CalendarDays, Check, Copy, RotateCcw } from 'lucide-react'
import s from './calendar-demo.module.css'

const slots = [
  { day: 'Thursday', date: '26 November 2026', time: '10:00–10:30', label: 'Thu 26 Nov · 10:00', column: 3, hour: 10 },
  { day: 'Friday', date: '27 November 2026', time: '14:00–14:30', label: 'Fri 27 Nov · 14:00', column: 4, hour: 14 },
]
const busy: Record<string, string> = {
  '0-9': 'Planning', '2-9': 'Review', '3-9': 'Team call', '1-10': 'Client call', '2-11': 'Project',
  '4-11': 'Accounts', '0-12': 'Lunch', '1-12': 'Lunch', '2-12': 'Lunch', '3-12': 'Lunch', '4-12': 'Lunch',
  '0-14': 'Site visit', '1-14': 'Workshop', '3-14': 'Review', '2-15': 'Client call', '4-16': 'Admin',
}
const stages = ['Check calendar', 'Choose a time', 'Review invite', 'Confirm']
const headings = ['Start with your actual availability.', 'Two gaps. You choose.', 'Check it before it goes.', 'Appointment organised.']
const descriptions = [
  'A client needs a review appointment. Instead of opening your diary and writing several replies, ask AI to find times that fit around your existing work.',
  'The calendar has been checked in this fictional example. Choose a time to prepare the invitation. Existing appointments stay in place.',
  'AI prepares the details. You check the guest, time and agenda before giving the go-ahead.',
  'The fictional appointment is now in the demo calendar. Keep the task moving by preparing a short confirmation email.',
]

function WorkCalendar({ stage, selected, title }: { stage: number, selected: number, title: string }) {
  return <>
    <div className={s.viewHeader}><div><strong>Work calendar</strong><small>23–27 November 2026 · Edinburgh / GMT</small></div><span className={s.badge}>Demo calendar</span></div>
    <table className={s.calendar}>
      <caption className={s.srOnly}>Fictional work calendar, 23–27 November 2026. Highlighted suggestions are Thursday at 10 am and Friday at 2 pm, for 30 minutes.</caption>
      <thead><tr><td /><th scope="col">Mon<b>23</b></th><th scope="col">Tue<b>24</b></th><th scope="col">Wed<b>25</b></th><th scope="col">Thu<b>26</b></th><th scope="col">Fri<b>27</b></th></tr></thead>
      <tbody>{Array.from({ length: 8 }, (_, index) => index + 9).map(hour => <tr key={hour}>
        <th scope="row">{hour}:00</th>
        {Array.from({ length: 5 }, (_, day) => {
          const candidate = slots.findIndex(slot => slot.column === day && slot.hour === hour)
          const booked = stage === 3 && candidate === selected
          const event = busy[`${day}-${hour}`]
          const suggested = stage >= 1 && candidate >= 0
          return <td key={day}><span className={booked ? s.bookedCell : event ? s.busyCell : suggested ? s.freeCell : s.emptyCell}>
            {booked ? <><span aria-hidden="true">Client review</span><span className={s.srOnly}>{title}, {slots[selected].time}, booked in demo</span></> : event || (suggested ? <span className={s.srOnly}>Available for 30 minutes</span> : null)}
          </span></td>
        })}
      </tr>)}</tbody>
    </table>
    <div className={s.legend}><span><i />Existing appointment</span><span><i className={s.freeKey} />Suggested free time</span></div>
  </>
}

export function CalendarDemo() {
  const [stage, setStage] = useState(0)
  const [selected, setSelected] = useState(0)
  const [title, setTitle] = useState('Client review meeting')
  const [followup, setFollowup] = useState(false)
  const [copyStatus, setCopyStatus] = useState('Copy prompt')
  const headingRef = useRef<HTMLHeadingElement>(null)
  const promptRef = useRef<HTMLParagraphElement>(null)
  const slot = slots[selected]
  const meetingTitle = title.trim() || 'Client review meeting'
  const prompt = [
    'Check my work calendar for a free 30-minute slot on Thursday morning or Friday afternoon. Keep it within 9 am–5 pm and avoid existing appointments. Show me two options; don’t book anything yet.',
    `${slot.day} at ${selected === 0 ? '10 am' : '2 pm'} works for the client. Prepare a 30-minute calendar invitation with a short agenda, and show me the details before sending it.`,
    'Check the title, date, time and guest below. Only book this appointment when I confirm.',
    'Now draft a short follow-up email confirming the meeting time. Keep it friendly and leave it for me to review.',
  ][stage]

  function goTo(next: number) {
    setStage(next)
    setCopyStatus('Copy prompt')
    requestAnimationFrame(() => headingRef.current?.focus({ preventScroll: true }))
  }
  function reset() {
    setSelected(0)
    setTitle('Client review meeting')
    setFollowup(false)
    goTo(0)
  }
  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(prompt)
      setCopyStatus('Copied')
    } catch {
      if (promptRef.current) {
        const range = document.createRange()
        range.selectNodeContents(promptRef.current)
        const selection = window.getSelection()
        selection?.removeAllRanges()
        selection?.addRange(range)
      }
      setCopyStatus('Text selected—copy to use')
    }
  }

  return <div className={s.demo}>
    <div className={s.intro}><span className={s.kicker}>Emails, calendars &amp; appointments</span><h3>Your calendar.<br /><em>Less back-and-forth.</em></h3><p>With a supported work calendar connection, AI can find a suitable time and prepare an appointment for you to approve.</p>
      <ul className={s.benefitStrip}>{['Check real availability', 'Avoid clashing appointments', 'Keep the final say'].map(text => <li key={text}><Check size={12} aria-hidden="true" />{text}</li>)}</ul>
    </div>
    <div className={s.panel}>
      <div className={s.top}><div><strong>Arrange a client review meeting</strong><small>A 30-minute appointment · Thursday or Friday</small></div><button className={s.reset} type="button" onClick={reset}>Start again <RotateCcw size={14} aria-hidden="true" /></button></div>
      <ol className={s.progress} aria-label="Appointment progress">{stages.map((text, index) => <li key={text} className={index < stage ? s.done : undefined} aria-current={index === stage ? 'step' : undefined}><b>0{index + 1}</b>{text}</li>)}</ol>
      <div className={s.content}>
        <div className={s.story}>
          <span className={s.kicker}>{['Try this prompt', 'Choose a suggested slot', 'You stay in control', 'Keep the flow going'][stage]}</span>
          <h4 className={s.stageTitle} ref={headingRef} tabIndex={-1}>{headings[stage]}</h4><p>{descriptions[stage]}</p>
          <div className={s.prompt}><div className={s.promptHeader}><strong>Example prompt</strong><button type="button" onClick={copyPrompt}><Copy size={12} aria-hidden="true" />{copyStatus}</button></div><p ref={promptRef}>{prompt}</p></div>
          {stage === 0 && <><button type="button" className={s.primary} onClick={() => goTo(1)}>Check demo availability <ArrowRight size={16} aria-hidden="true" /></button><p className={s.micro}>Try it here—no account or calendar access needed.</p></>}
          {stage === 1 && <><p className={s.micro}>Choose either highlighted time in the calendar panel.</p><button type="button" className={s.primary} onClick={() => goTo(2)}>Review this appointment <ArrowRight size={16} aria-hidden="true" /></button></>}
          {stage === 2 && <button type="button" className={s.reset} onClick={() => goTo(1)}>← Choose a different time</button>}
          {stage === 3 && <div className={s.summary}><Check size={28} aria-hidden="true" /><h5>Booked in the demo</h5><p>{meetingTitle}</p><strong>{slot.day} · {slot.time}</strong><p>{slot.date} · GMT · 30 minutes</p></div>}
        </div>
        <div className={s.view}>
          {stage !== 2 && <WorkCalendar stage={stage} selected={selected} title={meetingTitle} />}
          {stage === 0 && <p className={s.status}>Your existing meetings are the starting point—not a diary to rebuild.</p>}
          {stage === 1 && <><div className={s.slots} role="group" aria-label="Choose an appointment time">{slots.map((item, index) => <button type="button" key={item.label} aria-pressed={index === selected} onClick={() => { setSelected(index); setCopyStatus('Copy prompt') }}><strong>{item.label}</strong><small>30 minutes · no clash</small></button>)}</div><p className={s.micro}>Selected: {slot.day}, {slot.time} GMT.</p></>}
          {stage === 2 && <>
            <div className={s.viewHeader}><div><strong><CalendarDays size={17} aria-hidden="true" /> Appointment preview</strong><small>Ready for your review</small></div><span className={s.badge}>Draft</span></div>
            <div className={s.review}><label htmlFor="demo-appointment-title">Appointment title</label><input id="demo-appointment-title" maxLength={80} value={title} onChange={event => setTitle(event.target.value)} />
              <dl>{[
                ['When', `${slot.day}, ${slot.date} · ${slot.time} GMT · 30 minutes`],
                ['Guest', 'Alex · client@example.com (fictional)'], ['Location', 'Online · meeting link to be added'],
                ['Agenda', 'Review progress, discuss questions and agree next steps.'], ['Reminder', '15 minutes before'],
              ].map(([label, detail]) => <Fragment key={label}><dt>{label}</dt><dd>{detail}</dd></Fragment>)}</dl>
            </div>
            <button type="button" className={`${s.primary} ${s.confirm}`} onClick={() => { setTitle(meetingTitle); goTo(3) }}>Confirm demo booking <Check size={16} aria-hidden="true" /></button><p className={s.micro}>Approve the details above to complete this demo.</p>
          </>}
          {stage === 3 && <div className={s.nextTask}><h5>One more thing, while it’s fresh.</h5><p>Turn the booking details into a short message for the client.</p>
            {!followup ? <button type="button" className={s.secondary} onClick={() => setFollowup(true)}>Try the follow-up prompt <ArrowRight size={15} aria-hidden="true" /></button>
              : <div className={s.followup}><strong>Draft email · for review</strong><p>Hi Alex, thanks for confirming. Our {meetingTitle} is arranged for {slot.day} {slot.date}, {slot.time} GMT. We’ll review progress and agree next steps. I’ll share the meeting link before we meet.</p><small>Prepared example—nothing sent.</small></div>}
            <a className={s.onward} href="#professions">Next: see how it fits your business <ArrowDown size={16} aria-hidden="true" /></a>
          </div>}
        </div>
      </div>
      <p className={s.footerNote}>Illustrative demo. No calendar is connected and no invitations are sent. Available features depend on your AI tool, calendar access and permissions.</p>
    </div>
    <p className={s.srOnly} role="status">{stage === 0 ? 'Calendar demo ready.' : stage === 1 ? 'Two available times found in the demo calendar.' : stage === 2 ? 'Appointment preview ready for review.' : followup ? 'Draft confirmation email ready for review. Nothing sent.' : 'Appointment booked in this demo only. No invitation sent.'}</p>
  </div>
}
