var gameOver = false;
var tileHeight = 83; // Game tile height //
var tileWidth = 101; // Game tile width //
var leftLimit = 0; // x axis "Left" limit of canvas //
var rightLimit= 400; // x axis "Right" limit of canvas //
var upLimit = 80; // y axis "Up" limit of canvas //
var downLimit = 400; // y axis "Down" limit of canvas //
var itemX = [100, 50, 150, 175, 200, 300, 250, 350, 75]; // Array of random x axis locations to place items on canvas //
var itemY = [120, 135, 150, 175, 300, 225, 200]; // Array of random y axis locations to place items on canvas //
var score = 0; // Set initial score //
var lives = 9; // Set intial life value //
var itemSprites = ['images/cup.png', // Array of item sprites //
    'images/cocacola.png',
    'images/pizza.png',
    'images/chocolate.png',
    'images/shoppingBag.png'];

// Enemies our player must avoid
function startClick () { // Starts the game //
    gameOver = false;
    document.getElementById('startGameScreen').style.display = 'none';
}

var Enemy = function(x,y) {
    this.x = x; // Sets (x,y) enemy position on canvas //
    this.y = y;
    var enemySpeed = [90, 70, 130, 150, 110, 190]; // Array of enemy speeds //
    var randomSpeed = enemySpeed[Math.floor(Math.random() * enemySpeed.length)]; // Assign random speed to enemies //
    this.speed = randomSpeed;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if (this.x > rightLimit + 100) { // Resets the enemy when they reach the right side (+100 to create a better visual flow) of the canvas //
        this.x = -100; // Spawn enemy -100 off canvas to create a better visual flow of game //
    }
};

Enemy.prototype.render = function() { // Draws the enemy on the canvas //
    if (gameOver !== true) {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
};

var Item = function (x,y) {
    this.type = itemSprites[Math.floor(Math.random() * itemSprites.length)]; // Picks a random item to be placed on canvas //
    this.x = itemX[Math.floor(Math.random() * itemX.length)]; // Assign random placement of item on canvas //
    this.y = itemY[Math.floor(Math.random() * itemY.length)];
    this.sprite = this.type;
};

Item.prototype.resetNew = function() { // Random item is placed on canvas after player collects an item //
    this.sprite = itemSprites[Math.floor(Math.random() * itemSprites.length)];
    this.x = itemX[Math.floor(Math.random() * itemX.length)]; // Assign random placement of item on canvas //
    this.y = itemY[Math.floor(Math.random() * itemY.length)];
};

Item.prototype.update = function() { // Collision detection for player/items //
        if(player.x <= (this.x + 60) && this.x <= (player.x + 60) && player.y <= (this.y + 60) && this.y <= (player.y + 60)) {
            item.resetNew();
            score = score + 100;
            document.getElementById('score').innerHTML = 'Score: ' + score;
        }
};

Item.prototype.render = function() { // Draws the item on the canvas //
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x,y) { // Sets (x,y) player position on canvas //
    this.x = x;
    this.y = y;
    this.sprite = "images/char-cat-girl.png";
    var playerSpeed = 200;
};

Player.prototype.update = function() { // Collision dectection for player/enemies //
    if (lives > 0){
        for(var e = 0, zeeEnemies = allEnemies.length; e < zeeEnemies; e++) {
        if(player.x <= (allEnemies[e].x + 50) && allEnemies[e].x <= (player.x + 30) && player.y <= (allEnemies[e].y + 40) && allEnemies[e].y <= (player.y + 30)) {
            player.reset();
            lives = lives - 1;
            document.getElementById('lives').innerHTML = 'Lives: ' + lives;
            }
        }
    }
    else {
        GameOver();
    }
};

Player.prototype.render = function() { // Draws player on canvas //
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.reset = function () { // Set initial player placement on game canvas //
    this.x = 200;
    this.y = 400;
};

Player.prototype.resetWater = function() { // Reset the player after reaching the water tiles //
    this.x = 200; // Set (x,y) location of player reset on canvas //
    this.y = 400;
    score = score + 50;
    document.getElementById('score').innerHTML = 'Score: ' + score; // Add score to html scoreboard //
};

Player.prototype.handleInput = function(key) { // Set player boundaries on canvas //
    if (gameOver !== true) {
        switch(key){
        case 'left':
            if (this.x > leftLimit)
            this.x -= tileWidth;
            break;
        case 'right':
            if (this.x < rightLimit)
            this.x += tileWidth;
            break;
        case 'up':
            if (this.y > upLimit)
            this.y -= tileHeight;
            else player.resetWater(); // Reset player when upLimit/water is reached //
            break;
        case 'down':
            if (this.y < downLimit)
            this.y += tileHeight;
            break;
        default:
            return;
        }
    }
};

function GameOver () { // Triggers the Game Over screen //
    gameOver = true;
    document.getElementById('gameOver').style.display = 'block';

}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
var enemy1 = new Enemy(-100, 250); // Set intial placement of enemies x/y on canvas.
allEnemies.push(enemy1);           // -x is set differently to keep enemies from
var enemy2 = new Enemy(-150, 150); // stacking if assigned the same random speed //
allEnemies.push(enemy2);
var enemy3 = new Enemy(-80, 100);
allEnemies.push(enemy3);
var enemy4= new Enemy(-200, 200);
allEnemies.push(enemy4);
var enemy5= new Enemy(-175, 75);
allEnemies.push(enemy5);
var allEnemies = [enemy1,enemy2,enemy3,enemy4,enemy5];
// Place the player object in a variable called player
var player = new Player (200, 400); // Set initial placement of player on canvas //
var item = new Item();
//var gem = new Gem();
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