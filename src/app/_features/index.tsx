import {Card} from '@/app/_components/Card'

export const IndexPres = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-5">

      {/* About me */}
      <Card>
        <Card.Title>
          <h2>About me</h2>
        </Card.Title>
        <Card.Content>
          <p>
            こんにちは、Webエンジニアの 林純平 / Jumpei Hayashi です。<br/>
            フロントエンドを中心に、バックエンドも含め広く扱っています。
            主な技術スタックは Typescript / Next.js / Java / Spring Boot です。
          </p>
        </Card.Content>
      </Card>

    </main>
  )
}
