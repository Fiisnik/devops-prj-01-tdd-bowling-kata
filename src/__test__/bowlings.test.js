const Game = require('../bowling')

const game = new Game(0)

function rollMany(rolls, pins) {
  for (let i = 0; i < rolls; i++)
  game.roll(pins);
}

describe('score equal to zero when no pins down - score()', () => {
  test('should return value : 0', () => {
   rollMany(20,0);
    expect(game.scores()).toBe(0)
  })
})

describe(' score equal 20 when 1 pin down at each roll', () => {
  test('should return value : 20', () => {
    rollMany(20,1);
    expect(game.scores()).toBe(20)
  })
})
