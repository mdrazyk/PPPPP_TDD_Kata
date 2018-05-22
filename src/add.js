export default function add(input) {
  const result = input.split(',').map(x => Number(x)).reduce((prev, curr) => prev + curr , 0);

  return result;
}
