function checkKeyOccurances(arr, key) {
  if (arr.length === 0) return 0;
  if (arr[0] === key) return 1 + checkKeyOccurances(arr.slice(1), key);
  return checkKeyOccurances(arr.slice(1), key);
}

console.log(checkKeyOccurances([1, 2, 3, 4, 5], 6));
console.log(checkKeyOccurances([1, 2, 3, 4, 5, 3, 5], 3));
