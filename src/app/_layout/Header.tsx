import {Comfortaa} from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
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
        <div className="bg-white rounded-full w-28 h-12 flex justify-evenly items-center">
          <Link href='https://twitter.com/pancake_tor' className='aspect-square' target='_blank' rel='noopener noreferrer'>
            <Image
              src='/twitter/logo-black.png'
              width={22} height={22} alt='X (Twitter) Logo.'
            />
          </Link>
          <Link href='https://github.com/pay-hayashi' className='aspect-square' target='_blank' rel='noopener noreferrer'>
            <Image
              src='/github/github-mark.png'
              width={24} height={24} alt='X (Twitter) Logo.'
            />
          </Link>
        </div>
      </aside>
    </header>
  )
}
