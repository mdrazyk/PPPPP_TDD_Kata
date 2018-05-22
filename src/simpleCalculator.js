const simpleCalculator = numbers => {
  const delimiter = numbers.substr(0, 2) === '//' ? `${numbers[2]}` : '';

  const numbersWithoutDelimiter = delimiter ? numbers.substr(4, numbers.length) : numbers;

  const splitRegex = /\n|,|x/g;
  console.log(
    numbersWithoutDelimiter
    .split(splitRegex)
  )
  return  numbersWithoutDelimiter
    .split(splitRegex)
    .map(splitted => splitted.split(delimiter))
    .reduce((acc, curr) => acc.concat(curr), [])
    .reduce((sum, el) => sum + parseInt(el || 0), 0);
};

export default simpleCalculator;