// Demonstration of SplashDemo
const cards = [
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/3_Tamagotchis.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/almost_beat_teen_pregnancy.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/Big_Dick_Energy.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/Dad_Bod..png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/Daddy_issues.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/I_sexually_identify_as_a_mistake.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/probably_drunk.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/questionable_sexual_orientation.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/several_online_degrees.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/silver_fox.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/too_emotionally_invested_in_my_plants_for_anything_serious_right_now.png",
	"https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeader/images/VERY_flexible.png"
];

let deck = new Array();

// add cards to deck
function getDeck() {
	for (let i = 0; i < cards.length; i++) {
		let card = { Card: cards[i] };
		deck.push(card);
	}
	return deck;
};

// target id="deck" and display 3 cards from deck
function renderDeck() {

	document.getElementById('deck').innerHTML = '';

	for (let i = 0; i < 3; i++) {

		/* Creates an <img src= "card from deck" 
		 *	and appends individual selectors for 
		 *	styling each card
		 *		<img src=url class=card0>
		 *		<img src=url class=card1>
		 *		<img src=url class=card2>
		 */
		let img = document.createElement("img");
		let card = document.createElement("div");
		img.src = deck[i].Card;
		card.innerHTML = img;
		card.classList.add('card');
		document.getElementById("deck").appendChild(img);

		img.className += `card${i}`;	// add card[0-2] selectors to each card TEMPLATE LITERALS BABY!!!

		// // edge cases for 2 identical cards
		// if (deck[i].Card == deck[i + 1].Card || deck[i].Card == deck[i + 2].Card) deck[i].Card = deck[i + 4].Card;
		// if (deck[i + 1].Card == deck[i + 2].Card) deck[i + 1].Card = deck[i + 3].Card;
	}
};

/* shuffle deck in random order
 *	currently shuffles 36 times
 *	maybe there's a better way to do this
*/
function shuffle() {
	for (let i = 0; i < 36; i++) {
		let position1 = Math.floor((Math.random() * deck.length));
		let position2 = Math.floor((Math.random() * deck.length));
		let tmp = deck[position1];

		deck[position1] = deck[position2];
		deck[position2] = tmp;
	}
	renderDeck();
};

function load() {
	deck = getDeck();
	shuffle();
}

window.addEventListener('load', load);
