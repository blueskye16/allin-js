// Exercise 4: Simulate an online shopping cart
// Create functions to add items to cart and checkout

function addToCart(item) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${item} added to cart`);
    }, 1000);
  });
}

function checkout() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Checkout completed');
    }, 1000);
  });
}

async function shoppingProcess() {
  // Your code here
  // Should add multiple items to cart and then checkout
  // console.log('Adding items to cart...')
  // const item1 = await addToCart('Apple');
  // const item2 = await addToCart('Book');
  // const item3 = await addToCart('Headphones');
  // console.log('Processing to checkout');
  // checkout();

  console.log('Adding items to cart...');

  try {
/*     for (const item of cartItems) {
      const result = await addToCart(item);
      console.log(result); // Each item added one by one with a 1-second delay 13 terahir
    } */
    const item1 = await addToCart('Apple');
    const item2 = await addToCart('Book');
    const item3 = await addToCart('Headphones');
    console.log(item1);
    console.log(item2);
    console.log(item3);

    console.log('Processing to checkout');
    const result = await checkout();
    console.log(result);
  } catch (error) {
    console.error('Error during shoping: ', error);
  }
}

// Test your function
shoppingProcess();

// Expected output:
// Adding items to cart...
// Book added to cart
// Phone added to cart
// Headphones added to cart
// Processing checkout...
// Checkout completed
