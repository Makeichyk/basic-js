const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(membersArray) {
	if (!Array.isArray(membersArray)) return false;

	return membersArray
		.reduce((acc, curr) => {
			if (typeof curr === 'string') {
				acc.push(curr.trim()[0].toUpperCase());
			}
			return acc;
		}, [])
		.sort()
		.join('');
}

module.exports = {
	createDreamTeam,
};
