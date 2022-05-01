const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

//UPPERCASE
class VigenereCipheringMachine {
	direction = 'direct';
	constructor(value) {
		if (value === false) {
			this.direction = 'reverse';
		}
	}

	encrypt(str, key) {
		const ERROR_MESSAGE = 'Incorrect arguments!';
		if (!str || !key) {
			throw Error(ERROR_MESSAGE);
		}

		return this.CipheringMachine(str, key, 'encrypt');
	}

	decrypt(str, key) {
		const ERROR_MESSAGE = 'Incorrect arguments!';
		if (!str || !key) {
			throw Error(ERROR_MESSAGE);
		}

		return this.CipheringMachine(str, key, 'decrypt');
	}

	CipheringMachine(str, key, cryptType) {
		str = str.toUpperCase();
		key = key.toUpperCase();
		let resultString = '';

		for (let j = 0, index = 0; index < str.length; index++) {
			const letterCode = str[index].charCodeAt();

			if (letterCode >= 65 && letterCode <= 90) {
				if (!key[j]) j = 0;
				const keyCode = key[j].charCodeAt();
				j++;

				const coded =
					cryptType === 'decrypt'
						? letterCode - keyCode + 26
						: letterCode + keyCode;
				resultString += String.fromCharCode((coded % 26) + 65);
			} else {
				resultString += str[index];
			}
		}
		return !this.isReverse && this.direct
			? resultString.split('').reverse().join('')
			: resultString;
	}
}

module.exports = {
	VigenereCipheringMachine,
};
