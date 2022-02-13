/* eslint-env mocha */

const assert = require('assert')
const suzumeJanScore = require('../index')

describe('index.jsのテスト', () => {
  it('プレイヤー3人で親じゃない', () => {
    const numberOfPeople = 3
    const tiles = ['1', '1', '1', '7', '8', '9']
    const dora = ''
    // 基本点3点 + ボーナス2点(チャンタ)
    const Obj = suzumeJanScore.calculate(numberOfPeople, dora, tiles)

    assert.strictEqual(5, Obj.ron)
    assert.strictEqual(6, Obj.tsumo)
    assert.strictEqual(3, Obj.perPerson)
  })

  it('プレイヤー3人で親上がり', () => {
    const isLeader = true
    const numberOfPeople = 3
    const tiles = ['1', '1', '1', '7', '8', '9']
    const dora = ''
    // 基本点3点 + ボーナス2点(チャンタ) + 親ボーナス2点
    const Obj = suzumeJanScore.calculate(numberOfPeople, dora, tiles, isLeader)

    assert.strictEqual(7, Obj.ron)
    assert.strictEqual(8, Obj.tsumo)
    assert.strictEqual(4, Obj.perPerson)
  })

  it('親ボーナスありで5点なら上がれない', () => {
    const isLeader = true
    const numberOfPeople = 3
    const tiles = ['1', '1', '1', '4', '5', '6']
    const dora = ''
    // 基本点3点 + ボーナス0点
    const Obj = suzumeJanScore.calculate(numberOfPeople, dora, tiles, isLeader)

    assert.strictEqual(0, Obj.ron)
    assert.strictEqual(0, Obj.tsumo)
    assert.strictEqual(0, Obj.perPerson)
  })
})
