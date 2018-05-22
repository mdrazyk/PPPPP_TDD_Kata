const simpleCalculator = numbers => {
  //const delimiter = numbers.substr(0, 2) === '//' && `${numbers[2]}`;
  const delimiter = numbers.match(/^\/\/(.*)\n/g) ? numbers.match(/^\/\/(.*)\n/g)[1] : null;

  console.log(delimiter);

  const numbersWithoutDelimiter = delimiter ? numbers.substr(4, numbers.length) : numbers;

  const splitRegex =delimiter || /\n|,/g;

  const splited = numbersWithoutDelimiter
    .split(splitRegex);

  const negativeNumbers = splited.filter(item => item.includes('-'));

  if (negativeNumbers.length) {
    throw new Error(`negatives not allowed: ${negativeNumbers.join(', ')}`)
  }

  return splited
    .map(item => parseInt(item || 0))
    .filter(item => item <= 1000)
    .reduce((sum, el) => sum + el, 0);
};

export default simpleCalculator;

//x\n1x2x4