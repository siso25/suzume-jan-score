import Tile from './tile.js'
import Meld from './meld.js'

export default class Score {
  constructor (numberOfPeople, dora, arrayTiles) {
    this.numberOfPeople = numberOfPeople
    this.dora = dora
    this.arrayTiles = arrayTiles.sort()
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
    const tiles = this.arrayTiles.map(item => new Tile(item))
    return tiles
  }

  createMelds (tiles) {
    const eachTileNumber = this.countTiles(tiles)
    const unit = 3
    const firstMeld = []
    const SecondMeld = []

    for (let i = 0; i < tiles.length; i++) {
      const tile = tiles[i]
      // 同じ牌が3個以上あるなら「3個同じ」として組み合わせを作る
      if (eachTileNumber[tile.value] >= unit && firstMeld.length < unit) {
        firstMeld.push(tile)
      } else {
        SecondMeld.push(tile)
      }
    }

    return [new Meld(firstMeld), new Meld(SecondMeld)]
  }

  countTiles (tiles) {
    const eachTileNumber = {}
    console.log(eachTileNumber)
    for (let i = 0; i < tiles.length; i++) {
      const value = tiles[i].value
      eachTileNumber[value] = (eachTileNumber[value] || 0) + 1
    }

    return eachTileNumber
  }
}
