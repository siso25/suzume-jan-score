export default class Tile {
  constructor (valueString) {
    const value = valueString.substring(0, 1)
    const suffix = valueString.substring(1, 2)

    this.value = value
    this.isRed = this.isRedTile(value, suffix)
  }

  isRedTile (value, suffix) {
    const redDragon = 'c'
    const redTileSuffix = 'r'

    if (value === redDragon) {
      return true
    }

    if (suffix === redTileSuffix) {
      return true
    }

    return false
  }
}
