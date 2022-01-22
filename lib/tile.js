const redTileSuffix = 'r'

export default class Tile {
  constructor (valueString) {
    const value = valueString.substring(0, 1)
    const suffix = valueString.substring(1, 2)

    this.value = value
    this.isRed = this.isRedTile(value, suffix)
    this.isGreen = this.isGreenTile(value, suffix)
  }

  isRedTile (value, suffix) {
    const redDragon = 'c'

    if (value === redDragon) {
      return true
    }

    if (suffix === redTileSuffix) {
      return true
    }

    return false
  }

  isGreenTile (value, suffix) {
    const greenDragon = 'h'
    const greenTiles = ['1', '2', '3', '4', '6', '8', greenDragon]

    if (suffix === redTileSuffix) {
      return false
    }

    if (greenTiles.includes(value)) {
      return true
    }

    return false
  }
}
