/*
String-1 -- withoutEnd2
Given a string, 
return a version without both the first and last char of the string.
 The string may be any length, including 0.
*/

function withoutEnd2(str) {
    if (str.length <= 1) return "";
    return str.substring(1, str.length - 1);
  }
console.log(withoutEnd2("a"))