const assertArraysEqual = require('../assertArraysEqual');
// const eqArrays = require('../eqArrays');

assertArraysEqual([2, 2, 3], [1, 2, 3]); 
assertArraysEqual([1, 2, 3], [1, 2, 4]); 
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual([1, 2, 3], [1, 2, 4]);
