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
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function (object1, object2) {
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
  
// //Primitives As Values (Tests)
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1"};
// assertEqual(eqObjects(ab, ba), true); // => should PASS

// Primitives As Values (Tests)
// const ab = { a: "1", b: "2" };
// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), true); // => false

//Arrays As Values (Tests)
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// // eqObjects(cd, cd2); // => false
// assertEqual(eqObjects(cd, cd2), true); // => false
