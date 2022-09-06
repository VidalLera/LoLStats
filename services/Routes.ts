const BASE_URL = "https://euw1.api.riotgames.com/lol"
const URL = "https://europe.api.riotgames.com/lol"
const MATCH_V5 = `${URL}/match/v5/matches`
const SUMMONER_V5 = `${BASE_URL}/summoner/v4/summoners`
const LEAGUE_V4 = `${URL}/league/v4`
const SPECTATOR_V4 = `${BASE_URL}/spectator/v4`
export const ACTIVE_GAMES = `${SPECTATOR_V4}/featured-games`

export const summoner = (summonerName: string) => `${SUMMONER_V5}/by-name/${summonerName}`
export const matchIds = (puuid: string) => `${MATCH_V5}/by-puuid/${puuid}/ids`
export const match = (matchId: string) => `${MATCH_V5}/${matchId}`
export const matchTimeLine = (matchId: string) => `${MATCH_V5}/${matchId}/timeline`
export const summonerLeague = (encryptedSummonerId: string) => `${LEAGUE_V4}/entries/by-summoner/${encryptedSummonerId}`
export const challengerLeagues = (queue: string) => `${LEAGUE_V4}/challengerleagues/by-queue/${queue}`
export const masterLeagues = (queue: string) => `${LEAGUE_V4}/masterleagues/by-queue/${queue}`
export const grandMasterLeagues = (queue: string) => `${LEAGUE_V4}/grandmasterleagues/by-queue/${queue}`
// can be paged
export const league = (queue: string, division: string, tier: string) => `${LEAGUE_V4}/entries/${queue}/${division}/${tier}?page=1`
export const activeGame = (encryptedSummonerId: string) => `${SPECTATOR_V4}/active-games/by-summoner/${encryptedSummonerId}`