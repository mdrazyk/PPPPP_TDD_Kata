export default function add(input) {
  let result = null;

  try {
    checkForNegativeValues(input);
  } catch (error) {
    return error;
  }

  if (input.length === 0) {
    result = 0;
  } else if (input.length === 1) {
    result = Number(input);
  } else {
    const numbers = cleanInput(input);
    result = addNumbersInCollection(numbers);
  }

  return result;
}

const checkForNegativeValues = input => {
  const negatives = input.match(/\-/g);

  if (negatives) {
    throw `You have passed: ${negatives.length} negative values. It is forbidden.`;
  }
};

const cleanInput = input => input.match(/\d+/g);

const addNumbersInCollection = numbers =>
  numbers.reduce((_prev, _curr) => {
    const curr = checkIfNumberIsGreaterThenThousand(_curr);
    return Number(_prev) + curr;
  }, 0);

const checkIfNumberIsGreaterThenThousand = number =>
  number >= 1000 ? 0 : Number(number);