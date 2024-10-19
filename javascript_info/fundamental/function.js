// function showPrimes(n) {

//   for (let i = 2; i < n; i++) {
//     if (isPrime(i)) continue;

//     // alert(i);  // a prime
//     console.log(i);
//   }
// }

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if ( n % i == 0) return false;
//   }
//   return true;
// }

// showPrimes(10);

function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
    }
  }
  console.log('Prima');  // Output prime numbers
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

showPrimes(9);
