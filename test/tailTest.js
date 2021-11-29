const assertEqual = require('../assertEqual');
const tail = require('../tail');

assertEqual(tail(["Hello", "Lighthouse", "Labs"]),["Lighthouse", "Labs"]);
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);