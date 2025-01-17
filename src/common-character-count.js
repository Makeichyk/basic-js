const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
	let arr2 = str2.split('');
	let counter = 0;

	for (let index = 0; index < str1.length; index++) {
		if (arr2.includes(str1[index])) {
			arr2.splice(arr2.indexOf(str1[index]), 1);
			counter++;
		}
	}
	return counter;
}

module.exports = {
	getCommonCharacterCount,
};
