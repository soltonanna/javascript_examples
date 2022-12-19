/**
 * ! The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
 */

const numbers = [4, 12, 0, 55, 78, 11, 20, 101, 5, 66, 32];

/**
 ** Original 'every' method
 */
const checkedNumbers = numbers.every((val) => val < 100);
console.log(numbers);
console.log(checkedNumbers);

/**
 ** Recreated one
 */
Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

const checkedNumbers2 = numbers.some((val) => val % 2 !== 0);
console.log(numbers);
console.log(checkedNumbers2);
