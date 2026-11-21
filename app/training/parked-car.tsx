import s from './training.module.css'

export const dreamCars = ['Ferrari F80', 'McLaren W1', 'Bugatti Tourbillon']
export const carViews = ['Cockpit', 'Exterior']

export function ParkedCar({ car = 0, view = 0 }: { car?: number; view?: number }) {
  return (
    <div
      className={s.garageImage}
      role="img"
      aria-label={`${dreamCars[car]}, ${carViews[view].toLowerCase()} view, parked beside a Scottish loch. AI-generated illustration.`}
      style={{ backgroundPosition: `${car * 50}% ${view === 0 ? 100 : 0}%` }}
    />
  )
}
