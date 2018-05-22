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

	it(`alllows using \\n instead of commas`, () => {
		// given
		const value = '1\n2,3';

		// when
		const returnedValue = add(value);

		//then
		assert.equal(returnedValue, 6)
	});

	it(` “//;\n1;2” should return 3`, () => {
		// given
		const value = '//;\n1;2';

		// when
		const returnedValue = add(value);

		//then
		assert.equal(returnedValue, 3)
	});

	it(` negative numbert should throw exception`, () => {
		// given
		const value = '1;-2';

		// when
		//const returnedValue = add(value);

		//then
		assert.throws( ()=>add(value), 'negatives not allowed' );
	});

	it(`numbers bigger than 1000 are ignored`, () => {
		// given
		const value = '1,2,1000,2';

		// when
		const returnedValue = add(value);

		//then
		assert.equal(returnedValue, 5);
	});

	it(`“//[***]\n1***2***3”  shoutd return 6`, () => {
		// given
		const value = "//[***]\n1***2***3";

		// when
		const returnedValue = add(value);

		//then
		assert.equal(returnedValue, 6);
	});

	it(`“//[***][xxx]\n1***2*??*3@#$@#$2”  shoutd return 6`, () => {
		// given
		const value = "//[***][xxx]\n1***2***3";

		// when
		const returnedValue = add(value);

		//then
		assert.equal(returnedValue, 6);
	});
});
