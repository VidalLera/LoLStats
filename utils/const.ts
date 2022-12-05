export const PLATFORM = {
  BR: 'BR1',
  EUNE: 'EUN1',
  EUW: 'EUW1',
  JP: 'JP1',
  KR: 'KR',
  LAN: 'LA1',
  LAS: 'LA2',
  NA: 'NA1',
  OCE: 'OC1',
  TR: 'TR1',
  RU: 'RU'
}

export const REGIONS = {
  BR: 'AMERICAS',
  LAN: 'AMERICAS',
  LAS: 'AMERICAS',
  NA: 'AMERICAS',
  JP: 'ASIA',
  KR: 'ASIA',
  EUNE: 'EUROPE',
  EUW: 'EUROPE',
  RU: 'EUROPE',
  TR: 'EUROPE',
  OCE: 'SEA'
}

export const items = new Array(6).fill('').map((_item, i) => 'item' + (i + 1))
export const ITEMS_POSITIONS = ['item0', 'item1', 'item2', 'item3', 'item4', 'item5', 'item6'] as const

export const LANGUAGES = [
  'en_US',
  'cs_CZ',
  'el_GR',
  'fr_FR',
  'pl_PL',
  'ro_RO',
  'hu_HU',
  'en_GB',
  'de_DE',
  'es_ES',
  'it_IT',
  'ja_JP',
  'ko_KR',
  'es_MX',
  'es_AR',
  'pt_BR',
  'en_AU',
  'ru_RU',
  'tr_TR',
  'ms_MY',
  'en_PH',
  'en_SG',
  'th_TH',
  'vn_VN',
  'id_ID',
  'zh_MY',
  'zh_CN',
  'zh_TW'
]
