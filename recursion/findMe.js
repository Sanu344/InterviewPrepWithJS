function firstOccurance(arr, findMe, current) {
  if (current === arr.length) return -1;
  if (arr[current] === findMe) return current;
  return firstOccurance(arr, findMe, current + 1);
}
