import {Comfortaa} from 'next/font/google'
import {twMerge} from 'tailwind-merge'

const comfortaa = Comfortaa({
  weight: '700',
  subsets: ['latin']
})

export const Header = () => {
  return (
    <header className="h-20 border-b-2 border-slate-300 flex items-center justify-between">
      <h1 className={twMerge(comfortaa.className, 'text-2xl')}>
        Jumpei Hayashi
      </h1>
      <nav>
        {}
      </nav>
      <aside>
        {}
      </aside>
    </header>
  )
}
