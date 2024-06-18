function removeSAT(str) {
  if (str === "") return "";

  if (str[0] === " " || str[0] === "\t")
    return removeSAT(str.substring(1, str.length));

  return str[0] + removeSAT(str.substring(1, str.length));
}
console.log(removeSAT("Sanu Ranjan  From \t Coochbehar"));
