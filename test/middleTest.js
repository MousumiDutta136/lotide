// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle');
  
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1]), [])  
// assertArraysEqual(middle([1, 2]), [])
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2])
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);


const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  // it("returns '5' for ['5']", () => {
  //   assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), '5'); 
  // });
});