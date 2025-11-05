const { NotImplementedError } = require('../lib');

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(age) {
	const HALF_LIFE_PERIOD = 5730;
	const MODERN_ACTIVITY = 15;
	const k = 0.693 / HALF_LIFE_PERIOD;

	if (isNaN(+age) || typeof age !== 'string') return false;
	if (+age <= 0 || +age >= MODERN_ACTIVITY) return false;

	const res = Math.log(MODERN_ACTIVITY / +age) / k;

	return Math.ceil(res);
}

module.exports = {
	dateSample,
};
