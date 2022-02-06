# suzume-jan-score
This is a function to calculate the score of [Suzume Jan](https://sugorokuya.jp/p/suzume-jong/).

# Installation
```bash
npm install suzume-jan-score
```

# Getting Started
```javascript
const suzumeJanScore = require('suzume-jan-score')
```

# Usage
## calculate(isLeader, numberOfPeople, dora, tiles)
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

## Tile types
### suited tiles
|  isRed  |  number  |  tile string  |
| ---- | ---- | ---- |
|  false  |  1  |  '1'  |
|  false  |  2  |  '2'  |
|  false  |  3  |  '3'  |
|  false  |  4  |  '4'  |
|  false  |  5  |  '5'  |
|  false  |  6  |  '6'  |
|  false  |  7  |  '7'  |
|  false  |  8  |  '8'  |
|  false  |  9  |  '9'  |
|  true  |  1  |  '1r'  |
|  true  |  2  |  '2r'  |
|  true  |  3  |  '3r'  |
|  true  |  4  |  '4r'  |
|  true  |  5  |  '5r'  |
|  true  |  6  |  '6r'  |
|  true  |  7  |  '7r'  |
|  true  |  8  |  '8r'  |
|  true  |  9  |  '9r'  |
### honor tiles
|  tile name  |  tile string  |
| ---- | ---- |
|  Red Dragon  |  'rd'  |
|  Green Dragon  |  'gd'  |
