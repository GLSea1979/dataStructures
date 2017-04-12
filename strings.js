'use strict';

const oneString = "Strings are fun, strings are cool!";
const stringTwo = "Let us learn while we can.";

console.log(oneString.charAt(0));
// should be S
console.log(oneString.charCodeAt(0));
// should be a unicode of S
console.log(oneString.concat(stringTwo));
// puts both strings together
console.log(oneString.endsWith(cool!));
console.log(oneString.endsWith(cool));
// checks for the end of a string
console.log(String.fromCharCode(83));
// should return S
console.log(oneString.includes('fish'));
console.log(oneString.includes('fun'));
// false if it is not in the string, true if it is
console.log(oneString.indexOf('are'));
// finds index of start of first instance of 'end'
console.log(oneString.lastIndexOf('are'));
// finds indes of start of last instance of 'end'
console.log(stringTwo.match(/learn/g));
// finds learn and puts it into an array
console.log(stringTwo.match(/e/g));
// finds each e and puts them into an array
console.log(oneString.repeat(4));
// repeats the same string 4 times
