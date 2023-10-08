import './globals.css'
import {Raleway} from 'next/font/google'
import {ReactNode} from 'react'
import {twMerge} from 'tailwind-merge'

import {Body} from '@/app/_layout/Body'
import {Header} from '@/app/_layout/Header'

import type {Metadata} from 'next'

const font = Raleway({weight: '500', subsets: ['latin']})

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
      <body className={twMerge(font.className, 'text-slate-100 bg-slate-600')}>
        <Body>
          <Header/>
          {children}
        </Body>
      </body>
    </html>
  )
}
