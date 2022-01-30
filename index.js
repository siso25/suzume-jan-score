const Score = require('./lib/score.js')

// const numberOfPeople = 3
// const isLeader = true
const dora = '1'
// const tiles = ['1', '1', '1', '3', '3', '3']
// const tiles = ['1', '1', '2', '2', '3', '3']
// const tiles = ['1', '1', '2', '4', '5', '6']
// const tiles = ['1', '2', '2', '2', '2', '3']
// const tiles = ['1', '1', '1', '1', '2', '3']
// const tiles = ['1', '2', '3', '3', '3', '3']
// const tiles = ['1', '2', '3', '4', '5', '6']
const tiles = ['1', '1', '1r', 'gd', 'gd', 'gd']
const score = new Score(dora, tiles)
console.log(score.calculate())
