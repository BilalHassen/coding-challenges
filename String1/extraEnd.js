/*
String-1 -- extraEnd
Given a string, 
return a new string made of 3 copies of the last 2 chars of the original string. 
The string length will be at least 2.
*/

function extraEnd(str){
  let lastTwo = ""
  for(let i = 0; i < 3; i++){
    lastTwo += str.substring(str.length -2, str.length)
  }

  return lastTwo;
}

console.log(extraEnd("Hello"))