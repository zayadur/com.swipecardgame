// Demonstration of SplashDemo
const cards = [
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/1.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/5.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/9.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/25.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/32.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/42.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/44.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/45.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/46.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/59.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/68.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/80.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/92.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/108.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/113.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/121.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/135.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/137.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/142.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/151.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/156.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/187.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/191.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/203.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/214.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/218.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/221.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/228.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/231.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/257.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/273.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/282.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/288.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/299.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/304.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/313.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/319.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/cards/328.png"

];

let deck = []

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

	document.getElementById('deck').innerHTML = ''	// resets render on shuffle

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
		card.classList.add('card')
		document.getElementById("deck").appendChild(img)

		img.className += `card${i}`	// add card[0-2] selectors to each card -- TEMPLATE LITERALS BABY!!!
	}
}

/* shuffle deck in random order
 *	currently shuffles 36 times
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

function leftTip() {
	document.getElementById("leftButton").addEventListener("click", () => {
		document.getElementById("tooltip").innerHTML =
			`
				Oof! Better luck next time to that bozo!
			`
	})
}

function rightTip() {
	document.getElementById("rightButton").addEventListener("click", () => {
		document.getElementById("tooltip").innerHTML =
			`
				Nice! You just picked a winner!
			`
	})
}

function load() {
	deck = getDeck()
	shuffle()
	leftTip()	// not sure why I need to have this and rightTip on load, but it avoids requiring 2nd button press
	rightTip()
}

window.addEventListener('load', load)