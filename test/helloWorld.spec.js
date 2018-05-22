import assert from 'assert';
import Calculator from '../src/helloWorld';

describe('Calculator', () => {
	it(`returns 0 for empty array`, () => {
    // given
    const add = Calculator.add;

    // when
    const result = add("");

    // then
    assert.equal(result, 0);
	});

	it('returns the same number if there is only one number passed', () => {
    // given
    const add = Calculator.add;

    // when
    const result = add("1");
    const result2 = add("2");

    // then
    assert.equal(result, 1);
    assert.equal(result2, 2);
  });

  it('adds multiple numbers separated with comma', () => {
    // given
    const add = Calculator.add;

    // when
		const result = add('2,5,10');

		// then
		assert.equal(result, 17);
  });

  it('allows new lines between numbers (instead of commas)', () => {
    // given
    const add = Calculator.add;

  	// when
  	const result = add('2\n5,10');

  	// then
  	assert.equal(result, 17);
	});

  it('allows to provide custom delimiters in first line of input', () => {
  	// given
		const add = Calculator.add;

		// when
		const result = add('//x\n2x5x12');

		// then
		assert.equal(result, 19);
	});

  it('throws an error “negatives not allowed” if a negative number passed', () => {
    // given
    const add = Calculator.add;

    // then
    assert.throws(() => {
      add('2,-5,10,-11');
		}, /negatives not allowed. Passed:-5,-11/);
	});

  it('ignores numbers bigger than 1000', () => {
  	// given
		const add = Calculator.add;

		// when
		const result = add('1000,5,10,2000');

		// then
		assert.equal(result, 1015);
	});

  it('works with long delimiters', () => {
    // given
    const add = Calculator.add;

    // when
    const result = add('//***\n1***2***3');

    // then
    assert.equal(result, 6);
  });
});
