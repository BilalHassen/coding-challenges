/*
String-1 -- lastTwo
Given a string of any length, 
return a new string where the last 2 chars, 
if present, are swapped, so "coding" yields "codign".
*/

function lastTwo(str) {
  let lastStr = str[str.length - 1];
  let secondLastStr = str[str.length - 2];
  return str.length > 1 ? str.slice(0, str.length - 2) + lastStr + secondLastStr : str;
}

console.log(lastTwo("coding"));
