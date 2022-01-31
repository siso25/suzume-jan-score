module.exports = class Meld {
  constructor (tiles) {
    // 牌が昇順でソートされている前提
    this.firstTile = tiles[0]
    this.secondTile = tiles[1]
    this.thirdTile = tiles[2]
  }

  canWinning () {
    if (this.isThreeSame()) {
      return true
    }

    if (this.isSequence()) {
      return true
    }

    return false
  }

  isThreeSame () {
    if (this.firstTile.value !== this.secondTile.value) {
      return false
    }

    if (this.firstTile.value !== this.thirdTile.value) {
      return false
    }

    return true
  }

  isSequence () {
    if (this.firstTile.isHonor() ||
      this.secondTile.isHonor() ||
      this.thirdTile.isHonor()) {
      return false
    }

    const firstValue = parseInt(this.firstTile.value)
    const secondValue = parseInt(this.secondTile.value)
    const thirdValue = parseInt(this.thirdTile.value)

    if (secondValue - firstValue !== 1) {
      return false
    }

    if (thirdValue - secondValue !== 1) {
      return false
    }

    return true
  }
}
