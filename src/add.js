export default function add(input) {
  const result = input
    .split('\n')
    .join(',')
    .split(',')
    .map(element => Number(element))
    .reduce((total, element) => {
      if (Number.isNaN(element)) {
        throw new Error('Invalid argument error');
      }
      return total + element;
    }, 0);

  return result;
}
