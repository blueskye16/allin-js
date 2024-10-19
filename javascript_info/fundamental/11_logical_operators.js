// check the login
let login = prompt('Who\'s there?', ''); // biar case-sensitive loginnya .toLowerCase() --> kalo dipakein jadi error karena sama aja variable kosong mau dikecilin casenya
if (login === 'Admin') {
  let password = prompt('Password?', '');
  if (password === 'TheMaster') {
    alert('Welcome!');
  } else if (password === '' || password === null) {
    alert('Canceled');
  } else {
    alert('Wrong password');
  }
} else if (login === '' || login === null) {
  alert('Canceled');
} else {
  alert('I don\'t know you');
}

// using ? operator

/* let age = 15;

let output = (!(age >=14 && age <= 90)) ? 'age are between 14 - 90' : 'age are not between them';
console.log(output); */

/* ------------------------------------- */

/* 
OR --> ||
  - will finds the first truthy value
  - If all operands have been evaluated (i.e. all were false), returns the last operand.

  let firstName = "";
  let lastName = "";
  let nickName = "SuperCoder";

  alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder

If all variables were falsy, "Anonymous" would show up.

AND --> &&
  - finds the first falsy value
  - If all operands have been evaluated (i.e. all were truthy), returns the last operand.

  // if the first operand is truthy,
  // AND returns the second operand:
  alert( 1 && 0 ); // 0
  alert( 1 && 5 ); // 5

  // if the first operand is falsy,
  // AND returns it. The second operand is ignored
  alert( null && 5 ); // null
  alert( 0 && "no matter what" ); // 0
*/