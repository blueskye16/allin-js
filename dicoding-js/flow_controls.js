function categorizeNumber(input) {
  /**
   * TODO:
   * Lengkapilah fungsi ini agar dapat menghasilkan output berupa kategori bilangan berdasarkan input yang diberikan.
   * Dengan ketentuan sebagai berikut:
   * 1. Jika input bukan number, bangkitkan (throw) error.
   * 2. Jika input adalah bilangan genap, kembalikan dengan nilai "Genap".
   * 3. Jika input adalah bilangan ganjil, kembalikan dengan nilai "Ganjil".
   * 4. Jika input adalah bilangan prima, kembalikan dengan nilai "Prima".
   * 5. Jika input adalah nol, kategorikan kembalikan dengan nilai "Nol".
   * 6. Jika input negatif, kembalikan dengan nilai "Negatif".
   */
  // Call helper functions and return their result if they return a value
  notNumber(input);
  if (zeroNumber(input)) return zeroNumber(input);
  if (minusNumber(input)) return minusNumber(input);
  if (evenNumber(input)) return evenNumber(input);
  if (oddNumber(input)) return oddNumber(input);
  if (isPrime(input)) return isPrime(input);
}

function notNumber(n) {
  if (typeof n !== 'number') {
    throw new Error('Input harus berupa bilangan bulat');
  }
}
function evenNumber(n) {
  if (n % 2 === 0) {
    return console.log('Genap');
  }
}
function oddNumber(n) {
  if (n % 2 !== 0) {
    return 'Ganjil';
  }
}
function isPrime(n) {
  if (n <= 1) return false; // 0 and 1 are not prime nbers
  for (let i = 2; i < n; i++) {
    // only check up to the square root of n
    if (n % i === 0) return 'Not Prime'; // divisible, not prime
  }
  return 'Prime'; // prime number
}
function zeroNumber(n) {
  if (n === 0) {
    return 'Nol';
  }
}
function minusNumber(n) {
  if (n < 0) {
    return 'Negatif';
  }
}

// Contoh
console.log(categorizeNumber(15)); // Output: "Ganjil"
console.log(categorizeNumber(12)); // Output: "Genap"
console.log(categorizeNumber(17)); // Output: "Prima"
console.log(categorizeNumber(0)); // Output: "Nol"
console.log(categorizeNumber(-5)); // Output: "Negatif"

try {
  categorizeNumber('abc');
} catch (error) {
  console.log(error.message);
} // Output: "Input harus berupa bilangan bulat"
