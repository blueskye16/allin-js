// TODO: Implement the rollDie function
function rollDie() {
  return getRandomIntInclusive(1, 6);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export { rollDie };