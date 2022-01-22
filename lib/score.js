import Tile from './tile.js'

export default class Score {
  constructor (delimitedInComma) {
    this.delimitedInComma = delimitedInComma
  }

  calculate () {
    const tiles = this.createTiles()
    const combination = this.createCombination(tiles)

    return combination
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
