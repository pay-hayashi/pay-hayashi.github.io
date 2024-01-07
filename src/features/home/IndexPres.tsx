import {ReactNode} from 'react'

const padding = 'px-5 md:px-20'
const Sections = ({children}: { children: [string, (key: number) => ReactNode][] }) => {
  return children.map(([title, body], i) => (
    <div key={i} className={`${padding} flex flex-col lg:grid lg:grid-cols-12 gap-14`}>
      <div className="lg:col-span-4">
        <h2 className="text-5xl font-bold lg:whitespace-pre-wrap">{`# ${i + 1}\n${title}`}</h2>
      </div>
      <div className="lg:col-span-8">
        {body(i)}
      </div>
    </div>
  ))
}

export const IndexPres = () => {
  return (
    <div className="text-gray-50">
      {/* Header */}
      <div className={`${padding} sticky top-0 py-10 flex justify-between items-center backdrop-blur`}>
        <div>
          <h1 className="text-2xl font-bold">Jumpei Hayashi</h1>
        </div>
        <div className="flex gap-5 font-bold">
          <p>About me</p>
          <p>Tech Stack</p>
          <p>Works</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
      </div>

      {/* Body */}
      <div className={'pt-20 grid grid-cols-1 gap-32'}>
        <Sections>
          {
            [[
              'About me',
              (key) => (
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
            ],]
          }
        </Sections>
      </div>
    </div>
  )
}
