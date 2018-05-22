import assert from 'assert';
import Calculator from '../src/calculator';

describe('Calculator', () => {
  [
    {input: '', expectedResult: 0},
    {input: '3', expectedResult: 3},
    {input: '3,2', expectedResult: 5},
    {input: '2,2,2,2,2,2,2,2,2,2,2', expectedResult: 22},
  ].forEach(data => {
    it(`should return ${data.expectedResult} for input: ${data.input}`, () => {
      // when
      const result = Calculator.Add(data.input);
  
      // then
      assert.equal(result, data.expectedResult);
    });  
  })

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

    // when
    const addingNegatives = () => Calculator.Add(numbersString);

    // then
    assert.throws(addingNegatives, 'Negatives not allowed. -1,-1');
  });

  it(`should ignore numbers bigger than 1000`, () => {
    // given
    const numbersString = '1001,2';

    // when
    const result = Calculator.Add(numbersString);

    // then
    assert.equal(result, 2);
  });

  it(`should allow delimiters of any length in format '[delimiter]'`, () => {
    // given
    const numbersString = '//[***]\n1***2***3';

    // when
    const result = Calculator.Add(numbersString);

    // then
    assert.equal(result, 6);
  });

  it(`should allow multiple delimiters of any length in format '[delimiter]'`, () => {
    // given
    const numbersString = '//[*][%%%%%]\n1*2%3';

    // when
    const result = Calculator.Add(numbersString);

    // then
    assert.equal(result, 6);
  });
});
