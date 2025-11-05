const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
	chain: [],
	getLength() {
		return this.chain.length;
	},
	addLink(value = ' ') {
		this.chain.push(`${value}`);
		return this;
	},
	removeLink(pos) {
		let errorMessage = "You can't remove incorrect link!";

		if (typeof pos !== 'number') {
			this.finishChain();
			throw { message: errorMessage };
		}

		const positionIndex = pos - 1;

		if (
			positionIndex < 0 ||
			positionIndex >= this.chain.length ||
			pos % 1 !== 0
		) {
			this.finishChain();
			throw { message: errorMessage };
		}

		let clone = [...this.chain];
		clone.splice(positionIndex, 1);
		this.chain = clone;
		return this;
	},
	reverseChain() {
		this.chain = this.chain.reverse();
		return this;
	},
	finishChain() {
		const result = this.chain
			.map((item) => {
				return item === undefined ? '( )' : `( ${item} )`;
			})
			.join('~~');

		this.chain = [];
		return result;
	},
};

module.exports = {
	chainMaker,
};
