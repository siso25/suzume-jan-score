import Score from './lib/score.js'

const numberOfPeople = 3
const dora = '1'
// const tiles = ['1', '1', '1', '3', '3', '3']
// const tiles = ['1', '1', '2', '2', '3', '3']
// const tiles = ['1', '1', '2', '4', '5', '6']
// const tiles = ['1', '2', '2', '2', '2', '3']
// const tiles = ['1', '1', '1', '1', '2', '3']
const tiles = ['1', '2', '3', '3', '3', '3']
const score = new Score(numberOfPeople, dora, tiles)
console.log(score.calculate())
