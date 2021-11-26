
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`📗 Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`🟥 Assertion Failed : ${actual} !== ${expected}`);
  }
};


// const findKey = function (object, callback) {
//   let output = "";
//   console.log(object);
//   for (let key in object) {
//    console.log(key);
//     if (callback(object[key]) === true){
//       output = key;
//       return output;
//     }
//   }
// }

const findKey = (object, callback) => {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

// assertEqual(findKey(obj,  x => x.stars === 2),"noma");

const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"


assertEqual(result, "noma");