const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
	let matrixSum = 0;

	for (let matrixString = 0; matrixString < matrix.length; matrixString++) {
		for (let matrixColumn = 0; matrixColumn < matrix[matrixString].length; matrixColumn++) {
			if (matrixString === 0) {
				matrixSum += +matrix[matrixString][matrixColumn];
			}
			if (matrixString > 0) {
				if (matrix[matrixString - 1][matrixColumn] !== 0) {
					matrixSum += +matrix[matrixString][matrixColumn];
				}
			}
		}
	}
	return matrixSum;
}

module.exports = {
	getMatrixElementsSum,
};
