import Score from './lib/score.js'

const score = new Score('1r,2,3,c,c,c')
const tiles = score.calculate()
console.log(tiles)
