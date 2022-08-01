const BASE_URL = "https://euw1.api.riotgames.com/lol/"
const URL = "https://europe.api.riotgames.com/lol/"

export const summoner = (summonerName: string) => `${BASE_URL}summoner/v4/summoners/by-name/${summonerName}`
export const matchIds = (puuid: string) => `${URL}match/v5/matches/by-puuid/${puuid}/ids`
export const match = (matchId: string) => `${URL}match/v5/matches/${matchId}`