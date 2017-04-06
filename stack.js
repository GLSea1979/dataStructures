'use strict'

// Stack structure  a first in last out structure

function Stack() {
  this.length = 0;
};

Stack.prototype.push= function(value) {
  this[this.length++] = value;
  return this;
};

Stack.prototype.pop = function() {
  if(this.length === 0) return;
  var result = this[this.length--];
  delete this[this.length];
  return result;
}

let nums = new Stack();

nums.push(2);
nums.push(4);
nums.push(5);
console.log(nums);
nums.pop();
console.log(nums);
