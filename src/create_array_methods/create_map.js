/**
 * ! The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
 */

const numbers = [5, 4, 7, 31, 48, 65];
const names = ['John', 'Nicolas', 'Tom'];

/**
 ** Original 'map' method
 */
const changedNumbers = numbers.map((val) => val * 2);
console.log(numbers);
console.log(changedNumbers);

const changedNames = names.map((val) => `Hello Mr. ${val}!`);
console.log(names);
console.log(changedNames);

/**
 ** Recreated one
 */

Array.prototype.myMap = function (callback) {
  const newArr = [];
  // this > used array
  for (let i = 0; i < this.length; i++) {
    newArr[i] = callback(this[i]);
  }
  return newArr;
};

const changedNumbers2 = numbers.myMap((val) => val * 2);
console.log(numbers);
console.log(changedNumbers2);

const changedNames2 = names.myMap((val) => `Hello Mr. ${val}!`);
console.log(names);
console.log(changedNames2);
