import { MatchInfo } from 'model/Match'
import { fetchGet } from 'services/general'
import { match, matchIds } from 'services/routes'

export const getMatchIds = (puuid: string) => fetchGet<string[]>(matchIds(puuid))

export const getMatch = async (matchId: string) => {
  const { info } = await fetchGet<MatchInfo>(match(matchId))
  return info.participants[0]
}
