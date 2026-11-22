'use client'

import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { ArrowDown, ArrowUpRight, AudioLines, CalendarDays, Check, FileText, Inbox, ListChecks, Mail, Package, Pause, Play, RotateCcw } from 'lucide-react'
import { ParkedCar, dreamCars, carViews } from './parked-car'
import { CalendarDemo } from './calendar-demo'
import { demos, products, sectors, teamActionPlan, timeline, voiceExamples } from './examples'
import s from './training.module.css'

const demoIcons = [Mail, CalendarDays, FileText, FileText, Package, ListChecks]
const subscribe = (callback: () => void) => {
  window.addEventListener('popstate', callback)
  return () => window.removeEventListener('popstate', callback)
}
const serverSearch = () => ''
const currentSearch = () => window.location.search

function Choices({ labels, selected, choose, label }: {
  labels: string[], selected: number, choose: (index: number) => void, label: string
}) {
  return <div className={s.choices} role="group" aria-label={label}>
    {labels.map((text, index) =>
      <button type="button" key={text} aria-pressed={selected === index} onClick={() => choose(index)}>{text}</button>
    )}
  </div>
}

function Output({ rows, count = rows.length }: { rows: (string | string[])[][], count?: number }) {
  return <dl className={s.output}>{rows.slice(0, count).map(([label, detail]) =>
    <div key={String(label)}>
      <dt><Check size={15} aria-hidden="true" />{label}</dt>
      <dd>{Array.isArray(detail) ? <ul className={s.checklist}>{detail.map(item => <li key={item}>{item}</li>)}</ul> : detail}</dd>
    </div>
  )}</dl>
}

export function StoryMotion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const beats = document.querySelectorAll<HTMLElement>('#training-main [data-story-beat]')
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const beat = entry.target as HTMLElement
        const focusInside = beat.contains(document.activeElement)
        if (!focusInside) beat.dataset.storyArrival = 'true'
        observer.unobserve(beat)
      }
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0 })
    beats.forEach(beat => {
      if (beat.getBoundingClientRect().top > window.innerHeight) observer.observe(beat)
    })
    return () => observer.disconnect()
  }, [])
  return null
}

export function WorkingDay() {
  const [organised, setOrganised] = useState(false)
  const [visible, setVisible] = useState(false)
  const board = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!board.current) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.25 })
    observer.observe(board.current)
    return () => observer.disconnect()
  }, [])

  return <div ref={board} className={s.board} data-visible={visible} data-organised={organised}>
    <div className={s.appBar}><Inbox size={16} /> <strong>{organised ? 'Your action list' : 'Incoming work'}</strong><span>Tuesday morning</span></div>
    <ul key={String(organised)}>
      {([
        [Mail, 'Email', 'Client asks to move the review', 'Offer two alternative times'],
        [CalendarDays, 'Calendar', 'Planning meeting at 11:00', 'Pull together the agenda'],
        [Package, 'Supplier', 'Delivery moved to Thursday', 'Confirm the new delivery slot'],
        [FileText, 'Document', 'Weekly update due this afternoon', 'Draft the progress update'],
        [ListChecks, 'Task', 'Two approvals outstanding', 'Check who owns each approval'],
      ] as const).map(([Icon, type, incoming, action], index) =>
        <li key={type} style={{ '--order': index } as React.CSSProperties}>
          {organised ? <Check size={18} /> : <Icon size={18} />}
          <span><small>{type}</small>{organised ? action : incoming}</span>
        </li>
      )}
    </ul>
    <button className={s.outline} type="button" onClick={() => setOrganised(!organised)}>
      {organised ? 'Replay incoming work' : 'Organise the work'} {organised ? <RotateCcw size={16} /> : <ArrowDown size={16} />}
    </button>
  </div>
}

export function VoiceDemo() {
  const [car, setCar] = useState(0)
  const [carView, setCarView] = useState(0)
  const [selected, setSelected] = useState(0)
  const [stage, setStage] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [cueCount, setCueCount] = useState(0)
  const [audioError, setAudioError] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const example = voiceExamples[selected]

  useEffect(() => {
    if (stage < 2 || stage >= 5) return
    const timer = window.setTimeout(() => setStage(stage + 1), 420)
    return () => window.clearTimeout(timer)
  }, [stage])

  function showTranscript() {
    audioRef.current?.pause()
    setPlaying(false)
    setCueCount(example.cues.length)
    setStage(5)
  }

  function play() {
    const audio = audioRef.current
    if (!audio) return
    if (stage === 1 && !audio.paused) {
      audio.pause()
      return
    }
    if (stage !== 1) {
      audio.currentTime = 0
      setCueCount(0)
      setStage(1)
    }
    setAudioError(false)
    void audio.play().catch((error: DOMException) => {
      if (audioRef.current !== audio || error.name === 'AbortError') return
      setAudioError(true)
      showTranscript()
    })
  }

  const playLabel = stage === 0 ? 'Play Example' : stage === 1
    ? playing ? 'Pause note' : 'Resume note'
    : 'Replay example'

  return <>
    <Choices label="Voice scenarios" labels={voiceExamples.map(item => item.label)} selected={selected} choose={index => {
      if (index === selected) return
      audioRef.current?.pause()
      setPlaying(false)
      setCueCount(0)
      setAudioError(false)
      setStage(0)
      setSelected(index)
    }} />
    <audio key={example.audio} ref={audioRef} src={example.audio} preload="none"
      onPlaying={event => {
        setPlaying(true)
        const time = event.currentTarget.currentTime
        setCueCount(example.cues.filter(cue => cue.at <= time).length)
      }}
      onPause={() => setPlaying(false)}
      onError={() => {
        if (stage !== 1) return
        setAudioError(true)
        showTranscript()
      }}
      onTimeUpdate={event => {
        const time = event.currentTarget.currentTime
        setCueCount(example.cues.filter(cue => cue.at <= time).length)
      }}
      onEnded={() => {
        setPlaying(false)
        setCueCount(example.cues.length)
        setStage(window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 5 : 2)
      }}
    />
    <div className={s.garageControls}>
      <div><span className={s.garageLabel}>Choose your dream car</span>
        <Choices label="Dream car" labels={dreamCars} selected={car} choose={setCar} />
      </div>
      <div><span className={s.garageLabel}>Choose your view</span>
        <Choices label="Car view" labels={carViews} selected={carView} choose={setCarView} />
      </div>
      <p className={s.garageCaption} role="status">{dreamCars[car]} · {carViews[carView]} · Scottish loch</p>
      <p className={s.garageCaption}>A little dream-garage inspiration. AI-generated illustrations, with details that may differ from the real cars.</p>
    </div>
    <div className={s.dashboard}>
      <div className={s.carScene} data-playing={playing}>
        <ParkedCar car={car} view={carView} />
        <span className={s.parked}><i /> Parked after the meeting</span>
        <div className={s.voicePhone}>
          <div className={s.phoneNotch} aria-hidden="true" />
          <div className={s.appBar}><AudioLines size={16} /><strong>Voice notes</strong></div>
          <div className={s.wave} data-playing={playing} aria-hidden="true">
            {[14, 24, 17, 38, 29, 53, 34, 62, 45, 26, 44, 25, 35, 16, 24, 12].map((height, index) =>
              <i key={index} style={{ height, '--order': index } as React.CSSProperties} />
            )}
          </div>
          <button className={s.goldButton} type="button" onClick={play}>
            {playing ? <Pause size={16} /> : stage >= 2 ? <RotateCcw size={16} /> : <Play size={16} />}{playLabel}
          </button>
          {stage === 5 && <a className={s.reviewLink} href="#voice-result">Review drafts <ArrowDown size={13} /></a>}
        </div>
      </div>
      <div id="voice-result" className={s.voiceTranscript}>
        <ol className={s.voiceSteps} aria-label="Example progress">
          {['Capture', 'Organise', 'Review'].map((step, index) => (
            <li key={step} aria-current={index === (stage < 2 ? 0 : stage < 5 ? 1 : 2) ? 'step' : undefined}>
              <span aria-hidden="true">0{index + 1}</span>{step}
            </li>
          ))}
        </ol>
        <div className={s.appBar}><strong>Conversation transcript</strong><span>Illustrative</span></div>
        <div className={s.transcriptBody}>
          {audioError && <p role="status">Audio couldn’t play. The full transcript is below.</p>}
          {cueCount > 0
            ? <blockquote key={selected}>{example.cues.slice(0, stage >= 2 ? undefined : cueCount).map((cue, index) => (
                <span key={cue.at} className={playing && index === cueCount - 1 ? s.spokenPhrase : undefined}>{cue.text}{' '}</span>
              ))}</blockquote>
            : <p>{stage ? 'Starting the voice note…' : 'Press play on the phone to hear the note and follow the transcript.'}</p>}
          <div role="status" aria-atomic="false">
            {stage >= 3 && <Output rows={example.output} count={stage - 2} />}
          </div>
          {stage < 2 && <button className={s.readTranscript} type="button" onClick={showTranscript}>Read without audio</button>}
        </div>
      </div>
    </div>
  </>
}

export function DemoLab() {
  const [selected, setSelected] = useState(0)
  const [shown, setShown] = useState(false)
  const example = demos[selected]
  return <div className={s.lab}>
    <div className={s.demoMenu} role="group" aria-label="Choose a demonstration">
      {demos.map((demo, index) => {
        const Icon = demoIcons[index]
        return <button key={demo.label} type="button" aria-pressed={index === selected} onClick={() => {
          if (index !== selected) {
            setSelected(index)
            setShown(false)
          }
        }}><Icon size={19} aria-hidden="true" />{demo.label}<ArrowUpRight size={15} aria-hidden="true" /></button>
      })}
    </div>
    {selected === 0 ? <CalendarDemo /> : <article className={s.labPanel}>
      <span className={s.kicker}>Fictional scenario</span>
      <h3>{example.title}</h3><p>{example.scenario}</p>
      <div className={s.prompt}><strong>Example input</strong><p>{example.input}</p></div>
      <button className={s.darkButton} type="button" aria-expanded={shown} aria-controls="demo-output" onClick={() => setShown(!shown)}>
        {shown ? 'Reset example' : 'Show the useful output'} {shown ? <RotateCcw size={16} /> : <ArrowDown size={16} />}
      </button>
      <div id="demo-output" role="status" aria-atomic="false">
        {shown && <>
          {example.comparison && <table className={s.comparison}>
            <caption>Draft comparison · excluding VAT</caption>
            <thead><tr><th scope="col">Supplier</th><th scope="col">Lead time</th><th scope="col">Total</th></tr></thead>
            <tbody>{example.comparison.map(([supplier, lead, total]) => <tr key={supplier}><th scope="row">{supplier}</th><td>{lead}</td><td>{total}</td></tr>)}</tbody>
          </table>}
          <Output rows={example.output} />
        </>}
      </div>
    </article>}
  </div>
}

type Sector = keyof typeof sectors
const sectorKeys = Object.keys(sectors) as Sector[]

const planColumns = ['Task', 'Owner', 'Email', 'Deadline']
const planRows = teamActionPlan.actions.map(({ task, owner, email, deadline }) => [task, owner, email, deadline])

const planDownloads = [
  { label: 'Download Word document', filename: 'livingston-handover.docx' },
  { label: 'Download Excel workbook', filename: 'livingston-handover.xlsx' },
]

function TeamPlan() {
  const [format, setFormat] = useState(0)
  const [owner, setOwner] = useState(0)
  const download = planDownloads[format]
  const recipient = teamActionPlan.actions[owner]

  return <div className={s.actionPlan}>
    <Choices label="Action plan format" labels={['Word document', 'Excel workbook']} selected={format} choose={setFormat} />
    <h4>{teamActionPlan.project}</h4>
    {format === 0 ? (
      <ul className={s.actionList}>
        {teamActionPlan.actions.map(action => (
          <li key={action.owner}><strong>{action.owner} <span>· {action.deadline}</span></strong><p>{action.task}</p></li>
        ))}
      </ul>
    ) : (
      <div className={s.sheetScroll} role="region" aria-label="Action plan spreadsheet" tabIndex={0}>
        <table className={s.comparison}>
          <caption>Action tracker · fictional example</caption>
          <thead><tr>{planColumns.map(column => <th key={column} scope="col">{column}</th>)}</tr></thead>
          <tbody>{planRows.map(([task, name, email, deadline]) => (
            <tr key={email}><th scope="row">{task}</th><td>{name}</td><td>{email}</td><td>{deadline}</td></tr>
          ))}</tbody>
        </table>
      </div>
    )}
    <p className={s.note}><strong>Decision to confirm.</strong> {teamActionPlan.decision}</p>
    <a className={s.outline} download={download.filename} href={`/training-downloads/${download.filename}`}>
      {download.label} <ArrowDown size={16} />
    </a>
    <div className={s.emailSection}>
      <h4>One email per person</h4>
      <p>Each draft contains just that person’s task and deadline. Choose a recipient to see what lands in their inbox.</p>
      <Choices label="Preview an individual task email" labels={teamActionPlan.actions.map(action => action.owner)} selected={owner} choose={setOwner} />
      <div className={s.prompt} aria-live="polite">
        <strong>Example email · preview only</strong>
        <dl className={s.emailFields}>
          <dt>To</dt><dd>{recipient.owner} &lt;{recipient.email}&gt;</dd>
          <dt>Subject</dt><dd>{teamActionPlan.project} · your action</dd>
        </dl>
        <p>Hi {recipient.owner},</p>
        <p>Here’s your action from the team catch-up.</p>
        <dl className={s.emailFields}>
          <dt>Task</dt><dd>{recipient.task}</dd>
          <dt>Due</dt><dd>{recipient.deadline}</dd>
        </dl>
        <p>Please flag anything that might affect the deadline. Thanks.</p>
      </div>
    </div>
  </div>
}

export function SectorPicker() {
  const search = useSyncExternalStore(subscribe, currentSearch, serverSearch)
  const requested = new URLSearchParams(search).get('sector')
  const sector = sectorKeys.find(key => key === requested) ?? 'general'
  const example = sectors[sector]

  function choose(index: number) {
    const url = new URL(window.location.href)
    url.searchParams.set('sector', sectorKeys[index])
    window.history.replaceState(window.history.state, '', url)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return <>
    <Choices label="Choose your profession" labels={sectorKeys.map(key => sectors[key].label)} selected={sectorKeys.indexOf(sector)} choose={choose} />
    <article className={s.sectorCard} key={sector}>
      <div><span className={s.kicker}>{example.label}</span><h3>{example.title}</h3><p>{example.description}</p></div>
      <div className={s.sectorExample}><div className={s.prompt}><strong>Example input</strong><p>{example.input}</p></div>{'result' in example ? <Output rows={example.result} /> : <TeamPlan />}</div>
    </article>
  </>
}

export function ProductPicker() {
  const [selected, setSelected] = useState(0)
  const product = products[selected]
  return <>
    <Choices label="Choose an AI tool" labels={products.map(item => item.label)} selected={selected} choose={setSelected} />
    <article className={s.sectorCard} key={product.label} aria-live="polite">
      <div><span className={s.kicker}>{product.label}</span><h3>{product.title}</h3><p>{product.description}</p></div>
      <div className={s.prompt}><strong>Example workflow</strong><p>{product.workflow}</p></div>
    </article>
  </>
}

export function Timeline() {
  const [active, setActive] = useState<number | null>(0)
  return <ol className={s.timeline}>
    {timeline.map(([time, title, text], index) =>
      <li key={time}>
        <button type="button" aria-expanded={active === index} aria-controls={`timeline-${index}`} onClick={() => setActive(active === index ? null : index)}>
          <time dateTime={time}>{time}</time><strong>{title}</strong><span aria-hidden="true">{active === index ? '−' : '+'}</span>
        </button>
        <div id={`timeline-${index}`} hidden={active !== index}><p>{text}</p></div>
      </li>
    )}
  </ol>
}
