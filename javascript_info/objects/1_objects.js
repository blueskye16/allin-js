/* TASK */

/* Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
 */

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

/* ------------Check for emptiness------------------ */

/* let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

function isEmpty() {
  for (prop in schedule) {
    return false;
  }
  return true;
} */

/* ------------Sum object properties------------------ */

/* let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for (let prop in salaries) {
  sum += salaries[prop];
}
console.log(sum); */

/* -----------Multiply numeric property values by 2------------------- */

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
  2: 'tester'
};

console.log(menu['2']);

// multiplyNumeric(menu);
// console.log(menu);

// function multiplyNumeric(obj) {
//   for (obj in menu) {
//     if (typeof menu[obj] == 'number') {
//       menu[obj] *= 2;
//     }
//   }
// }


/* ------------------------------ */

// let user = {
//   name: "John",
//   age: 30,
// }
// user.isAdmin = true;
// user["likes birds"] = 'exatcly';

// console.log(user.name);
// console.log(user.isAdmin);
// console.log(user['likes birds']);

/* ------------------------------- */

/*
let user = {
  name: "John",
  age: 30
};

let key = prompt("What do you want to know about the user?", "name");

// access by variable
alert( user[key] ); // John (if enter "name")
 */