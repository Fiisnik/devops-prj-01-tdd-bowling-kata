const Game = require('../bowling')

let game

beforeEach(() => {
  game = new Game()
})

function rollMany (rolls, pins) {
  for (let i = 0; i < rolls; i++) game.roll(pins)
}

describe('score equal to zero when no pins down - score()', () => {
  test('should return value : 0', () => {
    rollMany(20, 0)
    expect(game.score()).toBe(0)
  })
})

describe('score equal 20 when 1 pin down at each roll', () => {
  test('should return value : 20', () => {
    rollMany(20, 1)
    expect(game.score()).toBe(20)
  })
})

describe('test that one spare is handled ', () => {
  test('should return value : 16', () => {
    game.roll(5)
    game.roll(5) // spare
    game.roll(3)

    rollMany(17, 0)
    expect(game.score()).toBe(16)
  })
})

describe('test that one strike is handled', () => {
  test('should return value : 14', () => {
    game.roll(10) // Strike
    game.roll(1)
    game.roll(1)
    rollMany(17, 0)
    expect(game.score()).toBe(14)
  })
})
describe('test of a perfect game', () => {
  test('should return value : 300', () => {
    rollMany(12, 10)
    expect(game.score()).toBe(300)
  })
})
