// 迭代相加
/**
 * This method is to sum up the element in a Array
 *
 * @since 5.0.0
 * @category Array
 * @param {Array} collection The array to inspect.
 * @returns {number} Returns sum up
 * @example
 *
 * reduceAdd([1,2,3,4,5])
 * // => 15
 */

function reduceAdd(n) {
  return n.reduce((a, b) => a + b);
}
export default reduceAdd;
