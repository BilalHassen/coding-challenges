/*
Warmup-1 -- frontBack
Given a string, 
return a new string where the first and last chars have been exchanged.
*/

function frontBack(str) {
  return str.length > 1
    ? str[str.length - 1] + str.slice(1, str.length - 1) + str[0]
    : str;
}

console.log(frontBack("Bilal"));
