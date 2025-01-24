/*
Warmup-1 -- close10
Given 2 int values, 
return whichever value is nearest to the value 10, 
or return 0 in the event of a tie. 
Note that Math.abs(n) returns the absolute value of a number.
*/

function close10(a, b) {
  let differenceB = b - 10;
  let differenceA = a - 10;
  if (
    (b < 10 && a > 10 && b + differenceA === a - differenceA) ||
    (a < 10 && b > 10 && a + differenceB === b - differenceB)
  ) {
    return 0;
  } else if (a === b) {
    return 0;
  }

  if (a - 10 < b - 10) {
    return a;
  } else {
    return b;
  }
}

console.log(close10(13, 7));
