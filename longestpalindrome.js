var longestPandromicSubstring = function (s) {
  let palindromeLen = 0;
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    let temp = i;
    for (let j = s.length - 1; j > i; j--) {
      if (s[temp] === s[j]) {
        if (j - temp > 1) temp++;
      } else temp = i;
      if (j - temp === 1 && s[j] === s[temp]) {
        palindromeLen = (temp - i + 1) * 2;
        ans = ans < palindromeLen ? palindromeLen : ans;
      }
      if (temp === j) {
        palindromeLen = (temp - i) * 2 + 1;
        ans = ans < palindromeLen ? palindromeLen : ans;
      }
    }
  }
  return ans;
};
console.log(longestPandromicSubstring("aacd"));
