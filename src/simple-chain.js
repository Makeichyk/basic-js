const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
// (`${greeting}`)

class ChainMaker {
	elements = [];

	getLength() {
		return this.elements.length;
	}

	addLink(value) {
		this.elements.push(value);

		return this;
	}

	removeLink(position) {
		let errorMessage = "You can't remove incorrect link!";

		if (typeof position !== 'number') {
			this.finishChain();
			throw { message: errorMessage };
		}

		const positionIndex = position - 1;

		if (
			positionIndex < 0 ||
			positionIndex >= this.elements.length ||
			position % 1 !== 0
		) {
			this.finishChain();
			throw { message: errorMessage };
		}

		let clone = [...this.elements];
		clone.splice(positionIndex, 1);
		this.elements = clone;
		return this;
	}

	reverseChain() {
		this.elements = this.elements.reverse();
		return this;
	}

	finishChain() {
		const result = this.elements
			.map((item) => {
				return item === undefined ? '( )' : `( ${item} )`;
			})
			.join('~~');

		this.elements = [];
		return result;
	}
}

module.exports = {
	chainMaker: new ChainMaker(),
};
