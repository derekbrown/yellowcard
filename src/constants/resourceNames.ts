export const resNames = ['stadium', 'capSpace', 'recruits'] as const

export const resProds = ['stadiumProd', 'capSpaceProd', 'recruitProd']

export const resProdMap = {
  stadiumProd: 'stadium',
  capSpaceProd: 'capSpace',
  recruitProd: 'recruits',
} as const

export const poNames = ['playerName', 'opponentName'] as const

export const allStatusNames = [
  'tower',
  'wall',
  'stadium',
  'capSpace',
  'recruits',
  'stadiumProd',
  'capSpaceProd',
  'recruitProd',
] as const

export const otherSettingNames = [
  'winTower',
  'winResource',
  'cardsInHand',
  'aiLevel',
] as const

export const nonNameSettingNames = [
  ...allStatusNames,
  ...otherSettingNames,
] as const

export const resNameAllMap = {
  stadium: ['stadium', 'stadiumProd'],
  capSpace: ['capSpace', 'capSpaceProd'],
  recruit: ['recruits', 'recruitProd'],
} as const

export type ResNameType = 'stadium' | 'capSpace' | 'recruit'
