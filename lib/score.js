const Tile = require('./tile.js')
const Meld = require('./meld.js')

module.exports = class Score {
  constructor (dora, arrayTiles) {
    this.dora = new Tile(dora)
    this.tiles = this.createTiles(arrayTiles)
  }

  calculate () {
    console.log(this.tiles)
    const melds = this.createMelds(this.tiles)

    if (!this.canWinning(melds)) {
      return 0
    }

    const basePoint = this.calcBasePoint(melds)
    const limitHandPoint = this.calcLimitHandPoint(this.tiles)
    const bonus = this.calcBonus(melds, this.tiles)

    if (limitHandPoint !== 0) {
      return basePoint + limitHandPoint
    }

    return basePoint + bonus
  }

  calcBasePoint (melds) {
    return this.basePoint(melds[0]) + this.basePoint(melds[1])
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

  calcLimitHandPoint (tiles) {
    if (this.isSuperRed(tiles)) {
      return 20
    }
    if (this.isAllHonorsOrTerminals(tiles)) {
      return 15
    }
    if (this.isAllGreen(tiles)) {
      return 10
    }

    return 0
  }

  calcBonus (melds, tiles) {
    const outSideHandBonus = this.isOutSideHand(melds) ? 2 : 0
    const allSimplesBonus = this.isAllSimples(tiles) ? 1 : 0
    const redTileBonus = 1 * this.countRedTile(tiles)
    const doraBonus = 1 * this.countDora(tiles)

    return outSideHandBonus + allSimplesBonus + redTileBonus + doraBonus
  }

  isSuperRed (tiles) {
    for (let i = 0; i < tiles.length; i++) {
      if (!tiles[i].isRed()) {
        return false
      }
    }

    return true
  }

  isAllHonorsOrTerminals (tiles) {
    for (let i = 0; i < tiles.length; i++) {
      if (!tiles[i].isHonor() || !tiles[i].isTerminal()) {
        return false
      }
    }

    return true
  }

  isAllGreen (tiles) {
    for (let i = 0; i < tiles.length; i++) {
      if (!tiles[i].isGreen()) {
        return false
      }
    }

    return true
  }

  isOutSideHand (melds) {
    return this.existsHonorsOrTerminals(melds[0]) && this.existsHonorsOrTerminals(melds[1])
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

  isAllSimples (tiles) {
    for (let i = 0; i < tiles.length; i++) {
      if (!tiles[i].isSimple()) {
        return false
      }
    }

    return true
  }

  countRedTile (tiles) {
    let redTileCount = 0

    for (let i = 0; i < tiles.length; i++) {
      if (tiles[i].isRed()) {
        redTileCount += 1
      }
    }

    return redTileCount
  }

  countDora (tiles) {
    let doraTileCount = 0

    for (let i = 0; i < tiles.length; i++) {
      if (tiles[i].value === this.dora.value) {
        doraTileCount += 1
      }
    }

    return doraTileCount
  }

  canWinning (melds) {
    return melds[0].canWinning() && melds[1].canWinning()
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
