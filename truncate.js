// Truncate a string (first argument) if it is longer than the given maximum string length
// (second argument) return the truncated string a ... ending. Note that adding
// the three dots, will add to the string length.
// However, the given maximum string length num is less than or equal to 3,
// then the addition of the three dots does not add to the string
// length in determining the truncated string

function truncateString (str, num) {
  if (num >= str.length) return str;
   if (num <= 3) return str.slice(0, num) + "...";
   return str.slice(0, num-3) + "...";

}

console.log(truncateString("A-tisket, a-tasket, A green and yellow basket", 11));
