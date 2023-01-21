// O(n*n)

const array = [
  5, 8, 10, 11, 4, 2, 0, -5, 6, 3, 25, 9, 13, 17, 20, 1, 7, 19, 14, 15, -3, 5,
  8, 10, 11, 4, 2, 0, -5, 6, 3, 25, 9, 13, 17, 20, 1, 7, 19, 14, 15, -3, 5, 8,
  10, 11, 4, 2, 0, -5, 6, 3, 25, 9, 13, 17, 20, 1, 7, 19, 14, 15, -3, 5, 8, 10,
  11, 4, 2, 0, -5, 6, 3, 25, 9, 13, 17, 20, 1, 7, 19, 14, 15, -3, 5, 8, 10, 11,
  4, 2, 0, -5, 6, 3, 25, 9, 13, 17, 20, 1, 7, 19, 14, 15, -3,
];

let count = 0;

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      count += 1;
      if (array[j + 1] < array[j]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return array;
}

console.log(bubbleSort(array));
console.log(count); // 441
