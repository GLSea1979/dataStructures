'use strict';
// a simple implementation of FizzBuzz

for (var i = 0; i <= 1000; i++) {
  var output = i;
  if ( i % 3 === 0) {
    output += 'Fizz';
  }
  if ( i % 5 === 0) {
    output += 'Buzz';
  }
  console.log(output);
}
