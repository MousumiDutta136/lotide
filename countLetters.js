const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`📗 Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`🟥 Assertion Failed : ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const counts = {};
  for (const letter of string) {
    if (letter !== " ") {
      if (counts[letter]) {
        counts[letter] += 1;  // add it if the letter exist;
      } else {
          counts[letter] = 1; //create a letter if doesnt exist
      }      
    }
  }
  return counts;
}
const result1 = countLetters("lighthouse in the house");
assertEqual(result1["l"], 1);