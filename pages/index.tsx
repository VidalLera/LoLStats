import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {

  return (
    <>
      <ul>
        <li>
          <Link href="champions">champions</Link>
        </li>
        <li>
          <Link href="summoner">summoner</Link>
        </li>
      </ul>
    </>
  )
}

export default Home
