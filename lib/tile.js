const redTileSuffix = 'r'
const redDragon = 'rd'
const greenDragon = 'gd'

module.exports = class Tile {
  constructor (valueAndSuffix) {
    this.value = this.searchValue(valueAndSuffix.trim())
    this.suffix = this.searchSuffix(valueAndSuffix.trim())
  }

  searchValue (valueAndSuffix) {
    if (valueAndSuffix === redDragon || valueAndSuffix === greenDragon) {
      return valueAndSuffix
    }

    return valueAndSuffix.substring(0, 1)
  }

  searchSuffix (valueAndSuffix) {
    if (valueAndSuffix === redDragon || valueAndSuffix === greenDragon) {
      const empty = ''
      return empty
    }

    return valueAndSuffix.substring(1, 2)
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
    const greenTiles = ['2', '3', '4', '6', '8', greenDragon]

    if (this.suffix === redTileSuffix) {
      return false
    }

    if (greenTiles.includes(this.value)) {
      return true
    }

    return false
  }

  isHonor () {
    const honors = [redDragon, greenDragon]
    if (honors.includes(this.value)) {
      return true
    }

    return false
  }

  isTerminal () {
    const terminals = ['1', '9']

    if (terminals.includes(this.value)) {
      return true
    }

    return false
  }

  isSimple () {
    const simples = ['2', '3', '4', '5', '6', '7', '8']

    if (simples.includes(this.value)) {
      return true
    }

    return false
  }
}
