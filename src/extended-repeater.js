const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
	let a = 1;
	let b = 1;
	let newStr = '';

	if (!options.separator) {
		options.separator = '+';
	}

	if (!options.additionSeparator) {
		options.additionSeparator = '|';
	}

	do {
		newStr += str;

		while (b < options.additionRepeatTimes) {
			newStr += options.addition + options.additionSeparator;
			b++;
		}

		if ('addition' in options) {
			newStr += options.addition;
		}

		if (options.repeatTimes && a != options.repeatTimes) {
			newStr += options.separator;
		}

		a++;
		b = 1;
	} while (a <= options.repeatTimes);

	return newStr;
}

module.exports = {
	repeater,
};
