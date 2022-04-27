const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

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
function dateSample(ageInStr) {
  const k = 0.693 / HALF_LIFE_PERIOD;
  let ageNum = Number(ageInStr);
  if (typeof ageInStr === typeof "string" && isNaN(ageNum) !== true) {
    if ((ageInStr.match(/^[0-9]+$/) || ageInStr.match(/^[0-9]+\.?[0-9]+$/)) && ageNum > 0 && ageNum <= 15) {
      let result = Math.log(ageNum / MODERN_ACTIVITY) / k;
      let formulaResult = Math.ceil(result) * -1;
      return formulaResult + 1
    }
    return false;
  } else {
    return false;
  }
}

module.exports = {
  dateSample,
};
