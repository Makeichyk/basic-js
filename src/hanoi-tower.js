const { NotImplementedError } = require("../extensions/index.js");

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 * 511 / 1,19
 *1,19 => 
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let turnInMin = turnsSpeed/60;
  let turnInSec = turnInMin/60;
  let turns = Math.pow(2, disksNumber) - 1;
  let time = Math.floor(turns / turnInSec);
  return {
    turns: turns,
    seconds: time,
  };
}

module.exports = {
  calculateHanoi,
};
