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

### What does it look like?
![InteractiveHeaderPreview](https://raw.githubusercontent.com/zayadur/com.swipecardgame/main/InteractiveHeaderPreview.gif 'Preview of the interactive header section')

## [Another function](#): reserved for another function
### This space is reserved for a function written in the future.