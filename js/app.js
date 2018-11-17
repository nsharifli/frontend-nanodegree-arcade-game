const LeftBound = 50,
      RightBound = 375,
      UpperBound = 130,
      LowerBound = 450,
      HorizontalStep = 100,
      VerticalStep = 80,
      InitialPositionX = 215,
      InitialPositionY = 450;

class Enemy {
  constructor(x, y) {
    this.sprite = 'images/enemy-bug.png';
    this.width = 101;
    this.height = 85;
    this.x = x;
    this.y = y;
    this.speed = this.randomSpeed();
  }

  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update(dt) {
    if (this.x < 505) {
      this.x = this.x + this.speed * dt;
    } else {
      this.x = -500;
      this.speed = this.randomSpeed();
    }
  }

  // Draw the enemy on the screen, required method for game
  // It clips the images, removes the whitespace.
  render() {
    ctx.drawImage(Resources.get(this.sprite), 0, 70, this.width, this.height, this.x, this.y, this.width, this.height);
  }

  randomSpeed() {
    const max = 500,
          min = 100;
    return Math.floor(Math.random() * (max - min)) + min
  }
};

class Player {
  constructor(x, y) {
    this.sprite = 'images/char-boy.png';
    this.width = 70;
    this.height = 90;
    this.x = x;
    this.y = y;
    this.score = 0;
  }

  handleInput(key) {
    switch (key) {
      case 'left':
        if (this.x <= LeftBound) return;
        this.x = this.x - HorizontalStep;
        break;
      case 'right':
        if (this.x >= RightBound) return;
        this.x = this.x + HorizontalStep
        break;
      case 'up':
        if (this.y <= UpperBound) {
          this.x = InitialPositionX;
          this.y = InitialPositionY;
          this.score += 1;
          document.querySelector('.current-score').innerText = this.score;
          return;
          };
        this.y = this.y - VerticalStep;
        break;
      default:
        if (this.y >= LowerBound) return;
        this.y = this.y + VerticalStep;
    }
  }

  // It clips and draws the image, removes the whitespace.
  render() {
    ctx.drawImage(Resources.get(this.sprite), 15, 60, this.width, this.height, this.x, this.y, this.width, this.height);
  }
};

let enemyFirst = new Enemy(-50, 295),
    enemySecond = new Enemy(-300, 295),
    enemyThird = new Enemy(-50, 210),
    enemyFourth = new Enemy(-300, 210),
    enemyFifth = new Enemy(-50, 125),
    enemySixth = new Enemy(-300, 125);

let allEnemies = [enemyFirst, enemySecond, enemyThird, enemyFourth, enemyFifth, enemySixth]
let player = new Player(InitialPositionX, InitialPositionY);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
