var cards = ["queen", "queen", "king", "king"];

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

	console.log(alert("User flipped " + cards[cardId]))
		
		cardsInPlay.push(cards[cardId]);

	checkForMatch();

};

flipCard(3);

flipCard(2);

