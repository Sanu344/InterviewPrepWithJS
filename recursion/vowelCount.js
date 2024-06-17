console.log(countVowels("aeiou consonant")); // 8 vowels

function countVowels(str) {
  //  My code
  if (str === "") return 0;

  return checkVowel(str[0]) + countVowels(str.substring(1, str.length));
}

function checkVowel(char) {
  // returns 1 or 0
  char = char.toLowerCase();
  let vowels = "aeiou";
  if (vowels.includes(char)) return 1;
  return 0;
}
