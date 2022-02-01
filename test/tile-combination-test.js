/* eslint-env mocha */

const TileCombination = require('../lib/tile-combination')
const assert = require('assert')

describe('TileCombinationのテスト', () => {
  describe('createMeldsのテスト', () => {
    it('3個同じが2セット', () => {
      const tiles = ['1', '1', '1', '3', '3', '3']
      const tileCombination = new TileCombination('', tiles)
      assert.strictEqual('1', tileCombination.melds[0].firstTile.value)
      assert.strictEqual('1', tileCombination.melds[0].secondTile.value)
      assert.strictEqual('1', tileCombination.melds[0].thirdTile.value)
      assert.strictEqual('3', tileCombination.melds[1].firstTile.value)
      assert.strictEqual('3', tileCombination.melds[1].secondTile.value)
      assert.strictEqual('3', tileCombination.melds[1].thirdTile.value)
    })

    it('連番が2セット', () => {
      const tiles = ['1', '1', '2', '2', '3', '3']
      const tileCombination = new TileCombination('', tiles)
      assert.strictEqual('1', tileCombination.melds[0].firstTile.value)
      assert.strictEqual('2', tileCombination.melds[0].secondTile.value)
      assert.strictEqual('3', tileCombination.melds[0].thirdTile.value)
      assert.strictEqual('1', tileCombination.melds[1].firstTile.value)
      assert.strictEqual('2', tileCombination.melds[1].secondTile.value)
      assert.strictEqual('3', tileCombination.melds[1].thirdTile.value)
    })

    it('連番と3個同じ', () => {
      const tiles = ['1', '2', '2', '2', '2', '3']
      const tileCombination = new TileCombination('', tiles)
      assert.strictEqual('1', tileCombination.melds[0].firstTile.value)
      assert.strictEqual('2', tileCombination.melds[0].secondTile.value)
      assert.strictEqual('3', tileCombination.melds[0].thirdTile.value)
      assert.strictEqual('2', tileCombination.melds[1].firstTile.value)
      assert.strictEqual('2', tileCombination.melds[1].secondTile.value)
      assert.strictEqual('2', tileCombination.melds[1].thirdTile.value)
    })

    it('連番と3個同じ', () => {
      const tiles = ['1', '1', '2', '4', '5', '6']
      const tileCombination = new TileCombination('', tiles)
      assert.strictEqual('1', tileCombination.melds[0].firstTile.value)
      assert.strictEqual('2', tileCombination.melds[0].secondTile.value)
      assert.strictEqual('4', tileCombination.melds[0].thirdTile.value)
      assert.strictEqual('1', tileCombination.melds[1].firstTile.value)
      assert.strictEqual('5', tileCombination.melds[1].secondTile.value)
      assert.strictEqual('6', tileCombination.melds[1].thirdTile.value)
    })
  })
})
