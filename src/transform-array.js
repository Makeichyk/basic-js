const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
  --discard-prev
  --discard-next
  --double-next
  --double-prev
 */
function transform(arr) {
	let message = "'arr' parameter must be an instance of the Array!";
	if (Array.isArray(arr)) {
		let newArr = [];
		arr.map((item) => newArr.push(item));
		if (newArr.includes('--double-next')) {
			if (newArr.indexOf('--double-next') !== newArr.length - 1) {
				newArr.splice(
					newArr.indexOf('--double-next'),
					1,
					newArr[newArr.indexOf('--double-next') + 1]
				);
				return newArr;
			} else {
				newArr.splice(newArr.indexOf('--double-next'), 1);
				return newArr;
			}
		} else if (newArr.includes('--double-prev')) {
			if (newArr.indexOf('--double-prev') !== 0) {
				newArr.splice(
					newArr.indexOf('--double-prev'),
					1,
					newArr[newArr.indexOf('--double-prev') - 1]
				);
				return newArr;
			} else {
				newArr.splice(newArr.indexOf('--double-prev'), 1);
				return newArr;
			}
		} else if (newArr.includes('--discard-next')) {
			if (newArr.indexOf('--discard-next') !== newArr.length - 1) {
				newArr.splice(newArr.indexOf('--discard-next'), 2);
				return newArr;
			} else {
				newArr.splice(newArr.indexOf('--discard-next'), 1);
				return newArr;
			}
		} else if (newArr.includes('--discard-prev')) {
			if (newArr.indexOf('--discard-prev') !== 0) {
				newArr.splice(newArr.indexOf('--discard-prev') - 1, 2);
				return newArr;
			} else {
				newArr.splice(newArr.indexOf('--discard-prev'), 1);
				return newArr;
			}
		} else return newArr;
	} else throw Error(message);
}

module.exports = {
	transform,
};
