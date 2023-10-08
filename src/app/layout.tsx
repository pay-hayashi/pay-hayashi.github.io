import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
