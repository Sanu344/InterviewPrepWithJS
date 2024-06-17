function reverse(str) {
  if (str === "") {
    return "";
  }
  return reverse(str.substring(1, str.length)) + str[0];
}

console.log(reverse("Hello"));
