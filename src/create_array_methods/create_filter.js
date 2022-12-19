/**
 * !The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
 */

const numbers = [5, 4, 7, 31, 48, 65, 87, 102, 184];

/**
 ** Original 'filter' method
 */
const filteredNumbers = numbers.filter((val) => val % 2 === 0);
console.log(numbers);
console.log(filteredNumbers);

/**
 ** Recreated one
 */
Array.prototype.myFilter = function (callback) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

const filteredNumbers2 = numbers.filter((val) => val % 2 !== 0);
console.log(numbers);
console.log(filteredNumbers2);
