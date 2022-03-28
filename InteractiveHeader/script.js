var cards = ["Card1","Card2","Card3","Card4","Card5","Card6","Card7","Card8","Card9","Card10","Card11","Card12","Card13","Card14","Card15","Card16","Card17","Card18","Card19","Card20","Card21","Card22","Card23","Card24","Card25","Card26","Card27","Card28","Card29","Card30","Card31","Card32"];
var deck = new Array();

// add cards to deck
function getDeck() {
    for(var i = 0; i < cards.length; i++) {
        var card = { Card: cards[i] };
        deck.push(card);
    }
	return deck;
}

// shuffle deck in random order, 36^2 times to ensure randomness
function shuffle() {
	for (var i = 0; i < 1296; i++) {
		var position1 = Math.floor((Math.random() * deck.length));
		var position2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[position1];

		deck[position1] = deck[position2];
		deck[position2] = tmp;
	}
	renderDeck();
}

// target id="deck" and display 3 cards from deck
function renderDeck() {
	document.getElementById('deck').innerHTML = '';
	for(var i = 0; i < 3; i++) {

        // edge case for 2 similar cards
        if(deck[i].Card == deck[i+1].Card || deck[i].Card == deck[i+2].Card) deck[i].Card = deck[i+4].Card

		var card = document.createElement("div");
		var brand = '';
		card.innerHTML = deck[i].Card + '' + brand;
		card.classList.add('card');
		document.getElementById("deck").appendChild(card);
	}
}

function load() {
	deck = getDeck();
	shuffle();
	renderDeck();
}

window.addEventListener('load', load);
