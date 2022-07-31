import { token } from "services/token";

export const getSummonerByName = (summonerName: string) => {
  const options : RequestInit = { headers: token }
  const URL = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`
  console.log(options)
  return fetch(URL, options).then(res => res.json());
}