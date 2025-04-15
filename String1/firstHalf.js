/*
String-1 -- firstHalf
Given a string of even length, 
return the first half. 
So the string "WooHoo" yields "Woo".
*/

function firstHalf(str){
  return str.substring(0, Math.floor(str.length / 2))
}

console.log(firstHalf("0123456789"))