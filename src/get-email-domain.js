const { NotImplementedError } = require('../lib');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
	let emailArr = email.split('');
	emailArr = emailArr.splice(emailArr.indexOf('@') + 1, emailArr.length);
	return emailArr.splice(emailArr.indexOf('@') + 1, emailArr.length).join('');
}

module.exports = {
	getEmailDomain,
};
