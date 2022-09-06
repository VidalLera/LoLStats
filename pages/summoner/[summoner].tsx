import { NextPage } from "next"
import { Match } from "components/match/match"
import { Summoner } from "model/Summoner"
import { getMatch, getMatchIds, getSummoner } from "services/summoners/summoners"
import { Info, MatchInfo, Participant } from "model/Match"
import { Profile } from "components/profile/profile"

type props = {
  summoner: Summoner
  matches: settled[]
} 
type settled = {
  status: "rejected" | "fulfilled"
  value: Participant
}
const Summoner: NextPage<props> = ({ matches, summoner }) => {
  if (!matches) return <>Loading...</>;
  return (
    <>
      <Profile summoner={summoner} />
      {
        matches.map(({ status, value: match}, index) => {
          if (status === "rejected" ) return <p>error</p>
          return (
            <Match key={index} match={match} />
          )
        })
      }
    </>
  )
}

// create an endpoint to get only ESPECIFIC SUMMONER match info when i have the match id in bbdd
// this could reduce the amount of requests to the api
// and also i could store the match info in bbdd when it doesnt exist in bbdd
export async function getServerSideProps(ctx: any)  {
  const { summoner: summonerName } = ctx.params
  console.time('getServerSideProps ... [summoner]')

  const summoner = await getSummoner(summonerName)
  console.log(`[ getSummoner ] -> puuid = ${summoner.puuid}`)

  const matchIds = await getMatchIds(summoner.puuid)
  console.log(`[ getMatchIds ] -> Pos [0] = ${matchIds[0]}`)

  const matches = await getAllMatches(matchIds, summoner.id)
  console.log(`[ getMatchIds ] -> matches.lenght = ${matches.length}`)

  console.timeEnd('getServerSideProps ... [summoner]')
  return { props: { matches, summoner } }
}

async function getAllMatches(matchIds: string[], puuid: string) {
  const matches = await Promise.allSettled(matchIds.splice(0, 3).map(getMatch))
  let userMatchInfo = matches.map((result, index) => {
    if (result.status === "rejected" ) return { status: result.reason, value: [] }
    const { metadata, info: match } : MatchInfo = result.value
    const userMatch =  getUserMatchInfo(match, puuid)
    return { status, value: userMatch }
  })
  return userMatchInfo
}

function getUserMatchInfo(match: Info, puuid: string) {
  const [userMatch] = match.participants.filter(userMatchInfo => userMatchInfo.summonerId === puuid)
  return userMatch
}

export default Summoner

