/**
 * ! The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 ** Original 'reduce' method
 */
const changedNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(numbers);
console.log(changedNumbers);

/**
 ** Recreated one
 */
Array.prototype.myReduce = function (callback, initial) {
  if (this.length === 0 && typeof initial !== 'undefined') {
    throw TypeError('Given empty array with no initial value');
  }
  const index = initial !== undefined ? 0 : 1;
  let acc = initial !== undefined ? initial : this[0];

  for (let i = index; i < this.length; ++i) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};

const changedNumbers2 = numbers.myReduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(numbers);
console.log(changedNumbers2);
