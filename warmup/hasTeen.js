/*
Warmup-1 -- hasTeen
We'll say that a number is 'teen' if it is in the range 13..19 inclusive.
 Given 3 int values, return true if 1 or more of them are teen.
*/

function hasTeen(a, b, c) {
  return (a >= 13 && a <= 19) || (b >= 13 && b <= 19) || (c >= 13 && c <= 19);
}
