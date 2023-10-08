import {ReactNode} from 'react'
import {twMerge} from 'tailwind-merge'

type CardProps = {
  classname?: string
  children: ReactNode
}
export const Card = ({classname, children}: CardProps) => {
  return (
    <article
      className={twMerge(
        'p-7 aspect-square flex flex-col text-center justify-center z-0',
        'hover:transition duration-300 hover:scale-110 hover:z-10',
        classname,
      )}
    >
      {children}
    </article>
  )
}

type TitleProps = {
  children: string
}
Card.Title = function Title({children}: TitleProps) {
  return (
    <div className='grid items-center text-2xl py-5'>
      <h2 className='font-extrabold'>{children}</h2>
    </div>
  )
}

type ContentProps = {
  children: ReactNode
}
Card.Content = function Content({children}: ContentProps) {
  return (
    <div className="grid items-center">
      <section>
        {
          typeof children === 'string' || Array.isArray(children)
            ? <p className="whitespace-pre-wrap">{children}</p>
            : children
        }
      </section>
    </div>
  )
}

const colors = [
  'bg-[#FF8C9D]',
  'bg-[#7FB3D1]',
  'bg-[#FFAA8C]',
  'bg-[#FFFFC0]',
  'bg-[#82AB82]',
  'bg-[#A1FF9D]',
]

export class RotationColor {
  private cnt: number

  constructor() {
    this.cnt = 0
  }

  get get() {
    const colorCode = colors[this.cnt]
    this.cnt = (this.cnt + 1) % colors.length
    return `${colorCode} text-slate-800`
  }
}
