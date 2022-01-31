/* eslint-env mocha */

const assert = require('assert')
const Meld = require('../lib/meld')
const Tile = require('../lib/tile')

describe('Meldクラスのテスト', () => {
  describe('canWinningのテスト', () => {
    it('3個同じならtrue', () => {
      const firstTile = new Tile('1')
      const secondTile = new Tile('1')
      const thirdTile = new Tile('1')
      const meld = new Meld([firstTile, secondTile, thirdTile])
      assert.strictEqual(true, meld.canWinning())
    })

    it('連番ならtrue', () => {
      const firstTile = new Tile('1')
      const secondTile = new Tile('2')
      const thirdTile = new Tile('3')
      const meld = new Meld([firstTile, secondTile, thirdTile])
      assert.strictEqual(true, meld.canWinning())
    })

    it('3個同じでも連番でもないならfalse', () => {
      const firstTile = new Tile('1')
      const secondTile = new Tile('1')
      const thirdTile = new Tile('3')
      const meld = new Meld([firstTile, secondTile, thirdTile])
      assert.strictEqual(false, meld.canWinning())
    })
  })

  describe('isThreeSameのテスト', () => {
    it('3個が同じ数字ならtrue', () => {
      const firstTile = new Tile('1')
      const secondTile = new Tile('1')
      const thirdTile = new Tile('1')
      const meld = new Meld([firstTile, secondTile, thirdTile])
      assert.strictEqual(true, meld.isThreeSame())
    })
    it('3個が同じ文字ならtrue', () => {
      const greenDragon = 'gd'
      const firstTile = new Tile(greenDragon)
      const secondTile = new Tile(greenDragon)
      const thirdTile = new Tile(greenDragon)
      const meld = new Meld([firstTile, secondTile, thirdTile])
      assert.strictEqual(true, meld.isThreeSame())
    })
    it('3個の内1つが違う数字ならtrue', () => {
      const firstTile = new Tile('2')
      const secondTile = new Tile('1')
      const thirdTile = new Tile('1')
      const meld = new Meld([firstTile, secondTile, thirdTile])
      assert.strictEqual(false, meld.isThreeSame())
    })
    it('3個の内1つが違う文字ならtrue', () => {
      const greenDragon = 'gd'
      const redDragon = 'rd'
      const firstTile = new Tile(greenDragon)
      const secondTile = new Tile(greenDragon)
      const thirdTile = new Tile(redDragon)
      const meld = new Meld([firstTile, secondTile, thirdTile])
      assert.strictEqual(false, meld.isThreeSame())
    })
  })

  describe('isSequenceのテスト', () => {
    it('3個が連番ならtrue', () => {
      const firstTile = new Tile('1')
      const secondTile = new Tile('2')
      const thirdTile = new Tile('3')
      const meld = new Meld([firstTile, secondTile, thirdTile])
      assert.strictEqual(true, meld.isSequence())
    })

    it('1個目と2個目が連番でないならfalse', () => {
      const firstTile = new Tile('1')
      const secondTile = new Tile('3')
      const thirdTile = new Tile('4')
      const meld = new Meld([firstTile, secondTile, thirdTile])
      assert.strictEqual(false, meld.isSequence())
    })

    it('2個目と3個目が連番でないならfalse', () => {
      const firstTile = new Tile('1')
      const secondTile = new Tile('2')
      const thirdTile = new Tile('4')
      const meld = new Meld([firstTile, secondTile, thirdTile])
      assert.strictEqual(false, meld.isSequence())
    })

    it('文字ならfalse', () => {
      const greenDragon = 'gd'
      const firstTile = new Tile('1')
      const secondTile = new Tile('2')
      const thirdTile = new Tile(greenDragon)
      const meld = new Meld([firstTile, secondTile, thirdTile])
      assert.strictEqual(false, meld.isSequence())
    })
  })
})
