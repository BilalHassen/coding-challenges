/*
Warmup-1 -- endUp
Given a string, return a new string where the last 3 chars 
are now in upper case. If the string has less than 3 chars, 
uppercase whatever is there. 
Note that str.toUpperCase() 
returns the uppercase version of a string.
*/

function endUp(str) {
  let last3 = str.slice(str.length - 3, str.length);
  console.log(str);
  return str.length > 3
    ? str.slice(0, last3.length - 1) + last3.toUpperCase()
    : str.toUpperCase();
}

console.log(endUp("hi hello"));
