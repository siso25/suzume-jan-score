/* eslint-env mocha */

const assert = require('assert')
const Score = require('../lib/score')

describe('Scoreクラスのテスト', () => {
  describe('calculateのテスト', () => {
    it('3個同じと3個連番でボーナスなし', () => {
      const tiles = ['1', '1', '1', '4', '5', '6']
      const dora = ''
      const score = new Score()
      assert.strictEqual(3, score.calculate(dora, tiles))
    })

    it('3個同じと3個連番で赤牌ボーナスあり', () => {
      const tiles = ['1', '1', '1r', '4', '5', '6']
      const dora = ''
      const score = new Score()
      assert.strictEqual(4, score.calculate(dora, tiles))
    })

    it('3個同じと3個連番でドラボーナスあり', () => {
      const tiles = ['1', '1', '1', '4', '5', '6']
      const dora = '1'
      const score = new Score()
      assert.strictEqual(6, score.calculate(dora, tiles))
    })

    it('3個同じと3個連番でタンヤオ', () => {
      const tiles = ['2', '2', '2', '3', '4', '5']
      const dora = ''
      const score = new Score()
      assert.strictEqual(4, score.calculate(dora, tiles))
    })

    it('3個同じと3個連番でチャンタ', () => {
      const tiles = ['1', '1', '1', '7', '8', '9']
      const dora = ''
      const score = new Score()
      assert.strictEqual(5, score.calculate(dora, tiles))
    })

    it('スーパーレッド', () => {
      const redDragon = 'rd'
      const tiles = ['1r', '2r', '3r', redDragon, redDragon, redDragon]
      const dora = ''
      const score = new Score()
      assert.strictEqual(23, score.calculate(dora, tiles))
    })

    it('役満はドラがあっても加算しない', () => {
      const redDragon = 'rd'
      const tiles = ['1r', '2r', '3r', redDragon, redDragon, redDragon]
      const dora = '1'
      const score = new Score()
      assert.strictEqual(23, score.calculate(dora, tiles))
    })

    it('チンヤオ', () => {
      const redDragon = 'rd'
      const tiles = ['1', '1', '1', redDragon, redDragon, redDragon]
      const dora = ''
      const score = new Score()
      assert.strictEqual(19, score.calculate(dora, tiles))
    })

    it('オールグリーン', () => {
      const greenDragon = 'gd'
      const tiles = ['2', '3', '4', greenDragon, greenDragon, greenDragon]
      const dora = ''
      const score = new Score()
      assert.strictEqual(13, score.calculate(dora, tiles))
    })
  })
})
