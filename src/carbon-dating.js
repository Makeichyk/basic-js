const { NotImplementedError } = require('../extensions/index.js');

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
  let ageNum = Number(ageInStr); 
  if (ageNum === Number(ageNum) && ageNum > 0 && ageInStr[0] !== '-'){
    let result =  Math.log(8/MODERN_ACTIVITY)/HALF_LIFE_PERIOD;
    return Math.ceil(result)
  }else {
    return false;
  }
}

module.exports = {
  dateSample
};
