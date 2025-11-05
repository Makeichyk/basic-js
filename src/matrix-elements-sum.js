const { NotImplementedError } = require('../lib');

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

	for (let matrixRow = 0; matrixRow < matrix.length; matrixRow++) {
		for (let matrixColumn = 0; matrixColumn < matrix[matrixRow].length; matrixColumn++) {
			if (matrixRow === 0) {
				matrixSum += +matrix[matrixRow][matrixColumn];
			}
			if (matrixRow > 0) {
				if (matrix[matrixRow - 1][matrixColumn] !== 0) {
					matrixSum += +matrix[matrixRow][matrixColumn];
				}
			}
		}
	}
	return matrixSum;
}

module.exports = {
	getMatrixElementsSum,
};
