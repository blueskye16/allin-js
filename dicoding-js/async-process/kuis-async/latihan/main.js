import API from './support.js';

function greetWithDelay(data) {
  const promises = data.map(item => API.fetch(item.delay, item.name));

  return Promise.all(promises)
}

const testData = [
  { name: 'Kevin', delay: 1000 },
  { name: 'Alice', delay: 500 },
  { name: 'Bob', delay: -2000 }
];

greetWithDelay(testData).then(console.log).catch(console.error)

// greetWithDelay("kevin", 1000).then(console.log).catch(console.error);

/* greetWithDelay([
  { name: "Kevin", delay: 1000 },
  { name: "Sarah", delay: -1 }, // This will reject
  { name: "John", delay: 500 }
]).then(results => {
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Greeting success: ${result.value}`);
    } else {
      console.error(`Greeting error: ${result.reason}`);
    }
  });
}); */