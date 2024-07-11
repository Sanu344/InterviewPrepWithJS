let count = 0;
console.log(triFib(13), " ", "iterations taken -", count);
count = 0;
console.log(triFibMemo(13), " ", "iterations taken with memo -", count);
count = 0;
console.log(
  trifibTabulation(13),
  " ",
  "iteration taken with tabulation -",
  count
);

function triFibMemo(n, memo = {}) {
  count++;
  if (memo[n]) return memo[n];
  if (n === 2) return 1;
  if (n < 2) return n;

  memo[n] =
    triFibMemo(n - 1, memo) + triFibMemo(n - 2, memo) + triFibMemo(n - 3, memo);
  return memo[n];
}

function trifibTabulation(n, table = [0, 1, 1]) {
  count++;
  for (let i = 3; i <= n; i++) {
    count++;
    table[i] = table[i - 1] + table[i - 2] + table[i - 3];
  }
  return table[n];
}

function triFib(n) {
  count++;
  if (n === 2) return 1;
  if (n < 2) return n;

  return triFib(n - 1) + triFib(n - 2) + triFib(n - 3);
}
