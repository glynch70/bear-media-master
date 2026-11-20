import Image from 'next/image'
import s from './training.module.css'

export function ParkedCar() {
  return (
    <Image
      className={s.car}
      src="/training-images/gtx-scottish-loch.webp"
      alt=""
      fill
      sizes="(min-width: 900px) 60vw, 100vw"
      quality={85}
    />
  )
}
