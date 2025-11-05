const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
	let result = [];
	let sortedArr = arr.filter((item) => item > -1).sort((a, b) => a - b);
	let sortedArrIndex = 0;

	for (let index = 0; index < arr.length; index++) {
		if (arr[index] === -1) {
			result.push(arr[index]);
		} else {
			result.push(sortedArr[sortedArrIndex]);
			sortedArrIndex++;
		}
	}
	return result;
}

module.exports = {
	sortByHeight,
};
