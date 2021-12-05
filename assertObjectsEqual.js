
const eqObjects = function (object1, object2) {
  for (let i in object1) {
    for (let j in object2) {
      if (Object.keys(object1).length !== Object.keys(object2).length) {
        return false;
      } else if (Array.isArray(object1[i]) && Array.isArray(object2[j])) {
        if (eqArrays(object1[i], object2[j]) === false) {
          return false;
        } else if (object1[i] === object2[j]) {
          return true;
        }
      }
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  // Implement me!
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`📗 Assertion Passed : ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🟥 Assertion Failed : ${inspect(actual)} !== ${einspect(expected)}`);
  }

};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual((cd, dc), true); // => true
// console.log(`Example label: ${inspect(actual)}`);

