import Tile from './tile.js'
import Meld from './meld.js'

export default class Score {
  constructor (numberOfPeople, dora, arrayTiles) {
    this.numberOfPeople = numberOfPeople
    this.dora = dora
    this.arrayTiles = arrayTiles
  }

  calculate () {
    const tiles = this.createTiles()
    const melds = this.createMelds(tiles)
    console.log(melds)
    if (!this.canWinning(melds)) {
      return 0
    }

    return 1
  }

  canWinning (melds) {
    return melds[0].canWinning() && melds[1].canWinning()
  }

  calcBasePoint (meld) {
    if (meld.isThreeSame()) {
      return 2
    }

    if (meld.isSequence()) {
      return 1
    }

    return 0
  }

  createTiles () {
    const sortedTiles = this.arrayTiles.sort()
    const tiles = sortedTiles.map(item => new Tile(item))
    return tiles
  }

  createMelds (tiles) {
    const eachTileCount = this.countTiles(tiles)
    const firstMeld = []
    const secondMeld = []

    for (let i = 0; i < tiles.length; i++) {
      const unit = 3
      const tile = tiles[i]
      const tileCount = eachTileCount[tile.value]

      if (tileCount === unit && firstMeld.length < unit) {
        // 同じ牌が3個あるなら「3個同じ」として組み合わせを作る
        firstMeld.push(tile)
      } else if (tileCount === unit) {
        // どちらも3個同じの場合
        secondMeld.push(tile)
      } else if (!this.includes(firstMeld, tile) && firstMeld.length < unit) {
        // 同じ牌が2個なら1つずつ格納する
        firstMeld.push(tile)
      } else {
        secondMeld.push(tile)
      }
    }

    return [new Meld(firstMeld), new Meld(secondMeld)]
  }

  includes (meld, tile) {
    for (let i = 0; i < meld.length; i++) {
      if (meld[i].value === tile.value) {
        return true
      }
    }

    return false
  }

  countTiles (tiles) {
    const eachTileCount = {}
    for (let i = 0; i < tiles.length; i++) {
      const value = tiles[i].value
      eachTileCount[value] = (eachTileCount[value] || 0) + 1
    }

    // console.log(eachTileCount)
    return eachTileCount
  }
}
