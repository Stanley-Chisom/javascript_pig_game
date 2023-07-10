class Game {
  constructor() {
    this.players = [
      document.querySelector('.player--0'),
      document.querySelector('.player--1'),
    ];
    this.scores = [
      document.getElementById('score--0'),
      document.getElementById('score--1'),
    ];
    this.currentScores = [
      document.getElementById('current--0'),
      document.getElementById('current--1'),
    ];
    this.diceEl = document.querySelector('.dice');
    this.btnNew = document.querySelector('.btn--new');
    this.btnRoll = document.querySelector('.btn--roll');
    this.btnHold = document.querySelector('.btn--hold');
    this.currentScore = 0;
    this.activePlayer = 0;

    this.init();
  }

  init() {
    this.scores[0].textContent = 0;
    this.scores[1].textContent = 0;
    this.diceEl.classList.add('hidden');
    this.btnRoll.addEventListener('click', () => this.rollDice());
    this.btnHold.addEventListener('click', () => this.holdScore());
  }

  rollDice() {
    const dice = Math.trunc(Math.random() * 6) + 1;

    this.diceEl.classList.remove('hidden');
    this.diceEl.src = `img/dice-${dice}.png`;

    if (dice !== 1) {
      this.currentScore += dice;
      this.currentScores[this.activePlayer].textContent = this.currentScore;
    } else {
      this.switchPlayer();
    }
  }

  holdScore() {
    this.scores[this.activePlayer].textContent =
      parseInt(this.scores[this.activePlayer].textContent) + this.currentScore;

    this.switchPlayer();
  }

  switchPlayer() {
    this.currentScore = 0;
    this.currentScores[this.activePlayer].textContent = this.currentScore;
    this.activePlayer = this.activePlayer === 0 ? 1 : 0;

    this.players[0].classList.toggle('player--active');
    this.players[1].classList.toggle('player--active');
  }
}

const game = new Game();
