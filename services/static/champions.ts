import { Champion, ChampionMetaData } from 'model/Champion'
import { ChampionsMetaData } from 'model/Champions'
import { fetchGet } from 'services/general'
import { ALL_CHAMPIONS, champion } from 'services/routes'

export const getChampions = async (): Promise<Champion[]> => {
  const { data } = await fetchGet<ChampionsMetaData>(ALL_CHAMPIONS)
  return Object.values(data)
}

export const getChampion = async (name: string) => {
  const { data } = await fetchGet<ChampionMetaData>(champion(name))
  return data[name]
}
