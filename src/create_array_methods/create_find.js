/**
 * ! The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, "undefined" is returned.
 */

const numbers = [4, 12, 0, 55, 78, 11, 20, 101, 5, 66, 32];

/**
 ** Original 'find' method
 */
const checkedNumbers = numbers.find((val) => val > 102);
console.log(numbers);
console.log(checkedNumbers);

/**
 ** Recreated one
 */
Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};
const checkedNumbers2 = numbers.find((val) => val > 100);
console.log(numbers);
console.log(checkedNumbers2);
