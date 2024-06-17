function recursiveReverseString(string) {
  //Sir's code
  if (string === "") {
    return string;
  }
  let reversePart = recursiveReverseString(
    string.substring(0, string.length - 1)
  );
  let result = string[string.length - 1] + reversePart;
  return result;
}

console.log(recursiveReverseString("Hello"));

function reverse(str) {
  //my code
  if (str === "") {
    return "";
  }
  return reverse(str.substring(1, str.length)) + str[0];
}

console.log(reverse("Hello"));
