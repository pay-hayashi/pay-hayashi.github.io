import {ReactElement, ReactNode} from 'react'

type DlProps = {
  children: ReactNode
}
export const Dl = ({children}: DlProps) => {
  return (
    <dl className='grid grid-cols-1 gap-2'>
      {children}
    </dl>
  )
}


type DtProps = {
  children: string | string[]
}
Dl.Dt = function Dt({children}: DtProps) {
  return (
    <dt className='font-bold'>
      {children}
    </dt>
  )
}

type DdProps = {
  children: string | string[]
}
Dl.Dd = function Dd({children}: DdProps) {
  return (
    <dd>
      {children}
    </dd>
  )
}

type ContainerProps = {
  children: [ReactElement, ReactElement]
}
Dl.Container = function Container({children}:ContainerProps) {
  return (
    <div>
      {children}
    </div>
  )
}
