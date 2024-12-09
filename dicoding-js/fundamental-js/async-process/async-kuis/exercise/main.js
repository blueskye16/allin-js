// Exercise 1: Create a simple delay function
// Create a function that waits for X seconds then prints "Done waiting!"

// import delay from './support.js';

function delay(ms) {
  return new Promise((resolve, reject) => {
    const delayTime = ms;
    const inSecond = Math.ceil(delayTime / 1000);

    setTimeout(() => {
      if (ms !== NaN) {
        return reject(new Error('Your input must number'))
      }
      resolve(console.log(`Done waiting ${inSecond} second!`))
    }, delayTime);
  });
}

// Test your function
console.log("Start");
delay('tes');  // Should wait 2 seconds
console.log("End");

// Expected output:
// Start
// End
// (after 2 seconds) Done waiting!