# Archive of swipecardgame.com functions
dev: https://swipecardgame.webflow.io<br>
prod: https://swipecardgame.com

## [Interactive Header](https://github.com/zayadur/com.swipecardgame/tree/main/InteractiveHeader): an interactive demonstration of how the game works.

### What is this?
Users are asked to approve or deny a dating profile represented by a combination of cards. This section demonstrates how the main game works through a pleasantly animated interaction.

### How was it done?
Driver: `/InteractiveHeader/script.js`
1. Create an array of `cards` and initialize an array to represent the player's `deck`.
2. Add `cards` to the `deck`.
3. `render()` renders 3 cards from the deck and creates HTML objects.
4. `shuffle()` randomly shuffles the deck to display a random set.
5. A window event listener loads these functions on page load.

## [About Modal](#): an about modal that displays information about the game.
### What is this?
Users can press a button to toggle the display state of a modal that displays in-depth information about the game.

### What does it look like?
![AboutModalPreview](https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/AboutModal/Preview.gif 'Preview of the interactive header section')

### How was it done?
Driver: `/AboutModal/script.js`
1. Use jQuery to target a class called `aboutPopup`.
2. Toggle display state on a button click.

## [Match Modal](#): a modal that shows user their most recent match with a call to action.
### What is this?
If a user clicks "oh yes" to confirm a match, a popup window opens up re-rendering the deck and presenting more information about the next game state.

### What does it look like?
![MatchModalPreview](https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/MatchModal/Preview.gif 'Preview of the interactive header section')

### How was it done?
Driver: `/MatchModal/script.js`
1. Use jQuery to target a class called `rightPopup`
2. Toggle display state on a button click.
3. On first toggle, popup is displayed and `saveDeck()` runs, where `deck` is re-rendered inside popup with `cloneNode(true)`.
5. Upon clicking `ok`, `deleteDeck()`, where `deck` div is targeted via class name `splashFlex` and removed with `removeChild`.

Functions `saveDeck()` and `deleteDeck()` are in [`InteractiveHeader/script.js`](https://github.com/zayadur/com.swipecardgame/blob/main/InteractiveHeader/script.js)
