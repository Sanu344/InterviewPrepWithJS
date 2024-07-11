let count = 0;
console.log(coinSum(103, [4, 6, 10]), "iterations taken -", count);
count = 0;
let memo = { 0: true };
console.log(
  coinSumMemo(103, [4, 6, 10], memo),
  "iterations taken with memo -",
  count
);
count = 0;
console.log(
  coinSumMemo3(103, [4, 6, 10]),
  "iterations taken with alternate code memo-",
  count
);

function coinSum(amt, coins) {
  count++;
  if (amt >= 0) {
    if (amt === 0) return true;
    for (let val of coins) {
      if (coinSum(amt - val, coins) === true) {
        return true;
      }
    }
    return false;
  }
}

function coinSumMemo(amt, coins, memo = {}) {
  count++;
  if (amt in memo) return memo[amt];
  if (amt === 0) return true;
  if (amt < 0) return false;
  for (let val of coins) {
    if (coinSumMemo(amt - val, coins, memo) === true) {
      memo[amt] = true;
      return true;
    }
  }
  memo[amt] = false;
  return false;
}

function coinSumMemo3(amt, coins, memo = {}) {
  count++;
  if (amt in memo) return memo[amt];
  if (amt === 0) return true;
  if (amt < 0) return false;
  for (let val of coins) {
    memo[amt] = coinSumMemo(amt - val, coins, memo);
    if (memo[amt]) return true;
  }
  return false;
}
