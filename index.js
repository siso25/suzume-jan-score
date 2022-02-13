const Score = require('./lib/score')

module.exports.calculate = (numberOfPeople, dora, arrayTiles, isLeader = false) => {
  const score = new Score()
  const withoutLeaderBonus = score.calculate(dora, arrayTiles)

  if (!isWinnableScore(withoutLeaderBonus)) {
    const zeroScoreObj = {
      ron: 0,
      tsumo: 0,
      perPerson: 0
    }
    return zeroScoreObj
  }

  const leaderBonus = calcLeaderBonus(isLeader)
  const withLeaderBonus = withoutLeaderBonus + leaderBonus

  const ronScore = withLeaderBonus
  const withoutWinningPlayer = numberOfPeople - 1
  const scorePerPerson = calcScorePerPerson(withLeaderBonus, withoutWinningPlayer)
  const tsumoScore = scorePerPerson * withoutWinningPlayer

  const scoreObj = {
    ron: ronScore,
    tsumo: tsumoScore,
    perPerson: scorePerPerson
  }

  return scoreObj
}

const isWinnableScore = (score) => {
  const minWinnableScore = 5
  if (score < minWinnableScore) {
    return false
  }

  return true
}

const calcLeaderBonus = (isLeader) => {
  return isLeader ? 2 : 0
}

const calcScorePerPerson = (score, numberOfPeople) => {
  const scorePerPerson = Math.ceil(score / numberOfPeople)
  return scorePerPerson
}
