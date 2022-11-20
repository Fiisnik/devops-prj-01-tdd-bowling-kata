const Game = require('../bowling')

const game = new Game(0)

describe('score equal to zero when no pins down - score()', () => {
  test('should return value : 0', () => {
    for (let i = 0; i < 20; i++) {
      game.roll(0)
    }

    expect(game.scores()).toBe(0)
  })
})

describe(' score equal 20 when 1 pin down at each roll', () => {
  test('should return value : 20', () => {
    for (let i = 0; i < 20; i++) {
      game.roll(1)
    }

    expect(game.scores()).toBe(20)
  })
})
