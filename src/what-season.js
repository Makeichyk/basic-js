const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(dateObj) {
let stringError = 'Unable to determine the time of year!' ;
  if (dateObj.toString() !== 'Invalid Date'){
    let month = dateObj.getMonth();
    let seasons = ['winter','spring','summer','autumn'];
    if (month === 11 || month <= 1){
      return seasons[0];
    }else if(month <= 4){
      return seasons[1];
    }else if(month <=7){
      return seasons[2];
    }else if(month <=10){
      return seasons[3]
    }
  }else{
    return new Error ('Invalid date!')
  }
}
module.exports = {
  getSeason
};
