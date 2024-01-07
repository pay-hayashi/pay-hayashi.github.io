export const IndexPres = () => {
  return (
    <div className="mx-5 md:mx-20 text-gray-50">
      {/* Header */}
      <div className="py-5 flex justify-between items-center sticky top-0">
        <div>
          <h1 className="text-2xl font-bold">Jumpei Hayashi</h1>
        </div>
        <div className="flex gap-5">
          <p>About me</p>
          <p>Tech Stack</p>
          <p>Works</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
      </div>

      {/* Body */}
      <div className='pt-20 grid grid-cols-1 gap-20'>
        {/* About me */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className='lg:col-span-4'>
            <h2 className='text-5xl font-bold lg:whitespace-pre-wrap'>#1{'\n'}About me</h2>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 gap-5 text-3xl tracking-wider">
            <p>
              I am a web engineer based in Tokyo, specializing in front-end development.
            </p>
            <p>
              While my primary focus is on front-end technologies, I also have a broad skill set that includes back-end
              development.
            </p>
            <p>
              My expertise encompasses working with TypeScript, Next.js, Java, and Spring Boot.
            </p>
            <p>
              In addition to my professional work, I am keen about generative art and creative coding, creating unique
              pieces in my free time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
