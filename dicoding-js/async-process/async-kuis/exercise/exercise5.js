// Exercise 5: Create a function that simulates API calls with possible failures

function fetchData(endpoint) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Randomly succeed or fail
      if (Math.random() > 0.5) {
        resolve(`Data from ${endpoint}`);
      } else {
        reject(`Failed to fetch from ${endpoint}`);
      }
    }, 1000);
  });
}

async function tryFetch(endpoints) {
  // Your code here
  // Should try to fetch from multiple endpoints and handle errors
  for (const endpoint of endpoints) {
    console.log(`Triying ${endpoint}`);

    try {
      // const responses = await Promise.all(endpoints.map(endpoint => fetchData(endpoint)));
      const responses = await fetchData(endpoint)
      console.log(`Success: ${responses}`);
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  }
}

// Test your function
tryFetch(['/users', '/posts', '/comments']);

// Expected output might be:
// Trying /users...
// Success: Data from /users
// Trying /posts...
// Error: Failed to fetch from /posts
// Trying /comments...
// Success: Data from /comments
