class calculator {
  static Add(inputString) {
    if (!inputString) {
      return 0;
    }

    let numbers = inputString.match(/\d+/g);
    numbers = numbers.filter(n => n.length < 4);

    const negativeNumbers = inputString.match(/-\d/);

    if (negativeNumbers) {
      throw new Error(`Negatives not allowed. '${negativeNumbers}'`)
    }

    return numbers.reduce((curr, prev) => Number(prev) + Number(curr), 0);
  }
}

export default calculator;
