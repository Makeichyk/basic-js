const { NotImplementedError } = require('../lib');

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
		let result = '';

		for (let j = 0, i = 0; i < str.length; i++) {
			const letterCode = str[i].charCodeAt();
			if (letterCode >= 65 && letterCode <= 90) {
				if (j >= key.length) j = 0;
				const keyCode = key[j].charCodeAt();
				j++;

				let coded;
				if (cryptType === 'encrypt') {
					coded = ((letterCode - 65 + (keyCode - 65)) % 26) + 65;
				} else {
					coded = ((letterCode - 65 - (keyCode - 65) + 26) % 26) + 65;
				}
				result += String.fromCharCode(coded);
			} else {
				result += str[i];
			}
		}

		return this.direction === 'reverse'
			? result.split('').reverse().join('')
			: result;
	}
}

module.exports = {
	directMachine: new VigenereCipheringMachine(),
	reverseMachine: new VigenereCipheringMachine(false),
	VigenereCipheringMachine,
};
