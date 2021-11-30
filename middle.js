
const middle = function(arr) {
  let middleArray = [];
  const middleIndex = Math.floor(arr.length / 2);
  if (arr.length >= 3) {    
    if (arr.length % 2 === 0) {
    //even
    const otherIndex = middleIndex - 1;
    middleArray.push(arr[otherIndex], arr[middleIndex]);
    return middleArray;
    } else {
    //odd

    return [arr[middleIndex]];
    }
  } else {
    return [];
  }  
};

module.exports = middle
