const HelloWorld = () => {
  const sayHello = () => 'Hello';
  const sayWorld = () => 'World';

  const sayHelloWorld = () => `${sayHello()} ${sayWorld()}`;

  return {
    sayHello,
    sayWorld,
    sayHelloWorld,
  };
};

export default HelloWorld();
