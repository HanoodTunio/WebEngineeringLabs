const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Generate a random integer between 1 and 10 (inclusive)
let randomInt = Math.ceil(Math.random() * 10);
console.log(randomInt);

console.log("You have 3 chances to guess the number..");
console.log("Let's start!");

let chances = 3;

rl.on('line', (input) => {
  let number = parseInt(input);
  if (number === randomInt) {
    console.log("You guessed the number");
    rl.close();
  } else {
    chances--;
    console.log("Try again.");
    console.log("You have", chances, "remaining");
    if (chances === 0) {
      console.log("Sorry, you've run out of chances. The correct number was:", randomInt);
      rl.close();
    }
  }
});
