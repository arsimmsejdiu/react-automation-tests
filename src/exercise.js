export function calculateAverage(numbers) {
  if (numbers.length === 0) return NaN;
  const sum = numbers.reduce((sum, current) => sum + current, 0);
  return sum / numbers.length;
}

export function factorial(n) {
  if (n === 0 || n === 1) return 1;
  if (n < 0) return undefined;
  return n * factorial(n - 1);
}
