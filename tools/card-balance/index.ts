import cards from '../../src/data/cards'
import { PersonStatusType } from '../../src/types/state'
import { keys } from '../../src/utils/typeHelpers'

const objCalc = (
  objA: Record<string, any>,
  objB: Record<string, any>,
  func: (a: number, b: number) => number,
) => {
  const res = { ...objA }
  keys(objA).forEach((key) => {
    res[key] = func(objA[key], objB[key])
  })
  return res
}

const p: PersonStatusType = {
  stadium: 1000,
  capSpace: 1000,
  recruits: 1000,
  stadiumProd: 1000,
  capSpaceProd: 1000,
  recruitProd: 1000,
  tower: 1000,
  wall: 1000,
}

const orig = { ...p }

const o = { ...p }

cards.forEach(({ prob, effect }) => {
  for (let i = 0; i < prob; i++) {
    effect(p, o)
  }
})

const pDiff = objCalc(p, orig, (a, b) => a - b)
const oDiff = objCalc(o, orig, (a, b) => a - b)
const sumDiff = objCalc(pDiff, oDiff, (a, b) => a + b)

console.log('pDiff =', pDiff)
console.log('oDiff =', oDiff)
console.log('pDiff + oDiff =', sumDiff)

const sumProb0 = cards
  .filter(({ type }) => type === 0)
  .reduce((a, b) => a + b.prob, 0)
const sumProb1 = cards
  .filter(({ type }) => type === 1)
  .reduce((a, b) => a + b.prob, 0)
const sumProb2 = cards
  .filter(({ type }) => type === 2)
  .reduce((a, b) => a + b.prob, 0)

console.log(`red prob sum: ${sumProb0}`)
console.log(`blue prob sum: ${sumProb1}`)
console.log(`green prob sum: ${sumProb2}`)
