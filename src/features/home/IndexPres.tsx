'use client'
import Image from 'next/image'
import Link from 'next/link'
import {ReactNode} from 'react'
import {animateScroll, Link as ScrollLink} from 'react-scroll'
import {twMerge} from 'tailwind-merge'

type Content = { title: string, idName: string, body: (key: number) => ReactNode }
const contents: Content[] = [
  {
    title: 'About me',
    idName: 'about-me',
    body: (key) => (
      <div key={key} className="grid grid-cols-1 gap-5 text-3xl tracking-wider">
        <p>
          I am a web engineer based in Tokyo, specializing in front-end development.
        </p>
        <p>
          While my primary focus is on front-end technologies, I also have a skill set that includes back-end
          development.
        </p>
        <p>
          My expertise encompasses working with TypeScript, Next.js, Java, and Spring Boot.
        </p>
        <p>
          In addition to my professional work, I am keen about generative art and creative coding, creating
          pieces in my free time.
        </p>
      </div>
    )
  },
  {
    title: 'Tech stack',
    idName: 'tech-stack',
    body: (key) => (
      <div key={key} className="flex flex-wrap gap-x-32 gap-y-10">
        {
          ([
            ['Language', ['Javascript', 'Typescript', 'Java', 'Python', 'VB']],
            ['Framework', ['Next.js', 'Astro', 'Spring Boot', 'PyTorch', 'p5.js']],
          ] as [string, string[]][]).map(([title, items], i) => (
            <div key={i} className="text-2xl flex tracking-wider">
              <h3 className="w-56 text-4xl">{title}</h3>
              <ul className="flex flex-col gap-y-3">
                {
                  items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    )
  },
  {
    title: 'Blog',
    idName: 'blog',
    body: (key) => (
      <div key={key} className="text-2xl">
        <p>Coming soon...</p>
      </div>
    )
  },
  {
    title: 'Contact',
    idName: 'contact',
    body: (key) => (
      <dl key={key} className="flex flex-col gap-10 text-2xl">
        {
          [
            {
              href: 'https://twitter.com/pancake_tor',
              src: '/twitter/logo-white.png',
              alt: 'X (Twitter) Logo.',
              disc: 'pancake_tor',
            },
            {
              href: 'https://github.com/pay-hayashi',
              src: '/github/github-mark-white.png',
              alt: 'Github Logo.',
              disc: 'pay-hayashi',
            },
            {
              href: '',
              src: '/mail-white.png',
              alt: 'Mail Logo.',
              disc: 'pancake.tor [at] gmail.com'
            },
          ].map(({href, src, alt, disc}, i) => {
            const Wrapper = ({children}: { children: ReactNode }) => (
              href
                ? <Link href={href} target="_blank" rel="noopener noreferrer">{children}</Link>
                : <div>{children}</div>
            )
            return (
              <Wrapper key={i}>
                <div className="flex items-center gap-10">
                  <dt className="w-10 aspect-square font-bold flex justify-center">
                    <Image src={src} width={40} height={40} alt={alt}/>
                  </dt>
                  <dd>{disc}</dd>
                </div>
              </Wrapper>
            )
          })
        }
      </dl>
    )
  },
]

const paddingX = 'px-5 md:px-20'
export const IndexPres = () => {
  return (
    <div className="text-gray-50">
      {/* Header */}
      <div className={`${paddingX} sticky top-0 py-10 z-10 flex justify-between items-center mix-blend-difference`}>
        <div>
          <h1 className="text-3xl font-bold" onClick={() => animateScroll.scrollToTop({duration: 500})}>
            Jumpei Hayashi
          </h1>
        </div>
        <div className="flex gap-5 font-bold">
          {
            contents.map(({title, idName}, i) => (
              <ScrollLink
                key={i}
                to={idName}
                className='cursor-pointer relative after:content-[""] after:absolute after:left-0 after:h-0.5 after:bg-white after:bottom-0 after:transition-all after:duration-100 after:w-0 hover:after:w-full'
                activeClass="after:w-full"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                {title}
              </ScrollLink>
            ))
          }
        </div>
      </div>

      {/* Body */}
      <div className={'my-0 grid grid-cols-1 gap-0'}>
        {
          contents.map(({title, idName, body}, i) => (
            <div
              key={i}
              id={idName}
              className={twMerge(
                `${paddingX} py-28 flex flex-col gap-10`,
                `${i % 2 ? 'lg:flex-row-reverse' : 'lg:flex-row'} lg:gap-14`,
                `${i % 2 ? 'bg-stone-100' : 'bg-stone-900'}`,
              )}
            >
              <div
                className={twMerge(
                  'lg:w-2/5 mix-blend-difference',
                  i % 2 ? 'lg:text-left' : 'lg:text-right',
                )}
              >
                <h2 className="underline text-6xl font-bold tracking-wider lg:whitespace-pre-wrap">
                  {`#${i + 1}\n${title}`}
                </h2>
              </div>
              <div className="lg:w-3/5 mix-blend-difference">
                {body(i)}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
