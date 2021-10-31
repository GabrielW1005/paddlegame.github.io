export default class Paddle {

  constructor(gameWidth, gameHeight) {

    this.width = 150;

    this.height = 30;

    this.position = {
      x: gameHeight / 2 - this.width / 2,

      y: gameHeight - this.height - 10,

    }

  }

}
