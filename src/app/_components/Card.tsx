import {ReactNode} from 'react'

type ChildrenProps = {
  children: ReactNode
}

type CardProps = ChildrenProps
export const Card = ({children}: CardProps) => {
  return (
    <article className="border p-7 aspect-square flex flex-col text-center justify-center">
      {children}
    </article>
  )
}

type TitleProps = ChildrenProps
Card.Title = function Title ({children}: TitleProps) {
  return (
    <div className="grid items-center font-bold text-2xl py-5">
      {children}
    </div>
  )
}

type ContentProps = ChildrenProps
Card.Content = function Content ({children}: ContentProps) {
  return (
    <div className="grid items-center">
      <section>
        {children}
      </section>
    </div>
  )
}
