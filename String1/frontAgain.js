/*
String-1 -- frontAgain
Given a string, return true if the first 2 chars in 
the string also appear at the end of the string, such as with "edited".
*/

function frontAgain(str){
  return str.length >= 2 ? str.slice(0,2) === str.slice((str.length -2)) : false
}

console.log(frontAgain("edited"))