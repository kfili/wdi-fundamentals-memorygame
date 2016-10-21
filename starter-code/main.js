'use strict';

// console.log("JS file is connected to HTML! Woo!");

var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

// if (cardTwo === cardFour) {
//   window.alert('You found a match!');
// } else {
//   window.alert('Sorry, try again.');
// }

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

function createBoard() {
  var board = document.getElementByClassNAme('board')[0];
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.InnerHTML = cards[i];
    cardElement.addEventListener('click', isTwoCards);
    cardElement.InnerHTML = '<img src="KingImg.jpg" alt="King" />';
    board.appendChild(cardElement);
  }
}

function createCards() {
var Board = document.getElementById("game-board");
  for (var i = 0; i <= 4; i++) {
    var card = document.createElement("div");
    card.className = "card";
    gameBoard.appendChild(card);
  }
}

function isTwoCards() {
  cardsInPlay.push(this.getAttribute('card'));
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

function isMatch(cards) {
if (cards[0] === cards[1]) {
  alert('Its a match')
  }
  else {
  alert('try again!')
}
}

// for (var i=0; i<cards.length; i++) {
//     cardElement.addEventListener('click', isTwoCards);
//     cardElement.InnerHTML = '<img src="my_king.png" alt="King of Spades" />';
// }
