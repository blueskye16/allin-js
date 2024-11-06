// prompt
// buat prompt di website, lebih baik dikasih nilai default '' atau kosong biar (better for explorer)
let age = prompt('How old are you?', 100);
console.log(`You are ${age} years old!`);

// confirm
let isBoss = confirm('Are you the boss?');

if (isBoss == true) {
  alert('okayy boss');
} else {
  alert('nope');
}
// alert(); // true if OK is pressed
