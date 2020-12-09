// Declaration of variables
const prompt = require("readline-sync");
let maxGuesses = 3;
let currentGuess = 0;
const maxRange = 10;

//Generate random number
let randomNumber = Math.floor(Math.random() * maxRange + 1);

//prompt user to choose a number
let userGuess = prompt.question(
  `Hi, I have chosen a number between 1 and ${maxRange}, you have ${maxGuesses} tries to guess it.\n`
);

// console.log(userGuess);

//Handle Guess function
const handleGuess = (userGuess) => {
  for (let guesses = 0; guesses < maxGuesses; guesses++) {
    if (userGuess === randomNumber) {
      console.log("You Win !");
      guesses = maxGuesses;
      playAgain();
    } else if (guesses === maxGuesses - 1) {
      console.log(
        `You Lose, You ran out of guesses\n The number was ${randomNumber}`
      );
      playAgain();
    } else if (userGuess > randomNumber) {
      thinkLower();
      userGuess = prompt.question("Guess again...\n");
    } else {
      thinkHigher();
      userGuess = prompt.question("Guess again...\n");
    }
  }
};

// Function Declaration
function thinkLower() {
  console.log("Think lower.");
  currentGuess++;
  console.log("Guesses Left : ", maxGuesses - currentGuess);
}

//ES6 Arrow function
const thinkHigher = () => {
  console.log("Think Higher.");
  currentGuess++;
  console.log("Guesses Left : ", maxGuesses - currentGuess);
};

// Play Again Function
const playAgain = () => {
  let playAgain = prompt.question("Do you want to play again? y || n \n");
  playAgain = playAgain.toLowerCase();
  if (playAgain === "y") {
    randomNumber = Math.floor(Math.random() * maxRange + 1);
    let newGuess = prompt.question(
      `Hi, I have chosen a number between 1 and ${maxRange}, you have ${maxGuesses} tries to guess it.\n`
    );
    currentGuess = 0;
    guesses = 0;
    handleGuess(newGuess);
  } else {
    console.log("Thanks for playing. \n Goodbye.");
  }
};

// Call our function
handleGuess(userGuess);
