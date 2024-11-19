// main.js

import { makeCoffee, sendCoffee } from './coffee.js';

const order = 'Kopi Espresso';

console.log(`Saya memesan ${order} di kafe.`);

makeCoffee(order)
  .then(
    (value) => {
      console.log(`Success: ${value} made successfully.`);
      return sendCoffee(value);  // Try to send the coffee if successfully made
    },
    (error) => {
      console.error("Error in makeCoffee:", error.message);
      throw error;  // Re-throw to propagate the error to the next .then or catch
    },
  )
  .then(
    (value) => {
      console.log(`Pramusaji memberikan ${value} pesanan.`);
      console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
    },
    (error) => {
      console.error("Error in sendCoffee or earlier:", error.message);
      throw error;  // Re-throw to ensure it reaches the final catch if not handled
    },
  )
  .catch((error) => {
    console.error("Final catch block:", error.message);
  });
