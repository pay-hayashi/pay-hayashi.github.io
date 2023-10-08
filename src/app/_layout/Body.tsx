import {ReactNode} from 'react'

type BodyLayoutProps = {
  children: ReactNode
}

export const Body = ({children}: BodyLayoutProps) => {
  return (
    <>
      <div className="max-w-7xl px-5 mx-auto">
        {children}
      </div>
    </>
  )
}
