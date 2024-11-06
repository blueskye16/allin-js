/* -------Create a new calculator-------------------- */

/* function Calculator() {
  this.read = function() {
    this.a = +prompt("Enter first number", 0);
    this.b = +prompt("Enter second number", 0);
  };
  this.sum = function() {
    return (this.a + this.b);
  };
  this.mul = function() {
    return (this.a * this.b);
  };
}

let calculator = new Calculator()
calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() ); */

/* -------Accumulator-------------------- */

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    this.value += +prompt('Enter value: ', 0);
    return this.value;
    // return this.promptValue += value;
  }
}

let accumulator = new Accumulator(1);
accumulator.read().read();
// accumulator.read();

alert(accumulator.value);



