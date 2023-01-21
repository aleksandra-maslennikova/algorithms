// O(log2n); faster then binary but works only on the sorted data

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let count = 0;

function binarySearch(array, item) {
  let start = 0;
  let end = array.length;
  let middle;
  let found = false;
  let position = -1;
  while (!found && start <= end) {
    count += 1;
    middle = Math.floor((start + end) / 2);
    if (array[middle] === item) {
      found = true;
      position = middle;
    }

    if (item < array[middle]) {
      end = middle - 1;
    }
    if (item > array[middle]) {
      start = middle + 1;
    }
  }
  return position;
}

console.log(binarySearch(array, 12));
console.log(count);
