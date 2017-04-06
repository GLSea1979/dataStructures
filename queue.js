'use strict';

// Queue data structure a first in/first out structuretou

function Queue() {
  this.next = null;
  this.length = 0;
}

Queue.prototype.enqueue = function(value) {
  this[this.length] = value;
  if(!this.length) this.next = 0;
  this.length++;
};

Queue.prototype.dequeue = function() {
  if(this.length === 0) return;
  --this.length;
  let result = this[this.next];
  delete this[this.next];
  this.next++;
  return result;
};

let nums = new Queue;

nums.enqueue(2);
nums.enqueue(3);
nums.enqueue(7);
nums.enqueue(10);
nums.enqueue(5);
nums.enqueue(4);
console.log(nums);

nums.dequeue();
nums.enqueue(18);
nums.dequeue();

console.log(nums);
