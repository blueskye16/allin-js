// Multiple operator ?

let login;
let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : '';
console.log(message);

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

/* ---------------------------------------------------- */

// Conditional operator ?

/* 
  let a = 1,
    b = 2;
  let result = a + b < 4 ? 'Below' : 'Over';

  if (a + b < 4) {
    result = 'Below';
  } else {
    result = 'Over';
  }

  console.log(result); 
*/
