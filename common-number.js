'use strict';
// a simple program to find common numbers in three sorted arrays

const oneArr = [1, 3, 5, 7, 9, 11, 13];
const twoArr = [2, 4, 6, 8, 9, 10, 11, 12];
const threeArr = [4, 6, 8, 9, 10, 11];

oneArr.forEach(function(val) {
  if(twoArr.includes(val) && threeArr.includes(val)) {
    console.log(val);
    return val;
  }

});
