const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
	calculateDepth(arr) {
		let counter = 1;
		let currentDepth = 1;

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] instanceof Array) {
				currentDepth += this.calculateDepth(arr[i]);
			}
			counter = Math.max(currentDepth, counter);
			currentDepth = 1;
		}
		return counter;
	}
}

module.exports = {
	DepthCalculator,
};
