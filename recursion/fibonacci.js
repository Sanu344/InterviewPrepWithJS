function fibonacciTerm(n) {
  if (n <= 1) return n;

  return fibonacciTerm(n - 1) + fibonacciTerm(n - 2);
}

console.log(fibonacciTerm(6));
