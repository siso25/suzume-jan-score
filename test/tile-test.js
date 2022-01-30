/* eslint-env mocha */

const assert = require('assert')
const Tile = require('../lib/tile')

describe('Tileクラスのテスト', () => {
  describe('constructorのテスト', () => {
    it('左から1文字目が値、2文字目がサフィックスとして設定される', () => {
      const tile = new Tile('1r')
      assert.strictEqual('1', tile.value)
      assert.strictEqual('r', tile.suffix)
    })

    it('1文字なら値だけ設定', () => {
      const tile = new Tile('1')
      assert.strictEqual('1', tile.value)
      assert.strictEqual('', tile.suffix)
    })

    it('發または中なら値に2文字設定、サフィックスは空文字', () => {
      const redDragon = new Tile('rd')
      const greenDragon = new Tile('gd')
      assert.strictEqual('rd', redDragon.value)
      assert.strictEqual('', redDragon.suffix)
      assert.strictEqual('gd', greenDragon.value)
      assert.strictEqual('', greenDragon.suffix)
    })

    it('前後の空白は取り除いて値とサフィックスを設定', () => {
      const tile = new Tile(' 1r ')
      assert.strictEqual('1', tile.value)
      assert.strictEqual('r', tile.suffix)
    })
  })

  describe('isRedのテスト', () => {
    it('サフィックスに「r」が設定されていたらtrue', () => {
      const tile = new Tile('1r')
      assert.strictEqual(true, tile.isRed())
    })

    it('サフィックスなしの数字はfalse', () => {
      const tile = new Tile('1')
      assert.strictEqual(false, tile.isRed())
    })

    it('中はtrue', () => {
      const tile = new Tile('rd')
      assert.strictEqual(true, tile.isRed())
    })

    it('發はfalse', () => {
      const tile = new Tile('gd')
      assert.strictEqual(false, tile.isRed())
    })
  })

  describe('isGreenのテスト', () => {
    it('2,3,4,6,8,發はtrue', () => {
      const tile2 = new Tile('2')
      const tile3 = new Tile('3')
      const tile4 = new Tile('4')
      const tile6 = new Tile('6')
      const tile8 = new Tile('8')
      const greenDragon = new Tile('gd')
      assert.strictEqual(true, tile2.isGreen())
      assert.strictEqual(true, tile3.isGreen())
      assert.strictEqual(true, tile4.isGreen())
      assert.strictEqual(true, tile6.isGreen())
      assert.strictEqual(true, tile8.isGreen())
      assert.strictEqual(true, greenDragon.isGreen())
    })

    it('1,5,7,9,中はfalse', () => {
      const tile1 = new Tile('1')
      const tile5 = new Tile('5')
      const tile7 = new Tile('7')
      const tile9 = new Tile('9')
      const redDragon = new Tile('rd')
      assert.strictEqual(false, tile1.isGreen())
      assert.strictEqual(false, tile5.isGreen())
      assert.strictEqual(false, tile7.isGreen())
      assert.strictEqual(false, tile9.isGreen())
      assert.strictEqual(false, redDragon.isGreen())
    })

    it('サフィックスに「r」が設定されていたらfalse', () => {
      const tile = new Tile('2r')
      assert.strictEqual(false, tile.isGreen())
    })
  })

  describe('isHonorのテスト', () => {
    it('1〜9はfalse', () => {
      const tile1 = new Tile('1')
      const tile2 = new Tile('2')
      const tile3 = new Tile('3')
      const tile4 = new Tile('4')
      const tile5 = new Tile('5')
      const tile6 = new Tile('6')
      const tile7 = new Tile('7')
      const tile8 = new Tile('8')
      const tile9 = new Tile('9')
      assert.strictEqual(false, tile1.isHonor())
      assert.strictEqual(false, tile2.isHonor())
      assert.strictEqual(false, tile3.isHonor())
      assert.strictEqual(false, tile4.isHonor())
      assert.strictEqual(false, tile5.isHonor())
      assert.strictEqual(false, tile6.isHonor())
      assert.strictEqual(false, tile7.isHonor())
      assert.strictEqual(false, tile8.isHonor())
      assert.strictEqual(false, tile9.isHonor())
    })

    it('發はtrue', () => {
      const tile = new Tile('gd')
      assert.strictEqual(true, tile.isHonor())
    })

    it('中はtrue', () => {
      const tile = new Tile('rd')
      assert.strictEqual(true, tile.isHonor())
    })
  })

  describe('isTerminalのテスト', () => {
    it('1と9はtrue', () => {
      const tile1 = new Tile('1')
      const tile9 = new Tile('9')
      assert.strictEqual(true, tile1.isTerminal())
      assert.strictEqual(true, tile9.isTerminal())
    })

    it('2〜8はfalse', () => {
      const tile2 = new Tile('2')
      const tile3 = new Tile('3')
      const tile4 = new Tile('4')
      const tile5 = new Tile('5')
      const tile6 = new Tile('6')
      const tile7 = new Tile('7')
      const tile8 = new Tile('8')
      assert.strictEqual(false, tile2.isTerminal())
      assert.strictEqual(false, tile3.isTerminal())
      assert.strictEqual(false, tile4.isTerminal())
      assert.strictEqual(false, tile5.isTerminal())
      assert.strictEqual(false, tile6.isTerminal())
      assert.strictEqual(false, tile7.isTerminal())
      assert.strictEqual(false, tile8.isTerminal())
    })

    it('發と中はfalse', () => {
      const greenDragon = new Tile('gd')
      const redDragon = new Tile('rd')
      assert.strictEqual(false, greenDragon.isTerminal())
      assert.strictEqual(false, redDragon.isTerminal())
    })
  })

  describe('isSimpleのテスト', () => {
    it('2〜8はtrue', () => {
      const tile2 = new Tile('2')
      const tile3 = new Tile('3')
      const tile4 = new Tile('4')
      const tile5 = new Tile('5')
      const tile6 = new Tile('6')
      const tile7 = new Tile('7')
      const tile8 = new Tile('8')
      assert.strictEqual(true, tile2.isSimple())
      assert.strictEqual(true, tile3.isSimple())
      assert.strictEqual(true, tile4.isSimple())
      assert.strictEqual(true, tile5.isSimple())
      assert.strictEqual(true, tile6.isSimple())
      assert.strictEqual(true, tile7.isSimple())
      assert.strictEqual(true, tile8.isSimple())
    })

    it('1と9はfalse', () => {
      const tile1 = new Tile('1')
      const tile9 = new Tile('9')
      assert.strictEqual(false, tile1.isSimple())
      assert.strictEqual(false, tile9.isSimple())
    })

    it('發と中はfalse', () => {
      const greenDragon = new Tile('gd')
      const redDragon = new Tile('rd')
      assert.strictEqual(false, greenDragon.isSimple())
      assert.strictEqual(false, redDragon.isSimple())
    })
  })
})
