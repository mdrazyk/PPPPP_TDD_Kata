const simpleCalculator = numbers => {
  const splitRegex = /\n|,/g;
  const numArray = numbers.split(splitRegex);

  return numArray.reduce((sum, el) => sum + parseInt(el || 0), 0);
};

export default simpleCalculator;