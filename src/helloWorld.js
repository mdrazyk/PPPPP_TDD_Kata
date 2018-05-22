const HelloWorld = () => {
	const sayHello = () => 'Hello';
	const sayWorld = () => 'World';
	const sayHelloWorld = () => `${sayHello()} ${sayWorld()}`;

	const add = (arg) => {
		let splitBy = /\n|,/g;
		let toSplit = arg;

		const splittedByNewline = arg.split('\n');
		if (arg && splittedByNewline[0].includes('//')) {
			const [first, ...rest] = splittedByNewline;
			splitBy = first.replace('//', '');
			toSplit = rest.join('\n');
		}

		const result = toSplit.split(splitBy).reduce(
			({ total, negatives }, element) => {
				const numberToAdd = parseInt(element || 0);

				return {
					total: numberToAdd > 1000 ? total : total + numberToAdd,
					negatives: numberToAdd < 0 ? [...negatives, numberToAdd] : negatives,
				}
			},
			{total: 0, negatives: []}
		);

		if (result.negatives.length) {
      throw new Error(`negatives not allowed. Passed:${result.negatives.join(',')}`)
		}

		return result.total;
	};

	return {
		add,
		sayHello,
		sayWorld,
		sayHelloWorld,
	};
};

export default HelloWorld();
