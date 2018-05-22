import assert from 'assert';
import add from '../src/add';

describe('Add function', () => {
  it('should return 0 for empty string', () => {
    // given 
    const input = '';
    const expected = 0;

    //when
    const result = add(input);

    // then
    assert.equal(result, expected);
  });

  it('should return input if there is only one arguments and it is not 0', () => {
    // given
    const input = '5';
    const expected = 5;

    //when
    const result = add(input);

    // then
    assert.equal(result, expected);
  });


  it(`should return 3 for passing '1,2'`, () => {
    // given
    const input = '1,2';
    const expected = 3;

    //when
    const result = add(input);

    // then
    assert.equal(result, expected);
  });

  it('should return sum of many numbers', () => {
    // given
    const input = '1,3,8,7';
    const expected = 19;

    // when
    const result = add(input);

    // then
    assert.equal(result, expected);
  });

  it('should return sum of many numbers splitted by new line', () => {
    // given
    const input = '1\n3\n8\n7';
    const expected = 19;

    // when
    const result = add(input);

    // then
    assert.equal(result, expected);
  });

  it('should throw error when non number given', () => {
    // given
    const input = '1,a,2';

    assert.throws(() => {
      // when
      add(input);
    },
    // then
    /^Error: Invalid argument error/)
  });

  it('should change delimiter', () => {
    // given
    const input = '//[;]\n1;5';
    const expected = 6;

    // when
    const result = add(input);

    // then
    assert.equal(result, expected);
  });

  it('should throw error when negative number given', () => {
    // given
    const input = '-1,-2';

    assert.throws(() => {
      // when
      add(input);
    },
    // then
    /^Error: negatives not allowed: -1,-2/)
  });

  it('should ignore numbers bigger than 1000', () => {
    // given
    const input = '1,1000,1005,4';
    const expected = 5;

    // when
    const result = add(input);

    // then
    assert.equal(result, expected);
  });

  it('allows multiple characters delimiter', () => {
    // given
    const input = '//[***]\n1***2***3';
    const expected = 6;

    // when
    const result = add(input);

    // then
    assert.equal(result, expected);
  });

  it('allows multiple delimiter', () => {
    // given
    const input = '//[*][%]\n1*2%3';
    const expected = 6;

    // when
    const result = add(input);

    // then
    assert.equal(result, expected);
  });

  it('allows multiple longer than one character delimiters', () => {
    // given
    const input = '//[*&^][abcd]\n1*&^2abcd6';
    const expected = 9;

    // when
    const result = add(input);

    // then
    assert.equal(result, expected);
  });

  it('treats number with even number of minuses as positive', () => {
    // given
    const input = '--1,2,----2';
    const expected = 5;

    //when
    const result = add(input);

    // then
    assert.equal(result, expected);
  });
  it('calculates number based on multiple strings', () => {
    // given
    const input1 = '4,3';
    const input2 = '1,5';

    const expected = 13;

    //when
    const result = add(input1, input2);

    // then
    assert.equal(result, expected);
  });
  it('accepts array of additional delimiters', () => {
    // given
    const input1 = '4,3';
    const input2 = ['*'];
    const input3 = '1*5';

    const expected = 13;

    //when
    const result = add(input1, input2, input3);

    // then
    assert.equal(result, expected);
  });
});
