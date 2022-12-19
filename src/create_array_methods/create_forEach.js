/**
 * ! The forEach() method executes a provided function once for each array element.
 */

const names = ['John', 'Nicolas', 'Tom'];

/**
 ** Original 'forEach' method
 */
names.forEach((a, b, c) => {
  console.log({ a, b, c });
});

/**
 ** Recreated one
 */
Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
names.myForEach((a, b, c) => {
  console.log({ a, b, c });
});
