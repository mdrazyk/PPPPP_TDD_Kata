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

	it('thows exception when non string given', () => {
    // given
    const add = Calculator.add;


		assert.throws(() => {
				//when
				add({});
			},
			//Then
      /^Error: Wrong argument$/
			);
	});


  it('adds multiple numbers separated with comma', () => {
    // given
    const add = Calculator.add;

    // when
		const result = add('2,5,10');

		// then
		assert.equal(result, 17);
  });

  it('throws exception when non number given as string argument', () => {
    // given
    const add = Calculator.add;


    assert.throws(() => {
        //when
        add('1,a,2');
      },
      //Then
      /^Error: Wrong argument$/
    );
	});

  it('allows new lines between numbers (instead of commas)', () => {
    // given
    const add = Calculator.add;

  	// when
  	const result = add('2\n5,10');

  	// then
  	assert.equal(result, 17);
	});

  it('throws exception error for newline and comma', () => {
    // given
    const add = Calculator.add;


    assert.throws(() => {
        //when
        add('1,\n2');
      },
      //Then
      /^Error: Wrong argument$/
    );
	});
});
