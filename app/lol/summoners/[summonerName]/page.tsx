import { Matches } from 'components/matches/matches'
import { getSummoner } from 'services/summoners/summoners'

type props = {
  params: {
    summonerName: string
  }
}

export default async function Page ({ params: { summonerName } }: props) {
  const { puuid } = await getSummoner(summonerName)

  return (
    <>
      <div>SummonerId: {summonerName}</div>
      {/* @ts-expect-error */}
      <Matches puuid={puuid}/>
    </>
  )
}
