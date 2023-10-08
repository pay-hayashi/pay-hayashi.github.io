import {Comfortaa} from 'next/font/google'
import {twMerge} from 'tailwind-merge'

const comfortaa = Comfortaa({
  weight: '700',
  subsets: ['latin']
})

export const Header = () => {
  return (
    <header className="h-20 border-b-2 flex items-center justify-between">
      <div className={twMerge(comfortaa.className, 'text-2xl')}>
        Jumpei Hayashi
      </div>
      <div>
        （SNSのアイコンとか）
      </div>
    </header>
  )
}
