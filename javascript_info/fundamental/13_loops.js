/* while */

// let a = 0, b = '';
// while(a <= 5) {
//   b += '*';
//   console.log(b);
//   a++;
// }

/* 
  bedanya buat mastiin kalo kedepannya variable a / b mau diinisiasi ulang apa nnga, kalo yg di b. mastiin semisal kedepannya ada perubahan isi variable, sistemnya bakal selalu reset b = 0 
*/

/* ------------------------------------ */

// even number with for
// let n = 10;
// for (let i = 2; i <= n; i++) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
// }

/* ------------------------------------ */

/* replacing for with while */

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

// let a = 0
// while (a < 3) {
//   console.log(`number ${a}!`);
//   a++;
// }

/* ------------------------------------ */

/* repeat untill the input is correct */

// let a = prompt('input some number: ', '');
// for (; a < 100;) {
//   alert('wasn\'t the correct number, please input again.');
//   if (a > 100) {
//     alert('congrats!');
//     break;
//   }
// }

/* repeat untill the input is correct */

// let a = 0;
// start: for (; a <= 100;) {
//   a = prompt("Enter a number: ");
//   if (a > 100) {
//     alert('congrats!');
//     break start;
//   }
//   if (!a) break start;
//   alert('wasn\'t the correct number, please input again.');
// }

// from the jsInfo
// let num;

// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);

/* ----------------------------- */

// output prime numbers

let n = 50;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  console.log(i);
}

// console.log(primes.join(', '));