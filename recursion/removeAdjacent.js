function removeAJD(str) {
  let temp = str.toLowerCase();
  if (str === "") return "";

  if (temp[0] === temp[1]) return removeAJD(str.substring(1, str.length));

  return str[0] + removeAJD(str.substring(1, str.length));
}
console.log(removeAJD("Saanuu Ranjan   Ffrom           cCcoochbehar"));
