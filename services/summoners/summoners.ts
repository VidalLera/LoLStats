import { fetchGet } from "services/general"
import { summoner, matchIds, match, summonerLeague } from "services/Routes"
import { Summoner } from "model/Summoner"
import { MatchInfo } from "model/Match"
import { League } from "model/League"

export const getSummoner = (summonerName: string): Promise<Summoner> => fetchGet(summoner(summonerName))

export const getMatchIds = (puuid: string): Promise<string[]> => fetchGet(matchIds(puuid))

export const getMatch = (matchId: string): Promise<MatchInfo> => fetchGet(match(matchId))

export const getLeages = (encryptedSummonerId: string): Promise<League[]> => fetchGet(summonerLeague(encryptedSummonerId))
