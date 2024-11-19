// Exercise 3: Simulate fetching user data
// Create an async function that simulates fetching user data after a delay

function fetchUserData(userId) {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: userId,
        username: `user${userId}`,
        email: `user${userId}@example.com`
      });
    }, 1000);
  });
}

// Solution 3: Async/Await
async function displayUserInfo(userId) {
  console.log("Loading user data...");
  
  try {
    const userData = await fetchUserData(userId);
    console.log("User Info:");
    console.log(`Username: ${userData.username}`);
    console.log(`Email: ${userData.email}`);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

// Test your function
displayUserInfo(123);

// Expected output:
// Loading user data...
// (after 1 second)
// User Info:
// Username: user123
// Email: user123@example.com