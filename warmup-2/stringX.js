/*
Warmup-2 -- stringX
Given a string, return a version where all the "x" have been removed. 
Except an "x" at the very start or end should not be removed.
*/

function stringX(str) {
  let strX = "";

  for (let i = 0; i < str.length; i++) {
    str[i] === "x" && i !== 0 && i !== str.length - 1 ? null : (strX += str[i]);
  }

  return str.length === 1 ? "xx" : strX
  
}

console.log(stringX("x"));
