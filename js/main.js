var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[1];

var userFlipped = [cardOne, cardTwo]

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);


window.alert("User flipped" + " " + cardsInPlay);

if (cardsInPlay.length === 2);
if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
}
else {
	alert("Sorry, try again.");
}