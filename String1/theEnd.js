/*
String-1 -- theEnd
Given a string, 
return a string length 1 from its front, 
unless front is false, 
in which case return a string length 1 from its back. 
The string will be non-empty.
*/

function theEnd(str, front){
  return front ? str[0] : str[str.length -1]
}

console.log(theEnd("Hello", false))