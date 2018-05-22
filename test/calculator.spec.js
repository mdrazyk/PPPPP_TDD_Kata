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

  it(`should return 3 for input '3'`, () => {
    // given
    const numberString = '3';
    const expected = 3;

    // when
    const result = Calculator.Add(numberString);

    // then
    assert.equal(result, 3);

  })

  it(`should return 5 for input '3,2'`, () => {
    // given
    const numbersString = '3,2';
    const expected = 5

    // when
    const result = Calculator.Add(numbersString);

    // then
    assert.equal(result, expected);
  });

  it(`should return 22 for input '2,2,2,2,2,2,2,2,2,2,2'`, () => {
    // given
    const numbersString = '2,2,2,2,2,2,2,2,2,2,2';
    const expected = 22;

    // when
    const result = Calculator.Add(numbersString);

    // then
    assert.equal(result, expected);
  });
  it(`should return 2 for input '2\\n2'`, () => {
    // given
    const numbersString = '2\n2';

    // when
    const result = Calculator.Add(numbersString);

    // then
    assert.equal(result, 4);
  });

  it(`should return 3 for input '//;\n1;2'`, () => {
    // given
    const numbersString = '//;\n1;2';
    const expected = 3;

    // when
    const result = Calculator.Add(numbersString);

    // then
    assert.equal(result, expected);
  });

  it(`should return exception for input '-1,-1'`, () => {
    // given
    const numbersString = '-1,-1';
    const expected = 'Negatives not allowed. -1,-1';

    // when
    const result = Calculator.Add(numbersString);

    // then
    assert.equal(result, expected);
  });
});
