import Tile from './tile.js'

export default class Score {
  constructor (delimitedInComma) {
    this.delimitedInComma = delimitedInComma
  }

  calculate () {
    const tiles = this.createTiles()
    return tiles
  }

  createTiles () {
    const arrayTiles = this.delimitedInComma.split(',')
    const tiles = arrayTiles.map((item) => new Tile(item))
    return tiles
  }
}
