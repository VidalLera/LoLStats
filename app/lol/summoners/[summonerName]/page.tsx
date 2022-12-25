import { Matches } from 'components/matches/matches'
import { getSummoner } from 'services/lol/summoners/summoners'
import { Profile } from 'components/profile/profile'

type props = {
  params: {
    summonerName: string
  }
}

export default async function Page ({ params: { summonerName } }: props) {
  const summoner = await getSummoner(summonerName)

  const { puuid } = summoner
  return (
    <>
      <Profile summoner={summoner} />
      {/* @ts-expect-error */}
      <Matches puuid={puuid}/>
    </>
  )
}
