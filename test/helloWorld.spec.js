import assert from 'assert';
import HelloWorld from '../src/helloWorld';
import simpleCalculator from '../src/simpleCalculator';

describe('HelloWorld', () => {
	it(`should return 'Hello' for sayHello function call`, () => {
		// given
    const sayHello = HelloWorld.sayHello;

		// when
		const hello = sayHello();

		// then
		assert.equal(hello, 'Hello');
	});

	it(`should return 'World' for sayWorld function call`, () => {
		// given
		const sayWorld = HelloWorld.sayWorld;

		// when
		const world = sayWorld();

		// then
		assert.equal(world, 'World');
	});

	it(`should return 'Hello World' for sayHelloWorld function call`, () => {
		// given
		const sayHelloWorld = HelloWorld.sayHelloWorld;

		// when
		const helloWorld = sayHelloWorld();

		// then
		assert(helloWorld, 'Hello World');
	});
});

describe('simpleCalculator', () => {
	it('should return 0 when provided with empty string', () => {
		// given

		// when
		const result = simpleCalculator('');

		// then
		assert.equal(result, 0);
	});

	it('should return number when given one numerical string', () => {
		// given

		// when
		const result = simpleCalculator('1');

		// then
		assert.equal(result, 1);
	});

	it('should return the sum of numbers when provided with string with two numbers splut by comma', () => {
		// when
		const result = simpleCalculator('3,6');

		// then
		assert.equal(result, 9);
	});

  it('should return the sum of numbers when provided with string with two numbers splut by comma', () => {
    // when
    const result = simpleCalculator('3,6,1,10');

    // then
    assert.equal(result, 20);
  });

  it('should return the sum of numbers when splut by newline', () => {
  	// when
		const result = simpleCalculator('4,5\n3\n9');

		// then
		assert.equal(result, 21);
	});

  it('should return the sum with usage of different delimiter', () => {
  	// when
  	const result = simpleCalculator('//x\n1x2x4');

  	// then
			assert.equal(result, 7);
	});

  it('should throw with negative values', () => {
    // then
    assert.throws(() => simpleCalculator('-1,2,-3'), "negatives not allowed: -1, -3");
  });

  it('ignores number bigger than 1000', () => {
    const result = simpleCalculator('3,1001,6,2000,1');

    // then
    assert.equal(result, 10);
	});

  it('should return the sum with usage of different multiletter delimiter', () => {
    // when
    const result = simpleCalculator('//abcs\n1abcs2abcs4');

    // then
    assert.equal(result, 7);
  });
});
