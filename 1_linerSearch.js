// O(n);

let array = [2, 5, 8, 10, 15, 20, 1, 3];

let count = 0;

function linerSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (array[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(linerSearch(array, 3));
console.log(count);
