const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let numString = n.toString();
	let arrayOfDoubles = [];
	let result;

	for (let index = 0; index < numString.length; index++) {
		arrayOfDoubles.push(
			numString.slice(0, index) + numString.slice(index + 1)
		);
	}

	result = Math.max(...arrayOfDoubles);
	return result;
}

module.exports = {
	deleteDigit,
};
