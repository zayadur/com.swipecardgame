// Demonstration on SplashDemo
const cardIds = [
	1, 5, 9, 25, 32, 42, 44, 45, 46, 59, 68, 80, 92, 108, 113, 121, 135, 137, 142,
	151, 156, 187, 191, 203, 214, 218, 221, 228, 231, 257, 273, 282, 288, 299,
	304, 313, 319, 328,
];
const cardPath = "https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/";
let deck = []
let cards = [];

for (let i = 0; i < cardIds.length; i++) {
	cards.push(cardPath + cardIds[i] + ".png");
}

// add cards to deck
function getDeck() {
	for (let i = 0; i < cards.length; i++) {
		let card = { Card: cards[i] }
		deck.push(card)
	}
	return deck
}

// target id="deck" and display 3 cards from deck
function renderDeck() {

	document.getElementById("deck").innerHTML = ''	// resets render on shuffle

	for (let i = 0; i < 3; i++) {

		/* Creates an <img src= "card from deck" 
		 *	and appends individual selectors for 
		 *	styling each card
		 *		<img src=url class=card0>
		 *		<img src=url class=card1>
		 *		<img src=url class=card2>
		 */
		let img = document.createElement("img")
		let card = document.createElement("div")
		img.src = deck[i].Card
		card.classList.add("card")
		document.getElementById("deck").appendChild(img)
		img.className += `card${i}`	// add card[0-2] selectors to each card -- TEMPLATE LITERALS BABY!!!
	}
}

function saveDeck() {
	const deckTarget = document.getElementById("deck")
	const deckClone = deckTarget.cloneNode(true)
	document.getElementById("rightPopup-content").appendChild(deckClone)
}

function deleteDeck() {
	const deckTarget = document.getElementById("rightPopup-content").getElementsByClassName("splashFlex")[0]
	document.getElementById("rightPopup-content").removeChild(deckTarget)
}

/* shuffle deck in random order
 *	maybe there's a better way to do this
*/
function shuffle() {
	for (let i = 0; i < 38; i++) {
		let position1 = Math.floor((Math.random() * deck.length))
		let position2 = Math.floor((Math.random() * deck.length))
		let tmp = deck[position1]

		deck[position1] = deck[position2]
		deck[position2] = tmp
	}
	renderDeck()
}

function load() {
	deck = getDeck()
	shuffle()
}

window.addEventListener('load', load)