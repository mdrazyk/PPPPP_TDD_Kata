const HelloWorld = () => {
	const sayHello = () => 'Hello';
	const sayWorld = () => 'World';
	const sayHelloWorld = () => `${sayHello()} ${sayWorld()}`;

	const add = (arg) => {
		if (typeof arg !== 'string') {
			throw new Error('Wrong argument');
		}

		return arg
      .split('\n')
			.join(',')
			.split(',')
			.map(item => {
				if (item === '') {
					return NaN;
				}
        return Number(item);
      })
			.reduce((total, element) => {
				if (Number.isNaN(element)) {
          throw new Error('Wrong argument');
				}
				return total + element;
			}, 0);
  };

	return {
		add,
		sayHello,
		sayWorld,
		sayHelloWorld,
	};
};

export default HelloWorld();
