// O(n*n)

const array = [
  5, 8, 10, 11, 4, 2, 0, -5, 6, 3, 25, 9, 13, 17, 20, 1, 7, 19, 14, 15, -3,
];

let count = 0;

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      count += 1;
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
    }
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
}

console.log(selectionSort(array));
console.log(count); //210
