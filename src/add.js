export default function add(input, delimiter = ',') {
  if (input.startsWith('//')) {
    const [header, ...parts] = input
      .split('\n');

    delimiter = header
      .replace('//', '');

    input = parts.join(delimiter);
  }

  const result = input
    .split('\n')
    .join(delimiter)
    .split(delimiter)
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
