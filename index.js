import Score from './lib/score.js'

const numberOfPeople = 3
const dora = '1'
const tiles = ['1r', '1', '5', '1', '4', '5']
const score = new Score(numberOfPeople, dora, tiles)
console.log(score.calculate())
