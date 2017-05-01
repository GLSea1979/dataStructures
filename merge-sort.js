var myArr = [22, 11, 45, 1, 2, 5, 6, 99, 300, 46, 78, 79, 23, 44, 12, 7, 8, 10, 3];
var smallArr = [4, 2, 3, 1];
console.log(myArr, 'beginning array')

function mergeSort(arr) {
  if(arr.length < 2) return arr;

  var middle = (arr.length / 2);
  var left = arr.slice(0, middle);
  var right = arr.slice(middle, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var result = [];

  while(left.length && right.length) {
    if(left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while(left.length) {
    result.push(left.shift());
    console.log(result, 'inside left');
  }
  while(right.length) {
    result.push(right.shift());
    console.log(result, 'inside right');
  }
  return result;
}

console.log(mergeSort(myArr), 'sorted array');
console.log(mergeSort(smallArr), 'sorted small arr');
