import Tile from './tile.js'

export default class Score {
  constructor (delimitedInComma) {
    this.delimitedInComma = delimitedInComma
  }

  calculate () {
    const tiles = this.createTiles()
    const combination = this.createCombination(tiles)
    // let totalScore = 0
    // totalScore = combination.reduce(block => this.calcBasePoint(block))
    console.log(combination)
    console.log(this.isThreeSame(combination[0]))
    console.log(this.isThreeSame(combination[1]))
    console.log(this.isSequence(combination[0]))
    console.log(this.isSequence(combination[1]))

    // return totalScore
  }

  calcBasePoint (meld) {
    if (this.isThreeSame(meld)) {
      return 2
    }

    if (this.isSequence(meld)) {
      return 1
    }

    return 0
  }

  isThreeSame (meld) {
    const targetValue = meld[0].value
    const sameTileCount = meld.filter(tile => tile.value === targetValue).length
    return sameTileCount === meld.length
  }

  isSequence (meld) {
    if (meld[0].isHonor() || meld[1].isHonor() || meld[2].isHonor()) {
      return false
    }

    const firstValue = parseInt(meld[0].value)
    const secondValue = parseInt(meld[1].value)
    const thirdValue = parseInt(meld[2].value)
    if (secondValue - firstValue !== 1) {
      return false
    }

    if (thirdValue - secondValue !== 1) {
      return false
    }

    return true
  }

  createTiles () {
    const arrayTiles = this.delimitedInComma.split(',')
    const sortedArrayTiles = arrayTiles.sort()
    const tiles = sortedArrayTiles.map(item => new Tile(item))
    return tiles
  }

  createCombination (tiles) {
    const countTiles = {}
    for (let i = 0; i < tiles.length; i++) {
      const value = tiles[i].value
      countTiles[value] = (countTiles[value] || 0) + 1
    }

    const unit = 3
    const block1 = []
    const block2 = []
    for (let i = 0; i < tiles.length; i++) {
      const tile = tiles[i]
      // 同じ牌が3個以上あるなら「3個同じ」として組み合わせを作る
      if (countTiles[tile.value] >= unit && block1.length < unit) {
        block1.push(tile)
      } else {
        block2.push(tile)
      }
    }

    return [block1, block2]
  }
}
