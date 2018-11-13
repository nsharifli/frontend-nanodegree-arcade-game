// Enemies our player must avoid
class Enemy {
  constructor(x, y) {
    this.sprite = 'images/enemy-bug.png';
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
      this.x = -300;
      this.speed = this.randomSpeed();
    }


    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
  }

  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  randomSpeed() {
    const max = 500,
          min = 100;
    return Math.floor(Math.random() * (max - min)) + min
  }
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
let enemyFirst = new Enemy(-50, 225),
    enemySecond = new Enemy(-300, 225),
    enemyThird = new Enemy(-50, 140),
    enemyFourth = new Enemy(-300, 140),
    enemyFifth = new Enemy(-50, 55),
    enemySixth = new Enemy(-300, 55);

let allEnemies = [enemyFirst, enemySecond, enemyThird, enemyFourth, enemyFifth, enemySixth]
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



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
