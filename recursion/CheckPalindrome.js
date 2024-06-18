function checkPalindrome(str) {
  str = str.toLowerCase();
  if (str.length === 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return checkPalindrome(str.substring(1, str.length - 1));
}
console.log(checkPalindrome("Madam"));
