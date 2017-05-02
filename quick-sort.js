'use strict';

let myArr = [44, 33, 22, 25, 35, 26, 35, 33, 12, 3, 4, 5, 7, 3, 6, 1];
console.log('beginning array:', myArr);

function swap(items, firstIndex, secondIndex) {
  let temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function partition(items, left, right) {
  let pivot = items[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while ( i <= j ) {

    while ( items[i] < pivot ) {
      i++;
    }
    while ( items[j] > pivot ) {
      j--;
    }

    if ( i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(items, left, right) {
  let index;

  if (items.length > 1) {
    index = partition(items, left, right);

    if (left < index - 1) {
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      quickSort(items, index, right);
    }
  }

  return items;
}

let result = quickSort(myArr, 0, myArr.length - 1);
console.log('sorted array:', result);
