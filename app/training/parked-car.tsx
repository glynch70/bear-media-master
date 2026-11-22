import s from './training.module.css'

export const dreamCars = ['Ferrari F80', 'BMW M340i Touring', 'Volkswagen Golf GTI']
export const carViews = ['Cockpit', 'Exterior']

export function ParkedCar({ car = 0, view = 0 }: { car?: number; view?: number }) {
  return (
    <div
      className={s.garageImage}
      role="img"
      aria-label={`${dreamCars[car]}, ${carViews[view].toLowerCase()} view, parked beside a Scottish loch. AI-generated illustration.`}
      style={{
        backgroundImage: `url('/training-images/${car === 0 ? 'dream-garage' : 'attainable-garage'}.webp')`,
        backgroundSize: car === 0 ? '300% 200%' : '200% 200%',
        backgroundPosition: `${car === 0 ? 0 : (car - 1) * 100}% ${view === 0 ? 100 : 0}%`,
      }}
    />
  )
}
