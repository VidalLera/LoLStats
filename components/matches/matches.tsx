import { Match } from 'components/match/match'
import { getMatchIds } from 'services/lol/match/match'

type props = {
  puuid: string
}

export async function Matches ({ puuid }: props) {
  const matchIds = (await getMatchIds(puuid)).slice(0, 5)

  return (
    <>
      <div>Matches</div>
      {
        /* @ts-expect-error */
        matchIds.map(matchId => <Match key={matchId} puuid={puuid} matchId={matchId} />)
      }
    </>
  )
}
