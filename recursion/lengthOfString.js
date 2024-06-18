function recurLength(str) {
  if (str === "") {
    return 0;
  } else {
    return 1 + recurLength(str.substring(1));
  }
}
