var cards = ['queen', 'queen', 'king', 'king'];

var board = document.getElementById('game-board');

function createBoard() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.InnerHTML = cards[i];
    cardElement.addEventListener('click', isTwoCards);
    cardElement.setAttribute('data-card', cards[i]);
board.appendChild(cardElement);
  }
}


var cardsInPlay = [];

function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
  if (this.getAttribute('data-card') === 'king') {
      this.innerHTML = "<img src='../img/KingImg.jpg'>";
    } else {
      this.innerHTML = "<img src='../img/QueenImg.jpg'>";
    }
  }


function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert('Its a match!!');
    } else {
    alert('Oops! Try again.');
    }
}

createBoard();
