import { MatchInfo } from 'model/Match'
import { fetchGet } from 'services/general'
import { match, matchIds } from 'services/lol/routes'

export const getMatchIds = (puuid: string) => fetchGet<string[]>(matchIds(puuid))

export const getUserMatch = async (puuid: string, matchId: string) => {
  const { info } = await fetchGet<MatchInfo>(match(matchId))
  const [userMatch] = info.participants.filter(participant => participant.puuid === puuid)
  return userMatch
}

export const getMatch = async (matchId: string) => {
  const { info } = await fetchGet<MatchInfo>(match(matchId))
  return info.participants
}
