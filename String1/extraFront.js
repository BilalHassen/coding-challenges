/*
String-1 -- extraFront
Given a string, 
return a new string made of 3 copies 
of the first 2 chars of the original string. 
The string may be any length. 
If there are fewer than 2 chars, use whatever is there.
*/

function extraFront(str){
    let threeStr = ""
  for(let i = 0; i < 3; i++){
    console.log(str)
    threeStr += str.slice(0,2)
  }

  return threeStr;
}

console.log(extraFront("hello"))