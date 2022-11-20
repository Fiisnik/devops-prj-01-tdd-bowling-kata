module.exports = class Game {
  constructor (score) {
    this.score = score
  }

  roll (pins) {
    this.score += pins
  }

  scores () {
    return this.score
  }
}