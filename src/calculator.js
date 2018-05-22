class calculator {
  static Add(inputString) {
    let result = 0;
    const numbers = inputString.match(/\d+/g);

    if (numbers) {
      return numbers.reduce((curr, prev) => Number(prev) + Number(curr), 0);
    }

    return 0;
  }
}

export default calculator;
