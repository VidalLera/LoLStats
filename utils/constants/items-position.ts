export const ITEMS_POSITIONS = ['item0', 'item1', 'item2', 'item3', 'item4', 'item5', 'item6'] as const
// eslint-disable-next-line no-unused-vars
const items = new Array(6).fill('').map((_item, i) => 'item' + (i + 1))
