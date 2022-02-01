const Tile = require('./tile.js')
const Meld = require('./meld.js')

module.exports = class TileCombination {
  constructor (dora, arrayTiles) {
    this.dora = new Tile(dora)
    this.tiles = this.createTiles(arrayTiles)
    this.melds = this.createMelds(this.tiles)
  }

  isSuperRed () {
    for (let i = 0; i < this.tiles.length; i++) {
      if (!this.tiles[i].isRed()) {
        return false
      }
    }

    return true
  }

  isAllHonorsOrTerminals () {
    for (let i = 0; i < this.tiles.length; i++) {
      if (!this.tiles[i].isHonor() && !this.tiles[i].isTerminal()) {
        return false
      }
    }

    return true
  }

  isAllGreen () {
    for (let i = 0; i < this.tiles.length; i++) {
      if (!this.tiles[i].isGreen()) {
        return false
      }
    }

    return true
  }

  isOutSideHand () {
    return this.existsHonorsOrTerminals(this.melds[0]) && this.existsHonorsOrTerminals(this.melds[1])
  }

  existsHonorsOrTerminals (meld) {
    if (meld.firstTile.isHonor() || meld.firstTile.isTerminal()) {
      return true
    }
    if (meld.secondTile.isHonor() || meld.secondTile.isTerminal()) {
      return true
    }
    if (meld.thirdTile.isHonor() || meld.thirdTile.isTerminal()) {
      return true
    }

    return false
  }

  isAllSimples () {
    for (let i = 0; i < this.tiles.length; i++) {
      if (!this.tiles[i].isSimple()) {
        return false
      }
    }

    return true
  }

  countRedTile () {
    let redTileCount = 0

    for (let i = 0; i < this.tiles.length; i++) {
      if (this.tiles[i].isRed()) {
        redTileCount += 1
      }
    }

    return redTileCount
  }

  countDora () {
    let doraTileCount = 0

    for (let i = 0; i < this.tiles.length; i++) {
      if (this.tiles[i].value === this.dora.value) {
        doraTileCount += 1
      }
    }

    return doraTileCount
  }

  canWinning () {
    return this.melds[0].canWinning() && this.melds[1].canWinning()
  }

  createTiles (arrayTiles) {
    const sortedTiles = arrayTiles.sort()
    const tiles = sortedTiles.map(item => new Tile(item))
    return tiles
  }

  createMelds (tiles) {
    const eachTileCount = this.countTiles(tiles)
    const firstMeld = []
    const secondMeld = []

    for (let i = 0; i < tiles.length; i++) {
      const maxLength = 3
      const tile = tiles[i]
      const tileCount = eachTileCount[tile.value]

      if (tileCount === maxLength && firstMeld.length < maxLength) {
        // 同じ牌が3個あるなら「3個同じ」として組み合わせを作る
        firstMeld.push(tile)
      } else if (tileCount === maxLength) {
        // どちらも3個同じの場合
        secondMeld.push(tile)
      } else if (!this.includes(firstMeld, tile) && firstMeld.length < maxLength) {
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

    return eachTileCount
  }
}
