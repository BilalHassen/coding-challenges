/*
Warmup-1 -- startOz
Given a string, return a string made of the first 2 chars (if present), 
however include first char only if it is 'o' 
and include the second only if it is 'z', so 'ozymandias' yields 'oz'.
*/

function startOz(str) {
  if (str[0] === "o" && str[1] === "z") {
    return str[0] + str[1];
  } else if (str[0] === "o") {
    return str[0];
  } else if (str[1] === "z") {
    return str[1];
  }
  return "";
}
