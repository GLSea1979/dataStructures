var gary = [4, 6, 7, 3, 2, 3, 8, 9];

var jim = gary.map(function(n) {
  return(n + 2);
});

var total = gary.reduce(function(sum, value) {
  return sum + value;
}, 0);

var evens = gary.filter(function(even) {
  return (even % 2) === 0;
});

console.log(gary, ' original array');
console.log(jim, 'original array mapped with + 2');
console.log(total, 'original array reduced to sum of all elements');
console.log(evens, 'original array filtered by even');
