// Exercise 2: Create a countdown function
// Create a function that counts down from 5 to 1, with 1 second delay between each number

function countdown() {

  let count = 5;

  if (count > 0) {
    console.log(count);
    count--;
    setTimeout(countdown, 1000);
  }
}

// Test your function
countdown();

// Expected output:
// 5
// (wait 1 second)
// 4
// (wait 1 second)
// 3
// ...and so on
