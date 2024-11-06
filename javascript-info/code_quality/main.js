function pow(x, n) {
  if (n < 0) return NaN;
  if (Math.round(n) != n) return NaN;

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

describe('pow', function () {
  describe('raises x to power 3', function () {
    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function () {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });

  it('for negative n the result is NaN', function () {
    assert.isNaN(pow(2, -1));
  });

  it('for non-integer n the result is NaN', function () {
    assert.isNaN(pow(2, 1.5));
  });
});

/* Task */

// describe("Raises x to power n", function() {
//   it("5 in the power of 1 equals 5", function() {
//     assert.equal(pow(5, 1), 5);
//   });

//   // Mocha will run only this block
//   it.only("5 in the power of 2 equals 25", function() {
//     assert.equal(pow(5, 2), 25);
//   });

//   it("5 in the power of 3 equals 125", function() {
//     assert.equal(pow(5, 3), 125);
//   });
// });
