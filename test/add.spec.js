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


  it(`should return 2 for passing '1,2'`, () => {
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
});
