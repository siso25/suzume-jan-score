const Score = require('./lib/score.js')

// const numberOfPeople = 3
// const isLeader = true
const dora = '1'
const tiles = ['1', '1', '1', 'rd', 'rd', 'rd']
const score = new Score(dora, tiles)
console.log(score.calculate())
