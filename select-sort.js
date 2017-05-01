var bigArr = [2, 5, 14, 23, 12, 11, 9, 4, 1, 3];
console.log('beginning ', bigArr);


function selectionSort(items) {

  let length = items.length;

  for (var i =  0; i < length - 1; i++ ) {

    let min = i;  //min = 0

    for ( var j = i + 1; j < length; j++) {
      if (items[j] < items[min]) {
        min = j;
      }
    }

    if (min != i) {
      var tmp = items[i];
      items[i] = items[min];
      items[min] = tmp;
    }
  }
}


selectionSort(bigArr);
console.log('sorted:',bigArr);
