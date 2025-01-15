/*
Warmup-1 -- posNeg
Given 2 int values, return true if one is negative and one is positive.
Except if the parameter "negative" is true, then return true only if both are negative.
*/

function posNeg(a, b, negative) {
  if (((a >= 0 && b <= 0) || (a <= 0 && b >= 0)) && negative === false) {
    console.log("first if");
    return true;
  } else if (negative === true && a <= 0 && b <= 0) {
    console.log("second if");
    return true;
  }
  return false;
}

console.log(posNeg(1, -1, true));
