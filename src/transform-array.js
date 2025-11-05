const { NotImplementedError } = require('../lib');

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
 *
 */
function transform(arr) {
	const EMPTY_ACTION = '--empty';
	const ACTIONS = {
		'--discard-next': (prevIndex, actionIndex, nextIndex, arr) => {
			arr[actionIndex] = EMPTY_ACTION;

			if (!nextIndex) {
				return;
			}

			arr[nextIndex] = EMPTY_ACTION;
		},
		'--discard-prev': (prevIndex, actionIndex, nextIndex, arr) => {
			arr[actionIndex] = EMPTY_ACTION;

			if (!prevIndex) {
				return;
			}

			arr[prevIndex] = EMPTY_ACTION;
		},
		'--double-next': (prevIndex, actionIndex, nextIndex, arr) => {
			arr[actionIndex] = EMPTY_ACTION;

			if (!nextIndex) {
				return;
			}

			if (arr[nextIndex] === EMPTY_ACTION) {
				return;
			}

			arr[actionIndex] = arr[nextIndex];
		},
		'--double-prev': (prevIndex, actionIndex, nextIndex, arr) => {
			arr[actionIndex] = EMPTY_ACTION;

			if (!prevIndex) {
				return;
			}

			if (arr[prevIndex] === EMPTY_ACTION) {
				return;
			}

			arr[actionIndex] = arr[prevIndex];
		},
	};

	const message = "'arr' parameter must be an instance of the Array!";
	if (!Array.isArray(arr)) {
		throw Error(message);
	}

	const cloneArray = JSON.parse(JSON.stringify(arr));

	for (let index = 0; index < cloneArray.length; index++) {
		const prevElementIndex = index > 0 ? index - 1 : undefined;
		const currentElementIndex = index;
		const currentElement = cloneArray[currentElementIndex];
		const nextElementIndex =
			index < cloneArray.length - 1 ? index + 1 : undefined;

		const isAction = Object.keys(ACTIONS).includes(currentElement);

		if (isAction) {
			ACTIONS[currentElement](
				prevElementIndex,
				currentElementIndex,
				nextElementIndex,
				cloneArray
			);

			return transform(cloneArray);
		}
	}

	return cloneArray.filter((item) => item !== EMPTY_ACTION);
}

module.exports = {
	transform,
};
