// TODO: Implement the generateLotteryNumbers function
export function generateLotteryNumbers(count, maxNumber) {
  const numbers = new Set();

  // Generate unique random numbers
  while (numbers.size < count) {
    const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    numbers.add(randomNumber); // Add to set, duplicates are automatically handled
  }

  // Convert the set to an array and sort it in ascending order
  return [...numbers].sort((a, b) => a - b);
}