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





function createCards() {
var gameBoard = document.getElementById("game-board");
  for (var i = 0; i <= 4; i++) {
    var card = document.createElement("div");
    card.className = "card";
    gameBoard.appendChild(card);
  }
}
