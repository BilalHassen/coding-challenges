/*
Warmup-1 -- sumDouble
Given two int values, return their sum. 
Unless the two values are the same, 
then return double their sum.
*/

function sumDouble(a, b) {
  if (a === b) {
    let sum = a + b;
    return sum * 2;
  }

  return a + b;
}
