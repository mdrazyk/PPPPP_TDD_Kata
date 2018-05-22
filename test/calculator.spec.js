import assert from 'assert';
import Calculator from '../src/calculator';

describe('Calculator', () => {
  it(`should return 0 for empty string`, () => {
    // given
    const numbersString = '';

    // when
    const result = Calculator.Add(numbersString);

    // then
    assert.equal(result, 0);
  });

  it('should return 3 for single number', () => {
    // given
    const numberString = '3';

    // when
    const result = Calculator.Add(numberString);

    // then
    assert.equal(result, 3);

  })

  it(`should return 5 for sum of 2 numbers in string`, () => {
    // given
    const numbersString = '3,2';

    // when
    const result = Calculator.Add(numbersString);

    // then
    assert.equal(result, 5);
  });

  it(`should return 22 for sum of numbers in string`, () => {
    // given
    const numbersString = '2,2,2,2,2,2,2,2,2,2,2';

    // when
    const result = Calculator.Add(numbersString);

    // then
    assert.equal(result, 22);
  });
  it(`should return 2 for sum of 2 in string`, () => {
    // given
    const numbersString = '2\n2';

    // when
    const result = Calculator.Add(numbersString);

    // then
    assert.equal(result, 4);
  });
  it(`should return 0 when new line is at the of the string`, () => {
    // given
    const numbersString = '1,\\n';

    // when
    const result = Calculator.Add(numbersString);

    // then
    assert.equal(result, 0);
  });
});
