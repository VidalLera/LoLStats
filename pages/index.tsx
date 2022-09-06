import { Header } from 'components/header/header'
import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {

  return (
    <>
      <Header></Header>
      <ul>
        <li>
          <Link href="champions">champions</Link>
        </li>
        <li>
          <Link href="home">summoner</Link>
        </li>
      </ul>
    </>
  )
}

export default Home
