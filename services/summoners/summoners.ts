import { fetchGet } from 'services/general'
import { summoner, summonerLeague } from 'services/routes'
import { Summoner } from 'model/Summoner'
import { League } from 'model/League'

export const getSummoner = (summonerName: string) => fetchGet<Summoner>(summoner(summonerName))

export const getLeagues = (encryptedSummonerId: string) => fetchGet<League[]>(summonerLeague(encryptedSummonerId))
