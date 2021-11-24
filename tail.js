//lotide challenge
//Implement tail
//Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"]; //test case 01
const singleWord = ["Yo Yo"]; // test case 02
const emptyWords = []; // test case 03


const tail = function(actualArray) {
  let newArray = [];
  newArray =  actualArray.slice(1);
  return newArray;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`📗 Assertion Passed : ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🟥 Assertion Failed : ${actual} !== ${expected}`);
  }
};

const result = tail(words); // no need to capture the return value since we are not checking it
assertEqual(result.length, words.length); // original array should still have 3 elements!
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const resultSingle = tail(singleWord); // checking for single element array
assertEqual(resultSingle.length, singleWord.length); // original array should still have 1 element!

const resultEmpty = tail(emptyWords); // checking for empty array
assertEqual(resultEmpty.length, emptyWords.length); // original array has no element!




