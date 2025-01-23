/*
Warmup-1 -- delDel
Given a string, if the string "del" appears starting at index 1, 
return a string where that "del" has been deleted. Otherwise, 
sreturn the string unchanged.
*/

function delDel(str) {
  return str.slice(1, 4) === "del" ? str[0] + str.slice(4) : str;
}

console.log(delDel("adelbchghgh"));
