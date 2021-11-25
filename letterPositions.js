

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
  if (actual === expected) {
    console.log(`📗 Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`🟥 Assertion Failed : ${actual} !== ${expected}`);
  }
};

const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter !== " ") {
      if (!results[letter]) {
        results[letter] = [i];
      } else {
        results[letter].push(i);
      }
    }
  }
  return results;
};

const result1 = letterPositions("hello");
assertEqual(eqArrays(result1["l"], [2]), true); // => should PASS


