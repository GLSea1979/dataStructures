'use strict';

var myArray = [1,2,3,5,7,9,11,13,15];

var oddArray = [];
var evenArray =[];

myArray.forEach( num => {
  if(num % 2) {
    evenArray.push(num);
  } else {
    oddArray.push(num)
  }
});

if(evenArray.length === 1) {
  console.log('the outlier is: ', evenArray[0])
} else {
  console.log('the outlier is: ', oddArray[0])
}
