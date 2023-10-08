import {ReactNode} from 'react'

type CardProps = {
  children: ReactNode
}
export const Card = ({children}: CardProps) => {
  return (
    <article className="border p-7 aspect-square flex flex-col text-center justify-center">
      {children}
    </article>
  )
}

type TitleProps = {
  children: string
}
Card.Title = function Title({children}: TitleProps) {
  return (
    <div className="grid items-center font-bold text-2xl py-5">
      <h2>{children}</h2>
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
