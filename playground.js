var lowerBound = function (nums, target) {
  let ans = nums.length;
  let start = 0;
  let end = ans - 1;
  if (target > nums[end] || target < nums[start]) return ans;
  while (start <= end) {
    const mid = start + parseInt((end - start) / 2);
    if (nums[mid] === target) {
      ans = mid;
      end = mid - 1;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return ans;
};
