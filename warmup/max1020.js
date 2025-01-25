/*
Warmup-1 -- max1020
Given 2 positive int values, 
return the larger value that is in the range 10..20 inclusive, 
or return 0 if neither is in that range.
*/

function max1020(a, b) {
  if (a > b && a >= 10 && a <= 20) {
    console.log("1");
    return a;
  } else if (a < b && (b < 10 || b > 20) && a >= 10 && a <= 20) {
    return a;
  } else if (b > a && b >= 10 && b <= 20 && b >= 10 && b <= 20) {
    console.log("2");
    return b;
  } else if ((b < a && a < 10) || a > 20) {
    return b;
  }

  return 0;
}

console.log(max1020(9, 21));
