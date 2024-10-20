/* // TODO: Implement the rollDie function
function rollDie() {
  return getRandomIntInclusive(1, 6);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Test the function
console.log(rollDie()); // Should output a number between 1 and 6
console.log(rollDie());
console.log(rollDie()); */

/* ------------------------------------ */

// TODO: Implement the pickCard function
function pickCard() {
  const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
  
  return suits[pickSuits()] + ' of ' + values[pickValues()] 
  // return pickSuits(suits) + '' + pickValues(values);
}

function pickSuits() {
  return getRandomIntInclusive(0, 3);
}

function pickValues() {
  const number = getRandomIntInclusive(0, 12);
  return number
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Test the function
console.log(pickCard());
console.log(pickCard());
console.log(pickCard());

// console.log(pickValues());