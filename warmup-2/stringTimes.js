/*
Warmup-2 -- stringTimes
Given a string and a non-negative int n, 
return a larger string that is n copies of the original string.
*/

function stringTimes(str, n) {
  let newStr = "";
  for (let i = 0; i < n; i++) {
    newStr += str;
  }
  return newStr;
}

console.log(stringTimes("hi", 2));
