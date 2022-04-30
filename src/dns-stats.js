const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
	let appearancesOfThe_DNS = {};

	for (let index of domains) {
    let str = `.${index.split('.').reverse().join('.')}`

		while (str !== '.') {
			if (appearancesOfThe_DNS[str]) 
				appearancesOfThe_DNS[str]++;

			else 
				appearancesOfThe_DNS[str] = 1;
        str = `.${str.split('.').slice(1, -1).join('.')}`
		}
	}
	return appearancesOfThe_DNS;
}

module.exports = {
	getDNSStats,
};
