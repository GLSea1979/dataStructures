// an Insertion Sort function
const myArray = [5, 3, 1, 2, 4, 16, 23, 12, 48, 22, 6, 8];
console.log('beginning array', myArray);

function insertionSort(items) {
  let length = items.length;

  for (var i = 1; i < length; i++) {
    var tmp = items[i];

    for (var j = i - 1; j >= 0 && (items[j] > tmp); j--) {
      items[j + 1] = items[j];
    }    
    items[j + 1] = tmp;
  }
}

insertionSort(myArray);
console.log(myArray);
