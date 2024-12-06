// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Game function
function playGame() {
    let guess = prompt("Guess a number between 1 and 100:");

    while (guess !== null) { // Check if user pressed 'Cancel' (guess will be null)
        if (guess == randomNumber) {
            alert("Congratulations! You guessed it right. The number was: " + randomNumber);
            return; // End the game
        } else if (guess < randomNumber) {
            guess = prompt("Too low! Try again:");
        } else {
            guess = prompt("Too high! Try again:");
        }
    }

    alert("Game canceled. See you next time!");
}
