export default function add(input) {
  const [aAsString = 0, bAsString = 0] = input.split(',');
  const a = Number(aAsString);
  const b = Number(bAsString);

  return a + b;
}
