import assert from 'assert';
import add from '../src/add';

describe('Add function', () => {
  it('should return 0 for passing empty string', () => {
    // given
    const input = '';
    const expected = 0;

    // when
    const result = add(input);

    // then
    assert.equal(result, expected);
  });

  it('should return 0 for passing "0"', () => {
    // given
    const input = '0';
    const expected = 0;

    // when
    const result = add(input);

    // then
    assert.equal(result, expected);
  });

  it('should return 1 for passing "1"', () => {
    // given
    const input = '1';
    const expected = 1;

    // when
    const result = add(input);

    // then
    assert.equal(result, expected);
  });

  it('should return 3 for passing "2,1"', () => {
    // given
    const input = '1,2';
    const expected = 3;

    // when
    const result = add(input);

    // then
    assert.equal(result, expected);
  });

  it('should return 6 for passing "1,2,3"', () => {
    // given
    const input = '1,2,3';
    const expected = 6;

    // when
    const result = add(input);

    // then
    assert.equal(result, expected);
  });

  it('should return 10 for passing "1,1,1,1,1,1,1,1,1,1"', () => {
    // given
    const input = '1,1,1,1,1,1,1,1,1,1';
    const expected = 10;

    // when
    const result = add(input);

    // then
    assert.equal(result, expected);
  });

  it(`should return 6 for passing “1\\n2,3”`, () => {
    // given
    const input = '1\n2,3';
    const expected = 6;

    // when
    const result = add(input);

    // then
    assert.equal(result, expected);
  });

  it(`should return 1 for passing “1,\\n”`, () => {
    // given
    const input = '1,\n';
    const expected = 1;

    // when
    const result = add(input);

    // then
    assert.equal(result, expected);
  });

  it(`should return 3 for passing “//;\\n1;2”`, () => {
    // given
    const input = '//;\n1;2';
    const expected = 3;

    // when
    const result = add(input);

    // then
    assert.equal(result, expected);
  });

  it(`should return “You passed: 1 negative value. It is forbidden.” exception for passing “-1,2”`, () => {
    // given
    const input = '-1,2';
    const expected = 'You have passed: 1 negative values. It is forbidden.';

    // when
    const result = add(input);

    // then
    assert.equal(result, expected);
  });

  it(`should return “You passed: 5 negative value. It is forbidden.” exception for passing “-1,2,-3,-4,-5,6,-7”`, () => {
    // given
    const input = '-1,2,-3,-4,-5,6,-7';
    const expected = 'You have passed: 5 negative values. It is forbidden.';

    // when
    const result = add(input);

    // then
    assert.equal(result, expected);
  });


  it(`should return 2 for "2,1001"`, () => {
    // given
    const input = '2,1001';
    const expected = '2';

    // when
    const result = add(input);

    // then
    assert.equal(result, expected);
  });

  it(`should return 6 for passing “//[***]\\n1***2***3”`, () => {
    // given
    const input = '//[***]\n1***2***3';
    const expected = 6;

    // when
    const result = add(input);

    // then
    assert.equal(result, expected);
  });

  it(`should return 6 for passing “//[*][%]\\n1*2%3”`, () => {
    // given
    const input = '//[*][%]\n1*2%3';
    const expected = 6;

    // when
    const result = add(input);

    // then
    assert.equal(result, expected);
  });
});
