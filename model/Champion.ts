import { Champions } from './Champions'

export interface Image {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface Skin {
  id: number
  num: number
  name: string
  chroma: boolean
}

interface Info {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}

export interface Champion {
  id: string
  key: string
  name: string
  title: string
  image: Image
  skins: Skin[]
  lore: string
  blurb: string
  allytips: string[]
  enemytips: string[]
  tags: string[]
  partype: string
  info: Info
}

export type Data = {
  // eslint-disable-next-line no-unused-vars
  [key in keyof Champions as string]: Champion;
}

export interface ChampionMetaData {
  type: string;
  format: string;
  version: string;
  data: Data;
}
