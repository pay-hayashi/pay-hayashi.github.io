import './globals.css'
import {ReactNode} from 'react'

import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Jumpei Hayashi | 林 純平',
  description: 'Jumpei Hayashi - Frontend Engineer |' +
    ' Portfolio showcasing my profile, tech stack, and past projects.' +
    ' Skills: TypeScript, Next.js, Java, Spring Boot.' +
    ' Contact: pancake.tor@gmail.com, Twitter: @pancake_tor'
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ja">
      <body className='bg-stone-900'>
        {children}
      </body>
    </html>
  )
}
