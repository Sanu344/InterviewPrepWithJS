function balanceParenthesis(arr, start = 0, current = 0) {
  if (arr.length === 0) return true;

  if (arr[current] === "(" || arr[current] === "{" || arr[current] === "[") {
    return balanceParenthesis(arr, start + 1, current + 1);
  } else {
    start = start - 1;
    if (
      (arr[start] === "(" && arr[current] === ")") ||
      (arr[start] === "{" && arr[current] === "}") ||
      (arr[start] === "[" && arr[current] === "]")
    ) {
      arr.splice(start, 2);
      return balanceParenthesis(arr, start, start);
    } else {
      return false;
    }
  }
}

console.log(balanceParenthesis(["(", "(", ")", ")", "(", ")"]));
console.log(balanceParenthesis(["(", "{", "[", "]", "}", ")"]));
