const STATIC_PATH = 'https://ddragon.leagueoflegends.com'
export const VERSIONS = `${STATIC_PATH}/api/versions.json`
const CDN = `${STATIC_PATH}/cdn`
const VERSION = `${CDN}/12.22.1`
const DATA = `${VERSION}/data`
const IMG = `${VERSION}/img`
const LANGUAGE = `${DATA}/en_US`
const CHAMPION = `${LANGUAGE}/champion`
const CHAMPION_IMG = `${IMG}/champion`
const ITEM_IMG = `${IMG}/item`
const ICON_IMG = `${IMG}/profileicon`
export const ALL_CHAMPIONS = `${CHAMPION}.json`
export const champion = (name: string) => `${CHAMPION}/${name}.json`
export const championImg = (name: string) => `${CHAMPION_IMG}/${name}.png`
export const itemImg = (itemId: number) => `${ITEM_IMG}/${itemId}.png`
export const profileIcon = (iconId: number) => `${ICON_IMG}/${iconId}.png`
