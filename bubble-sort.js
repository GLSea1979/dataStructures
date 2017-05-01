// a simple bubble sort

var thisArr = [2, 33, 44, 12, 13, 14, 16, 22, 5, 4, 1, 17, 39, 98, 55];
console.log(thisArr, 'initial array');

function bubbleSort(myArr) {
  length = myArr.length;

  for(var i = (length - 1); i > 0; i--) {
    for(var j = (length - 1); j > 0; j--) {
      if(myArr[j] < myArr[j-1]) {
        var tmp = myArr[j];
        myArr[j] = myArr[j-1];
        myArr[j-1] = tmp;
      }
    }
  }
}

bubbleSort(thisArr);
console.log(thisArr, 'finished');

// bubble sort that puts the array in descending order
var nextArr = [2, 33, 44, 12, 13, 14, 16, 22, 5, 4, 1, 17, 39, 98, 55];
console.log(nextArr, 'initial array');

function bubbleSortTwo(myArr) {
  length = myArr.length;
  for(var i = 0; i <= (length); i++) {
    for(var j = 0; j <= (length); j++ ) {
      if(myArr[j] < myArr[j + 1]) {
        var tmp = myArr[j];
        myArr[j] = myArr[j +1];
        myArr[j+1] = tmp;
      }
    }
  }
}

bubbleSortTwo(nextArr);
console.log(nextArr, 'finished');
