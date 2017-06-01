var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "img/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds", 
		cardImage: "img/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "img/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds", 
		cardImage: "img/king-of-diamonds.png"
	}
];

var cardsInPlay = [];

//////////////////

var checkForMatch = function() {
		if (cardsInPlay.length === 2);
		if (cardsInPlay[0] === cardsInPlay[1]) {
				alert("You found a match!");
		}
		else {
			alert("Sorry, try again.");
		};

};

/////////////////

var flipCard = function(cardId) {



	//	var cardOne = cards[0];
	//	var cardTwo = cards[1];

	//	var userFlipped = [cardOne, cardTwo]

	//	cardsInPlay.push(cardOne);
	//	cardsInPlay.push(cardTwo);


	//	window.alert("User flipped" + " " + cardsInPlay);

	console.log(alert("User flipped " + cards[cardId].rank))
		

		cardsInPlay.push(cards[cardId].rank);

	console.log(cards[cardId].cardImage);

	console.log(cards[cardId].suit);

	checkForMatch();

};

flipCard(3);

flipCard(2);

console.log(cardsInPlay.cardImage);

console.log();