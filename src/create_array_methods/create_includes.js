/**
 * ! The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
 */

const numbers = [4, 12, 0, 55, 78, 11, 20, 101, 5, 66, 32];

/**
 ** Original 'includes' method
 */

console.log(numbers.includes('a'));
console.log(numbers.includes(20));

/**
 ** Recreated one
 */
Array.prototype.myIncludes = function (element, index = 0) {
  for (let i = index; i < this.length; i++) {
    if (this[i] === element) {
      return true;
    }
  }
  return false;
};
console.log(numbers.includes('b'));
console.log(numbers.includes(5));
