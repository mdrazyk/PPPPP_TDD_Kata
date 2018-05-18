import assert from 'assert';
import HelloWorld from '../src/helloWorld';

describe('HelloWorld', () => {
  it('should return \'Hello\' for sayHello function call', () => {
    // given
    const { sayHello } = HelloWorld;

    // when
    const hello = sayHello();

    // then
    assert.equal(hello, 'Hello');
  });

  it('should return \'World\' for sayWorld function call', () => {
    // given
    const { sayWorld } = HelloWorld;

    // when
    const world = sayWorld();

    // then
    assert.equal(world, 'World');
  });

  it('should return \'Hello World\' for sayHelloWorld function call', () => {
    // given
    const { sayHelloWorld } = HelloWorld;

    // when
    const helloWorld = sayHelloWorld();

    // then
    assert(helloWorld, 'Hello World');
  });
});
