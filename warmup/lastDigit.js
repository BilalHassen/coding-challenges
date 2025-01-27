/*
Warmup-1 -- lastDigit
Given two non-negative int values,
 return true if they have the same last digit,
  such as with 27 and 57. 
  Note that the % 'mod' operator computes remainders,
   so 17 % 10 is 7.
*/

function lastDigit(a, b) {
  let num1 = a.toString();
  let num2 = b.toString();
  return num1[num1.length - 1] === num2[num2.length - 1];
}

lastDigit(10, 10);
