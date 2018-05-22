const HelloWorld = () => {
	const sayHello = () => 'Hello';
	const sayWorld = () => 'World';
	const sayHelloWorld = () => `${sayHello()} ${sayWorld()}`;

	const add = (arg) => {
		let splitBy = /\n|,/g;
		let split = arg;

		if (arg && arg.split('\n')[0].includes('//')) {
			const [first, ...rest] = argArr;
			splitBy = argArr[0].replace('//', '');
			split = rest.join('\n');
		}

		return split.split(splitBy).reduce((total, element) => {
      return total + parseInt(element || 0);
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
