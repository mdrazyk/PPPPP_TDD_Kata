import assert from 'assert';
import add from '../src/add';

describe('Add function', () => {
  it('should return 0 for empty string', () => {
    // given 
    const empty = ''
    const expected = 0;

    //when
    const result = add();

    // then
    assert(result, expected);
  })
});