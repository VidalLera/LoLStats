import { fetchGet } from "services/general"
import { summoner, matchIds, match } from "services/Routes"

export const getSummoner = (summonerName: string) => fetchGet(summoner(summonerName))

export const getMatchIds = (puuid: string) => fetchGet(matchIds(puuid))

export const getMatch = (matchId: string) => fetchGet(match(matchId))
