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
      return {
        total: total + element,
        negatives: [...negatives, ...(element < 0 ? [element] : [])],
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
