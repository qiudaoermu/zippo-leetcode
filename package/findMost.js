// 迭代相加
/**
 * This method is to find the most item in Array
 *
 * @since 5.0.0
 * @category Array
 * @param {Array} collection The array to inspect.
 * @returns {number} Returns most numner
 * @example
 *
 * reduceAdd(["a","a","b","c","a"])
 * // => "aaa"
 */

function findMost(n) {
  if (!Array.isArray(n)) { throw new TypeError("Expect an Array") }
  n.sort();
  const res = n.join("").match(/(.)\1*/g) || [];
  const newRes = res.map(item => item.length);
  const max = Math.max(...newRes);
  console.error(max, "max");
  const item = res.find(item => item.length === max);
  return item;

}
export default findMost;
