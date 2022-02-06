# suzume-jan-score
This is a function to calculate the score of [Suzume Jan](https://sugorokuya.jp/p/suzume-jong/).

## Installation
```bash
npm install suzume-jan-score
```

## Getting Started
```javascript
const suzumeJanScore = require('suzume-jan-score')
```

## Usage
### calculate(isLeader, numberOfPeople, dora, tiles)
When you want to calculate the score, pass the following argument to execute.

- isLeader: Pass true when the winning player is leader.
- numberOfPeple: number of players
- dora: dora tile of the game (see ["Tile types"](#tile-types))
- tiles: tiles in a player's hand (see ["Tile types"](#tile-types))

```javascript
const dora = '7'
const tiles = ['1r', '1', '1', '7', '8', '9']
const score = suzumeJanScore.calculate(true, 3, dora, tiles)

console.log(score)
//=> {ron: 9, tsumo: 10, perPeople: 5}
```

### Tile types
#### suited tiles
|  red tile  |  number  |  tile string  |
| ---- | ---- | ---- |
|    |  1  |  '1'  |
|    |  2  |  '2'  |
|    |  3  |  '3'  |
|    |  4  |  '4'  |
|    |  5  |  '5'  |
|    |  6  |  '6'  |
|    |  7  |  '7'  |
|    |  8  |  '8'  |
|    |  9  |  '9'  |
|  ○  |  1  |  '1r'  |
|  ○  |  2  |  '2r'  |
|  ○  |  3  |  '3r'  |
|  ○  |  4  |  '4r'  |
|  ○  |  5  |  '5r'  |
|  ○  |  6  |  '6r'  |
|  ○  |  7  |  '7r'  |
|  ○  |  8  |  '8r'  |
|  ○  |  9  |  '9r'  |
#### honor tiles
|  tile name  |  tile string  |
| ---- | ---- |
|  Red Dragon  |  'rd'  |
|  Green Dragon  |  'gd'  |
