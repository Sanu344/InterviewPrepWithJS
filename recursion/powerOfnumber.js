function power(n, x) {
  if (x === 0) return 1;
  return n * power(n, x - 1);
}
console.log(power(2, 3));
