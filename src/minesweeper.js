const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
	let setup = matrix.map((item) => item.map((value) => 0));

	for (let row = 0; row < matrix.length; row++) {
		for (let column = 0; column < matrix.length; column++) {
			if (matrix[row][column - 1] === true) setup[row][column]++;
			if (matrix[row][column + 1] === true) setup[row][column]++;

			if (matrix[row + 1] && matrix[row + 1][column])
				setup[row][column]++;
			if (matrix[row + 1] && matrix[row + 1][column + 1])
				setup[row][column]++;
			if (matrix[row + 1] && matrix[row + 1][column - 1])
				setup[row][column]++;

			if (matrix[row - 1] && matrix[row - 1][column])
				setup[row][column]++;
			if (matrix[row - 1] && matrix[row - 1][column + 1])
				setup[row][column]++;
			if (matrix[row - 1] && matrix[row - 1][column - 1])
				setup[row][column]++;
		}
	}
	return setup;
}

module.exports = {
	minesweeper,
};
