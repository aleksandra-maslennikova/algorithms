// O(n*n)

const array = [
  5, 8, 10, 11, 4, 2, 0, -5, 6, 3, 25, 9, 13, 17, 20, 1, 7, 19, 14, 15, -3, 5,
  8, 10, 11, 4, 2, 0, -5, 6, 3, 25, 9, 13, 17, 20, 1, 7, 19, 14, 15, -3, 5, 8,
  10, 11, 4, 2, 0, -5, 6, 3, 25, 9, 13, 17, 20, 1, 7, 19, 14, 15, -3, 5, 8, 10,
  11, 4, 2, 0, -5, 6, 3, 25, 9, 13, 17, 20, 1, 7, 19, 14, 15, -3, 5, 8, 10, 11,
  4, 2, 0, -5, 6, 3, 25, 9, 13, 17, 20, 1, 7, 19, 14, 15, -3,
];

let count = 0;

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let less = [];
  let greater = [];

  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (i === pivotIndex) {
      continue;
    }
    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort(array));
console.log(count); // 441
