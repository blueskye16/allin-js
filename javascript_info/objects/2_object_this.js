/* ------------Object Literal--------------- */


/* function makeUser() {
  return {
    name: "John",
    age: 50,
    ref() {
      return this;
    }
  };
}

let user = makeUser();

console.log( user.ref().age ); // 50 */

/* ----------Create Calculator----------------- */

/* let calculator = {
  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  }

};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() ); */

/* ----------Chaining----------------- */

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;

  },
  showStep: function() { // shows the current step
    alert( this.step );
    return this;

  }
};

/* ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0 */

ladder.up().up().down().showStep().down().showStep();
// kalo gapake return jadinya error karena ngembaliin undifinied
