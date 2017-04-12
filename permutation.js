'use strict';

var one = 'david';
var two = 'aivdd';
var total = 0;

one = one.split('');

one.forEach( letter => {
  if(two.includes(letter)) {
    total++;
  }
})

if(total === two.length) {
  console.log('it is a purmutation');
} else {
  console.log('not a straight permutation')
}
