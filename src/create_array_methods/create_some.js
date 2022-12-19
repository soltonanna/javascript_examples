/**
 * ! The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
 */

const numbers = [4, 12, 0, 55, 78, 11, 20, 101, 5, 66, 32];

/**
 ** Original 'some' method
 */
const checkedNumbers = numbers.some((val) => val > 100);
console.log(numbers);
console.log(checkedNumbers);

/**
 ** Recreated one
 */
Array.prototype.mySome = function (callback) {
  for (let i = 0; i <= this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

const checkedNumbers2 = numbers.some((val) => val === 5);
console.log(numbers);
console.log(checkedNumbers2);
