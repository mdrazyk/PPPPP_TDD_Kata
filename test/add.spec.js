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
    assert(result === expected);
  })
});
