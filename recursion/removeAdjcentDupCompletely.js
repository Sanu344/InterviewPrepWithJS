function removeAJD(str) {
  let temp = str.toLowerCase();
  if (str === "") return "";

  if (temp[0] === temp[1]) {
    if (temp[1] !== temp[2]) return removeAJD(str.substring(2, str.length));

    return removeAJD(str.substring(1, str.length));
  }

  return str[0] + removeAJD(str.substring(1, str.length));
}
console.log(removeAJD("Baannat Manaa fFrrfrom GgddGotham"));
