import {Card} from '@/app/_components/Card'
import {Dl} from '@/app/_components/Dl'

export const IndexPres = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-5">

      {/* About this */}
      <Card>
        <Card.Title>
          About This Page
        </Card.Title>
        <Card.Content>
          このページは、Webエンジニアである 林純平 (Jumpei Hayashi) のポートフォリオサイトです。{'\n'}
          プロフィール / 技術スタック / これまでの制作物などについてまとめています。
        </Card.Content>
      </Card>

      {/* About me */}
      <Card>
        <Card.Title>
          About me
        </Card.Title>
        <Card.Content>
          都内在住のWebエンジニアです。
          フロントエンドを中心に、バックエンドも含め広く扱っています。{'\n'}
          主な技術スタックは Typescript / Next.js / Java / Spring Boot です。
        </Card.Content>
      </Card>

      {/* Tech Stack */}
      <Card>
        <Card.Title>
          Tech Stack
        </Card.Title>
        <Card.Content>
          <Dl>
            <Dl.Container>
              <Dl.Dt>Frontend</Dl.Dt>
              <Dl.Dd>Typescript / Next.js / Nuxt.js</Dl.Dd>
            </Dl.Container>
            <Dl.Container>
              <Dl.Dt>Backend</Dl.Dt>
              <Dl.Dd>Java / Spring Boot / MySQL</Dl.Dd>
            </Dl.Container>
            <Dl.Container>
              <Dl.Dt>Other</Dl.Dt>
              <Dl.Dd>Python / VBA</Dl.Dd>
            </Dl.Container>
          </Dl>
        </Card.Content>
      </Card>

      {/* Contact */}
      <Card>
        <Card.Title>
          Contact
        </Card.Title>
        <Card.Content>
          <Dl>
            <Dl.Container>
              <Dl.Dt>Email</Dl.Dt>
              <Dl.Dd>pancake.tor@gmail.com</Dl.Dd>
            </Dl.Container>
            <Dl.Container>
              <Dl.Dt>X / Twitter</Dl.Dt>
              <Dl.Dd>@pancake_tor</Dl.Dd>
            </Dl.Container>
          </Dl>
        </Card.Content>
      </Card>

    </main>
  )
}
