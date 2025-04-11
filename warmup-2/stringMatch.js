/*
Warmup-2 -- stringMatch
Given 2 strings, a and b, 
return the number of the positions where they contain the same length 2 substring. 
So "xxcaazz" and "xxbaaz" yields 3, 
since the "xx" "xx", "aa", and "az" substrings appear in the same place in both strings.
*/

function stringMatch(a, b) {
  let aStr = "";
  let counter = 0;

  for (let i = 0; i < a.length; i++) {
    aStr += a[i];
  }

  for (let i = 0; i < b.length -1; i++) {
    if (b[i] + b[i + 1] === aStr[i] + aStr[i + 1]) {
      counter += 1;
    }
  }

  return counter;
}

console.log(stringMatch("abc", "abc"));
