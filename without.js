// Definition of function eqArrays
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]){
        return false;
      }    
  }
  return true;
};
// definition of function aasertArraysEqual
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`📗 Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`🟥 Assertion Failed : ${actual} !== ${expected}`);
  }
};
// without function will take two parameters, one is array and another is an element if present in the array will be removed from the array
// thought it will change existing array structire rather return new array
const without = function(source, removeElement) {
  let removeArray = source;
  removeArray.forEach((element, index) => {
    if (element === removeElement[index]) {

      removeArray.splice(index, 1);
    }
  });
  return removeArray;
}

assertArraysEqual((without([1, 2, 3], [1])), [2, 3]);
assertArraysEqual((without(["1", "2", "3"], [1, 2, "3"])),["1", "2"]);
assertArraysEqual((without(["1", "2", "3"], [1, 2, "3"])),["1"]);

