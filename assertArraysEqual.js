
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]){
        return true;
      }    
  }
  return false;
};


const assertEqual = function(actual, expected) {
  return actual === expected ? `📗 Assertion Passed: ${actual} === ${expected}` :
                               `🟥 Assertion Failed: ${actual} !== ${expected}`;
};


console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false));
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true));
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false));
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false));