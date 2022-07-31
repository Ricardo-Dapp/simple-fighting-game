//Classes
class Player {
  constructor(health) {
    this.health = health;
  }

  strike() {
    return Math.floor(Math.random() * 20 + 1);
  }

  heal() {
    this.health += Math.floor(Math.random() * 20 + 1);
    if (this.health > 100) {
      this.health = 100;
    }
  }
}

class Game {
  constructor() {
    this.isOver = false;
  }

  play() {
    this.isOver = false;
  }

  checkIsOver() {
    if (playerOne.health <= 0 && playerTwo.health > 0) {
      this.isOver = true;
      this.declareWinner("Player 2");
    } else if (playerTwo.health <= 0 && playerOne.health > 0) {
      this.isOver = true;
      this.declareWinner("Player 1");
    }
  }

  declareWinner(winner) {
    winnerHeader.innerText = `Winner: ${winner}`;
  }

  reset() {
    playerOne.health = 100;
    playerTwo.health = 100;
    playerOneHealth.innerText = playerOne.health;
    playerTwoHealth.innerText = playerTwo.health;
    winnerHeader.innerText = "";
    console.log("reset");
    gameManager.play();
  }
}

// Variables
const playerOne = new Player(100);
const playerTwo = new Player(100);
const gameManager = new Game();

//DOM Elements
const playerOneHealth = document.getElementById("playerOne-health");
const playerTwoHealth = document.getElementById("playerTwo-health");
const resetButton = document.getElementById("reset-button");
const winnerHeader = document.getElementById("winner-header");

resetButton.onclick = () => {
  gameManager.reset();
};

// Event Listeners
document.addEventListener("keydown", (e) => {
  if (e.key == "q") {
    if (gameManager.isOver !== true) {
      playerTwo.health -= playerOne.strike();
      playerTwoHealth.innerText = playerTwo.health;
      gameManager.checkIsOver();
    }
  }

  if (e.key == "p") {
    if (gameManager.isOver !== true) {
      playerOne.health -= playerTwo.strike();

      playerOneHealth.innerText = playerOne.health;
      gameManager.checkIsOver();
    }
  }

  if (e.key == "a") {
    if (gameManager.isOver !== true) {
      playerOne.heal();
      playerOneHealth.innerText = playerOne.health;
    }
  }

  if (e.key == "l") {
    if (gameManager.isOver !== true) {
      playerTwo.heal();
      playerTwoHealth.innerText = playerTwo.health;
    }
  }
});
