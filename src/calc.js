export default function add(value) {
  return value
    .split(',')
    .reduce(
      (acc, currentValue) => acc + (parseInt(currentValue, 10) || 0),
      0,
    );
}