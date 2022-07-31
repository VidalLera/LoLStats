import { GetStaticPropsContext, NextPage } from "next"
import { getSummonerByName } from "services/summoners/summoners"

const Summoner: NextPage<any> = ({ summoner }) => {
  getSummonerByName('SlenderLynux')
  return (
    <>
      <h1>Summoner</h1>
    </>
  )
}

export async function getServerSideProps(context: GetStaticPropsContext) {
  const res = await fetch('http://localhost:3000/api/summoner')
  const summoner = await res.json()
  return { props: { summoner } }
}

export default Summoner