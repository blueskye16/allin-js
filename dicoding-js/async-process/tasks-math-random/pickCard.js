// TODO: Implement the pickCard function
export function pickCard() {
  const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

  return suits[pickSuits()] + ' of ' + values[pickValues()] 
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