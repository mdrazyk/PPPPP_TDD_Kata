import assert from 'assert';
import add from '../src/calc';

describe('Calc', () => {
	it(`returns 0 for empty string`, () => {
		// given
		const value = '';

		// when
		const returnedValue = add(value);

		// then
		assert.equal(returnedValue, 0);
	});

	it(`returns 1 for given "1"`, () => {
		// given
		const value = '1';

		// when
		const returnedValue = add(value);

		// then
		assert.equal(returnedValue, 1);
	});

	it(`return sum of two items`, () => {
		// given
		const value = '1,2';

		// when
		const returnedValue = add(value);

		//then
		assert.equal(returnedValue, 3)
	});

	it(`return sum of unknown amount of numbers`, () => {
		// given
		const value = '1,2,3,5';

		// when
		const returnedValue = add(value);

		//then
		assert.equal(returnedValue, 11)
	});


	it(`alllows using \n instead of commas`, () => {
		// given
		const value = '1\n2,3,5';

		// when
		const returnedValue = add(value);

		//then
		assert.equal(returnedValue, 11)
	});
});
