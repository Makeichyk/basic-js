const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
	let arr = str.split('');
	let resultArr = [];
	let counter = 1;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i + 1]) {
			counter++;
		}
		if (arr[i] !== arr[i + 1]) {
			resultArr.push(counter);
			resultArr.push(arr[i]);
			counter = 1;
		}
	}
	return resultArr.filter((item) => item !== 1).join('');
}

module.exports = {
	encodeLine,
};
