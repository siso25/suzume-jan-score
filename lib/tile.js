const redTileSuffix = 'r'
const redDragon = 'c'
const greenDragon = 'h'

export default class Tile {
  constructor (valueString) {
    this.value = valueString.substring(0, 1)
    this.suffix = valueString.substring(1, 2)
  }

  isRed () {
    if (this.value === redDragon) {
      return true
    }

    if (this.suffix === redTileSuffix) {
      return true
    }

    return false
  }

  isGreen () {
    const greenTiles = ['1', '2', '3', '4', '6', '8', greenDragon]

    if (this.suffix === redTileSuffix) {
      return false
    }

    if (greenTiles.includes(this.value)) {
      return true
    }

    return false
  }

  isHonor () {
    if (this.value === redDragon) {
      return true
    }

    if (this.value === greenDragon) {
      return true
    }

    return false
  }
}
