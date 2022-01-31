/* eslint-env mocha */

const assert = require('assert')
const Score = require('../lib/score')

describe('', () => {
  describe('calculateのテスト', () => {
    it('3個同じと3個連番でボーナスなし', () => {
      const tiles = ['1', '1', '1', '4', '5', '6']
      const dora = ''
      const score = new Score(dora, tiles)
      assert.strictEqual(3, score.calculate())
    })

    it('3個同じと3個連番で赤牌ボーナスあり', () => {
      const tiles = ['1', '1', '1r', '4', '5', '6']
      const dora = ''
      const score = new Score(dora, tiles)
      assert.strictEqual(4, score.calculate())
    })

    it('3個同じと3個連番でドラボーナスあり', () => {
      const tiles = ['1', '1', '1', '4', '5', '6']
      const dora = '1'
      const score = new Score(dora, tiles)
      assert.strictEqual(6, score.calculate())
    })

    it('3個同じと3個連番でタンヤオ', () => {
      const tiles = ['2', '2', '2', '3', '4', '5']
      const dora = ''
      const score = new Score(dora, tiles)
      assert.strictEqual(4, score.calculate())
    })

    it('3個同じと3個連番でチャンタ', () => {
      const tiles = ['1', '1', '1', '7', '8', '9']
      const dora = ''
      const score = new Score(dora, tiles)
      assert.strictEqual(5, score.calculate())
    })

    it('スーパーレッド', () => {
      const redDragon = 'rd'
      const tiles = ['1r', '2r', '3r', redDragon, redDragon, redDragon]
      const dora = ''
      const score = new Score(dora, tiles)
      assert.strictEqual(23, score.calculate())
    })

    it('役満はドラがあっても加算しない', () => {
      const redDragon = 'rd'
      const tiles = ['1r', '2r', '3r', redDragon, redDragon, redDragon]
      const dora = '1'
      const score = new Score(dora, tiles)
      assert.strictEqual(23, score.calculate())
    })

    it('チンヤオ', () => {
      const redDragon = 'rd'
      const tiles = ['1', '1', '1', redDragon, redDragon, redDragon]
      const dora = ''
      const score = new Score(dora, tiles)
      assert.strictEqual(19, score.calculate())
    })

    it('オールグリーン', () => {
      const greenDragon = 'gd'
      const tiles = ['2', '3', '4', greenDragon, greenDragon, greenDragon]
      const dora = ''
      const score = new Score(dora, tiles)
      assert.strictEqual(13, score.calculate())
    })
  })

  describe('createMeldsのテスト', () => {
    it('3個同じが2セット', () => {
      const tiles = ['1', '1', '1', '3', '3', '3']
      const score = new Score('', tiles)
      const melds = score.createMelds(score.tiles)
      assert.strictEqual('1', melds[0].firstTile.value)
      assert.strictEqual('1', melds[0].secondTile.value)
      assert.strictEqual('1', melds[0].thirdTile.value)
      assert.strictEqual('3', melds[1].firstTile.value)
      assert.strictEqual('3', melds[1].secondTile.value)
      assert.strictEqual('3', melds[1].thirdTile.value)
    })

    it('連番が2セット', () => {
      const tiles = ['1', '1', '2', '2', '3', '3']
      const score = new Score('', tiles)
      const melds = score.createMelds(score.tiles)
      assert.strictEqual('1', melds[0].firstTile.value)
      assert.strictEqual('2', melds[0].secondTile.value)
      assert.strictEqual('3', melds[0].thirdTile.value)
      assert.strictEqual('1', melds[1].firstTile.value)
      assert.strictEqual('2', melds[1].secondTile.value)
      assert.strictEqual('3', melds[1].thirdTile.value)
    })

    it('連番と3個同じ', () => {
      const tiles = ['1', '2', '2', '2', '2', '3']
      const score = new Score('', tiles)
      const melds = score.createMelds(score.tiles)
      assert.strictEqual('1', melds[0].firstTile.value)
      assert.strictEqual('2', melds[0].secondTile.value)
      assert.strictEqual('3', melds[0].thirdTile.value)
      assert.strictEqual('2', melds[1].firstTile.value)
      assert.strictEqual('2', melds[1].secondTile.value)
      assert.strictEqual('2', melds[1].thirdTile.value)
    })

    it('連番と3個同じ', () => {
      const tiles = ['1', '1', '2', '4', '5', '6']
      const score = new Score('', tiles)
      const melds = score.createMelds(score.tiles)
      assert.strictEqual('1', melds[0].firstTile.value)
      assert.strictEqual('2', melds[0].secondTile.value)
      assert.strictEqual('4', melds[0].thirdTile.value)
      assert.strictEqual('1', melds[1].firstTile.value)
      assert.strictEqual('5', melds[1].secondTile.value)
      assert.strictEqual('6', melds[1].thirdTile.value)
    })
  })
})
