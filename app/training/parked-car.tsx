import Image from 'next/image'
import s from './training.module.css'

export const dreamCars = ['Porsche 911 Carrera', 'BMW M340i Touring', 'Volkswagen Golf GTI']
export const carViews = ['Cockpit', 'Exterior']

export function ParkedCar({ car = 0, view = 0 }: { car?: number; view?: number }) {
  return <>
    <div
      className={s.garageImage}
      role="img"
      aria-label={`${dreamCars[car]}, ${carViews[view].toLowerCase()} view, parked beside a Scottish loch. AI-generated illustration.${view === 0 ? ' Bear Media air freshener hanging from the mirror.' : ''}`}
      style={{
        backgroundImage: `url('/training-images/${car === 0 ? (view === 0 ? 'porsche-cockpit' : 'porsche-exterior') : 'attainable-garage'}.webp')`,
        backgroundSize: car === 0 ? 'cover' : '200% 200%',
        backgroundPosition: car === 0 ? 'center' : `${(car - 1) * 100}% ${view === 0 ? 100 : 0}%`,
      }}
    />
    {view === 0 && <span className={s.airFreshener} aria-hidden="true"><span className={s.freshenerTag}>
      <Image src="/training-images/bear-air-freshener.webp" alt="" fill sizes="60px" />
    </span></span>}
  </>
}
