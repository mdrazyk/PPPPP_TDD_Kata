export default function add(input, delimiters = ',') {
  if (input.startsWith('//')) {
    const [header, ...parts] = input
      .split('\n');

    const MULTIPLE_DELIMITER_REGEX = /\[([^\[]+)\]+/g;

    delimiters = header
      .replace('//', '')
      .match(MULTIPLE_DELIMITER_REGEX);

    delimiters.map(delimiter => {
      return delimiter.substr(1, -2);
    });


    console.log(delimiters);

    input = parts.join(delimiters);
  }

  const result = input
    .split('\n')
    .join(delimiters)
    .split(delimiters)
    .map(element => Number(element))
    .reduce(({ total, negatives }, element) => {
      if (Number.isNaN(element)) {
        throw new Error('Invalid argument error');
      }
      
      if (element < 0) {
        negatives = [ ...negatives, element ];
      }

      return {
        total: element < 1000 ? total + element :  total,
        negatives,
      };
    },
    {
      total: 0,
      negatives: [],
    });

  if (result.negatives.length) {
    throw new Error(`negatives not allowed: ${result.negatives.join(',')}`);
  }

  return result.total;
}
