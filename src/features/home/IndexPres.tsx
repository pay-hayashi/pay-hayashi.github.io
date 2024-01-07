import {ReactNode} from 'react'
import {twMerge} from 'tailwind-merge'

const contents = [{
  title: 'About me',
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
  body: (key) => (
    <div key={key} className="text-2xl">
      <p>Coming soon...</p>
    </div>
  )
},
{
  title: 'Contact',
  body: (key) => (
    <dl key={key} className="flex flex-col gap-5 text-2xl">
      {
        ([
          ['X / Twitter', '@pancake_tor'],
          ['Email', 'pancake.tor@gmail.com'],
        ] as [string, string][]).map(([dt, dd], i) => (
          <div key={i} className="flex">
            <dt className="w-40 font-bold">{dt}</dt>
            <dd>{dd}</dd>
          </div>
        ))
      }
    </dl>
  )
}] as { title: string, body: (key: number) => ReactNode }[]

const padding = 'px-5 md:px-20'
export const IndexPres = () => {
  return (
    <div className="text-gray-50">
      {/* Header */}
      <div className={`${padding} sticky top-0 py-10 flex justify-between items-center mix-blend-difference`}>
        <div>
          <h1 className="text-3xl font-bold">Jumpei Hayashi</h1>
        </div>
        <div className="flex gap-5 font-bold">
          {
            contents.map(({title}, i) => (
              <a
                key={i}
                href={`#${i + 1}`}
                className="hover:underline"
              >
                {title}
              </a>
            ))
          }
        </div>
      </div>

      {/* Body */}
      <div className={'my-32 grid grid-cols-1 gap-56'}>
        {
          contents.map(({title, body}, i) => (
            <div
              key={i}
              id={`${i + 1}`}
              className={twMerge(
                `${padding} flex flex-col gap-10`,
                `${i % 2 ? 'lg:flex-row-reverse' : 'lg:flex-row'} lg:gap-14`
              )}
            >
              <div className="lg:w-2/5">
                <h2 className="underline text-6xl font-bold tracking-wider lg:whitespace-pre-wrap">
                  {`#${i + 1}\n${title}`}
                </h2>
              </div>
              <div className="lg:w-3/5">
                {body(i)}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
