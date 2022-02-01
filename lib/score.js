const TileCombination = require('./tile-combination')

module.exports = class Score {
  calculate (dora, arrayTiles) {
    const tileCombination = new TileCombination(dora, arrayTiles)

    if (!tileCombination.canWinning()) {
      return 0
    }

    const basePoint = this.calcBasePoint(tileCombination)
    const limitHandPoint = this.calcLimitHandPoint(tileCombination)
    const bonus = this.calcBonus(tileCombination)

    if (limitHandPoint !== 0) {
      return basePoint + limitHandPoint
    }

    return basePoint + bonus
  }

  calcBasePoint (tileCombination) {
    return this.basePoint(tileCombination.melds[0]) + this.basePoint(tileCombination.melds[1])
  }

  basePoint (meld) {
    if (meld.isThreeSame()) {
      return 2
    }
    if (meld.isSequence()) {
      return 1
    }

    return 0
  }

  calcLimitHandPoint (tileCombination) {
    if (tileCombination.isSuperRed()) {
      return 20
    }
    if (tileCombination.isAllHonorsOrTerminals()) {
      return 15
    }
    if (tileCombination.isAllGreen()) {
      return 10
    }

    return 0
  }

  calcBonus (tileCombination) {
    const outSideHandBonus = tileCombination.isOutSideHand() ? 2 : 0
    const allSimplesBonus = tileCombination.isAllSimples() ? 1 : 0
    const redTileBonus = 1 * tileCombination.countRedTile()
    const doraBonus = 1 * tileCombination.countDora()

    return outSideHandBonus + allSimplesBonus + redTileBonus + doraBonus
  }
}
