import s from './training.module.css'

export function ParkedCar() {
  return (
    <svg className={s.car} viewBox="0 0 960 480" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="car-sky" x2="0" y2="1">
          <stop stopColor="#536370" />
          <stop offset=".62" stopColor="#a89987" />
          <stop offset="1" stopColor="#e8ad72" />
        </linearGradient>
        <radialGradient id="car-sun">
          <stop stopColor="#ffe1a6" stopOpacity=".9" />
          <stop offset="1" stopColor="#ffb474" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="car-dash" x2="0" y2="1">
          <stop stopColor="#4a4037" />
          <stop offset=".36" stopColor="#292727" />
          <stop offset="1" stopColor="#131516" />
        </linearGradient>
        <linearGradient id="car-wheel" x2=".75" y2="1">
          <stop stopColor="#474845" />
          <stop offset=".5" stopColor="#1b1d1d" />
          <stop offset="1" stopColor="#30322f" />
        </linearGradient>
        <linearGradient id="car-console" x2="0" y2="1">
          <stop stopColor="#31393a" />
          <stop offset="1" stopColor="#141a1d" />
        </linearGradient>
      </defs>
      <path fill="url(#car-sky)" d="M0 0h960v320H0z" />
      <ellipse className={s.sunlight} cx="700" cy="153" rx="285" ry="168" fill="url(#car-sun)" />
      <path fill="#6f736e" d="M0 172l113-29 85 22 101-31 75 20 99 20 108-22 79 4 104-21 97 12 99-16v138H0z" />
      <path fill="#4c5854" d="M0 200l94-17 58 5 96-21 104 22 69-9 111 24 108-11 54-15 94 12 86-18 86 10v115H0z" />
      <path fill="#353e3b" d="M0 210h960v90H0z" />
      <path d="M205 248l114-33m-13 40 87-40m-6 42 76-42m-1 45 51-45m32 49 22-49m67 49-6-49" stroke="#b9a98d" strokeWidth="2" opacity=".59" />
      <path d="M0 26L122 203l-53 61L0 164zm960-13L849 193l55 61 56-102z" fill="#242625" />
      <path d="M0 0h960v25L762 17 523 23 246 16 0 36z" fill="#282a29" />
      <path d="M426 14h108l-6 22h-96z" fill="#1c2020" />
      <rect x="396" y="32" width="168" height="42" rx="14" fill="#151919" stroke="#4a4b44" strokeWidth="3" />
      <rect x="405" y="40" width="150" height="25" rx="8" fill="#555c57" />
      <path d="M-25 282Q113 217 282 226l243 8q47 0 85-35 83-54 165 3 72 40 210 60v218H-25z" fill="url(#car-dash)" />
      <path d="M-25 302q142-55 297-42l248 6q55 0 102-40 75-47 151 7 62 31 212 47" fill="none" stroke="#b49063" strokeWidth="2" opacity=".68" />
      <path d="M-20 348q137-43 301-38m488 2 212 31" fill="none" stroke="#f0ad63" strokeWidth="3" opacity=".65" />
      <rect x="58" y="321" width="193" height="33" rx="8" fill="#181b1b" stroke="#53514a" strokeWidth="2" />
      <path d="M72 330h163m-163 8h163m-163 8h163" stroke="#777268" opacity=".65" />
      <path d="M273 278h306l38 202H239z" fill="#191d1d" stroke="#575148" strokeWidth="3" />
      <rect x="299" y="299" width="256" height="114" rx="11" fill="url(#car-console)" stroke="#696354" strokeWidth="2" />
      <path d="M310 368h234m-234 17h234m-234 17h234" stroke="#60584b" opacity=".56" />
      <circle cx="430" cy="436" r="12" fill="#222626" stroke="#7e7464" strokeWidth="2" />
      <path d="M615 283q72-67 145 1v49H615z" fill="#101617" stroke="#55544a" strokeWidth="3" />
      <path d="M627 292a24 24 0 0 1 46 0m29 0a24 24 0 0 1 46 0" fill="none" stroke="#e1ad70" strokeWidth="2" />
      <path d="M650 289l9-13m66 13-8-15" stroke="#f1ce9b" strokeWidth="2" />
      <text x="685" y="289" fill="#eee0cc" textAnchor="middle" fontFamily="sans-serif" fontSize="12">P</text>
      <circle cx="695" cy="362" r="125" fill="none" stroke="#121515" strokeWidth="26" />
      <circle cx="695" cy="357" r="125" fill="none" stroke="url(#car-wheel)" strokeWidth="20" />
      <circle cx="695" cy="357" r="115" fill="none" stroke="#716a5b" strokeWidth="1.4" />
      <path d="M570 341l89 9h72l90-9-9 30-85 18-15 91h-35l-15-91-85-17z" fill="url(#car-wheel)" stroke="#625d53" strokeWidth="2" />
      <rect x="658" y="344" width="74" height="42" rx="17" fill="#242827" stroke="#5b584d" />
      <path d="M681 365h28" stroke="#b7a484" strokeWidth="2" />
    </svg>
  )
}
