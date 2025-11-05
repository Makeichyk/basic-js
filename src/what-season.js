const { NotImplementedError } = require('../lib');

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
function getSeason(/* date */) {
  // Remove line below and write your code here
  throw new NotImplementedError('Not implemented');
}

// 	if (dateObj === undefined) {
// 		return stringError;
// 	}

// 	if (month >= 0 && month <= 11) {
// 		if (winter.includes(month)) {
// 			return 'winter';
// 		}
// 		if (spring.includes(month)) {
// 			return 'spring';
// 		}
// 		if (summer.includes(month)) {
// 			return 'summer';
// 		}
// 		if (fall.includes(month)) {
// 			return 'autumn';
// 		}
// 	}
// }

function getSeason(dateObj) {
  const WINTER = [11, 0, 1];
  const SPRING = [2, 3, 4];
  const SUMMER = [5, 6, 7];
  const FALL = [8, 9, 10];
  const STRING_ERROR = 'Unable to determine the time of year!';
  const ERROR_MESSAGE = 'Invalid date!'
  

  if (dateObj === undefined) {
    return STRING_ERROR;
  }

  try {
    dateObj.getUTCDate();
  } catch (error) {
    throw Error(ERROR_MESSAGE);
  }

  const month = dateObj.getMonth();
  
  if (month >= 0 && month <= 11) {
    if (WINTER.includes(month)) {
      return 'winter';
    }
    if (SPRING.includes(month)) {
      return 'spring';
    }
    if (SUMMER.includes(month)) {
      return 'summer';
    }
    if (FALL.includes(month)) {
      return 'autumn';
    }
  }
}
module.exports = {
	getSeason,
};
